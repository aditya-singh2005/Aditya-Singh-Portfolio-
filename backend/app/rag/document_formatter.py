from langchain_core.documents import Document


def format_documents(documents: list[Document]) -> str:
    """
    Converts retrieved LangChain Documents into
    a single string for the prompt.
    """

    return "\n\n".join(
        document.page_content
        for document in documents
    )