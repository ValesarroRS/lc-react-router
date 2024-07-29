export const Contact = () => {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <form action="your-server-side-script" method="POST">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
};
