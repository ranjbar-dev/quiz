// server/api/login.ts
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const { personal_number, password } = body

  // Here you would typically validate the input and check against your database
  // For demonstration, let's assume a simple validation
  if (!personal_number || !password) {
    return {
      statusCode: 400,
      message: 'همه ی فیلدها بایستی پر شوند'
    }
  }

  // Simulate a successful login response
  return {
    statusCode: 200,
    data: {
        token: "1234567890",
        user: {
            id: personal_number,
            first_name: "امیر حسین",
            last_name: "رنجبر حسنی",
            phone_number: "09131926547",
        },
    }
  }
})