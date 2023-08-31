document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const contactData = document.getElementById('contact-data');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = contactForm.elements['name'].value;
    const whatsapp = contactForm.elements['whatsapp'].value;
    const city = contactForm.elements['city'].value;

    const contactInfo = `
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>City:</strong> ${city}</p>
    `;

    contactData.innerHTML = contactInfo;
    contactForm.reset();
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const messageForm = document.getElementById('message-form');
  const resultData = document.getElementById('result-data');

  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = messageForm.elements['name'].value;
    const birthdate = messageForm.elements['birthdate'].value;
    const gender = messageForm.elements['gender'].value;
    const message = messageForm.elements['message'].value;

    const submittedData = `
      <h3>Submitted Data:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Birthdate:</strong> ${birthdate}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    resultData.innerHTML = submittedData;
    messageForm.reset();
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slideshow .slide');
  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 1000); // Ganti gambar setiap 3 detik
});
