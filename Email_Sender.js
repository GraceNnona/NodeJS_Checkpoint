const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h2>Hello there. Remember to never give up!</h2>
</body>
</html>
`;

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nnonagrace144@gmail.com",
    pass: "tsej ewgt qcep izzh",
  },
});

var mailOptions = {
  from: "nnonagrace144@gmail.com",
  to: "okaforgwen@gmail.com",
  subject: "Sending Email using Node.js",
  text: "I put work like a convertible buck!",
  html: htmlContent,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
