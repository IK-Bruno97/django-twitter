import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen bg-gray-700 h-24 w-full rounded-lg box-border font-bold text-white py-0 px-2.5 mb-2.5 flex items-center justify-end" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
