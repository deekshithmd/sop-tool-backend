const nodemailer = require("nodemailer");
const EMAIL_TEMPLATE = require("./template/emailTemplate");
const file = require('./template/pdfData')
const { jsPDF } = require("jspdf");
require("dotenv").config();

const sendMail = async (req, res) => {
    const formData = req.body;

    // creating jspdf instance
    const doc = new jsPDF();
    
    // getting page contents
    const { firstPage, secondPage, thirdPage } = file(formData);

    // populating page data
    doc.text(firstPage, 10, 10);

    // adding new page
    doc.addPage();
    doc.text(secondPage, 10, 10)

    doc.addPage();
    doc.text(thirdPage, 10, 10)

    // creating transporter to send email
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

    // sending email using transporter
    const info = await transporter.sendMail({
        from: '"Deekshith M D " <deekshithmogra@gmail.com>', // sender address
        to: `${formData?.email?.value}`, // list of receivers
        subject: "Your SOP Data", // Subject line
        text: "Your SOP Data", // plain text body
        html: EMAIL_TEMPLATE(formData), // html body
        attachments: [
            {
                filename: `${formData?.name?.value}_SOP.pdf`,
                content: Buffer.from(doc.output('arraybuffer'))
            }]
    });
    res.status(200).json({messageId:info?.messageId});
};

module.exports = sendMail;
