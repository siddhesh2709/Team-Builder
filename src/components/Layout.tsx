import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from 'sonner';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Fixed background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(20,20,30,1) 100%)"
        }}
      ></div>

      {/* Static background patterns */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMDIwMjAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBBMzAgMzAgMCAxIDEgMCAzMGEzMCAzMCAwIDAgMSA2MCAweiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTYwIDI0YTI0IDI0IDAgMSAxLTQ4IDAgMjQgMjQgMCAwIDEgNDggMHoiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik02MCAxOGExOCAxOCAwIDEgMS0zNiAwIDE4IDE4IDAgMCAxIDM2IDB6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Colored gradient accents */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16 relative">
          {children}
        </main>
        <Footer />
      </div>

      <Toaster position="top-right" expand={true} richColors />
    </div>
  );
}
