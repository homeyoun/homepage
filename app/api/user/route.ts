import { NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export async function GET(res: NextApiResponse) {
  const users = await prisma.user.findMany();
  return Response.json(users);
}
