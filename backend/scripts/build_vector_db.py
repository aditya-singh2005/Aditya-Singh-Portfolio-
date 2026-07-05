from pathlib import Path
from langchain_community.document_loaders import TextLoader, PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma


BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"
PDF_PATH = DATA_DIR / "resume.pdf"


def load_documents():
    documents = []
    
    markdown_files = list(DATA_DIR.rglob("*.md"))

    for file in markdown_files:
        loader = TextLoader(
            str(file),
            encoding="utf-8",
            autodetect_encoding=True,
        )
        docs = loader.load()
        documents.extend(docs)

    pdf_loader = PyPDFLoader(PDF_PATH)
    pdf_docs = pdf_loader.load()
    documents.extend(pdf_docs)

    return documents

def split_documents(documents):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size = 800,
        chunk_overlap = 150
    )

    chunks = text_splitter.split_documents(documents)

    return chunks

def create_vector_db(chunks):
    embedding_model = HuggingFaceEmbeddings(
        model_name = "BAAI/bge-small-en-v1.5"
    )

    vector_db = Chroma.from_documents(
        documents = chunks,
        embedding = embedding_model,
        persist_directory = "chroma_db"
    )

    return vector_db


def main():
    documents = load_documents()

    chunks = split_documents(documents)

    create_vector_db(chunks)


    print(f"Loaded Documents : {len(documents)}")

    print(f"Created Chunks : {len(chunks)}")


if __name__ == "__main__":
    main()
