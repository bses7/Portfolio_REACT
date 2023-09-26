import CV from "../assets/CV.pdf";

const downloadCV = () => {
  const cvFilePath = CV;

  const anchor = document.createElement("a");
  anchor.href = cvFilePath;
  anchor.download = "Bishesh(CV).pdf";

  anchor.click();
};

export default downloadCV;
