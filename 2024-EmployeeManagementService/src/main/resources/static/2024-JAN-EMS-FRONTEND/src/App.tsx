
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EmployeeList from './components/EmployeeList'
import Footer from './components/Footer'
import Header from './components/Header'
import Employee from './components/Employee'
import EmployeeView from './components/EmployeeView'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
         <Routes>
             {/* { http://lovalhost:3000} */}
           <Route path='/' element={<EmployeeList/>}> </Route>
              {/* { http://lovalhost:3000/employees} */}
            <Route path='/employees' element={<EmployeeList/>}> </Route>
            <Route path='/add-employee' element={<Employee/>}> </Route>
            <Route path='/view-employee/:id' element={<EmployeeView/>}> </Route>
            <Route path='/edit-employee/:id' element={<Employee/>}> </Route>
        </Routes>
        <Footer/>
       </BrowserRouter>
    </>
  )
}
export default App
