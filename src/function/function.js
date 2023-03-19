import axios from "axios";
const jwt = localStorage.getItem('token')



export const listeuqipmentUser = async()=>
    await axios.get('http://localhost:5000/equipments'); 

