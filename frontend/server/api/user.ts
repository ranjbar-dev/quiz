// server/api/login.ts
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {

  const headers = event.node.req.headers
  const authHeader = headers.authorization || ''
  const token = authHeader.replace('Bearer ', '')

  if( !token )
    return {
      statusCode: 400,
      message: 'توکن وارد نشده است'
    }

  // Simulate a successful login response
  return {
    statusCode: 200,
    data: {
        user: {
            id: "1234567890",
            first_name: "امیر حسین",
            last_name: "رنجبر حسنی",
            phone_number: "09131926547",
        },
    }
  }
})