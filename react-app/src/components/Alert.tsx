interface AlertProp {
    children: string
}

const Alert = ({children} : AlertProp) => {
  return (
    <div className="alert alert-primary">
      {children}
    </div>
  )
}

export default Alert
