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
        <title>تو اوردر | توصيل الطعام بسهولة</title>
        <meta
          name="description"
          content="اطلب وجباتك المفضلة وتوصل في دقائق. المنصة الشاملة لعشاق الطعام وأصحاب المطاعم وشركاء التوصيل."
        />
        <meta property="og:title" content="تو اوردر | توصيل الطعام بسهولة" />
        <meta
          property="og:description"
          content="اطلب وجباتك المفضلة وتوصل في دقائق. المنصة الشاملة لعشاق الطعام وأصحاب المطاعم وشركاء التوصيل."
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
