import { Handler } from 'aws-lambda/handler'
import { v4 as uuidv4 } from 'uuid'
import AWS from 'aws-sdk'
import { Todo } from 'shared/Todo'
import { TodoCreateInput } from 'shared/Todo'

const docClient = new AWS.DynamoDB.DocumentClient()
const tableName = process.env.DYNAMODB_TABLE
if (!tableName) {
  throw Error('DYNAMODB_TABLE must be set')
}

export const handler: Handler = async (event) => {
  const body: TodoCreateInput = JSON.parse(event.body)

  const item: Todo = {
    ...body,
    id: uuidv4(),
    createdAt: new Date().getTime(),
  }
  await docClient
    .put({
      TableName: tableName,
      Item: item,
    })
    .promise()
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }
}
