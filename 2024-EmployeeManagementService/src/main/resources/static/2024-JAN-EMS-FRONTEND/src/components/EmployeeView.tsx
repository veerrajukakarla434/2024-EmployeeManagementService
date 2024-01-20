import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getEmployee } from "../services/EmployeeService";


const EmployeeView = () => {

      const [employee, setEmployee] =useState({
        id:0,
        firstName:"",
        lastName:"",
        email:"",
        skills:""
       });

  const {id} = useParams();

  useEffect(()=>{
     if(id){
        getEmployee(id).then((response)=>{
            setEmployee(response.data);
        }).catch(error=>{
           console.error(error);
        })
     }
  })
      
  return (
    
         <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 offset-md-3">
               <h2 className="text-center m-4">Employee Details</h2>
                <div className="card">
                    <div className="card=header">
                       <ul className="list-group list-group-flush">
                          <li className="list-group-item"><b>Employee ID :</b> {employee.id}</li>
                          <li className="list-group-item"><b>Employee FirstName :</b> {employee.firstName}</li>
                          <li className="list-group-item"><b>Employee LastName :</b> {employee.lastName}</li>
                          <li className="list-group-item"><b>Employee Email :</b> {employee.email}</li>
                          <li className="list-group-item"><b>Employee Skills :</b> {employee.skills}</li>
                       </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2 " to="/" >Back To Home</Link>
              </div>
            </div>
         </div>
  )
}

export default EmployeeView
