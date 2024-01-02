const styles = {
    boxWidth: "xl:max-w-[1280px] w-full ",
  
    heading1: "flex justify-start items-center font-poppins font-semibold xs:text-[38px] text-[40px]  xs:leading-[76.8px] leading-[66.8px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[38px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-black leading-[30.8px] text-sm/7 md:text-sm/7 lg:text-sm/7",
  
    paragraph1: "font-poppins font-normal justify-start text-black leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-center ",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  
    fixedNavbar: " border-none top-0 left-0 w-full  z-50 ",
    heroImage: " bg-[url(src/assets/frame2.png)] mr-8 bg-center  ",
  
    heroImages: " bg-[url(src/assets/hero33.svg)] bg-cover bg-center ",
  
    heroFigma: " bg-[url(src/assets/bwindi3.jpg)] absolute bg-cover bg-center ",
  
    bwindiImage: " bg-[url(src/assets/bwindi.jpg)] w-[100%] h-[50%] bg-cover bg-center ",
  
    color: "w-full overflow-hidden bg-gradient-to-r from-[#476930] via-[#86B049] to-[#476930]" ,
  
    body: " bg-[url(src/assets/body.webp)] absolute bg-cover bg-center ",
  };
  
  
  export const layout = {
    section: `bg-white md:flex-row flex-col ${styles.paddingY} ` ,
    sectionReverse: `flex-1 md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionRever: `flex-1 md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: ` ${styles.flexStart} flex-col`,
  
    sectionService: `flex ${styles.flexCenter} flex-col`,
  };
  
  export default styles;
  
  
  /*#E1AD01 #A42E02 */