from app.services.chat_service import generate_rag_response
import uuid

def main():
    session_id = str(uuid.uuid4())
    question = "What is FlowDash and what technologies were used in it?"
    print(f"Question: {question}")
    response = generate_rag_response(session_id=session_id, message=question)
    print(f"Response: {response}")

if __name__ == "__main__":
    main()
