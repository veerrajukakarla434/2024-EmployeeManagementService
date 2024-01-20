import { useEffect, useState } from "react"
import { deleteEmployee, listEmployees } from "../services/EmployeeService"
import { useNavigate } from "react-router-dom"


const EmployeeList = () => {

   const [employee, setEmployees] = useState<any[]>([])

    const navigator = useNavigate();

    useEffect(()=>{
      getAllEmployees();
    }, []);

  function getAllEmployees(){
      listEmployees().then((response)=>{
        setEmployees(response.data);
      }).catch(error=>{
        console.error(error);
      })
     }


   function addEmployee(){
     navigator('/add-employee');
   }

   function viewEmployee(id:any){
    navigator(`/view-employee/${id}`);
  }

  function updateEmployee(id:any){
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id:any){
      deleteEmployee(id).then((response)=>{
         getAllEmployees();
         console.log(response.data);
      }).catch(error=>{
        console.error(error);
      }) 

  }
   

  return (
    <div className="container"> <br></br><br></br>
        <h2 className="text-center"><b>List Of Employee Details</b></h2>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
              <button className="btn btn-primary me-md" onClick={addEmployee}>AddEmployee</button>
            </div><br></br>
         <table className="table table-striped table-bordered"> 
         <thead>
             <tr className="table-secondary">
                <th>ID: </th>
                <th>FirstName: </th>
                <th>Last Name: </th>
                <th>Email: </th>
                <th>Skills: </th>
                <th>Actions </th>
             </tr>
             </thead>
             <tbody>
                 {
                   employee.map(emp=>
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>{emp.skills}</td>
                        <td>
                          <button className="btn btn-info" onClick={()=>viewEmployee(emp.id)}>View</button>
                          <button className="btn btn-primary" onClick={()=>updateEmployee(emp.id)} style={{marginLeft:'10px'}}>Update</button>
                          <button className="btn btn-danger" onClick={()=>removeEmployee(emp.id)} style={{marginLeft:'10px'}}>Delete</button>
                        </td>
                    </tr>)
                 }
             </tbody>  
         </table>
    </div>
  )
}

export default EmployeeList
