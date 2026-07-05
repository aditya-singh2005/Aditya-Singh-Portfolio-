from threading import Lock
from time import time

from langchain_core.messages import AIMessage, BaseMessage, HumanMessage


MAX_MESSAGES = 20          # Last 10 user/assistant exchanges
SESSION_TIMEOUT = 30 * 60  # 30 minutes


class ConversationManager:

    def __init__(self):
        self._sessions = {}
        self._lock = Lock()

    def _cleanup(self):
        now = time()

        expired = [
            session_id
            for session_id, session in self._sessions.items()
            if now - session["last_access"] > SESSION_TIMEOUT
        ]

        for session_id in expired:
            del self._sessions[session_id]

    def get_history(self, session_id: str) -> list[BaseMessage]:

        with self._lock:

            self._cleanup()

            if session_id not in self._sessions:
                self._sessions[session_id] = {
                    "messages": [],
                    "last_access": time(),
                }

            self._sessions[session_id]["last_access"] = time()

            # Return a copy so callers can't accidentally modify it
            return self._sessions[session_id]["messages"].copy()

    def add_exchange(
        self,
        session_id: str,
        user_message: str,
        assistant_message: str,
    ):

        with self._lock:

            if session_id not in self._sessions:
                self._sessions[session_id] = {
                    "messages": [],
                    "last_access": time(),
                }

            messages = self._sessions[session_id]["messages"]

            messages.append(
                HumanMessage(content=user_message)
            )

            messages.append(
                AIMessage(content=assistant_message)
            )

            if len(messages) > MAX_MESSAGES:
                del messages[:-MAX_MESSAGES]

            self._sessions[session_id]["last_access"] = time()

    def clear_session(self, session_id: str):

        with self._lock:

            self._sessions.pop(session_id, None)


conversation_manager = ConversationManager()