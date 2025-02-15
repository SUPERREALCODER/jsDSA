export async function GET(request) {
  try {
    return new Response('{"message": "shiiiiiiiiiiiit"}', {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const errorData = { error: error.message }
    return new Response(JSON.stringify(errorData), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
