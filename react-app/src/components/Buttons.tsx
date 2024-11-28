interface ButtonProp {
  children: string
  onBtnClick: () => void
}

const Buttons = ({children, onBtnClick}: ButtonProp) => {
  return (
    <div className="btn btn-primary" onClick={onBtnClick}>
      {children}
    </div>
  )
}

export default Buttons
