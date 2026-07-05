from app.rag.retriever import get_retriever
from app.rag.document_formatter import format_documents

retriever = get_retriever()

docs = retriever.invoke("Tell me about FlowDash")

print("=" * 80)

for i, doc in enumerate(docs, 1):
    print(f"Document {i}")
    print(doc.metadata)
    print(doc.page_content[:500])
    print("=" * 80)