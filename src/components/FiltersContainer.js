import "./FiltersContainer.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

const FiltersContainer = ({ category, onClickHandle, onChangeHandle }) => {
  function handleClick(param) {
    onClickHandle(param);
  }
  function inputChangeHandle(e) {
    onChangeHandle(e);
  }

  return (
    <div className="filters-bar">
      <Dropdown className="container">
        <h4>{category}</h4>
        <Form.Control
          placeholder="type the product name"
          onChange={(e) => inputChangeHandle(e)}
        />
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Sort by :
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <button
            onClick={() => handleClick("crescent")}
            className="dropdown-item"
          >
            Price: Low to High
          </button>
          <button
            onClick={() => handleClick("decrescent")}
            className="dropdown-item"
          >
            Price: High to Low
          </button>
          <button
            onClick={() => handleClick("rating")}
            className="dropdown-item"
          >
            Rating
          </button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FiltersContainer;
