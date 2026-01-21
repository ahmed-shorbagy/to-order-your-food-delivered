import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>سياسة الخصوصية | تو اوردر</title>
                <meta name="description" content="سياسة الخصوصية الخاصة بتو اوردر" />
            </Helmet>
            <Navbar />
            <main className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-8 text-right font-display">سياسة الخصوصية</h1>
                <div className="prose max-w-none text-right" dir="rtl">
                    <p className="text-lg mb-4">
                        نحن في "تو اوردر" نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">جمع المعلومات</h2>
                    <p className="mb-4">
                        نقوم بجمع المعلومات التي تقدمها لنا عند التسجيل أو تقديم طلب، مثل الاسم والعنوان ورقم الهاتف. نستخدم هذه المعلومات فقط لتقديم خدماتنا وتحسين تجربتك.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">مشاركة البيانات</h2>
                    <p className="mb-4">
                        لا نقوم ببيع أو تأجير بياناتك الشخصية لأطراف ثالثة. قد نشارك بعض المعلومات مع شركاء التوصيل والمطاعم فقط لغرض إتمام طلبك.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">الأمان</h2>
                    <p>
                        نتخذ جميع التدابير الأمنية اللازمة لحماية بياناتك من الوصول غير المصرح به.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
