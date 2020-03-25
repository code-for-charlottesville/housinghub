terraform {
  backend "s3" {
    bucket = "code4cville.housinghub.tfstate"
    key    = "all.tfstate"
    region = "us-east-2"
  }
}

resource "aws_s3_bucket" "tfstate" {
  bucket = "code4cville.housinghub.tfstate"
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "tfstate" {
  bucket = aws_s3_bucket.tfstate.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
