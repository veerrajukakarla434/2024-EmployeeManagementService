import { useEffect, useState } from "react"
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService"
import { Link, useNavigate, useParams } from "react-router-dom"


const Employee = () => {

     const [firstName, setFirstName]= useState('')
     const [lastName, setLastName]= useState('')
     const [email, setEmail]= useState('')
     const [skills, setSkills]= useState('')

     const {id} = useParams();

     const [errors, setErrors]=useState({
      firstName:"",
      lastName:"",
      email:"",
      skills:"",
     })

     const navigator= useNavigate();
    
     function saveOrUpdateEmployee(e: { preventDefault: () => void }){
       e.preventDefault();
       
       if(validateForm()){
        const employee ={firstName,lastName,email,skills};
        console.log(employee);
 
         if(id){
          updateEmployee(id, employee).then((response)=>{
            console.log(response.data);
            navigator("/employees")
          }).catch((error)=>{
            console.error(error);
          })
         }else{
          createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator("/employees")
          }).catch((error)=>{
            console.error(error);
          })
         }
       }
     }

     useEffect(()=>{
         if(id){
          getEmployee(id).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setSkills(response.data.skills);
          }).catch((error)=>{
            console.error(error);
          })
         }
     
     }, [id])

     function pageTitle(){
         if(id){
           return <h2 className="text-center">Update Employee</h2>
         }else{
          return <h2 className="text-center">Add Employee</h2>
         }
     }

     
     function validateForm(){
         let valid= true;

         const errorsCopy = {...errors};

         if(firstName.trim()){
          errorsCopy.firstName="";
         }else{
          errorsCopy.firstName="FirstName is required";
          valid=false;
         }

         if(lastName.trim()){
          errorsCopy.lastName="";
         }else{
          errorsCopy.lastName="LastName is required";
          valid=false;
         }

         if(email.trim()){
          errorsCopy.email="";
         }else{
          errorsCopy.email="Email is required";
          valid=false;
         }

         if(skills.trim()){
          errorsCopy.skills="";
         }else{
          errorsCopy.skills="Skills is required";
          valid=false;
         }
        
         setErrors(errorsCopy);
         return valid;
     }

    
  return (

    <div className="container">
         <br/>
         <br/>
         <div className="row">
             <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                   pageTitle()
                }
                <div className="card-body">
                   <form>
                     <div className="form-group bm-2">
                       <label className="form-label"> First Name:</label>
                        <input
                         type="text"
                         placeholder="Enter Employee First Name"
                         name="firstName"
                         value={firstName}
                         className={`form-control ${errors.firstName ? 'is-invalid' : ""}`}
                         onChange={(e)=> setFirstName(e.target.value)}
                        ></input>
                        {errors.firstName && (
                          <div className="invalid-feedback">{errors.firstName}</div>
                        )}
                     </div>

                     <div className="form-group bm-2">
                       <label className="form-label"> Last Name:</label>
                        <input
                         type="text"
                         placeholder="Enter Employee Last Name"
                         name="lastName"
                         value={lastName}
                         className={`form-control ${errors.lastName ? 'is-invalid' : ""}`}
                         onChange={(e)=> setLastName(e.target.value)}
                        ></input>
                        {errors.lastName && (
                          <div className="invalid-feedback">{errors.lastName}</div>
                        )}
                     </div>

                     <div className="form-group bm-2">
                       <label className="form-label"> Email:</label>
                        <input
                         type="text"
                         placeholder="Enter Employee Email"
                         name="email"
                         value={email}
                         className={`form-control ${errors.email ? 'is-invalid' : ""}`}
                         onChange={(e)=> setEmail(e.target.value)}
                        ></input>
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                     </div>

                     <div className="form-group bm-2">
                       <label className="form-label"> Skills:</label>
                        <input
                         type="text"
                         placeholder="Enter Employee Skills"
                         name="skills"
                         value={skills}
                         className={`form-control ${errors.skills ? 'is-invalid' : ""}`}
                         onChange={(e)=> setSkills(e.target.value)}
                        ></input>
                        {errors.skills && (
                          <div className="invalid-feedback">{errors.skills}</div>
                        )}
                     </div> <br/>
                     <button className="btn btn-success" onClick={saveOrUpdateEmployee}> Submit</button>
                     <Link className="btn btn-danger mx-2 " to="/" >Cenel</Link>

                   </form>
                </div>
             </div>
          </div>  
    </div>
  )
}

export default Employee
