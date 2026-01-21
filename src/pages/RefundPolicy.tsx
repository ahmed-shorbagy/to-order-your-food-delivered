import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>سياسة الاسترداد والإلغاء | تو اوردر</title>
                <meta name="description" content="سياسة الاسترداد والإلغاء الخاصة بتو اوردر" />
            </Helmet>
            <Navbar />
            <main className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-8 text-right font-display">سياسة الاسترداد والإلغاء</h1>
                <div className="prose max-w-none text-right" dir="rtl">
                    <h2 className="text-2xl font-bold mt-6 mb-4">إلغاء الطلب</h2>
                    <p className="mb-4">
                        يمكنك إلغاء طلبك خلال فترة زمنية قصيرة من تقديمه، طالما لم يبدأ المطعم في تحضيره. يرجى التواصل مع خدمة العملاء فورًا إذا كنت ترغب في الإلغاء.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">الاسترداد</h2>
                    <p className="mb-4">
                        في حالة وجود مشكلة في الطلب (مثل طلب غير صحيح أو تالف)، يرجى التواصل معنا. سنقوم بمراجعة الحالة وقد نقوم بتعويضك أو استرداد المبلغ المدفوع وفقًا لسياساتنا.
                    </p>
                    <h2 className="text-2xl font-bold mt-6 mb-4">التواصل معنا</h2>
                    <p>
                        لأي استفسارات بخصوص الإلغاء أو الاسترداد، يرجى التواصل معنا عبر البريد الإلكتروني toorderegy@gmail.com أو الهاتف +201021087933.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
