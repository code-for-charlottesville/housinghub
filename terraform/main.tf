module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "housinghub"
  cidr = "10.40.0.0/16"

  azs              = ["us-east-2a", "us-east-2b", "us-east-2c"]
  private_subnets  = []
  public_subnets   = ["10.40.101.0/24", "10.40.102.0/24", "10.40.103.0/24"]
  database_subnets = ["10.40.201.0/24", "10.40.202.0/24", "10.40.203.0/24"]

  enable_nat_gateway = false
  enable_vpn_gateway = false
}

variable "db_password" {
  type = string
}

resource "aws_rds_cluster" "housinghub" {
  cluster_identifier              = "housinghub"
  engine                          = "aurora-postgresql"
  engine_mode                     = "serverless"
  engine_version                  = "10.7"
  db_subnet_group_name            = module.vpc.database_subnet_group
  database_name                   = "housinghub"
  master_username                 = "master"
  master_password                 = var.db_password
  db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.housinghub.name
  vpc_security_group_ids          = [aws_security_group.housinghub_db.id]

  scaling_configuration {
    auto_pause               = true
    min_capacity             = 2
    max_capacity             = 2
    seconds_until_auto_pause = 300
  }
}

resource "aws_rds_cluster_parameter_group" "housinghub" {
  name   = "housinghub"
  family = "aurora-postgresql10"
}

resource "aws_security_group" "housinghub_db" {
  vpc_id = module.vpc.vpc_id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = [module.vpc.vpc_cidr_block]
  }
}
