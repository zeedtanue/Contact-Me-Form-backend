const Form = require('../models/form');
const nodemailer = require('nodemailer');



exports.sendInfo = async (req, res) => {

    const form = new Form({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        message: req.body.message
      })
      try{
          const newForm= await form.save()
          console.log(req.body);
          if(req.body){


                const output = `<p>You have a new contact request</P>
                    <h3>Contact Details</h3>
                    <ul>
                    <li> Name: ${req.body.name}</li>
                    <li> Company: ${req.body.company}</li>
                    <li> Email: ${req.body.email}</li>
                    <li> Phone: ${req.body.phone}</li>
                
                </ul>
                <h3>
                Message
                </h3>
                <p>
                <li> Message: ${req.body.message}</li>
                </p>`


                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: process.env.EMAIL_ID, // generated ethereal user
                        pass: process.env.EMAIL_PASS  // generated ethereal password
                    },
                    tls:{
                        rejectUnauthorized:false
                     }
                });
            
            // setup email data with unicode symbols
                let mailOptions = {
                    from: '"Nodemailer Contact" <hossaintamzeed05@gmail.com>', // sender address
                    to: process.env.ADMIN_ONE ,  // list of receivers
                    subject: 'Node Contact Request', // Subject line
                    text: 'Hello world?', // plain text body
                    html: output // html body
                };
            
            // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s', info.messageId);   
                    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            
                    res.render('contact', {msg:'Email has been sent'});
                });
            
            }
          res.status(201).json(newForm)
      }catch(err){
          res.status(400).json({message: err.message})
      }
      
    
            
}