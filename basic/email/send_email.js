var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    secure: false, // use SSL
    port: 25, // port for secure SMTP
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    },
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'receiver@gmail.com', //multiple receivers: 'a@gmail.com, b@gmail.com'
    subject: 'Sending Email using Node.js',
    // text: 'That was easy!'
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
