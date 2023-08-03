const nodemailer = require('nodemailer');
const jwt=  require('jsonwebtoken');
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user:"gauravk638648@gmail.com",
        pass:"hnkrddhuxivajoex"
    }


});

const token = jwt.sign({data:"matriot"},"solutions",{expiresIn:"10m"});

const info = {
    from:"gauravk638648@gmail.com",
    to:"ramboon422@gmail.com",
    subject:"Email Verification",
    text:`Hey! Please follow this link  http://localhost:4300/mailer/${token} to verify your email`
}

transporter.sendMail(info,(err,res)=>{
    if(!err){
        console.log("Email Sent Successfully");
    }
    else {
        console.log("Failed to send Email ",err);
    }
});