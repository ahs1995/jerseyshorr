import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";
import { protectRoute } from "@/utils/auth/middleware";
import { dbConnect } from "@/utils/mongodb";

export async function PATCH(req) {
  try {
    await dbConnect();

    //1 Find the user by user id
    // const user = await User.findById(req.user.id).select("+password");

    const currentUser = await protectRoute(req);

    if (!currentUser) {
      return new Response(
        JSON.stringify({
          status: "Fail",
          message: "You are not logged in. Please login to get access",
        }),
        { status: 401 },
      );
    }

    const body = await req.json();

    const { currentPassword, newPassword, passwordConfirm } = body;

    //2 Check if provided password match with the password in the user document

    // if (!user.checkPassword(req.body.passwordCurrent, user.password)) {
    //   return new Response(
    //     JSON.stringify({
    //       status: "fail",
    //       message: "You have provided a wrong password",
    //     }),
    //     { status: 401 },
    //   );
    // }

    if (
      !(await currentUser.checkPassword(currentPassword, currentUser.password))
    ) {
      return new Response(
        JSON.stringify({
          status: "Fail",
          message: "Your current password is wrong",
        }),
        { status: 401 },
      );
    }

    //3 Set the new password in the doc
    // (user.password = req.body.password),
    //   (user.passwordConfirm = req.body.passwordConfirm);

    // await user.save();

    currentUser.password = password;
    currentUser.passwordConfirm = passwordConfirm;

    await currentUser.save();

    //4 Send response with the newly generated token
    // createSendToken(user);
    const responseBody = createSendToken(currentUser);
    return new Response((JSON.stringify(responseBody), { status: 201 }));
  } catch (error) {
    console.log("Update password error:", error);
    return new Response(
      { status: "fail", message: error.message },
      { status: 500 },
    );
  }
}
