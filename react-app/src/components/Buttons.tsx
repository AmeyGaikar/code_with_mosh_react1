import { MouseEvent } from "react";

interface BtnProp {
    children: string;
    onButtonClick: (event: MouseEvent) => void;
    color?: 'primary' | 'secondary' | 'danger'
}

const Buttons = ({children, onButtonClick, color="primary"}: BtnProp) => {
  return (
    <div>
      <button type="button" className={'btn btn-' + color}
      onClick={onButtonClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;