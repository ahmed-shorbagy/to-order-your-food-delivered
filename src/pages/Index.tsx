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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "To Order",
            "url": "https://www.toorder.info",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.toorder.info/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
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
