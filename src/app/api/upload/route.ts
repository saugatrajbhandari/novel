import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("------------------");
    console.log(req.body);
    console.log("------------------");

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
  }
}
