// server/api/login.ts
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const { token } = body

  if (!token) {
    return {
      statusCode: 400,
      message: 'توکن وارد نشده است'
    }
  }

  return {
    statusCode: 200,
    data: {
        is_valid: true,
    }
  }
})