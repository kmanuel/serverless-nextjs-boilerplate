export const handler = async (event: any) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'hello from TS!! local! wututu',
    }),
  }
}
