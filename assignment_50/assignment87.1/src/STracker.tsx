import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadSelector } from "./selectors";

type STrackerProps = {};

const STracker: FC<STrackerProps> = (props) => {
  const sadCount = useSelector(sadSelector);
  return (
    <div className="bg-red-300">
      <p className="bg-red-500 text-white p-2 rounded">You were sad {sadCount} times</p>
    </div>
  );
};

// STracker.defaultProps = {};

export default memo(STracker);
