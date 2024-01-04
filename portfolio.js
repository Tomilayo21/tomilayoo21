//Navbar
const menu = document.querySelector("#menu");
menu.onclick = function() {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
};

//Navbar onScroll
function ChangeBG() {
    var containerContent = document.getElementById('header');
    var scrollValue = window.scrollY;
    if (scrollValue < 100) {
        containerContent.classList.remove('bgColor');
    } else {
        containerContent.classList.add('bgColor');
    }
    // console.log(scrollValue);
}
window.addEventListener('scroll', ChangeBG); 


//Button Hover
const btn = document.querySelector(".btn");
btn.onmousemove = function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--x", x + "px");
    btn.style.setProperty("--y", y + "px");
}

//Options Select
// packagesTypes.addEventListener("change", packagesTypesValue);

function packagesTypesValue(){
    var selected = document.getElementById("packagesTypes").value;
    // console.log(selected)
    document.getElementById('poll').innerHTML = selected;
    // textValue.value = this.value;
}



function sendMail() {
    var paras = {
        from_lastName : document.getElementById("lastName").value,
        from_firstName : document.getElementById("firstName").value,
        email_id : document.getElementById("email").value,
        packagesTypes : document.getElementById("packagesTypes").value,
        telNumber : document.getElementById("telNumber").value,
        message : document.getElementById("message").value
    };
    const serviceID = "service_xaps0fh";
    const templateID = "template_x0ga2hi";

    emailjs
    .send(serviceID, templateID, paras)
    .then(alert("Successful"))
}
// function sendMail() {
//     var params = {
//         from_lastName : document.getElementById("lastName").value,
//         from_firstName : document.getElementById("firstName").value,
//         email_id : document.getElementById("email").value,
//         packagesTypes : document.getElementById("packagesTypes").value,
//         message : document.getElementById("message").value
//     };
//     const serviceID = "service_xaps0fh";
//     const templateID = "template_x0ga2hi";

//     emailjs
//     .send(serviceID, templateID, params)
//     .then(
//         res => {
//             document.getElementById("lastName").value = "",
//             document.getElementById("firstName").value  = "",
//             document.getElementById("email").value  = "",
//             document.getElementById("packagesTypes").value  = "",
//             document.getElementById("message").value  = ""
//             alert("Successful" + res.status);
//         }
//     )
// }

// const contactForm = document.querySelector("#contact-form");
// const firstName = document.querySelector("#firstName");
// const lastName = document.querySelector("#lastName");
// const packagesTypes = document.querySelector("#packagesTypes");
// const telNumber = document.querySelector("#telNumber");
// const email = document.querySelector("#email");
// const message = document.querySelector("#message");
// const submitBtn = document.querySelector("#add-to-cartt");
// const publicKey = "ax74Vx98AH3x-vJi0"; 
// const serviceID = "service_xaps0fh";
// const templateID = "template_x0ga2hi";
// emailjs.init(publicKey);

// contactForm.add("submit", e => {
//     e.preventDefault();
//     submitBtn.innerText = "Just a moment"
//     const inputFields = {
//         from_lastName : document.getElementById("lastName").value,
//         from_firstName : document.getElementById("firstName").value,
//         email_id : document.getElementById("email").value,
//         packagesTypes : document.getElementById("packagesTypes").value,
//         message : document.getElementById("message").value
//     }
//     emailjs
//     .send(serviceID, templateID, inputFields)
//     .then( () => {
//             submitBtn.innerText = "Message Sent";
//             lastName.value = "";
//             firstName.value  = "";
//             email.value  = "";
//             packagesTypes.value  = "";
//             message.value  = "";
//         }, (error) => {
//             console.log(error)
//             submitBtn.innerText = "Something went wrong";
//         }
//     );
// });

// var data = {
//     service_id: 'service_xaps0fh',
//     template_id: 'template_x0ga2hi',
//     user_id: 'ax74Vx98AH3x-vJi0',
//     template_params: {
//         'from_lastName' : 'document.getElementById("lastName").value',
//         'from_firstName' : 'document.getElementById("firstName").value',
//         'email_id' : 'document.getElementById("email").value',
//         'packagesTypes' : 'document.getElementById("packagesTypes").value',
//         'message' : 'document.getElementById("message").value',
//         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
// };
 
// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });


// var templateParams = {
//     name: 'James',
//     notes: 'Check this out!'
// };
 
// emailjs.send('service_xaps0fh', 'template_x0ga2hi', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });



