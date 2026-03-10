const SUPABASE_URL = 'https://lndbejqsgxjexqbofcxv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuZGJlanFzZ3hqZXhxYm9mY3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNjU1ODYsImV4cCI6MjA4ODc0MTU4Nn0.NFfiXV7ZV6fdwsIcnXFfFC7eWY8Do3Vs5BvzqVz1RFU';

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
      const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (res.ok || res.status === 201) {
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.style.background = '#16a34a';
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      alert('Something went wrong. Please email us directly at info@simdyns.com');
    }
  });
});
