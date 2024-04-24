import Footer from "@components/Footer";
import Header from "@components/Header";
import "@styles/globals.css";

export const metadata = {
  title: "Mouhamad Gueye",
  description: "Discover my job",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
      //     className="bg-gradient-to-r
      // from-background
      // to-gray-900
      // background-animate"
      >
        <Header />
        <main className="box-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
