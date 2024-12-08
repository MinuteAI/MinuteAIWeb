import Header from '../header.tsx';
import Footer from '../footer.tsx';
import { TextSection } from '../../components/text-section.tsx';

import SEO from '../../components/helper/seo.tsx';

const GencastTerms = () => {
  return (
    <>
      <SEO
        title={"Gencast - Terms of Use"}
        description={"Minute for AI - Gencast - Generate your tailormade Podcasts"}
      />

      <div className="flex flex-col min-h-screen">
        <Header title="Terms of Use" />

        <main className="flex-grow mx-auto p-8 max-w-2xl overflow-hidden">
          <GencastTermsContent />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default GencastTerms;

const GencastTermsContent: React.FC = () => {
  return (
    <section className="space-y-6 p-4">
      <TextSection title="Introduction">
        <p>
          These Terms and Conditions of Use ("<strong>Terms</strong>") govern your
          access to and use of the mobile application “Gencast” (the "<strong>App</strong>"). ("<strong>we</strong>", "<strong>us</strong>",
          "<strong>our</strong>"). By downloading, installing, accessing, or using the App,
          you ("<strong>User</strong>", "<strong>you</strong>", or "<strong>your</strong>")
          acknowledge that you have read, understood, and agree to be bound by these Terms
          as well as our Privacy Policy, which is incorporated herein by reference. If you
          do not agree with any part of these Terms, you must immediately discontinue use
          of the App.
        </p>
      </TextSection>

      <TextSection title="Eligibility and Account Registration">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Eligibility:</strong> The App is intended for individuals who are at
            least 12 years of age or older. By using the App, you represent and warrant
            that you meet this age requirement and that you have the right, authority,
            and capacity to agree to and abide by these Terms. If you are under the age
            of majority in your jurisdiction, you must have the permission of a parent
            or legal guardian to use the App, and by allowing a minor to use the App,
            such parent or guardian agrees to be bound by these Terms.
          </li>
          <li>
            <strong>Account Registration:</strong> Certain features of the App may require
            you to create an account by providing accurate and current information,
            including your email address. You agree to maintain and promptly
            update any account information to keep it true, accurate, current, and complete.
          </li>
          <li>
            <strong>Account Security:</strong> You are responsible for safeguarding your
            account credentials (such as your password) and for all activities that occur
            under your account. You agree to immediately notify us of any unauthorized
            use of your account or any other security breach. We are not liable for any
            loss or damage arising from your failure to maintain the confidentiality of
            your account information.
          </li>
        </ol>
      </TextSection>

      <TextSection title="Description of the Services">
        <p>
          Gencast provides a platform that allows users to upload their own content,
          which may include PDF documents, text files, images, or scans taken with a
          phone camera ("<strong>User Content</strong>"). The App uses automated
          technologies, including third-party services such as Google Cloud API,
          Firebase Authentication, Firebase Analytics, and the OpenAI API, to generate
          audio content (e.g., a "podcast") based on the User Content you provide.
        </p>
        <p>
          The App is provided for informational and convenience purposes only. We do not
          guarantee that the generated audio content will be accurate, complete,
          up-to-date, or suitable for any particular purpose. Any reliance you place on
          such generated content is strictly at your own risk. We disclaim all liability
          and responsibility for any reliance placed on the generated content, including
          but not limited to the consequences of using it for educational, professional,
          legal, financial, medical, or personal decision-making. We are not responsible
          for any failed exams, poor academic outcomes, or any other adverse results
          arising from your use of or reliance on the generated content.
        </p>
      </TextSection>

      <TextSection title="User Content and Intellectual Property">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>User Content:</strong> By uploading User Content, you represent and
            warrant that you have all necessary rights, licenses, and permissions to use,
            reproduce, distribute, and permit us to process your User Content in
            connection with the Services. You further warrant that your User Content
            does not violate any laws or infringe upon the rights of any third party,
            including but not limited to copyright, trademark, privacy, publicity, or
            other intellectual property or proprietary rights.
          </li>
          <li>
            <strong>No Liability for User Content:</strong> We do not assume any
            responsibility for the content you upload. You understand that all User
            Content uploaded by you or others is solely the responsibility of the person
            from whom it originated. We are not liable for any errors, omissions, or
            illegalities in User Content or any loss or damage of any kind incurred as a
            result of the use of any User Content transmitted via the App.
          </li>
          <li>
            <strong>License Grant to Us:</strong> By uploading User Content to the App,
            you grant us a non-exclusive, worldwide, royalty-free, sublicensable, and
            transferable license to store, process, reproduce, distribute, and display
            your User Content as necessary to provide the Services and generate the
            audio content.
          </li>
          <li>
            <strong>Our Intellectual Property:</strong> The App (excluding User Content),
            including but not limited to all software, text, graphics, images, logos,
            and trademarks, is owned or licensed by us and is protected by applicable
            intellectual property laws. You may not reproduce, modify, distribute,
            create derivative works of, publicly display, or otherwise exploit the App
            or any portion thereof without our prior written permission.
          </li>
        </ol>
      </TextSection>

      <TextSection title="Copyright and DMCA Compliance">
        <p>
          We respect the intellectual property rights of others and expect our users to
          do the same. If you believe that any User Content or other material on the App
          infringes upon a copyright you own or control, you may notify us at&nbsp;
          <a href="mailto:hello@minuteforai.com" className="text-purple-700 underline">hello@minuteforai.com</a>. Upon receipt of a valid notice, we will take
          appropriate steps under applicable law, which may include removing or disabling
          access to the allegedly infringing material.
        </p>
        <p>
          If you believe that your removed content was not infringing, or if you have the
          right to post it, you may send us a counter-notice. We reserve the right to
          terminate accounts of users who repeatedly infringe others’ intellectual
          property rights.
        </p>
      </TextSection>

      <TextSection title="Third-Party Services and Links">
        <p>
          The App integrates with third-party services including, but not limited to,
          Google Cloud APIs, Firebase Authentication, Firebase Analytics, and OpenAI API.
          We do not control these third-party services and disclaim any liability
          associated with them, including their performance, accuracy, availability,
          legality, or any breaches of security or data privacy. Your use of these
          services may be subject to additional terms and conditions imposed by the
          respective third parties.
        </p>
        <p>
          The App may contain links to third-party websites or resources. We do not
          endorse and are not responsible for the content, accuracy, or availability of
          these external sites. Your use of such sites is at your own risk.
        </p>
      </TextSection>

      <TextSection title="Prohibited Conduct">
        <p>
          You agree not to use the App for any unlawful purpose or in violation of
          these Terms. Prohibited activities include, but are not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Uploading or generating content that is infringing, defamatory, obscene, abusive, or otherwise objectionable.</li>
          <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity.</li>
          <li>Accessing or tampering with non-public areas of the App, our computer systems, or the technical delivery systems of our providers.</li>
          <li>Interfering with, disrupting, or attempting to gain unauthorized access to the accounts of other users or the App’s infrastructure.</li>
          <li>Engaging in any activity that violates applicable laws, regulations, or industry standards.</li>
        </ul>
      </TextSection>

      <TextSection title="Disclaimers of Warranties">
        <p>
          The App and Services are provided on an "as is" and "as available" basis without
          any warranties of any kind, express or implied, including but not limited to
          warranties of merchantability, fitness for a particular purpose, non-infringement,
          or course of performance. We do not warrant that the generated content will be
          accurate, complete, reliable, or suitable for your needs.
        </p>
        <p>
          We expressly disclaim any liability arising from your reliance on generated audio
          content for educational, professional, medical, legal, or other decision-making
          purposes. Always seek the advice of qualified professionals where appropriate.
        </p>
      </TextSection>

      <TextSection title="Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, we, our officers, directors,
          employees, agents, and affiliates shall not be liable for any direct, indirect,
          incidental, special, consequential, or punitive damages, including but not limited
          to lost profits, lost data, loss of goodwill, personal injury, property damage, or
          any other losses arising out of or in connection with your access to, use of,
          or inability to use the App or Services, even if we have been advised of the
          possibility of such damages.
        </p>
        <p>
          In jurisdictions that do not allow the exclusion or limitation of liability for
          certain damages, our liability will be limited to the greatest extent permitted by
          law. In any event, our total liability shall not exceed the amount you have paid
          (if any) to use the App in the twelve (12) months preceding the event giving rise
          to such liability.
        </p>
      </TextSection>

      <TextSection title="Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless us and our affiliates, officers,
          directors, employees, and agents from and against any and all claims, demands,
          damages, liabilities, losses, costs, and expenses (including reasonable attorneys’
          fees) arising out of or related to: (a) your use of the App; (b) your violation
          of these Terms or any applicable laws; (c) your infringement or violation of any
          intellectual property, privacy, or other rights of any third party; or (d)
          your User Content.
        </p>
      </TextSection>

      <TextSection title="Termination">
        <p>
          You may discontinue use of the App at any time by deleting your account and
          ceasing all access. We may suspend or terminate your account or access to the App
          at any time, with or without cause or notice, including for any violation of these
          Terms. Upon termination, all rights and licenses granted to you hereunder shall
          immediately cease, and you will remain liable for any amounts due up to the date
          of termination.
        </p>
      </TextSection>

      <TextSection title="Modifications to Terms and Services">
        <p>
          We reserve the right to modify these Terms at any time. Any changes will become
          effective immediately upon posting the revised Terms to the App or notifying you
          by email or other means. Your continued use of the App after such changes have
          been posted constitutes your acceptance of the revised Terms.
        </p>
        <p>
          We may also modify, update, suspend, or discontinue any aspect of the App or
          Services at any time without liability.
        </p>
      </TextSection>

      <TextSection title="Governing Law and Dispute Resolution">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of
          Switzerland, without regard to its conflict of law principles. Any dispute
          arising out of or relating to these Terms, the App, or the Services shall be
          subject to the exclusive jurisdiction of the courts located in Zürich,
          Switzerland, and you hereby consent to such jurisdiction and venue.
        </p>
      </TextSection>

      <TextSection title="Severability and Waiver">
        <p>
          If any provision of these Terms is found to be invalid or unenforceable, that
          provision shall be enforced to the maximum extent permissible and the remaining
          provisions shall remain in full force and effect. Our failure to enforce any right
          or provision of these Terms shall not constitute a waiver of such right or provision.
        </p>
      </TextSection>

      <TextSection title="Entire Agreement">
        <p>
          These Terms, along with our Privacy Policy and any other legal notices published
          by us on the App, constitute the entire agreement between you and us regarding
          your use of the App and Services, and supersede all prior or contemporaneous
          communications, agreements, and understandings, whether written or oral.
        </p>
      </TextSection>

      <TextSection title="Contact Information">
        <p>
          If you have any questions, concerns, or wish to report any issues regarding these
          Terms or the App, please contact us by email at&nbsp;
          <a href="mailto:hello@minuteforai.com" className="text-purple-700 underline">hello@minuteforai.com</a>.
        </p>
      </TextSection>
    </section>
  );
};