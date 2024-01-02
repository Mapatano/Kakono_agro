import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";
import kakono from "../assets/kakono.jpeg";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import feuille from "../assets/feuille.png";
import line from "../assets/line.png";







const About = () => (
  
<section id="product"className= { `bg-white space-x-5 mb-0 `}> 



<div class="flex items-center justify-between mt-32 md:flex-row flex-col sm:mb-16 relative z-[1] ">

<div class="flex-1 items-center mr-8 justify-between p-1 md:mb-3 sm:mb-3 ">

<p className="text-[38px] underline underline-offset-8 decoration-[#E1AD01]  decoration-8 decoration-dashed text-[#E1AD01] mt-4 font-bold">
  NOTRE HISTOIRE 
</p>




<p className={`${styles.paragraph}  text-gray-500 max-w-[600px] mt-4 `}>

Le centre de promotion de l'agro-
écologie de Kakono est un projet de la
plateforme Diobass dont l’idée remonte à
2018. Il est situé en province du Sud-Kivu,
en territoire de Walungu à quelques 50km
de la ville de Bukavu, sur une ancienne
concession théicole aujourdh’ui reconvertie
en espace de formation et d’échange pour
la promotion de l’agriculture familiale.

<br className="sm:block hidden" /> <br className="sm:block hidden" /> 

Le centre cherche de ce fait une réponse
locale aux problèmes agricoles en
privilégiant la valorisation des savoirs
locaux et les pratiques endogènes,
auxquelles les savoirs techniques extérieurs
ou scientifiques sont greffés.
A ce jour, le Centre reçoit annuellement
entre 80 et 100 élèves des écoles
techniques agricoles, des étudiants des
universités de Bukavu pour des stages. Ce
centre organise des formations pratiques et
dynamiques avec des interactions entre
participants et le milieu où il est implanté.
Il est fortement inspiré par la demarche
Diobass bien décrite dans le livre « Ecole
au Champs »de Hugues Dupriez.
donc en mémoire de cet agronome Belge
ayant contribué fortement à la mise en
place de l’association Diobass, Ecologie et
Société que ce centre porte ce nom.


 

Ce centre est aussi un lieu de partage des
principes qui sous-tendent l’action de
Diobass depuis une vingtaine d’années sur
le continent africain. Il constitue aussi un
milieu vivant qui permet de lire,
comprendre et pratiquer le contenu d’une
série des manuels d’agriculture tropicale
sur la gestion des exploitations familiales,
l’agriculture multi-étagée, la gestion de
l’eau, la gestion des pestes et des
ravageurs, la fertilité des sols, l’intégration
dans un système de production agricole ...


         </p>
</div>



         <div class="flex-1  items-center justify-between ">

<div class="flex-1 bg-gray-200 items-center justify-between p-4 ">
<p className="text-1xl text-gray-500 font-bold mb-4">
NOTRE MISSION
</p>
<p className={`${styles.paragraph} text-black max-w-[600px] mt-1`}>

Le centre de promotion de l'agro-écologie de Kakono,
 issu de la plateforme Diobass, a pour mission d'organiser des formations
en agroécologie. Il vise l'amélioration de la production agricole tout 
en intégrant les dimensions sociale, économique, écologique, et politique.
 Il cherche à apporter une réponse locale aux problèmes agricoles en 
 valorisant les savoirs locaux et les pratiques endogènes.
</p>
</div>


<div class="flex-1 bg-[#86B049] items-center justify-between p-1 ">
<p className="text-1xl text-gray-500 mb-4 font-bold">
NOTRE VISION
</p>

<p className={`${styles.paragraph} text-white max-w-[600px] mt-1`}>

Le centre aspire à être bien plus qu'un lieu de rencontres et de formation.
 Il se positionne comme un espace de recherche-action et d'expérimentation 
 participative. Inspiré par la démarche Diobass, il souhaite être un milieu
  vivant où l'on peut lire, comprendre, et pratiquer les principes de
   l'agro-écologie
</p>



</div>


<div class="flex-1 bg-gray-200 items-center justify-between p-4 ">
<p className="text-1xl text-gray-500 font-bold mb-4">
NOS VALEURS
</p>


<ol class=" list-decimal ml-8 text-black text-1xl max-w-[600px] mt-1">
  <li class="flex"><img src={one} alt="one" className="sm:w-[36px] w-[36px] object-contain" /><b>LA VALORISATION DES SAVOIRS LOCAUX</b></li>
  <li class="flex"><img src={two} alt="two" className="sm:w-[36px] w-[36px] object-contain" /><b> L'INNOVATION AGROECOLOGIQUE </b></li>
  <li class="flex"><img src={three} alt="three" className="sm:w-[36px] w-[36px] object-contain" /><b>L'ECHANGE</b>  </li>

</ol>


</div>

</div>





         </div>









  </section>
);

export default About;
