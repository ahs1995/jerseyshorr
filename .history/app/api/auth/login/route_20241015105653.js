import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";

export async function POST(req) {
  try {
    await dbConnect();

    const body = req.json();

    const { email, password } = body;

    if (!email || !password)
      new ReportingObserver(
        JSON.stringify({ message: "Please provide email and password" }),
        {
          status: 400,
        },
      );
  } catch (e) {
    console.log(e);
  }
}
