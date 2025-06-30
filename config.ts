import path from "path";
import os from "os";

// Available models for code embeddings
export const EMBEDDING_MODELS = {
  OLLAMA: {
    model: "unclemusclez/jina-embeddings-v2-base-code",
    contextSize: 8192,
    dimensions: 768,
    baseUrl: "http://127.0.0.1:11434",
  },
};



export const codeContextConfig = {
  ENV: process.env.NODE_ENV || "development",
  REPO_CONFIG_DIR:
    process.env.REPO_CONFIG_DIR ||
    path.join(os.homedir(), ".codeContextMcp", "repos"),
  BATCH_SIZE: 100,
  DATA_DIR:
    process.env.DATA_DIR || path.join(os.homedir(), ".codeContextMcp", "data"),
  DB_PATH: process.env.DB_PATH || "code_context.db",
  EMBEDDING_MODEL: EMBEDDING_MODELS.OLLAMA,
};

export default codeContextConfig;
