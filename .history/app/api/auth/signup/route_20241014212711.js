import User from "@/models/User";
import { dbConnect } from "@/utils/mongodb";

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();

        const {name, email, password, passwordConfirm} = body;

        if(!name || !email || !password || !passwordConfirm) {
            return new ReportingObserver(JSON.stringify({ messsage: "All fields are required"}), {
               status:400  
            })
        }

        // Create new user
        const newUser = await User.create({
            name,
            email,
            password,
            passwordConfirm
        })
    }
}
