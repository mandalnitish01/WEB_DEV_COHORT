import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendVerificationEmail = async (email, token) => {
  try {
    //create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, //true for port 465 baaki false
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    console.log("transporter", transporter);

    //create verification link
    const verificationurl = `${process.env.BASE_URL}/api/v1/user/verify/${token}`;

    //create mail options
    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: email, // list of receivers
      subject: "Plese verify your email", // Subject line
      text: `Click on the link to verify your email: ${verificationurl}`, // plain text body
      html: `<p>Click on the link below to verify your email:</p>
           <a href="${process.env.BASE_URL}/api/v1/user/verify/${token}" target="_blank">
           Verify Email</a>`, // HTML body
    };
    console.log("mail loaded!", mailOptions);


    //send mail to user
   const info =  await transporter.sendMail(mailOptions)

    console.log("Verification email sent successfully to ", info.messageId);
    console.log("Verification email sent successfully to ", info.response);
    return true;
    // await transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.error("Email sending error:", error);
  
    //       // Ensure response is sent only once
    //       if (!res.headersSent) {
    //         return res.status(500).json({ error: "Email sending failed" });
    //       }
    //     } else {
    //       console.log("Email sent:", info.response);
  
    //       // Ensure response is sent only once
    //       if (!res.headersSent) {
    //         return res.status(200).json({ message: "Email sent successfully" });
    //       }
    //     }
    //   });
  } 
  catch (error) {
    console.error("Error sending email:", error);
    // Handle the error as needed (e.g., log it, send a response, etc.)
    return false;
  }
};


export default sendVerificationEmail;