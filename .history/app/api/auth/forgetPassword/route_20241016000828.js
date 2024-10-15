import User from "@/models/User";
import { createSendToken } from "@/utils/auth/createSendToken";
import { dbConnect } from "@/utils/mongodb";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await dbConnect();

    console.log("USER EMAIL:", req.body.email);

    //1 Check if the user exists with the provided email address
    const user = await User.findOne({ email: req.body.email });

    //2 Send response if there is no user found
    if (!user) {
      return new Response(
        JSON.stringify({
          status: "fail",
          message: "No user exists with the email",
        }),
        { status: 404 },
      );
    }
    // 3 Generate token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // 3)Send the token on email

    const resetURL = `${req.protocol}:// ${req.get(
      "host",
    )}/api/auth/resetpassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH request with your new password and
    passwordConfirm to: ${resetURL}. \nIf you didn't forget your password, please ignore this
    email!`;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // sending email with nodemailer
    const info = await transporter.sendMail({
      from: `"JerseyShorr" <${process.env.EMAIL_FROM}>`, // sender address
      to: user.email,
      subject: `Reset your JerseyShorr account password`, // Subject line
      html: message, // html body
    });

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Password recovery email has been sent successfully!",
      }),
      { status: 200 },
    );
  } catch (error) {
    console.log("Forget password error:", error);
    return new Response(
      JSON.stringify({ status: "Fail", message: error.message }),
      { status: 500 },
    );
  }
}
