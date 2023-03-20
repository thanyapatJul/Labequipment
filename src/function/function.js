import axios from "axios";
const jwt = localStorage.getItem('token')


// Use axios to get data from backend 
export const listeuqipmentUser = async()=>
    await axios.get('http://localhost:5000/equipments'); 


export const listeuqipmentAdmin = async()=>
    await axios.get('http://localhost:5000/'+localStorage.getItem('sid')+'/admin_equipment',{headers:{authorization:`Bearer ${jwt}`}}); 

export const listeuqipmentBorrow = async()=>
    await axios.get('http://localhost:5000/'+localStorage.getItem('sid')+'/borrowing',{headers:{authorization:`Bearer ${jwt}`}}); 
