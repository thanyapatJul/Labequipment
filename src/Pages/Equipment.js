import React, { useState } from 'react';
import CardDisplay from '../components/Card';
import CategoryDropdown from '../components/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Equipment.css';
import Button from 'react-bootstrap/Button';

function EquipmentPage() {
  const [equipmentData, setEquipmentData] = useState([
    {
      id: 1,
      title: 'Laptop',
      type: 'Electronics',
      status: 'Available',
      department: 'IT',
      year: 2022,
      location: 'Room A101',
      studentid: '64XXXXXX',
      image: 'https://picsum.photos/id/1/200/300',
      category: 'Hardware',
    },
    {
      id: 2,
      title: 'Microphone',
      type: 'Audio',
      status: 'Borrowed',
      department: 'Media',
      year: 2021,
      location: 'Recording Studio',
      studentid: '63XXXXXX',
      image: 'https://picsum.photos/id/2/200/300',
      category: 'Hardware',
    },
    {
      id: 3,
      title: 'Treadmill',
      type: 'Fitness',
      status: 'Available',
      department: 'Fitness',
      year: 2021,
      location: 'Gym',
      studentid: '642XXXXXX',
      image: 'https://picsum.photos/id/3/200/300',
      category: 'Equipment',
    },
    {
      id: 4,
      title: 'Yoga mat',
      type: 'Fitness',
      status: 'Available',
      department: 'Fitness',
      year: 2021,
      location: 'Yoga studio',
      studentid: '64X1XXXXX',
      image: 'https://picsum.photos/id/4/200/300',
      category: 'Yoga',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategorySelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const filteredEquipmentData = equipmentData.filter((equipment) => {
    if (selectedCategory === 'All') {
      return true; // include all equipment if "All" category is selected
    } else {
      return equipment.category === selectedCategory; // only include equipment that matches selected category
    }
  }).filter((equipment) =>
    equipment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Equipment_page">
      <div className="Equipment_header">
        <CategoryDropdown
          selectedCategory={selectedCategory}
          handleCategorySelect={handleCategorySelect}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search equipment..."
        />
        <Button>Search</Button>
      </div>

      <div className="row Equipment_content">
        {filteredEquipmentData.map((equipment) => (
          <div key={equipment.id} className="col-lg-4 col-md-6 col-sm-12">
            <CardDisplay
              id={equipment.id}
              title={equipment.title}
              type={equipment.type}
              status={equipment.status}
              department={equipment.department}
              year={equipment.year}
              location={equipment.location}
              image={equipment.image}
              category={equipment.category}
              studentid={equipment.studentid}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EquipmentPage;