import { Form, redirect } from 'react-router-dom';

import { InputField } from '../components/InputField';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { useState } from 'react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  await new Promise(resolve =>
    setTimeout(() => {
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      console.log('submitted form data:', name, email, message);
      resolve();
    }, 1500),
  );
  return redirect('/');
};

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <PageHeader>Contact us</PageHeader>

      <main>
        <Form
          className="flex flex-col gap-4"
          method="post"
          onSubmit={() => {
            setIsLoading(true);
          }}
        >
          <InputField
            label="Name"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            required
          />

          <InputField
            label="Email"
            type="email"
            placeholder="your-email@example.com"
            id="email"
            name="email"
            required
          />

          <InputField
            label="Message"
            placeholder="Enter your message..."
            type="text"
            id="message"
            name="message"
            required
            inputType="textarea"
          />

          <Button disabled={isLoading} type="submit">
            Send Message
          </Button>
        </Form>
      </main>
    </div>
  );
};
