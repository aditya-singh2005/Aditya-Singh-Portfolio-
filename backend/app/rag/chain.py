from operator import itemgetter

from langchain_core.output_parsers import StrOutputParser

from app.rag.document_formatter import format_documents
from app.rag.llm import get_llm
from app.rag.prompt import get_prompt
from app.rag.retriever import get_retriever


def get_rag_chain():

    retriever = get_retriever()

    prompt = get_prompt()

    llm = get_llm()

    parser = StrOutputParser()

    chain = (
        {
            "question": itemgetter("question"),

            "history": itemgetter("history"),

            "context": (
                itemgetter("question")
                | retriever
                | format_documents
            ),
        }
        | prompt
        | llm
        | parser
    )

    return chain