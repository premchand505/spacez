import { Copy } from "lucide-react";
import { CouponOffer } from "../lib/types"; 

type CouponCardProps = {
  offer: CouponOffer;
  onAction: (title: string, action: string) => void;
};

export default function CouponCard({ offer, onAction }: CouponCardProps) {
  const {  title, description, actionText, offerValue } = offer;

  
  const stubColor = "bg-accent text-white";
  const stubWidth = "w-24";

  const handleActionClick = () => {
    onAction(title, actionText);
  };

  return (
    <div className="relative flex mx-4 my-3 h-[200px] bg-[#fff7ed]/50 rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* --- Ticket Stub --- */}
      <div
        className={`relative flex items-center  justify-center ${stubWidth} ${stubColor} p-2`}
      >
        <span
          className='font-bold text-center text-3xl transform -rotate-90'
        >
          {offerValue}
        </span>
        {/* Dashed line */}
        <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-transparent"
             style={{
               backgroundImage: `linear-gradient(to bottom, white 60%, transparent 40%)`,
               backgroundSize: "100% 10px",
             }}
        />
      </div>

      {/* --- Card Content --- */}
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-gray-700 text-lg">{title}</h3>
          
          <button
            onClick={handleActionClick}
            className="flex items-center font-semibold text-accent"
          >
            <Copy className="w-4 h-4 mr-1" />
            {actionText}
          </button>
        </div>

        <p className="text-sm text-gray-600 border-b border-dashed border-gray-300 pb-3">
          {description}
        </p>
        <button
          onClick={() => onAction(title, "Read more")}
          className="text-sm font-medium text-gray-500 pt-3 hover:text-gray-800"
        >
          Read more
        </button>
      </div>
    </div>
  );
}