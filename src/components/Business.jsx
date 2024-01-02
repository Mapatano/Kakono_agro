import React, { useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import styles, { layout } from '/styles';

import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import body from '../assets/body.webp';


import bwindi from '/bwindi.jpg';
import kakono from '/kakono.jpeg';
import bwindi3 from '/bwindi3.jpg';
import bwindi4 from '/bwindi4.jpg';


const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: config.gentle, // Adjust the spring config for smoothness
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      {children}
    </animated.div>
  );
};

const Business = () => {
  return (
    <section id="features" className={`bg-white ${layout.section}`}>
      <div className={`${layout.sectionService}`}>

      <div className="absolute top-[361%] left-12 transform -translate-y-1/2 w-[450px] h-6 bg-gray-200 z-10 hidden md:block">
  
  </div>

        <h2 className={`text-[#E1AD01] z-10 relative  decoration-[#E1AD01] decoration-8 decoration-dashed ${styles.heading1}`}>
          FORMATIONS OFFERTES <br className="sm:block hidden" />   
        </h2>


      

        <p className={`${styles.paragraph1} text-sm md:text-sm lg:text-sm/7 indent-8 w-full`}>
        
        Explorez notre centre agro-écologique à travers nos formations diversifiées.
        De la <em><b> professionnalisation des jeunes</b></em> à l'apprentissage pratique, chaque programme est conçu pour façonner un avenir agricole durable. Bienvenue dans notre communauté dédiée à l'excellence agricole et à l'innovation écologique.
        Les formations proposées incluent :
        </p>
     

 

<div className={`flex-1 bg-white mt-0 space-x-5`}>
          {/* First Animated Section */}




<div className={`flex mt-32 border-solid flex-col sm:flex-row`} style={{ borderRadius: '70px 0 0 0' }}>
<div className={` ${layout.sectionInfo} `} >
<img src={kakono} alt="arrow-up" className="max-w-[500px] md:max-w-[500px] lg:max-w-[600px] object-contain " />
</div>



<div className={`mt-6 bg-white right-4 shadow-2xl absolute w-11/12 h-[280px] ml-96 mx-auto sm:w-10/12 md:w-10/12 lg:w-[800px]`}>
<h1 className="decoration-[#476930] font-semibold text-center decoration-dashed text-lg lg:text-xl md:text-lg sm:text-sm text-black font-serif italic">Professionnalisation des jeunes en entreprenariat agricole</h1>

<div className="absolute left-[90px] mt-2 transform -translate-y-1/2 w-[80px] h-2 bg-[#86B049] z-10 hidden md:block">
  
  </div>
<p className={`${styles.paragraph} text-gray-500 text-center mt-5 text-xs md:text-sm/7 sm:text-sm/7 lg:text-sm/7`}>
Entant qu’incubateur pour la préparation
des jeunes à l’entreprenariat, le centre
entend organiser des formations
intermittentes sur les pratiques agricoles
durables , avec des moments d’application
des candidats dans leurs exploitations sous
l’accompagnement du personnel du Centre,
et l’appui d’autres personnes ressources
locales , exploitants agricoles privés ou
membres des organisations des producteurs
expérimentés.
<br className="sm:block hidden" /> <br className="sm:block hidden" /> 
</p>
</div>
</div>
        





<div className={`flex mt-32 border-solid flex-col sm:flex-row`} style={{ borderRadius: '70px 0 0 0' }}>
<div className={` ${layout.sectionInfo} mr-96`} >
<img src={bwindi3} alt="arrow-up" className="max-w-[850px] md:max-w-[500px] lg:max-w-[600px] object-contain " />
</div>



<div className={`mt-6 right-4 bg-white shadow-2xl absolute w-[450px] ml-96 sm:w-11/12 md:w-11/12 lg:max-w-[750px] `}>
<h1 className="decoration-[#476930] font-semibold decoration-dashed text-center text-lg lg:text-xl md:text-lg sm:text-sm text-black font-serif decoration-4 font-style: italic">
Apprentissage des jeunes à la pratique agricole </h1>
<div className="absolute left-[125px] mt-2 transform -translate-y-1/2 w-[80px] h-2 bg-[#86B049] z-10 hidden md:block">
  
  </div>

<p className={`${styles.paragraph} text-gray-500  text-center mt-5 text-xs md:text-sm/7 sm:text-sm/7 lg:text-sm/7`}>
Le centre accueille déjà des jeunes des
écoles techniques agricoles et vétérinaires
(ITAV) mais également des étudiants des
facultés d’agronomie de certaines
universités. Il leur offre l’opportunité de
réaliser leurs stages scolaires et
académiques, avec des séances pratiques,
et bientôt des soirées vidéo autour des
expériences locales et extérieures, mais
aussi des séances fortement animées sur
divers sujets liés à l’agroécologie.

Cette
formation intéresse aussi des jeunes
diplômés qui veulent se préparer à un
emploi agricole et qui viennent passer
quelques semaines/mois dans le centre en
fonction de leurs intérêts.

A titre tout à fait indicatif, voici quelques
thématiques abordés :

<ul class="list-disc text-justify pl-6">

<li>Notions de base de l’agroécologie</li>
<li>Production des fruits et légumes
(Établissement d'une pépinière, techniques
de greffage,)</li>
<li>Suppléments alimentaires des grands et
petits ruminants</li>
<li>Conduite d’une ferme avicole</li>
<li>Comment rentabiliser son apiculture</li>
</ul>

<br className="sm:block hidden" /> <br className="sm:block hidden" /> 
</p>
</div>
</div>







<div className={`flex mt-32 border-solid  flex-col sm:flex-row`} >
<div className={` ${layout.sectionInfo}`} >
<img src={bwindi4} alt="arrow-up" className="max-w-[500px] md:max-w-[500px] lg:max-w-[600px] object-contain " />
</div>



<div className={` mt-6 right-4 lg:right-16 sm:mt-16 md:mt-16 lg:mt-6 bg-white shadow-2xl absolute max-w-[700px] h-[430px] lg:h-[380px] ml-96 w-11/12 md:w-11/12 `}>
<h1 className="decoration-[#476930] font-semibold text-center decoration-dashed text-lg lg:text-xl md:text-lg sm:text-sm text-black font-serif decoration-4 font-style: italic">
Organisations des producteurs agricoles
 </h1>

 <div className="absolute left-[137px] mt-2 transform -translate-y-1/2 w-[80px] h-2 bg-[#86B049] z-10 hidden md:block">
</div>


<p className={`${styles.paragraph} text-gray-500 text-center mt-5 text-xs md:text-sm/7 sm:text-sm/7 lg:text-sm/7`}>

Ce centre veut proposer des modèles de
production basés sur une intégration
agricole, respectant les spécificités de
chaque exploitation paysanne. Les
principes de base et les techniques de
production y seront partagés, avec à chaque
fois une logique d’échange et de
valorisation de pratiques ayant produit des
résultats intéressants, soit sur le site du
centre, soit dans les exploitations des
paysannes.
Des expériences de gestion de la fertilité
des sols, de lutte contre les pestes et les
ravageurs ; véritables freins à la production
agricole auront une place importante dans ces formations.
 Bien évidemment,
l’approche systémique et la prise en
compte des 4 dimensions de l’agroécologie
font partie des points d’attention.




<br className="sm:block hidden" /> <br className="sm:block hidden" /> 
</p>
</div>
</div>











































      
   
        </div>
      </div>
      
    </section>
  );
};

export default Business;




































































