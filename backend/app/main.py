from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.chat import router as chat_router

app = FastAPI(
    title="Portfolio RAG API",
    description="RAG chatbot API for Aditya Singh's portfolio website",
    version="1.0.0",
)

# Allow requests from any origin (your portfolio frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount the chat routes
app.include_router(chat_router, prefix="/api")


@app.get("/")
def health_check():
    return {"status": "ok", "message": "Portfolio RAG API is running. Go to /docs for Swagger UI."}
