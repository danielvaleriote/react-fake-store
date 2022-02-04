import "./FiltersContainer.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const FiltersContainer = ({ category, onClickHandle, onChangeHandle }) => {
  function handleClick(param) {
    onClickHandle(param);
  }
  function inputChangeHandle(e) {
    onChangeHandle(e);
  }

  return (
    <div className="filters-bar">
      <Dropdown>
        <h4>{category}</h4>
        <Form.Control
          placeholder="type the product name"
          onChange={(e) => inputChangeHandle(e.target)}
        />
        <ButtonGroup>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Sort by :
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: "100%" }}>
            <button
              onClick={() => handleClick("CRESCENT")}
              className="dropdown-item"
            >
              Price: Low to High
            </button>
            <button
              onClick={() => handleClick("DECRESCENT")}
              className="dropdown-item"
            >
              Price: High to Low
            </button>
            <button
              onClick={() => handleClick("RATING")}
              className="dropdown-item"
            >
              Rating
            </button>
          </Dropdown.Menu>
        </ButtonGroup>
      </Dropdown>
    </div>
  );
};

export default FiltersContainer;
