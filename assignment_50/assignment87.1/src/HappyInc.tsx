import { FC, memo } from "react";
import {useDispatch} from "react-redux";
import { happyinc } from "./actions";
type HappyIncProps = {};

const HappyInc: FC<HappyIncProps> = (props) => {

  const dispatch = useDispatch();

  const increaser = () => {
    dispatch(happyinc);
  }
  return (
    <div className="bg-green-300">
      <p>Are You Happy Today?</p>
      <button onClick={increaser} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Yes</button>
    </div>
  );
};

// HappyInc.defaultProps = {};

export default memo(HappyInc);
