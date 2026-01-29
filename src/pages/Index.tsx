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
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "To Order",
              "url": "https://www.toorder.info",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.toorder.info/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "To Order",
              "url": "https://www.toorder.info",
              "logo": "https://www.toorder.info/favicon.ico",
              "description": "تو اوردر | المنصة الشاملة لتوصيل الطعام",
              "sameAs": [
                "https://facebook.com/toorder",
                "https://twitter.com/ToOrder",
                "https://instagram.com/toorder"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "الرئيسية",
                  "item": "https://www.toorder.info"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "المقالات",
                  "item": "https://www.toorder.info/#articles"
                }
              ]
            }
          ])}
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
