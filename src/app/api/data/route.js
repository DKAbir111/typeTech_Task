import dbConnect from "@/app/lib/dbConnect"

export async function GET() {

    const data = await dbConnect("info").find({}).toArray()
    return Response.json(data)
}