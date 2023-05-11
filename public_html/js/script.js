// enable email sending
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

// enable dark mode
// let dark = document.getElementById("dark");
// dark.onclick = function() {
//     document.body.classList.toggle("dark-mode")
//         if(document.body.classList.contains("dark-mode")){
//             dark.src = "<i class=\"uil uil-sun\"></i>"
//         }else{
//             dark.src = "<i class=\"uil uil-moon\"></i>"
//         }
// }