import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function CategoryDropdown({ selectedCategory, handleCategorySelect }) {
  return (
    <DropdownButton id="dropdown-basic-button" title={"SELECT CATEGORY"}>
      <Dropdown.Item value="All" onSelect={handleCategorySelect}>
        All
      </Dropdown.Item>
      <Dropdown.Item value="Equipment" onSelect={handleCategorySelect}>
        Equipment
      </Dropdown.Item>
      <Dropdown.Item value="Hardware" onSelect={handleCategorySelect}>
        Hardware
      </Dropdown.Item>
      <Dropdown.Item value="Yoga" onSelect={handleCategorySelect}>
        Yoga
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default CategoryDropdown;
