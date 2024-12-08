import Header from '../header.tsx';
import Footer from '../footer.tsx';

import SEO from '../../components/helper/seo.tsx';

const Home = () => {
  return (
    <>
      <SEO
        title={"Minute for AI"}
        description={"Minute For AI - Gencast - Generate your tailormade Podcasts"}
      />

      <div className="flex flex-col min-h-screen">
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default Home;