import { protectRoute } from "@/utils/auth/middleware";
import { dbConnect } from "@/utils/mongodb";

export async function DELETE(req) {
  await dbConnect();

  try {
    const currentUser = await protectRoute(req);

    if (!currentUser) {
      return new Response(
        JSON.stringify({
          Status: "Fail",
          Message: "You are not logged in. Please log in to get access",
        }),
        { status: 400 },
      );
    }

    currentUser.active = false;

    await currentUser.save({
      validateBeforeSave: false,
    });

    return new Response(
      JSON.stringify({
        status: "Success",
        message: "Your account is deleted successfully!",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.log("User update error:", error.message);
    return new Response(
      JSON.stringify({ status: "Faile", message: error.message }),
      { status: 400 },
    );
  }
}
