import { client } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const query = `*[_type == 'work']`
    const data = await client.fetch(query);
    return NextResponse.json(data);
}
