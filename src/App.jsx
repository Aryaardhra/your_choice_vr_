import { useState } from "react";
import About from "./components/about/About.jsx";
import Campus from "./components/campus/Campus.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Programs from "./components/programs/Programs.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Title from "./components/title/Title.jsx";
import VideoPlayer from "./components/videoplayer/VideoPlayer.jsx";

const App = () => {

  const [play, setPlay] = useState(false);

  return (
    <>
    <Navbar />
    <Carousel />
    <div className="container">
      <Title subTitle="Our Program" title="What We Offer"/>
    <Programs />
    <About  setPlay={setPlay}/>
    <Title subTitle="Gallery" title="Campus Photos"/>
    <Campus />
    <Title subTitle="TESTIMONIALS" title="What Student Says"/>
    <Testimonials />
    <Title subTitle="CONTACT US" title="Get In Touch"/>
    <Contact />
    </div>
    <Footer />
    <VideoPlayer play={play} setPlay={setPlay} />
    </>
  )
}

export default App;
