import { PageHeader } from '../components/PageHeader';

export const PrivacyPolicy = () => {
  return (
    <div>
      <PageHeader>Privacy Policy</PageHeader>
      <section>
        <h3>Introduction</h3>
        <p>
          Welcome to [Your Company/Organization Name]'s Privacy Policy. We value
          your privacy and are committed to protecting your personal
          information. This policy explains how we collect, use, and safeguard
          your data.
        </p>
      </section>

      <section>
        <h3>Information We Collect</h3>
        <p>
          We collect information that you provide directly to us, such as when
          you create an account, fill out a form, or contact us. This
          information may include your name, email address, phone number, and
          any other details you provide.
        </p>
      </section>

      <section>
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain our services</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our services</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the service, and for
            marketing and promotional purposes
          </li>
          <li>Process your transactions and manage your orders</li>
          <li>Find and prevent fraud</li>
        </ul>
      </section>

      <section>
        <h3>Sharing Your Information</h3>
        <p>
          We do not share your personal information with third parties except as
          described in this policy or with your consent. We may share
          information with:
        </p>
        <ul>
          <li>Service providers who perform services on our behalf</li>
          <li>
            Law enforcement, government officials, or other third parties when
            we are compelled to do so by law
          </li>
          <li>
            In connection with a merger, acquisition, or sale of all or a
            portion of our assets
          </li>
        </ul>
      </section>

      <section>
        <h3>Security</h3>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information. However, no method of transmission over the
          Internet, or method of electronic storage, is 100% secure, and we
          cannot guarantee absolute security.
        </p>
      </section>
    </div>
  );
};
