import User from "@/models/User";
import { protectRoute } from "@/utils/auth/middleware";
import { dbConnect } from "@/utils/mongodb";

export async function PATCH(req) {
    try {
        await dbConnect();

        const currentUser = await protectRoute(req);

        if(!currentUser ) {
            return new Response(
                JSON.stringify({
                  status: "Fail",
                  message: "You are not logged in. Please login to get access",
                }),
                { status: 401 },
              );
        }

        const body = req.json();

        const {name, email} = body;

        if (!name || !email) {
            return new Response(
              JSON.stringify({ message: "Please provide all required fields" }),
              { status: 400 },
            );
          }


        const currentUserWithEmail = await User.findOne(({email:email}));
    }
}