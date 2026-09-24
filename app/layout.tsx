import type { Metadata } from "next";
import "./globals.css";
import TabBar from "@/components/TabBar";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import MobileCta from "@/components/MobileCta";

export const metadata: Metadata = {
  title: "EduCrescendo Global™ — Advancing Human Flourishing Through Transformational Education",
  description:
    "EduCrescendo Global™ is an educational transformation ecosystem developing frameworks, assessment systems, leadership models, and solutions that help schools, educators, learners, and communities flourish.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TabBar />
        <div className="page-shell">
          <SiteNav />
          {children}
          <Footer />
        </div>
        <ChatWidget />
        <MobileCta />
      </body>
    </html>
  );
}
