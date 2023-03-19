import axios from "axios";
const jwt = localStorage.getItem('token')


// Use axios to get data from backend 
export const listeuqipmentUser = async()=>
    await axios.get('http://localhost:5000/equipments'); 

