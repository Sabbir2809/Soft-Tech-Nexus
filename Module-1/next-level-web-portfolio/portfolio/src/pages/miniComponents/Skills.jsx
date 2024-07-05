import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import MyApps from "./MyApps";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/skill/getall`, {
        withCredentials: true,
      });
      setSkills(data.skills);
    };
    getMySkills();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col gap-8 sm:gap-12">
        <div className="relative">
          <h1
            className="flex gap-4 items-center sm:text-[2.75rem] 
          md:text-[2rem] lg:text-[2.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-bold"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}>
            Technology SKILLS
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills &&
            skills.map((element) => {
              return (
                <Card
                  className="h-fit p-7 flex flex-col justify-center items-center gap-3"
                  key={element._id}>
                  <img
                    src={element.svg && element.svg.url}
                    alt="skill"
                    className="h-12 sm:h-24 w-auto"
                  />
                  <p className="text-muted-foreground text-center">{element.title}</p>
                </Card>
              );
            })}
        </div>
      </div>
      <MyApps />
    </>
  );
};

export default Skills;
