interface ButtonProp {
  children: string;
  onButtonClick: () => void;
}

const Buttons = ({ children, onButtonClick }: ButtonProp) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={onButtonClick}> {children}</button>
    </div>
  );
};

export default Buttons;
