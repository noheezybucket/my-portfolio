import Footer from "@components/Footer";
import Header from "@components/Header";
import ThemeProvider from "@components/ThemeProvider";
import Script from "next/script";
import "@styles/globals.css";

export const metadata = {
  title: "Mouhamad Gueye",
  description: "Discover my job",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          <Header />
          <main className="box-center">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
