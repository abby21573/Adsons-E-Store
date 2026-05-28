import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
  cartItemCount?: number;
}

export default function DefaultLayout({ children, cartItemCount = 0 }: DefaultLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-lilac-100 via-lavender-50 to-purple-100 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}