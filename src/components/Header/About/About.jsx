// TODO: Add a "Download CV" button below the introductory text.
// TODO: Style the button to align with the overall design using Tailwind CSS.
// TODO: Implement functionality for downloading the CV as a PDF when the button is clicked.
// TODO: Consider linking to a hosted PDF file or generating the CV dynamically in the future.

const About = () => {
  return (
    <section id="abt-home" className="pt-28 lg:pt-36">
      <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-10 lg:px-30 grid gap-2 items-center">
        <div>
          <h4 className="text-lg md:text-xl text-gray-500">Hi, my name is</h4>
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl">Tarun Kumar Mistry</h1>
        </div>
        <div className="mt-2">
          <h5 className="text-lg md:texl-xl text-gray-500 ">
            Passionate about crafting innovative solutions, I specialize in
            building industry-grade projects from scratch. With a robust skill
            set and hands-on experience in diverse technologies, I turn ideas
            into impactful, real-world applications.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default About;
