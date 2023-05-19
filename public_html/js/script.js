// enable email sending
function sendEmail(){
    Email.send({
        SecureToken : "7668f438-cf44-4639-b8f1-9990dd4c8f33",
        To : 'kim.dev622@gmail.com',
        From : 'kim.dev622@gmail.com',
        Subject : document.getElementById('subject').value,
        Body : document.getElementById('email').value  + '\n<br>\n' +
            document.getElementById('message').value
    }).then(
        message => {
            console.log(message)
            alert("message was sent")
            return alert }
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

window.onscroll = function() {myFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}