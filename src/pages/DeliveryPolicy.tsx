import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function DeliveryPolicy() {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>سياسة التوصيل والشحن | تو اوردر</title>
                <meta name="description" content="سياسة التوصيل والشحن الخاصة بتو اوردر" />
            </Helmet>
            <Navbar />
            <main className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-8 text-right font-display">سياسة التوصيل والشحن</h1>
                <div className="prose max-w-none text-right" dir="rtl">
                    <h2 className="text-2xl font-bold mt-6 mb-4">مناطق التوصيل</h2>
                    <p className="mb-4">
                        نقوم بالتوصيل إلى مدينة الشروق، القاهرة، ومناطق مختارة أخرى. يرجى التحقق من توفر الخدمة في منطقتك من خلال التطبيق.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">رسوم التوصيل</h2>
                    <p className="mb-4">
                        تختلف رسوم التوصيل بناءً على المسافة بين المطعم وموقعك. سيتم عرض رسوم التوصيل بوضوح قبل إتمام الطلب.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">وقت التوصيل</h2>
                    <p>
                        نحن نسعى جاهدين لتوصيل طلبك في أسرع وقت ممكن. يعتمد وقت التوصيل المتوقع على وقت تحضير المطعم وحركة المرور.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
