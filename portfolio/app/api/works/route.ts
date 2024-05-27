export async function GET() {
  return new Response(JSON.stringify({"methode": 'GET'}))
}

export async function POST(req: Request) {
  const body = await req.json().then(body => body)
  return new Response(JSON.stringify({"methode": 'POST', body: body}))
}

export async function PUT(req:Request) {
  const body = await req.json().then(body => body)
  return new Response(JSON.stringify({"methode": 'PUT', body: body}))
}

export async function DELETE(req: Request) {
  const workId = req.nextUrl.searchParams.get("workId")
  return new Response(JSON.stringify({"methode": "DELETE", "workId": workId}))
}
