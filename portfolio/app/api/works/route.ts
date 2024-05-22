export async function GET() {
  return new Response({"methode": 'GET'})
}

export async function POST(req: Request) {
  const body = req.json().then(body => body)
  return new Response({"methode": 'POST', body: body})
}

export async function PUT(req:Request) {
  const body = req.json().then(body => body)
  return new Response({"methode": 'PUT', body: body})
}

export async function DELETE(req: Request) {
  const workId = req.nextUrl.searchParams//.get("workId")
  return new Response("DELETE" + " " + workId)
}