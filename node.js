provider:
  name: aws
  runtime: nodejs14.x
  stage: dev # Set the default stage used. Default is dev
  region: us-east-1 # Overwrite the default region used. Default is us-east-1
  profile: production # The default profile to use with this service
  memorySize: 512 # Overwrite the default memory size. Default is 1024