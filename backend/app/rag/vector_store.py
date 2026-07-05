from pathlib import Path

from langchain_chroma import Chroma

from app.rag.embeddings import get_embedding_model

BASE_DIR = Path(__file__).resolve().parent.parent.parent

CHROMA_DB_DIR = BASE_DIR / "chroma_db"


def load_vector_store():
    embedding_model = get_embedding_model()

    vector_store = Chroma(
        persist_directory=str(CHROMA_DB_DIR),
        embedding_function=embedding_model,
    )

    return vector_store