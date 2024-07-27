import { NextResponse } from 'next/server';
import UserModel from "@/models/user";
import connectDb from "@/lib/mongo";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    await connectDb()

    const userExists = await UserModel.findOne({ email })

    if(userExists) throw new Error('User with email already exists');

    await UserModel.create({
      email,
      name,
      password,
    });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
