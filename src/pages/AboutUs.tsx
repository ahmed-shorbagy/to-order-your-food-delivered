import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>من نحن | تو اوردر</title>
                <meta name="description" content="معلومات عن تو اوردر" />
            </Helmet>
            <Navbar />
            <main className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-8 text-right font-display">من نحن</h1>
                <div className="prose max-w-none text-right" dir="rtl">
                    <p className="text-lg mb-4">
                        نحن منصة "تو اوردر"، المنصة الشاملة لعشاق الطعام وأصحاب المطاعم وشركاء التوصيل.
                    </p>
                    <p className="text-lg mb-4">
                        هدفنا هو توفير تجربة توصيل طعام سهلة وسريعة وموثوقة. نحن نربطك بأفضل المطاعم في منطقتك ونضمن وصول طلبك في أسرع وقت ممكن.
                    </p>
                    <p className="text-lg">
                        نسعى دائمًا لتقديم أفضل خدمة لعملائنا وتوفير خيارات متنوعة تلبي جميع الأذواق.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
