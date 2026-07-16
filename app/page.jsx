import PathBox from "@components/PathBox";
import ProjectsBox from "@components/ProjectsBox";
import TechList from "@components/TechList";
import Hero from "@components/Hero";

const Home = () => {
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
