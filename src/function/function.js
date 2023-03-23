import axios from "axios";
const jwt = localStorage.getItem('token')


// Use axios to get data from backend 
export const listeuqipmentUser = async()=>
    await axios.get('https://backend-sql-yypd53ub4q-et.a.run.app/equipments'); 

export const listeuqipmentAdmin = async()=>
    await axios.get('https://backend-sql-yypd53ub4q-et.a.run.app/'+localStorage.getItem('sid')+'/admin_equipment',{headers:{authorization:`Bearer ${jwt}`}}); 

export const listeuqipmentBorrow = async()=>
    await axios.get('https://backend-sql-yypd53ub4q-et.a.run.app/'+localStorage.getItem('sid')+'/borrowing',{headers:{authorization:`Bearer ${jwt}`}}); 

export const AddItem = async(values)=>
    await axios.post('https://backend-sql-yypd53ub4q-et.a.run.app/'+localStorage.getItem('sid')+'/admin_equipment',values,{headers:{authorization:`Bearer ${jwt}`}}); 

export const delteItem = async(values)=>
    await axios.delete('https://backend-sql-yypd53ub4q-et.a.run.app/'+localStorage.getItem('sid')+'/admin_equipment/delete/'+values,{headers:{authorization:`Bearer ${jwt}`}});

export const loadUser_parth = async(values)=>
    await axios.post('https://backend-sql-yypd53ub4q-et.a.run.app/sid',values,{headers:{authorization:`Bearer ${jwt}`}});

export const delteAdmin = async(values)=>
    await axios.delete('https://backend-sql-yypd53ub4q-et.a.run.app/'+localStorage.getItem('sid')+'/admin_control/delete_admin/'+values,{headers:{authorization:`Bearer ${jwt}`}});