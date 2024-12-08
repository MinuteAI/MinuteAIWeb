import Header from '../header.tsx';
import Footer from '../footer.tsx';
import downloadFromAppStore from '../../assets/download_from_appstore.svg';

import SEO from '../../components/helper/seo.tsx';

const Home = () => {
  return (
    <>
      <SEO
        title={"Minute for AI"}
        description={"Minute For AI - Gencast - Generate your tailormade Podcasts"}
      />

      <div className="flex flex-col min-h-screen">
        <Header title="Gencast" />

        <main className="flex-grow mx-auto p-8 max-w-2xl overflow-hidden">
          <HomeContent />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;

const HomeContent: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="pt-6">
        <h2 className="text-2xl font-semibold">Generate tailormade Podcasts</h2>
        <p className="text-base pt-3">
          Gencast lets you generate your own tailormade podcasts. You provide the knowledge base about which the podcast should be generated, then set your filters and let the magic work. It is perfect for students and anyone who wants to consume knowledge in an auditive format.
        </p>
      </div>

      <div className="flex flex-col items-start space-y-4">
        <a
          href="https://itunes.apple.com/app/id6738903662"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={downloadFromAppStore}
            alt="Download From App Store"
            className="w-40"
          />
        </a>
      </div>
    </section>
  );
};
