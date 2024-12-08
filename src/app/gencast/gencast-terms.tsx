import Header from '../header.tsx';
import Footer from '../footer.tsx';

import SEO from '../../components/helper/seo.tsx';

const GencastTerms = () => {
  return (
    <>
      <SEO
        title={"Minute For AI"}
        description={"Minute For AI - Gencast - Generate your tailormade Podcasts"}
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
    <section className="space-y-6">
      {/* Introduction */}
      <div className="pt-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-base pt-3">
          Welcome to Gencast. We prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our services.
        </p>
      </div>

      {/* Introduction */}
      <div className="pt-6">
        <h2 className="text-2xl font-semibold">Introduction</h2>
        <p className="text-base pt-3">
          Welcome to Gencast. We prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our services.
        </p>
      </div>
    </section>
  );
};