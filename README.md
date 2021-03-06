<!--
title: 'AWS Apollo Lambda (NodeJS & Typescript)'
description: 'This example provides a setup for a Lambda Graphql API with apollo'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/jmpfrazao'
authorName: 'Miguel Frazao'
authorAvatar: 'https://avatars3.githubusercontent.com/u/28927258?s=460&v=4'
-->
# Apollo Lambda GraphQL API Example
This example demonstrates how to setup a lambda graphql API with apollo
( Slight extension from https://github.com/serverless/examples )

@serverless

## Use Cases
- Small graphql API
- Creating a temporary lambda API that can easily be converted to standard GraphQL API

## Setup
- Setup your env file for AWS deployment with:
  - - APOLLO_LAMBDA_KEY
  - - NODE_ENV

- sls deploy

## Usage
- To test it locally with serverless-offline by running: 
  `npm run dev`

## Future
- Add support for subscription with Redis
