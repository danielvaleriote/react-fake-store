const CurrentCategory = ({ children }) => {
  return (
    <div
      className="currCategoryContainer"
      style={{
        width: "100%",
        backgroundColor: "rgb(7, 179, 179)",
        color: "white",
        textAlign: "center",
        padding: "5px",
      }}
    >
      <h3>{children}</h3>
    </div>
  );
};

export default CurrentCategory;
