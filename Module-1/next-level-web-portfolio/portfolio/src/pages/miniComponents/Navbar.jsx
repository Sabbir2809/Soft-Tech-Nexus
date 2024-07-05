import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link className="flex items-center" to="/">
              <img className="h-7 w-auto" src="/me.jpg" alt />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium  transition-all duration-200 "
              to="/">
              Home
            </Link>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium  transition-all duration-200 "
              href="#education">
              Education
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium  transition-all duration-200"
              href="#skills">
              Skills
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium  transition-all duration-200 "
              href="#projects">
              Projects
            </a>
            <a
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium  transition-all duration-200 "
              href="#contact">
              Contact Me
            </a>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="https://res.cloudinary.com/dhawyzgll/image/upload/v1719649609/PORTFOLIO%20RESUME/htxsjn1jy0wyuexcqwxw.jpg"
              download="sabbir">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
