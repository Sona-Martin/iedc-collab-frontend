import "./Animation.scss";
import bubble8 from "../../assets/bubble_8.svg";
import iedclogo from "../../assets/logo_1.svg";
import googleLogo from "../../assets/google.svg";
import animation from "../../animations/landing.json";
import Lottie from 'react-lottie'

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };
  return (
    <>
     
      <div className="animation_main" >
        
         <div className="anime" data-aos="zoom-in" data-aos-duration="2000"> 
         <div className="title_2"data-aos="zoom-in"data-aos-duration="2000">IEDC MEC COLLAB</div>
        <img src={iedclogo} data-aos="zoom-in"data-aos-duration="2000"alt="" className="iedc_logo" />
         <img src={bubble8} alt="" className="bubble_8" /> 
           <Lottie 
            animationData={animation}
            loop={true}
            autoPlay={true}
            options={defaultOptions} 
          /> 
         
         </div> 
        <button className="signin_btn"data-aos="zoom-in"data-aos-duration="2000"><img src={googleLogo} alt="" className="google_logo" />  Sign in with Google</button>
      </div>
    </>
  );
};
export default Animation;

