import { FC, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sadinc } from "./actions";


type SadIncProps = {};
const SadInc: FC<SadIncProps> = (props) => {

  const dispatch = useDispatch();

  const increaser = () => {
    dispatch(sadinc);
  };

  return (
    <div className="bg-red-300">
      <p>Are You Sad Today?</p>
      <button onClick={increaser} className="bg-red-500 text-white p-2 rounded">Yes</button>
    </div>
  );
};

// SadInc.defaultProps = {};

export default memo(SadInc);
