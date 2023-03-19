import React , {useState,useEffect} from 'react'
import CardDisplay from '../components/Card_user';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Equipment.css';
import { listeuqipmentUser } from '../function/function';

function EquipmentPage() {
  const [equipmentData, setEquipmentData] = useState([

  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const loadData=()=>{

    listeuqipmentUser()
    .then(res=>{
      console.log(res.data)
      setEquipmentData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }
  const [selectedType, setSelectedType] = useState('All');
  
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

      <div className="Equipment_content">
        {filteredEquipmentData.map((equipment) => (
          <div key={equipment.id} className="Card">
            <CardDisplay
              id={equipment.id}
              title={equipment.title}
              type={equipment.type}
              status={equipment.system}
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