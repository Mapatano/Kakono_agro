import { feedback } from "../constants";
import styles from "/styles";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`bg-white mt-32 ${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full yellow__gradient " />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className= {` text-[#E1AD01] relative z-20 text-[38px] decoration-[#E1AD01]  decoration-8 decoration-dashed ${styles.heading2}`}>
        COMMENTAIRES <br className="sm:block hidden" /> 
      </h2>

  <div className="absolute top-[65%] left-0 transform -translate-y-1/2 w-[305px] h-6 bg-gray-200 z-10 hidden md:block">
  
  </div>



      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
      Le Centre Kakono est une source d'inspiration pour tous ceux qui aspirent à un monde où l'agriculture prospère en harmonie avec la nature
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
