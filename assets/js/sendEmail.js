function sendMail(contactForm) {
    emailjs.send("gmail", "resume", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value,
        })
.then(
        function(response) {
           alert("Your message has been sent");
            window.location = "thanks.html";
        },
        function(error) {
            console.log("FAILED", error);
            alert('Your message has not been sent');
            window.location = 'thanks.html';
        }
   );
           
}
