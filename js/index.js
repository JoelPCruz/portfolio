let emailValue = document.getElementById("email").value;

function sendEmail () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "joerican305@gmail.com",
        Password : "Cholo327!",
        To : 'joerican327@icloud.com',
        From : emailValue,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}