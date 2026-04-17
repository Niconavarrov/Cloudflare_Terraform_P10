variable cloudflare_account_id {
    type = string
    description = "Cloudflare Account Id"
}

variable database_name {
    type = string
    description = "Database Name"
}

variable project_name {
    type = string
    description = "Proyect Name"
}

variable github_owner {
    type = string
    description = "Github Owner"
}

variable github_repo {
  type        = string
  description = "Github Repo"
}

variable production_branch {
  type        = string
  description = "Rama de producción del repositorio (ej. main)"
  default     = "main"
}

variable cloudflare_api_token {
  type        = string
  description = "Token de API de Cloudflare"
  sensitive   = true
}