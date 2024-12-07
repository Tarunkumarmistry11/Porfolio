// TODO: Add a "Download CV" button below the introductory text.
// TODO: Style the button to align with the overall design using Tailwind CSS.
// TODO: Implement functionality for downloading the CV as a PDF when the button is clicked.
// TODO: Consider linking to a hosted PDF file or generating the CV dynamically in the future.

import PropTypes from "prop-types";

//need to add  target = "_self", after href(prop)

const DownloadButton = ({ href,label, classes = "", icon }) => {
  const handleDownload = () => {
    if(href) {
      const link = document.createElement("a");
        link.href = href;
        link.download = href.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };
  if (href) {
    return (
      <button onClick={handleDownload} className={`downloadCv ${classes}`}>
      {label}
      {icon ? (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </button>
    );
  } else {
    return (
      <button className={`btn btn-download ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
};

DownloadButton.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  classes: PropTypes.string,
  icon: PropTypes.string,
};

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
          <h5 className="text-lg md:text-xl text-gray-500">
            Passionate about crafting innovative solutions, I specialize in
            building industry-grade projects from scratch. With a robust skill
            set and hands-on experience in diverse technologies, I turn ideas
            into impactful, real-world applications.
          </h5>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <DownloadButton
            label="Download CV"
            icon="download"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
