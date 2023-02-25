import "./ButtonBox.css";

const ButtonBox = ({ children }) => {
  return <div className="buttonBox grid w-full gap-2.5 grid-rows-5 grid-cols-4">{children}</div>;
};

export default ButtonBox;
