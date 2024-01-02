import { quotes } from "/src/assets";

const FeedbackCard = ({ content, name, title,  }) => (
  <div className="flex border-2 border-gray-300 justify-between flex-col px-10 py-12 rounded-[1px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
      {content}
    </p>

    <div className="flex flex-row">
    
      <div className="flex flex-col ml-4">

        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-black">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;
