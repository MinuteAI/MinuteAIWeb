import Header from '../header.tsx';
import Footer from '../footer.tsx';
import { TextSection } from '../../components/text-section.tsx';

import SEO from '../../components/helper/seo.tsx';

const GencastPrivacy = () => {
  return (
    <>
      <SEO
        title={"Gencast - Privacy Policy"}
        description={"Minute for AI - Gencast - Generate your tailormade Podcasts"}
      />

      <div className="flex flex-col min-h-screen">
        <Header title="Privacy Policy" />

        <main className="flex-grow mx-auto p-8 max-w-2xl overflow-hidden">
          <GencastPrivacyContent />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default GencastPrivacy;

const GencastPrivacyContent: React.FC = () => {
  return (
    <section className="space-y-6 p-4">
      <TextSection title="Privacy Policy">
        <p>
          This Privacy Policy ("<strong>Policy</strong>") describes how we ("<strong>App</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") collect,
          use, disclose, store, and protect your personal and non-personal information when you download, access, or use our mobile application “Gencast” (the
          “<strong>App</strong>”). By using the App, you consent to the practices described in this Policy. If you do not agree to the terms herein, please discontinue use of the App.
          We take the privacy and security of your information very seriously. This Policy aims to provide transparency into our data handling procedures, the categories of information
          we collect, how we use and safeguard that information, and the rights and choices available to you. Please read this document carefully.
        </p>
      </TextSection>

      <TextSection title="Scope of This Policy">
        <p>
          This Policy applies to all users of the App, regardless of their location. It covers the collection and use of data provided through the App’s features and functionalities, including:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>User account creation and login, including email addresses and authentication details.</li>
          <li>User-generated content such as PDF documents, text files, images, or camera scans.</li>
          <li>Information collected from external services integrated into the App (e.g., Google Cloud APIs, OpenAI API, Firebase Analytics, Firebase Authentication).</li>
        </ul>
        <p>
          This Policy does not apply to any third-party websites, products, or services that you may access through the App. We encourage you to review the privacy practices of those
          third parties before providing them with any information.
        </p>
      </TextSection>

      <TextSection title="Information We Collect">
        <p><strong>A. Personal Information</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Email Address:</strong> We collect your email address when you create an account or otherwise register for our services. The email address is treated as private
            data and is used to identify your account and provide access to subscription and usage controls.
          </li>
          <li>
            <strong>Authentication Credentials:</strong> While we allow you to set up a password and other authentication credentials for your account, password handling and verification
            are managed entirely by Firebase Authentication. We do not have direct access to your password and rely on Firebase Auth’s secure handling methods. You should refer to
            Firebase’s documentation and privacy terms for details on password security.
          </li>
        </ul>

        <p><strong>B. Non-Personal Information</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Usage Metrics and Subscription Data:</strong> We collect and store data related to the number of API calls or "requests" you make within the App. This information is
            not linked to any personally identifiable data beyond your email. We use this count to enforce subscription limits and determine whether you have remaining calls under your plan.
          </li>
          <li>
            <strong>Device and Technical Information:</strong> We automatically collect information about the device you use to access the App, including device model, operating system,
            and other technical attributes. This data is aggregated and does not identify you individually.
          </li>
          <li>
            <strong>Firebase Analytics Data:</strong> We utilize Firebase Analytics to gain insights into how the App is used, to troubleshoot performance issues, and to enhance
            user experience. Firebase Analytics may collect anonymous usage statistics, event logs, and crash reports. This data does not identify you personally and is used strictly
            for internal analytics, product development, and improving user experience.
          </li>
        </ul>

        <p><strong>C. User-Generated Content</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Uploaded Files and Camera Access:</strong> You may choose to upload PDF documents, text files, images, or use your device camera to create scans. This content is sent
            to our servers for processing and then forwarded to third-party services (e.g., Google Cloud APIs, OpenAI API) to generate the requested audio output ("podcast").
          </li>
          <li>
            <strong>Visibility and Access:</strong> Although these files and scans pass through our infrastructure, we do not view, extract, or otherwise examine the content for personal
            identification. They remain opaque to us in terms of their actual content. We do not link the content you provide to your real name or any other personally identifiable information.
          </li>
        </ul>

        <p><strong>D. Aggregated and De-Identified Data</strong></p>
        <p>
          We may aggregate or de-identify the data we collect so it cannot be used to identify any individual. This aggregated data may be used for product improvement, analytics,
          research, and marketing purposes.
        </p>
      </TextSection>

      <TextSection title="How We Use Your Information">
        <p>
          We use the collected information to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Provide and Improve the Services:</strong> Your email and authentication credentials ensure secure login and account management. We also use non-personal data
            (e.g., usage counts) to determine subscription entitlements and the availability of remaining calls.
          </li>
          <li>
            <strong>Process User Content:</strong> We send your user-generated content to external services such as Google Cloud APIs and OpenAI for processing. This enables the creation
            of automated audio content based on your uploaded materials. We do not read or interpret the content, and it is not tied to your real identity.
          </li>
          <li>
            <strong>Analytics and Performance:</strong> We use Firebase Analytics data to understand usage patterns, improve reliability, enhance performance, and optimize user experience.
          </li>
          <li>
            <strong>Communication:</strong> We may use your email address to send you important notices about the App, such as changes to this Policy, Terms of Use updates, subscription
            changes, or security alerts.
          </li>
          <li>
            <strong>Legal Compliance and Security:</strong> We may use your information to comply with applicable laws, respond to lawful requests by public authorities, protect our
            rights and safety, detect and prevent fraud, and ensure the integrity and security of the App.
          </li>
        </ul>
      </TextSection>

      <TextSection title="Disclosure of Your Information">
        <p>
          We may share or disclose your information under the following circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>With Service Providers:</strong> We use third-party service providers, such as Google Cloud and OpenAI, to process user-generated content. We also rely on Firebase for
            authentication and analytics. These third-party services have their own privacy practices by which you consent your data being processed of any uploaded information and may process your data on our behalf under strict confidentiality and security obligations.
          </li>
          <li>
            <strong>Legal Obligations:</strong> We may disclose your information if required to do so by law, court order, or other legal processes, or if we believe in good faith that
            disclosure is necessary to protect our rights, investigate fraud or security issues, or respond to a government request.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of all or part of our assets, your information may be transferred as part
            of that transaction. In such cases, we will provide notice before your personal data becomes subject to a different privacy policy.
          </li>
        </ul>
        <p>
          We do not sell, rent, or lease your personal information to third parties.
        </p>
      </TextSection>

      <TextSection title="Data Security">
        <p>
          We take the security of your data seriously and implement a variety of measures to protect it. These measures include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Encryption:</strong> We use encryption in transit (e.g., HTTPS) to safeguard information as it travels over the internet.
          </li>
          <li>
            <strong>Access Controls:</strong> Only authorized personnel with a need to know can access certain data. Passwords and authentication are handled by Firebase,
            which employs industry-standard security practices.
          </li>
          <li>
            <strong>Regular Audits:</strong> We periodically review and update our data handling procedures to ensure compliance with best practices and applicable regulations.
          </li>
        </ul>
        <p>
          While we strive to protect your personal information, no method of transmission over the internet or method of electronic storage is completely secure. We cannot guarantee
          absolute security, but we continuously work to improve and maintain robust security.
        </p>
      </TextSection>

      <TextSection title="Data Retention">
        <p>
          We retain your email and other necessary account information for as long as you maintain an account with us. If you delete your account or request its deletion, we will
          remove or anonymize your data, except for information we are legally obligated or permitted to retain for operational or compliance purposes.
        </p>
        <p>
          User-generated content (uploaded documents, images, scans) are processed transiently and not stored indefinitely. Once processing is complete and the related audio has been
          generated, the original content is not retained in a personally identifiable form.
        </p>
      </TextSection>

      <TextSection title="Children’s Privacy">
        <p>
          The App is intended for users who are at least 12 years of age or older. We do not knowingly collect personal information from children under the age of 12. If we learn that we
          have collected personal data from a child under this age threshold without parental consent, we will delete such information promptly.
        </p>
      </TextSection>

      <TextSection title="International Data Transfers">
        <p>
          Our servers, third-party processors (Google Cloud, OpenAI, Firebase), and infrastructure may be located in various countries. By using the App, you consent to the transfer, storage,
          and processing of your information in countries other than your own. We take steps to ensure that transfers of personal data are subject to appropriate safeguards in accordance
          with applicable privacy laws.
        </p>
      </TextSection>

      <TextSection title="Your Rights and Choices">
        <p>
          Depending on the laws of your jurisdiction, you may have certain rights regarding your personal information, such as:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Access and Correction:</strong> You may access and update your personal information by logging into your account and adjusting your settings.
          </li>
          <li>
            <strong>Deletion:</strong> You may request the deletion of your account and associated data. We will honor such requests unless we are required by law or legitimate business
            interests to retain certain information.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> If you have consented to any particular data use, you may withdraw this consent at any time, though doing so may affect your ability to use
            certain features of the App.
          </li>
          <li>
            <strong>Opt-Out of Analytics:</strong> You may disable certain analytics or tracking features by adjusting your device or App settings, though this may impact performance or
            features.
          </li>
        </ul>
        <p>
          Please contact us at the email provided below if you wish to exercise any of these rights. We will respond to your request within a reasonable timeframe and in accordance with
          applicable law.
        </p>
      </TextSection>

      <TextSection title="Third-Party Links and Services">
        <p>
          The App may contain links to third-party websites or resources. We do not control and are not responsible for the content, privacy practices, or policies of these external services.
          We encourage you to review the privacy policies of any third-party sites you visit.
        </p>
      </TextSection>

      <TextSection title="Changes to This Privacy Policy">
        <p>
          We reserve the right to modify this Policy at any time. Any changes will become effective when posted within the App or communicated to you by other means. By continuing to use
          the App after such changes are posted, you agree to the revised terms.
        </p>
      </TextSection>

      <TextSection title="Contact Information">
        <p>
          If you have questions, concerns, or complaints about our privacy practices, please contact us at:
        </p>
        <p><strong>Email:</strong>&nbsp;
          <a href="mailto:hello@minuteforai.com" className="text-purple-700 underline">hello@minuteforai.com</a></p>
        <p>
          We will make every effort to address your concerns promptly and fairly.
        </p>
        <p>
          By using the App, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms.
        </p>
      </TextSection>
    </section>
  );
};