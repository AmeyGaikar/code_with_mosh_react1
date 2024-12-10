import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

interface ButtonProp {
  onLike: () => void;
}

const Like = ({ onLike }: ButtonProp) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const toggleLike = () => {
    setLikeStatus(!likeStatus);
  };
  if (likeStatus)
    return <AiFillHeart onClick={toggleLike} color="red" size={40} />;

  return <CiHeart size={40} onClick={toggleLike} />;
};

export default Like;
