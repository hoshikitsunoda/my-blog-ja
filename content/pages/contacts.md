---
title: 'Contact me'
template: 'page'
socialImage: '/media/image-4.jpg'
---

<form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="bot-field" />
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <input type="text" name="name" placeholder="Your Name" />
  </p>
  <p>
    <input type="email" name="email" placeholder="Your Email" />
  </p>
  <p>
    <textarea
      name="message"
      placeholder="Message here..."
      rows="10"
    ></textarea>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
