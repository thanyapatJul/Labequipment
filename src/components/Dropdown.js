import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicButtonExample() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Category">
      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">3</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;