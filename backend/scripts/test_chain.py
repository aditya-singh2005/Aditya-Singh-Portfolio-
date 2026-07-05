from app.services.chat_service import generate_rag_response
import uuid


def main():
    # One session for this terminal run
    session_id = str(uuid.uuid4())

    print("Session:", session_id)
    print("Type 'exit' to quit.\n")

    while True:
        question = input("You: ")

        if question.lower() == "exit":
            break

        response = generate_rag_response(
            session_id=session_id,
            message=question,
        )

        print(f"\nAI: {response}\n")


if __name__ == "__main__":
    main()