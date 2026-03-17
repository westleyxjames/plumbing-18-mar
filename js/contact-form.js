// Contact Page Form Handler

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        serviceType: document.getElementById('serviceType').value,
        message: document.getElementById('message').value
      };

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
      if (successMessage) {
        successMessage.style.display = 'flex';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset form
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(function() {
        if (successMessage) {
          successMessage.style.display = 'none';
        }
      }, 5000);
    });
  }
});
