import React , {useState,useEffect} from 'react'
import CardDisplay from '../components/Card_user';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Equipment.css';
import { listeuqipmentUser } from '../function/function';

function EquipmentPage() {

// Dis const use in loaddata it's list of json and display this in Displaycard 
  const [equipmentData, setEquipmentData] = useState([

  ]);

// set category defult as '' 
  const [searchQuery, setSearchQuery] = useState('');

// set category defult as ALL 
  const [selectedCategory, setSelectedCategory] = useState('All');

// axios POST to database and set equipmentData 

// backend api list of json
  const loadData=()=>{

    listeuqipmentUser()
    .then(res=>{
      console.log(res.data)
      setEquipmentData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  //  set selected type default as All 
  const [selectedType, setSelectedType] = useState('All');
  
  //  loading data 
  useEffect(() => {
    loadData();
    console.log(equipmentData); // This will still show the previous value of equipmentData
  }, []);
  

  // Get data from search bar and changes.
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  // Get data from dropdown cate and changes.
  const handleCategorySelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    console.log(selectedCategory);
  };
  // Get data from dropdown type and changes.
  const handleTypeSelect = (selectedType) => {
    setSelectedType(selectedType);
    console.log(selectedType);
  };

  // filter displayed card by dropdown 
  const filteredEquipmentData = equipmentData.filter((equipment) => {
    if (selectedCategory === 'All' && selectedType ==='All') {
      return true; // include all equipment if "All" category is selected
    } else if (selectedCategory === 'All'&& selectedType !=='All'){
      return equipment.type===selectedType; 
    } else if (selectedCategory !== 'All'&& selectedType ==='All'){
      return equipment.category===selectedCategory; 
    }else {
      return equipment.category === selectedCategory;
    }
  }).filter((equipment) => 
    equipment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="Borrow_header">
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
          placeholder="Search equipment..."
        />

      </div>

      <div className="Borrow_content">
        {filteredEquipmentData.map((equipment) => (
          <div key={equipment.id} className="Card">
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
              returndate={equipment.r_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EquipmentPage;