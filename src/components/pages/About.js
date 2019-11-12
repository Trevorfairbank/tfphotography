import React from "react";
import "../pages/About.css";
import profile1 from "../images/Profile_1.JPG";
import profile2 from "../images/Profile_2.JPG";
import profile3 from "../images/Profile_3.JPG";
import {Container} from "reactstrap";

function About() {
  return (
    <div>
      <Container>
      <h1 className="text-center">About Page</h1>
      <img className="profile" src={profile2} alt="Travel Profile"/>
      <img className="profile" src={profile3} alt="Ski Profile"/>
      <img className="profile" src={profile1} alt="Suit Profile"/>
      <p style={{marginTop:"20px", marginLeft:"100px", marginRight:"100px"}}>
        Moments are always fleeting. As a photographer Trevor aims to capture his subjects in their natural setting. He believes this has much more impact and shows their authentic personality.
        <br/><br/>
        Trevor grew up in <strong>Zephyr Cove, Nevada</strong>; Otherwise known as Lake Tahoe. He graduated from <strong>San Diego State University</strong> with a Bachelor’s degree in <strong>Multimedia</strong> and a minor in Business Marketing in 2016. During his college days, he was able to study abroad on Semester At Sea in the Fall of 2013. The ship traveled around the Atlantic Ocean and stopped in fourteen different countries while 700+ students from all over the world took courses and experienced different cultures together. It was through this program that he found his passion and great potential in the field of photography. Four months of constant movement influenced him to keep on traveling and now jumps at the opportunity to go someplace new.​
        <br/><br/>
        In pursuit of furthering his education, in 2019 Trevor took a coding bootcamp at the <strong>University of California San Diego Extension</strong> which taught him technical programming skills in <i>HTML5, CSS3,</i> and <i>Javascript</i> as well as the use of frameworks such as <i>Bootstrap</i> and <i>React</i>.
        <br></br> <br></br>
        He currently resides in Redwood City with his girlfriend Lauren and 14 year-old dog, Baeleigh.
      </p>
      </Container>
    </div>
  );
}

export default About;
