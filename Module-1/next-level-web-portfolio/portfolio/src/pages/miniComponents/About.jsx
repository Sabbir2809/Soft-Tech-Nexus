const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center sm:text-[2.75rem] 
          md:text-[2rem] lg:text-[2.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-bold"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}>
          About Me
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5 text-justify">
            <p>
              My name is Md. Sabbir Hossain and I am form Singair, Manikganj. I recently completed
              my Bachelor of Science in Computer Science and Engineering from Daffodil International
              University. During my university, I was highly interested in programming and web
              development. Thats why I explored this field by doing some courses and achieving some
              skills like JavaScript(ES6), React.Js, Redux, and Next.Js. Throughout my studies, I
              have developed a strong foundation in programming and web development, besides all of
              this I have some additional skills like leadership and good communication as well and
              I am a dedicated team player. and I am eager to apply my skills in a professional
              field. I always want to learn new things.
            </p>
          </div>
        </div>
        {/* <p className="tracking-[1px] text-xl"></p> */}
      </div>
    </div>
  );
};

export default About;
