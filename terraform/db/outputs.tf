output "database_id" {
  value       = cloudflare_d1_database.database.id
  description = "ID de la base D1 para enlazar en Pages"
}
