import { protectRoute } from "@/utils/auth/middleware";
import { dbConnect } from "@/utils/mongodb";


export async function DELETE(req) {

    await dbConnect();

    try{
        const currentUser = await protectRoute(req);

        if(!currentUser) {
            return new Response(JSON.stringify({Status: "Fail", Message: "You are not logged in. Please log in to get access"}))
        }

        currentUser.active = false;

        await currentUser.save();

        return new Response(JSON.stringify({status: "Success", message: "Your account is deleted successfully!"}))


    }
}