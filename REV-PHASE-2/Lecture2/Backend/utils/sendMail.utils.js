import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
//create a transporter function
//mailoptions
//send mail

const sendverificationEmail = async (email, token) => {
  try {
    //create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: process.env.MAILTRAP_SECURE === "true", // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const verificationUrl = `${process.env.BASE_URL}/api/v1/user/verify/${token}`;

    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: email, // list of receivers
      subject: "verify your email address", // Subject line
      text: `Thank you for registration! Plese conform your email address to complete your registration
                ${verificationUrl} This verification link will expire within 10 minutes.
                 If you didi not create an account, please ignore this mail. " target="_blank">
                 Verify Email
                `,

      html: `<p>Click on the link below to verify your email:</p>
                 <a href="${verificationUrl}</a>`, // HTML body
    };

    //send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Verification email sent : %n", info.messageId);
    return true;
  } catch (error) {
    console.log("error sending varification email :", error);
    return false;
  }
};

export default sendverificationEmail;
