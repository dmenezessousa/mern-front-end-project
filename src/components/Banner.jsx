import Carousel from "react-bootstrap/Carousel";
import imageOne from "../images/aot1.jpg";
import imageTwo from "../images/aot2.jpg";
import imageThree from "../images/aot3.jpg";

export default function Banner() {
  return (
    <div>
      <Carousel style={{
        marginTop: "100px",
      }}>
        <Carousel.Item>
          <img className=" w-50" src={imageOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-50 " src={imageTwo} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" w-50 " src={imageThree} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
