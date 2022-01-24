import SyncLoader from "react-spinners/SyncLoader";

export default function LoadingIcon({ size, color }) {
  return (
    <div className="loading-icon-container">
      <SyncLoader size={size ? size : 30} color={color ? color : "#153ab3"} />
    </div>
  );
}
