function sendMail(){
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("message").value,
    }
    email.js.send("service_0n0dkw7","template_vh7l3jg",parms).then(alert("Email Sent!!"))
}