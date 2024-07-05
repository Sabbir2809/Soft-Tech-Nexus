import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/project/getall`, {
        withCredentials: true,
      });
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);
  return (
    <div>
      <div className="relative mb-12">
        <div className="relative">
          <h1
            className="flex gap-4 items-center sm:text-[2.75rem] 
          md:text-[2rem] lg:text-[2.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-bold"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}>
            My Projects
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
          tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}>
          MY <span className="text-tubeLight-effect font-extrabold">WORK</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {viewAll
          ? projects &&
            projects.map((element) => {
              return (
                <>
                  <Link
                    to={`/project/${element._id}`}
                    key={element._id}
                    className="relative block group border border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 transition duration-300"
                    style={{ minHeight: "250px" }} // Adjust the height for consistency
                  >
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                      className="w-full h-full object-cover group-hover:opacity-75 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                      <p className="text-white text-center w-full p-2 group-hover:text-xl font-bold">
                        {element.title}
                      </p>
                    </div>
                  </Link>
                </>
              );
            })
          : projects &&
            projects.slice(0, 9).map((element) => {
              return (
                <>
                  <Link
                    to={`/project/${element._id}`}
                    key={element._id}
                    className="relative block group border border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 transition duration-300"
                    style={{ minHeight: "250px" }} // Adjust the height for consistency
                  >
                    <img
                      src={element.projectBanner && element.projectBanner.url}
                      alt={element.title}
                      className="w-full h-full object-cover group-hover:opacity-75 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                      <p className="text-white text-center w-full p-2 group-hover:text-xl font-bold">
                        {element.title}
                      </p>
                    </div>
                  </Link>
                </>
              );
            })}
      </div>
      {projects && projects.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
