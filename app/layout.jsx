import Footer from "@components/Footer";
import Header from "@components/Header";
import "@styles/globals.css";

export const metadata = {
  title: "Muhamad",
  description: "Discover my job",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="box-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
