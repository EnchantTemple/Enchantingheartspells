import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsAppChat from '@/components/whatsapp-chat';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}
