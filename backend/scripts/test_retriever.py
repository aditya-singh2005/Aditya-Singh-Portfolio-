from app.rag.vector_store import load_vector_store

vector_store = load_vector_store()

queries = [
    "FlowDash",
    "Looply",
    "Connecti",
    "AI Recruitment",
]

for query in queries:
    print("\n" + "=" * 100)
    print(f"QUERY: {query}")

    results = vector_store.similarity_search(
        query=query,
        k=3
    )

    for i, doc in enumerate(results, 1):
        print(f"\nResult {i}")
        print(doc.metadata["source"])