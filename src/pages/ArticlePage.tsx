import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getArticleById, Article } from '@/lib/articles';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

// Fallback article for demo
const fallbackArticle: Article = {
  id: '1',
  title: 'كيف يُحدث تو اوردر ثورة في توصيل الطعام',
  content: `
    <p>شهدت صناعة توصيل الطعام تحولاً هائلاً في السنوات الأخيرة، وتو اوردر في طليعة هذه الثورة. منصتنا تسد الفجوة بين العملاء الجائعين وأصحاب المطاعم الموهوبين وشركاء التوصيل المتفانين.</p>
    
    <h2>المشكلة التي حللناها</h2>
    <p>غالباً ما تركت خدمات توصيل الطعام التقليدية طرفاً أو أكثر غير راضٍ. العملاء واجهوا أوقات انتظار طويلة وخيارات محدودة. المطاعم عانت من رسوم عمولة عالية. شركاء التوصيل تعاملوا مع أرباح غير واضحة وجداول غير مرنة.</p>
    
    <h2>حلنا</h2>
    <p>تم بناء تو اوردر من الصفر مع مراعاة جميع الأطراف الثلاثة:</p>
    <ul>
      <li><strong>للعملاء:</strong> تتبع في الوقت الفعلي، اختيارات مطاعم منسقة، وأسعار لا تُضاهى مع برنامج الولاء.</li>
      <li><strong>للمطاعم:</strong> نظام خزينة موحد لأرباح شفافة، إدارة قائمة سهلة، وأدوات تسويق لتنمية أعمالهم.</li>
      <li><strong>للسائقين:</strong> ساعات عمل مرنة، إشعارات فورية، ومدفوعات أسبوعية موثوقة مع حوافز إضافية.</li>
    </ul>
    
    <h2>نظرة للمستقبل</h2>
    <p>نحن نبتكر باستمرار لجعل توصيل الطعام أسرع وأقل تكلفة وأكثر استدامة. من تحسين المسارات بالذكاء الاصطناعي إلى مبادرات التغليف الصديق للبيئة، تو اوردر ملتزم بقيادة الصناعة للأمام.</p>
    
    <p>انضم إلينا في هذه الرحلة. حمّل التطبيق اليوم واختبر الفرق.</p>
  `,
  imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop',
  author: 'سارة أحمد',
  isPublished: true,
  createdAt: new Date('2024-01-15T10:00:00Z'),
  updatedAt: new Date('2024-01-15T10:00:00Z'),
};

function formatDate(date: Date): string {
  return date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      if (!id) return;
      const data = await getArticleById(id);
      setArticle(data || fallbackArticle);
      setLoading(false);
    }
    fetchArticle();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen">
          <div className="container mx-auto container-padding max-w-4xl">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-12 w-3/4 mb-8" />
            <Skeleton className="h-96 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display font-bold text-3xl text-foreground mb-4">
              المقال غير موجود
            </h1>
            <p className="text-muted-foreground mb-8">
              المقال الذي تبحث عنه غير موجود.
            </p>
            <Button onClick={() => navigate('/')} className="gradient-primary text-white">
              العودة للرئيسية
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const readTime = calculateReadTime(article.content);

  return (
    <>
      <Helmet>
        <title>{article.title} | مدونة تو اوردر</title>
        <meta
          name="description"
          content={article.content.replace(/<[^>]*>/g, '').substring(0, 155)}
        />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.content.replace(/<[^>]*>/g, '').substring(0, 155)}
        />
        <meta property="og:image" content={article.imageUrl || ''} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": article.title,
              "image": [article.imageUrl],
              "datePublished": article.createdAt.toISOString(),
              "dateModified": article.updatedAt.toISOString(),
              "author": [{
                "@type": "Person",
                "name": article.author || "To Order Team",
                "url": "https://www.toorder.info"
              }],
              "publisher": {
                "@type": "Organization",
                "name": "تو اوردر | To Order",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.toorder.info/favicon.ico"
                }
              },
              "description": article.content.replace(/<[^>]*>/g, '').substring(0, 155),
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://www.toorder.info/article/${article.id}`
              }
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
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": article.title,
                  "item": `https://www.toorder.info/article/${article.id}`
                }
              ]
            }
          ])}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16 min-h-screen">
        <article className="container mx-auto container-padding max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/#articles"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <ArrowRight className="w-4 h-4" />
              العودة للمقالات
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <time dateTime={article.createdAt.toISOString()} className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.createdAt)}
              </time>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readTime} دقائق قراءة
              </span>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <img
              src={article.imageUrl || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop'}
              alt={article.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-soft-lg"
            />
          </motion.figure>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground text-lg leading-8 text-muted-foreground [&_p]:mb-5 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:font-bold [&_h4]:text-foreground [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:ps-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:ps-6 [&_li]:mb-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_img]:my-6 [&_img]:rounded-2xl [&_blockquote]:border-s-4 [&_blockquote]:border-primary [&_blockquote]:ps-4 [&_blockquote]:italic"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 p-8 rounded-2xl gradient-primary text-center shadow-green-lg"
          >
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              جاهز تجرب تو اوردر؟
            </h3>
            <p className="text-white/90 mb-6">
              حمّل التطبيق واحصل على أول طلب يوصلك في دقائق.
            </p>
            <Link
              to="/#download"
              className="inline-flex items-center justify-center bg-white text-foreground font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
            >
              حمّل الآن
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </>
  );
}
