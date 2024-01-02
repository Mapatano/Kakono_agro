import styles from "./style";
import { Navbar, Hero, Apropos, Carroussel, Business, Testimonials, Clients, Footer  } from "./components";



const slides = [

  "./bwindi.jpg",
  "./bwindi2.jpg",
  "./bwindi3.jpg",
  "./bwindi4.jpg",
  "./bwindi6.jpg"

]


const App = () => (


  <div className={` ${styles.color} ` }>
    <div className={` ${styles.paddingX} ${styles.flexCenter} ${styles.fixedNavbar}`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart} `} >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidth}`}>
      <Apropos />
    </div>
</div>




<div className="bg-white relative flex overflow-hidden justify-start h-screen">
<div className=" max-w-lg bg-white ">
<Carroussel autoSlide={true}>
{slides.map((s) => (

<img src={s} />

))

}
</Carroussel>
</div>
</div>





<div className={`bg-white ${styles.paddingX} ${styles.flexCenter}  `}>
      <div className={` ${styles.boxWidth}`}>
      <Business />
    </div>
</div>




<div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidth}`}>
        <Testimonials />
        </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidth}`}>
        <Clients />

      </div>
    </div>


    <div className={`bg-yellow-400 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={` ${styles.boxWidth}`}>
        <Footer />
        </div>
    </div>





    </div>
);

export default App;