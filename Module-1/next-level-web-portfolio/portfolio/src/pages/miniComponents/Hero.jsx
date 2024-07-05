import { Button } from "@/components/ui/button";
import axios from "axios";
import { FacebookIcon, Github, LinkedinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/user/portfolio/me`);
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full">
      <h1
        className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem] 
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4 font-extrabold">
        Md Sabbir Hossain
      </h1>
      <h1
        className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] 
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
        <Typewriter
          words={["FULL-STACK WEB DEVELOPER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="mt-8 text-xl tracking-[2px]">{user?.aboutMe}</p>
      <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3">
        <Link to={user?.githubURL} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <Github />
            </span>
            <span>Github</span>
          </Button>
        </Link>
        <Link to={user?.linkedInURL} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <LinkedinIcon />
            </span>
            <span>LinkedIn </span>
          </Button>
        </Link>
        <Link to={user?.facebookURL} target="_blank">
          <Button className="rounded-[30px] flex items-center gap-2 flex-row">
            <span>
              <FacebookIcon />
            </span>
            <span>Facebook </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
