import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";

export async function POST(req) {
  try {
    await dbConnect();

    const body = req.json();

    const { email, password } = body;

    // Check if email and password exists

    if (!email || !password)
      new ReportingObserver(
        JSON.stringify({ message: "Please provide email and password" }),
        {
          status: 400,
        },
      );

    //2 Check if user exists or password is correct

    // 2.1 Find the specific user document with the provided email and password

    const user = await User.findOne({ email }).select("+password");

    // 2.2

    if (!user || !(await User.checkPassword(password, User.password))) {
      return new ReportingObserver(
        JSON.stringify({ message: "Incorrect email or password" }),
        {
          status: 401,
        },
      );
    }

    // If the user exists and password is correct, Generate JWT and send it with the response
  } catch (e) {
    console.log(e);
  }
}
