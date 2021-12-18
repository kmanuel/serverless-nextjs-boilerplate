import { Handler } from 'aws-lambda/handler'
import AWS from 'aws-sdk'
import { Todo } from 'shared/Todo'

const docClient = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.DYNAMODB_TABLE
if (!tableName) {
  throw Error('DYNAMODB_TABLE must be set')
}

export const handler: Handler = async (event) => {
  const id: Pick<Todo, 'id'> = event.pathParameters.id
  await docClient
    .delete({
      TableName: tableName,
      Key: { id },
    })
    .promise()

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  }
}
