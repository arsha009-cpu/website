
function submitRegistrationForm(event) {
    event.preventDefault(); 

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        membership: document.getElementById('membership').value,
        paymentMethod: document.getElementById('payment').value
    };

   
    console.log("Form submitted:", formData);

    
    processPayment(formData);
}


function processPayment(formData) {
    
    alert("Processing your payment... Please wait.");

   
    setTimeout(() => {
        
        alert("Transaction Successful! Thank you for joining HEAVY METTLE.");

        
        window.location.href = "thankyou.html";
    }); 
}


document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', submitRegistrationForm);
    }
});