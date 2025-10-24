output "ec2_public_ip" {
  description = "IP pública de la instancia."
  value       = aws_instance.this.public_ip
}

output "ec2_public_dns" {
  description = "DNS público de la instancia."
  value       = aws_instance.this.public_dns
}