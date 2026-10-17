/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OBSERVABILITY_SCRIPT_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
