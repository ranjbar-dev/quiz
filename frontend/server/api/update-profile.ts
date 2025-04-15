// server/api/update-profile.ts
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {

  const headers = event.node.req.headers
  const authHeader = headers.authorization || ''
  const token = authHeader.replace('Bearer ', '')

  if( !token )
    return {
      statusCode: 400,
      message: 'توکن وارد نشده است'
    }

  // Get user data from request body
  const body = await readBody(event)
  const { first_name, last_name, phone_number } = body

  if( !first_name || !last_name || !phone_number )
    return {
      statusCode: 400,
      message: 'اطلاعات وارد نشده است'
    }

  // Wait for 2 seconds
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Return updated user data
  return {
    statusCode: 200,
    data: {
        user: {
            id: "1234567890",
            first_name,
            last_name,
            phone_number,
            melli_code: "001234567890",
            birth_date: "1360/01/01",
            education_level: "دیپلم",
            jobs: ["جوشکار", "آهنگر"],
        },
    }
  }
})