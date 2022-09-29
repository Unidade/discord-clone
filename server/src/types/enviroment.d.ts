declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: string
      MONGODB_URI: string
      DB_NAME: string
      TOKEN_KEY: string
    }
  }
}

export {}
