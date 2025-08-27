import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happySelector } from "./selectors";

type HTrackerProps = {};

const HTracker: FC<HTrackerProps> = (props) => {
  const happyCount = useSelector(happySelector);
  
  return (
    <div className="bg-green-300">
      <p className="bg-green-500 text-white p-2 rounded">You were happy {happyCount} times</p>
    </div>
  );
};

// HTracker.defaultProps = {};

export default memo(HTracker);
