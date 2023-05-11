function sendEmail(){
    Email.send({
        SecureToken : "8e0eb6a3-f301-494d-a923-de46485e32c6",
        To : 'kim.dev622@gmail.com',
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : document.getElementById('message').value
    }).then(
        message => alert("message was sent")
    )
}