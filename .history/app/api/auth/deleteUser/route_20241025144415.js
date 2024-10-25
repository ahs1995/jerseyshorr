import { dbConnect } from "@/utils/mongodb";
import fetchUserData from "@/utils/auth/fetchUserData";


export async function DELETE(req) {

    await dbConnect();

    try{
        const currentUser = await fetchUserData(req);

    }
}