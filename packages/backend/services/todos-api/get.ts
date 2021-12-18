import { Handler } from 'aws-lambda/handler'
import AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.DYNAMODB_TABLE
if (!tableName) {
  throw Error('DYNAMODB_TABLE must be set')
}

export const handler: Handler = async (event) => {
  const data = await docClient
    .scan({ TableName: tableName, Limit: 10 })
    .promise()
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
}
