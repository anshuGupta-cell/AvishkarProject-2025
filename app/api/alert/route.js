import clientPromise from "@/lib/mongodb"

export const POST = async (req) => {
    const {type, title, desc} = await req.json()
    const body = {
        type, 
        title,
        desc,
        date: new Date()
    }
    const client = await clientPromise
    const db = client.db("aavishkar")
    const collection = db.collection("alerts")
    console.log(body);
    
    const result = await collection.insertOne({body})

    return Response.json({
        message: "added",
        body,
        result
    })
}
