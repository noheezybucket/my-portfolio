import PathBox from "@components/PathBox";
import ProjectsBox from "@components/ProjectsBox";
import TechList from "@components/TechList";
import Hero from "@components/Hero";
import { setRequestLocale } from "next-intl/server";

const Home = ({ params }) => {
  setRequestLocale(params.locale);

  return (
    <div>
      <Hero />

      <section className="site-section">
        <TechList />
      </section>

      <section className="site-section">
        <ProjectsBox />
      </section>

      <section className="site-section">
        <PathBox />
      </section>
    </div>
  );
};

export default Home;
