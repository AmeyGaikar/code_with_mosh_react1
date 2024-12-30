import { useState } from "react"

interface TextProp  {
children : string
maxChar?: number
}
const ExpandableText = ({children, maxChar = 100}: TextProp) => {
  const [btn, setBtn] = useState('More');

  const buttonHandler = () => {
    if(btn === 'More') setBtn('Less');
    else setBtn('More');
  }

  if(children.length <= maxChar || btn === 'Less') return <p>{children} <button onClick={buttonHandler}>{btn}</button>  </p>
    const text = children.substring(0, maxChar);
  return <p>{text}... <button onClick={buttonHandler}>{btn}</button></p>

}

export default ExpandableText
