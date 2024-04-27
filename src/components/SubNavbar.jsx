import Dropdown from "react-bootstrap/Dropdown";
const SubNavbar = () => {
  return (
    <div className="d-flex justify-content-between bg-dark text-light px-4 align-items-center">
      <div className="d-flex align-items-center">
        <h2 className="m-0">TV Shows</h2>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="bg-transparent dropdownSubNavbar">
            Generes
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <i className="bi bi-grid icons mx-2 h5"></i>
        <i className="bi bi-grid-3x3 icons mx-2 h5"></i>
      </div>
    </div>
  );
};
export default SubNavbar;
