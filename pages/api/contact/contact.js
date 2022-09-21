export default function (req, res) {
  let nodemailer = require('nodemailer');
  const PASSWORD = process.env.password;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'staystrongbg@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: 'staystrongbg@gmail.com',
    to: 'staystrongbg@gmail.com',
    subject: `Message From ${req.body.name}`,
    text:
      req.body.message +
      ' | Sent from: ' +
      req.body.email +
      req.body.phone +
      req.body.address +
      req.body.lastname,
    html: /*html*/ `
                    <div>${req.body.message}</div>
                    <p>Sent from: ${req.body.email}</p>
                    <p>Ime i prezime: ${
                      req.body.name + ',' + req.body.lastname
                    }</p>
                    <p>Telefon: ${req.body.phone}</p>
                    <p>adresa: ${req.body.address}</p>
                    
                    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.status(200);
}
