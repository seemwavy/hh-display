import { container } from "/styles/jss/nextjs-material-kit.js";

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  caption: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#ffffff", // Set the color to your desired value
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" // Add text shadow for better visibility
  }
};

export default carouselStyle;