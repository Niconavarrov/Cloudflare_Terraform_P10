variable cloudflare_account_id {
  type        = string
  description = "Cloudflare account id"
}

variable project_name {
  type        = string
  description = "Nombre del proyecto en Cloudflare Pages"
}

variable github_owner {
  type        = string
  description = "Github Owner"
}

variable github_repo {
  type        = string
  description = "Github Repo"
}

variable production_branch {
  type        = string
  description = "Rama de producción"
}

variable d1_databases {
  type        = map(string)
  description = "Bindings D1 (nombre lógico -> id de base)"
  default     = {}
}
