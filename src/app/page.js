import Usp from "../../components/Usp";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
      <div>
        <Navbar />
        <Carousel />
        <Usp />
        <Contact />
      </div>
  );
}
