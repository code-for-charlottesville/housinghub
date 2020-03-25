provider "aws" {
  version = "~> 2.0"
  region  = "us-east-2"
  allowed_account_ids = [
    "130004658718"
  ]
}
