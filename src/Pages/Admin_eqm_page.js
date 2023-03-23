import React, { useState ,useEffect} from 'react';
import CardDisplay from '../components/Admin_eqm_card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/AdminEquipment.css';
import Additem from '../components/AddItem'
import { listeuqipmentAdmin } from '../function/function';

import '../Styles/Fonts.css'
import '../Styles/Page.css'
import '../Styles/Components.css'

function AdminEquipmentPage() {
  const [equipmentData, setEquipmentData] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [selectedType, setSelectedType] = useState('All');

  const loadData=()=>{

    listeuqipmentAdmin()
    .then(res=>{
      console.log(res.data)
      setEquipmentData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(() => {
    loadData();
    console.log(equipmentData); // This will still show the previous value of equipmentData
  }, []);

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

  const filteredEquipmentData = equipmentData.filter((equipment) => {
    if (selectedCategory === 'All' && selectedType === 'All') {
      return true; // include all equipment if "All" category is selected
    } 
    else if (selectedCategory === 'All' ) {
      return equipment.type === selectedType; // include all equipment if "All" category is selected
    } 
    else if (selectedType === 'All' ) {
      return equipment.category === selectedCategory; // include all equipment if "All" category is selected
    } 
    else {
      return equipment.type === selectedType && equipment.category === selectedCategory; // only include equipment that matches selected category
    }
  }).filter((equipment) =>
    equipment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="AdminEquipment_page">
      <div className="AdminEquipment_header">
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
          placeholder="Search equipment..."
        />
      </div>
      <div className='Addsection'>
            <Additem></Additem>
      </div>
      <div className="row row-cols-3 Borrow_content">
        {filteredEquipmentData.map((equipment) => (
          <div key={equipment.id} className="Card">
            <CardDisplay
              id={equipment.id}
              name = {equipment.name}
              title={equipment.title}
              type={equipment.type}
              status={equipment.status}
              department={equipment.department}
              year={equipment.year}
              location={equipment.location}
              image={equipment.image}
              category={equipment.category}
              studentid={equipment.studentid}
              returndate={equipment.expiredate}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminEquipmentPage;