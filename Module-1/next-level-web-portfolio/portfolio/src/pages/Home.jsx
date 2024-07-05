import About from "./miniComponents/About";
import Contact from "./miniComponents/Contact";
import Hero from "./miniComponents/Hero";
import Portfolio from "./miniComponents/Portfolio";
import Skills from "./miniComponents/Skills";
import Timeline from "./miniComponents/Timeline";

const Home = () => {
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Timeline />
      </div>
      <div id="projects">
        <Portfolio />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </article>
  );
};

export default Home;
