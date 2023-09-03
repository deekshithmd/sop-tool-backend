const nodemailer = require("nodemailer");
const EMAIL_TEMPLATE= require("./template/emailTemplate");
require("dotenv").config();

const sendMail = async (req, res) => {
  console.log("data received", req.body);
  const formData=req.body;

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: '"Deekshith M D " <deekshithmogra@gmail.com>', // sender address
    to: "deekshithgowdamogra@gmail.com", // list of receivers
    subject: "Your SOP Data", // Subject line
    text: "Your SOP Data", // plain text body
    html: EMAIL_TEMPLATE(formData), // html body
  });
  res.send(info?.messageId);
};

module.exports = sendMail;
