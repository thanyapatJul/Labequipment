import React, { useState } from 'react';
import CardDisplay from '../components/Card_return';
import CategoryDropdown from '../components/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'
import Button from 'react-bootstrap/Button';

function Borrowing() {
  const [borrowingData, setborrowingData] = useState([
    {
      id: 1, 
      title: 'Laptop',
      type: 'Electronics',
      status: 'Available',
      image: 'https://picsum.photos/id/1/200/300',
      category: 'Hardware',
    },
    {
      id: 2,
      title: 'Microphone',
      type: 'Audio',
      status: 'Borrowed',
      image: 'https://picsum.photos/id/2/200/300',
      category: 'Hardware',
    },
    {
      id: 3,
      title: 'Treadmill',
      type: 'Fitness',
      status: 'Available',
      image: 'https://picsum.photos/id/3/200/300',
      category: 'Equipment',
    },
    {
      id: 4,
      title: 'Treadmill',
      type: 'Fitness',
      status: 'Available',
      image: 'https://picsum.photos/id/4/200/300',
      category: 'Yoga',
    },
    {
      id: 5,
      title: 'Yoga mat',
      type: 'Fitness',
      status: 'Available',
      image: 'https://picsum.photos/id/4/200/300',
      category: 'Yoga',
    },
    {
      id: 6,
      title: 'Treadmill',
      type: 'Fitness',
      status: 'Available',
      image: 'https://picsum.photos/id/4/200/300',
      category: 'Equipment',
    },
    {
      id: 7,
      title: 'triple',
      type: 'Fitness',
      status: 'Available',
      image: 'https://picsum.photos/id/3/200/300',
      category: 'Equipment',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');


  const [selectedType, setSelectedType] = useState('All');
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategorySelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    console.log(selectedCategory);
  };
  const handleTypeSelect = (selectedType) => {
    setSelectedType(selectedType);
    console.log(selectedType);
  };

  const filteredborrowingData = borrowingData.filter((borrow) => {
    if (selectedCategory === 'All') {
      return true; 
    } else {
      return borrow.category === selectedCategory; 
    }
  }).filter((borrow) =>
    borrow.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div >
      <div className="Borrow_header ">
        <select value={selectedCategory} onChange={(e) => handleCategorySelect(e.target.value)}>
          <option value='All'>All-cate</option>
          <option value='Equipment'>Equipment</option>
          <option value='Yoga'>Yoga</option>
          <option value='Hardware'>Hardware</option>
        </select>
        <select value={selectedType} onChange={(e) => handleTypeSelect(e.target.value)}>
          <option value='All'>All-type</option>
          <option value='Equipment'>Equipment</option>
          <option value='Yoga'>Yoga</option>
          <option value='Hardware'>Hardware</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Borrowing..."
        />

      </div>

      <div className="row row-cols-3 Borrow_content" >
        {filteredborrowingData.map((borrow) => (
          <CardDisplay
            key={borrow.id}
            id={borrow.id}
            title={borrow.title}
            type={borrow.type}
            status={borrow.status}
            image={borrow.image}
            category={borrow.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Borrowing;