// Contact form — powered by Web3Forms
// Access key tied to info@simdyns.com

const WEB3FORMS_KEY = 'af1c598d-d27e-4daa-bfa6-ccd35db5e6a5';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: subject || 'New contact form submission – SimDyns',
          from_name: name,
          replyto: email,
          name,
          email,
          message
        })
      });

      const data = await res.json();

      if (data.success === 'true' || data.success === true) {
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.style.background = '#16a34a';
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      alert('Something went wrong. Please email us directly at info@simdyns.com');
    }
  });
});
