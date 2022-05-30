import "./LoadingIcon.scss";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingIcon = ({ color }) => {
  return (
    <div className="loadingIconContainer">
      <SyncLoader color={color || "rgb(7, 179, 179)"} />
    </div>
  );
};

export default LoadingIcon;
