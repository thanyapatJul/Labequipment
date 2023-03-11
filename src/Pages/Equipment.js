import React ,{useEffect}from 'react'
import CardDisplay from '../components/Card'
import Dropdown from '../components/Dropdown'
import SearchBar from '../components/Searchbar';

function EquipmentPage() {
    // const [equipmentData, setEquipmentData] = useState([]);
  
    // useEffect(() => {
    //   axios.get('/api/equipment')
    //     .then(response => {
    //       setEquipmentData(response.data);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }, []);
return (
    <div className='Equipment_page'>
      <h1>Equipment page</h1>
      <Dropdown></Dropdown>
      <SearchBar></SearchBar>
      {/* {equipmentData.map(equipment => (
        <CardDisplay
          key={equipment.id}
          title={equipment.title}
          description={equipment.description}
          image={equipment.image}
        />
      ))} */}
      <CardDisplay
                key='{equipment.id}'
                title='{equipment.title}'
                description='aaaa'
                image='{equipment.image}'
      />
    </div>
  );
}

export default EquipmentPage;