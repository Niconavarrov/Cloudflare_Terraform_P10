module "db" {
  source                = "./db"
  cloudflare_account_id = var.cloudflare_account_id
  database_name         = var.database_name
}

module "page" {
  source                = "./page"
  cloudflare_account_id = var.cloudflare_account_id
  project_name          = var.project_name
  github_owner          = var.github_owner
  github_repo           = var.github_repo
  production_branch     = var.production_branch
  d1_databases = {
    DB = module.db.database_id
  }
}