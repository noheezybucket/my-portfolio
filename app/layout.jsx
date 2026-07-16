import Footer from "@components/Footer";
import Header from "@components/Header";
import SmoothScroll from "@components/SmoothScroll";
import ThemeProvider from "@components/ThemeProvider";
import { Outfit, Syne } from "next/font/google";
import Script from "next/script";
import "@styles/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Gueye — Software Engineer",
  description:
    "Software engineer specializing in WordPress, React and Next.js. 30+ web projects shipped.",
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className={`dark ${outfit.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body className={outfit.className}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <SmoothScroll>
            <Header />
            <main className="box-center pt-4">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
