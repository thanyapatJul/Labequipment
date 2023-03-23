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
      if (selectedCategory === 'All' && selectedType === 'All') {
        return true; // include all equipment if "All" category is selected
      } 
      else if (selectedCategory === 'All' ) {
        return borrow.type === selectedType; // include all equipment if "All" category is selected
      } 
      else if (selectedType === 'All' ) {
        return borrow.category === selectedCategory; // include all equipment if "All" category is selected
      } 
      else {
        return borrow.type === selectedType && borrow.category === selectedCategory; // only include equipment that matches selected category
      }
    }).filter((borrow) =>
      borrow.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div >
      <div className="Borrow_header ">
        <select value={selectedCategory} onChange={(e) => handleCategorySelect(e.target.value)}>
          <option value='All'>All-cate</option>
          <option value='Textbooks'>Textbooks</option>
          <option value='Course&Reserves'>Course Reserves</option>
          <option value='Technology&Equipment'>Technology Equipment</option>
        </select>
        <select value={selectedType} onChange={(e) => handleTypeSelect(e.target.value)}>
          <option value='All'>All-type</option>
          <option value='Short-Term'>Short-Term</option>
          <option value='Long-Term'>Long-Term</option>
          <option value='In-Library'>In-Library</option>
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
            borrowdate={borrow.b_date}
            returndate={borrow.r_date}
          />
        ))}
      </div>
    </div>
  );
}

export default Borrowing;