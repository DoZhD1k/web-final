import Dropdown from "react-bootstrap/Dropdown";

function DropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Shop</Dropdown.Item>
        <Dropdown.Item href="/mens">Men</Dropdown.Item>
        <Dropdown.Item href="/womens">Women</Dropdown.Item>
        <Dropdown.Item href="/kids">Kids</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
