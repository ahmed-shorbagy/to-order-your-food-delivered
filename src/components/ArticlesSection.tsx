import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getArticles, Article } from '@/lib/articles';
import { Skeleton } from '@/components/ui/skeleton';

// Shown while no article is published yet (admin → Marketing → Articles)
const fallbackArticles: Article[] = [
  {
    id: '1',
    title: 'كيف يُحدث تو اوردر ثورة في توصيل الطعام',
    content: 'اكتشف كيف تغير منصتنا طريقة طلب الناس للطعام...',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    author: 'سارة أحمد',
    isPublished: true,
    createdAt: new Date('2024-01-15T10:00:00Z'),
    updatedAt: new Date('2024-01-15T10:00:00Z'),
  },
  {
    id: '2',
    title: '5 نصائح لأصحاب المطاعم لزيادة الطلبات',
    content: 'تعلم أفضل الاستراتيجيات لزيادة مبيعات التوصيل في مطعمك...',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    author: 'محمد علي',
    isPublished: true,
    createdAt: new Date('2024-01-12T14:30:00Z'),
    updatedAt: new Date('2024-01-12T14:30:00Z'),
  },
  {
    id: '3',
    title: 'مستقبل توصيل الطعام: ماذا نتوقع في 2025',
    content: 'استكشف الاتجاهات القادمة التي ستشكل صناعة توصيل الطعام...',
    imageUrl: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop',
    author: 'نورة السعيد',
    isPublished: true,
    createdAt: new Date('2024-01-10T09:15:00Z'),
    updatedAt: new Date('2024-01-10T09:15:00Z'),
  },
];

function formatDate(date: Date): string {
  return date.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/article/${article.id}`} className="block">
        <div className="glass-card overflow-hidden hover-lift">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            <img
              src={article.imageUrl || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop'}
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <time dateTime={article.createdAt.toISOString()} className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(article.createdAt)}
              </time>
            </div>

            {/* Title */}
            <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>

            {/* Read more */}
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
              اقرأ المقال
              <ArrowLeft className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function ArticleSkeleton() {
  return (
    <div className="glass-card overflow-hidden">
      <Skeleton className="h-52 w-full" />
      <div className="p-6 space-y-3">
        <div className="flex gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  );
}

export function ArticlesSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const data = await getArticles();
      setArticles(data.length > 0 ? data : fallbackArticles);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  return (
    <section id="articles" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            أحدث <span className="gradient-text">المقالات</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            تابع آخر الأخبار والنصائح والرؤى من عالم توصيل الطعام.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <ArticleSkeleton key={i} />)
            : articles.slice(0, 6).map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
        </div>

        {/* View All Link */}
        {!loading && articles.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 gradient-primary text-white font-semibold px-8 py-4 rounded-xl shadow-green hover:shadow-green-lg transition-all duration-300 hover:-translate-y-1"
            >
              عرض جميع المقالات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
