import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "/styles";
import frame from '../assets/frame2.png';
import GetStarted from "./GetStarted";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
  
    setAnimate(true);
  }, []);

 
  const fadeIn = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(20px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 700, 
  });

  const [animationProps, setAnimation] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)', // Adjust the initial position as needed
   
  }));

  useEffect(() => {
    setAnimation({
      opacity: 1,
      transform: 'translateY(0)',
      from: { opacity: 0, transform: 'translateX(100px)' }, // Adjust the initial position as needed
   
      delay: 1500, // Adjust the delay as needed
    });
  }, [setAnimation]);






  return (
    <section id="home" className={`flex mt-12 md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`border-hidden flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <animated.h3 style={fadeIn} className="text-2xl text-white font-semibold mt30">
        inspiré par nature et par les principes agroécologiques
        </animated.h3>
  
        <div className="relative">
  <animated.h1 style={fadeIn} className="text-start mt-6 text-4xl md:text-6xl text-[#E1AD01] font-bold relative z-20">
    L'AGROECOLOGIE  
  </animated.h1>
  <div className="absolute top-2/2 left-0 w-[500px] h-8 bg-[#86B049] transform -translate-y-1/2 z-10 hidden md:block">
  
  </div>

  <animated.h1 style={fadeIn} className="mt-4 text-4xl md:text-6xl text-[#E1AD01] font-bold relative z-20">
     POUR UN MONDE PLUS SEIN 
  </animated.h1>
</div>





    



        
        <animated.p style={fadeIn} className={`mt-8 text-black-700 font-semibold text-base md:text-sm lg:text-sm `}>
        Au sein du Centre Agroécologique, nous nous engageons activement dans la promotion de pratiques agricoles durables et respectueuses de l'environnement. Notre mission consiste à offrir des solutions écologiques qui favorisent la santé aussi bien de la terre que de la communauté. En adoptant des approches novatrices et éthiques, notre objectif est de créer un équilibre harmonieux entre la préservation de l'écosystème, la prospérité des agriculteurs, et le bien-être des populations locales.

        </animated.p>
        <animated.button
          style={fadeIn}
          className="bg-[#86B049] mt-4 text-white font-bold py-2 px-4 border-yellow-500 border-2 rounded-full"
        >
          A PROPOS
        </animated.button>


        
      </div>

      <animated.div style={animationProps} className={`flex-1 flex ${styles.flexCenter} mt-4 md:my-5 my-10 relative`}>
     
     <img src={frame} alt="arrow-up" className= {`hidden md:block ${styles.flexCenter}`} />


    </animated.div>


    </section>
  );
};

export default Hero;
