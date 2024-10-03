/* eslint-disable react/prop-types */
import "../about/about.css";
import about_img from "../../assets/img/about.png";
import play_icon from "../../assets/img/play-icon.png";

const About = ({setPlay}) => {
  return (
    <>
     <div className="about">
     <div className="about_left">
    <img src={about_img} alt="" className="about_img" />
    <img src={play_icon} alt="" className="play_icon" onClick={()=>{setPlay(true)}}/>
    </div>
    <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows Leaders Today</h2>
        <p>Embark on a transformative educational journey with our universitys comprehensive education programs.
            Our cutting-edge curriculum is designed to empower students with the knowledge,
            skills, and experiences needed to excel in the dynamic field of education.
        </p>
        <p>With a focus on innovation, hands-on learning and personalized mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schoolss and communities.
        </p>
        <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diversse range pf programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
    </div>
     </div>
    </>
  )
}

export default About