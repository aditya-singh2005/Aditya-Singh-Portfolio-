"""
Chat service: wires together your existing RAG chain
with the ConversationManager for per-session memory.
"""

from app.memory.manager import conversation_manager
from app.rag.chain import get_rag_chain


# Build the chain once at module level (singleton)
_rag_chain = get_rag_chain()


def generate_rag_response(session_id: str, message: str) -> str:
    """
    1. Fetch chat history for this session
    2. Invoke the existing LCEL chain with question + history + context
    3. Store the exchange in memory
    4. Return the answer string
    """
    # Get conversation history for this session
    history = conversation_manager.get_history(session_id)

    # Invoke the chain (matches prompt variables: question, history, context)
    answer: str = _rag_chain.invoke({
        "question": message,
        "history": history,
    })

    # Persist the exchange in session memory
    conversation_manager.add_exchange(session_id, message, answer)

    return answer