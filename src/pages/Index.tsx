import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ArticlesSection } from '@/components/ArticlesSection';
import { DownloadSection } from '@/components/DownloadSection';
import { Footer } from '@/components/Footer';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>To Order | Food Delivery Made Simple</title>
        <meta
          name="description"
          content="Order your favorite meals delivered in minutes. The all-in-one platform for food lovers, restaurant owners, and delivery partners."
        />
        <meta property="og:title" content="To Order | Food Delivery Made Simple" />
        <meta
          property="og:description"
          content="Order your favorite meals delivered in minutes. The all-in-one platform for food lovers, restaurant owners, and delivery partners."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ArticlesSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
