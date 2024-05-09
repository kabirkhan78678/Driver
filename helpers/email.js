// Import nodemailer module
const nodemailer = require('nodemailer');
const baseurl = require('../config').base_url
// Define a function named 'mail' to send an email with OTP
module.exports.mail = async function (email, act_token) {
    var transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        // secure: true,
        auth: {
          user: "testing26614@gmail.com",
          pass: "ibxakoguozdwqtav",
        },
      });
    // Define email options
    let mailOptions = {
        from: "mkdteamcti@gmail.com",
        to: email,
        subject: "Activate Account",
        template: "signupemail",
        context: {
            href_url: baseurl + `/userRouter/verifyUser/` + `${act_token}`,
            msg: `Please click below link to activate your account.`,
        },
    };
    // Send email using transporter
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) { // If error occurs while sending email
            console.log("Error " + err); // Log the error
        } else { // If email sent successfully
            console.log("Email sent successfully", info.response); // Log the success message with email response info
        }
    });

}
