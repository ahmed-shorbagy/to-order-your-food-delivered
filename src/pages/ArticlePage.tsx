import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { getArticleById, Article } from '@/lib/supabase';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

// Fallback article for demo
const fallbackArticle: Article = {
  id: '1',
  title: 'How To Order is Revolutionizing Food Delivery',
  content: `
    <p>The food delivery industry has undergone a massive transformation in recent years, and To Order is at the forefront of this revolution. Our platform bridges the gap between hungry customers, talented restaurant owners, and dedicated delivery partners.</p>
    
    <h2>The Problem We Solved</h2>
    <p>Traditional food delivery services often left one or more parties unsatisfied. Customers faced long wait times and limited options. Restaurants struggled with high commission fees. Delivery partners dealt with unclear earnings and inflexible schedules.</p>
    
    <h2>Our Solution</h2>
    <p>To Order was built from the ground up with all three stakeholders in mind:</p>
    <ul>
      <li><strong>For Customers:</strong> Real-time tracking, curated restaurant selections, and unbeatable prices with our loyalty program.</li>
      <li><strong>For Restaurants:</strong> A unified treasury system for transparent earnings, easy menu management, and marketing tools to grow their business.</li>
      <li><strong>For Drivers:</strong> Flexible working hours, instant notifications, and reliable weekly payouts with bonus incentives.</li>
    </ul>
    
    <h2>Looking Ahead</h2>
    <p>We're constantly innovating to make food delivery faster, more affordable, and more sustainable. From AI-powered route optimization to eco-friendly packaging initiatives, To Order is committed to leading the industry forward.</p>
    
    <p>Join us on this journey. Download the app today and experience the difference.</p>
  `,
  image_url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop',
  author: 'Sarah Johnson',
  created_at: '2024-01-15T10:00:00Z',
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
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
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Button onClick={() => navigate('/')} className="gradient-primary text-white">
              Go Back Home
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
        <title>{article.title} | To Order Blog</title>
        <meta
          name="description"
          content={article.content.replace(/<[^>]*>/g, '').substring(0, 155)}
        />
        <meta property="og:title" content={article.title} />
        <meta
          property="og:description"
          content={article.content.replace(/<[^>]*>/g, '').substring(0, 155)}
        />
        <meta property="og:image" content={article.image_url} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16 min-h-screen">
        <article className="container mx-auto container-padding max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/#articles"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
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
              <time dateTime={article.created_at} className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(article.created_at)}
              </time>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readTime} min read
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
              src={article.image_url}
              alt={article.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-soft-lg"
            />
          </motion.figure>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-li:text-muted-foreground"
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
              Ready to experience To Order?
            </h3>
            <p className="text-white/90 mb-6">
              Download the app and get your first order delivered in minutes.
            </p>
            <Link
              to="/#download"
              className="inline-flex items-center justify-center bg-white text-foreground font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
            >
              Download Now
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </>
  );
}
