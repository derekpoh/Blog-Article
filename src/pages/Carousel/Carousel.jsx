import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "@mui/material";


const images = [
  {
    src: "https://wellfemme.com.au/wp-content/uploads/2023/05/needs-help.jpg",
    alt: "Image 1",
  },
  {
    src: "https://wellfemme.com.au/wp-content/uploads/2023/02/iStock-1425587176-1024x628.jpg",
    alt: "Image 2",
  },
  {
    src: "https://wellfemme.com.au/wp-content/uploads/2021/03/iStock-1183376139-1024x576.jpg",
    alt: "Image 3",
  },
];


const PictureCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)"); 
  const mobileLandscape = useMediaQuery("(max-width:1160px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === images.length - 1 ? 0 : prevActiveStep + 1
    );
  };

  return (
    <Carousel
      autoPlay={true}
      animation="fade"
      timeout={20000}
      next={handleNext}
      activeStep={activeStep}
      sx={{
        height: isMobile? "250px" : mobileLandscape ? "450px" : "800px", 
        width:"100%"}}
      indicatorContainerProps={{ style: { display: "none" } }}
      className="homePageCarousel"

    >
      {images.map((image, index) => (

          <img key={index} src={image.src} alt={image.alt} style={{objectFit:"cover", width:"100%", maxHeight:"1000px"}} />

      ))}
    </Carousel>
  );
};

export default PictureCarousel;
