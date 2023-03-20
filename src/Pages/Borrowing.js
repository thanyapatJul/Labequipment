import React, { useState,useEffect } from 'react';
import CardDisplay from '../components/Card_return';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'
import { listeuqipmentBorrow } from '../function/function';

function Borrowing() {
  const [borrowingData, setborrowingData] = useState([
  ]);
  // backend api list of json
  const loadData=()=>{

    listeuqipmentBorrow()
    .then(res=>{
      console.log(res.data)
      setborrowingData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    loadData();
    console.log(borrowingData); // This will still show the previous value of equipmentData
  }, []);
  
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
          <option value='Equåipment'>Equipment</option>
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