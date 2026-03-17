// Services Page Form Handler

document.addEventListener('DOMContentLoaded', function() {
  const serviceForm = document.getElementById('service-request-form');
  const formSubmitted = document.getElementById('form-submitted');
  const formContainer = document.getElementById('form-container');

  if (serviceForm) {
    serviceForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        consent: document.getElementById('consent').checked
      };

      // Validate consent
      if (!formData.consent) {
        alert('Please agree to the terms and privacy policy to submit the form.');
        return;
      }

      // Validate email
      if (!window.validateEmail(formData.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Validate phone
      if (!window.validatePhone(formData.phone)) {
        alert('Please enter a valid phone number.');
        return;
      }

      // Show success message
      formContainer.style.display = 'none';
      formSubmitted.style.display = 'block';

      // Reset form
      serviceForm.reset();

      // Optional: Scroll to success message
      formSubmitted.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Hide success message after 10 seconds and show form again
      setTimeout(function() {
        formSubmitted.style.display = 'none';
        formContainer.style.display = 'block';
      }, 10000);
    });
  }
});
