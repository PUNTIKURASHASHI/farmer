
import {useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import './Abnormalities.css'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";


function Basic() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    
    const navigate=useNavigate();
    const onFormSubmit=(userCredentialsObject)=>{
         console.log(userCredentialsObject)
        alert("Order Placed")
  
      }
      


     
  return (
   
   
    <DashboardLayout>
    <div className=''>
           <DashboardNavbar />

        <div className="container mt-5 zx w-50">
        <div className="card w-60 mx-auto a1">
        <div className="card-body backabc text-dark">
        <h1 className="text-center text-dark b1">Buy</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
     
            <div>
            <label htmlFor="name" className="form-label text-dark" placeholder="Enter username">User name</label>
            <input type="text" id="name" className="form-control" {...register("username",{required:true})} />
            </div>
            <div>
            <label htmlFor="name" className="form-label text-dark" placeholder="Enter City">city</label>
            <input type="name" id="pass" className="form-control" {...register("City",{required:true})}/>
            </div>
            <div>
            <label htmlFor="name" className="form-label text-dark" placeholder="Crop"> Crop</label>
            <input type="text" id="name" className="form-control" {...register("Crop",{required:true})} />
            </div>
            <div>
            <label htmlFor="name" className="form-label text-dark" placeholder="Enter password">Quantity(in Kg)</label>
            <input type="number" id="pass" className="form-control" {...register("Quantity",{required:true})}/>
            </div>
            <div>
            <label htmlFor="name" className="form-label text-dark" placeholder="Enter password">Phone number</label>
            <input type="tel" id="pass" className="form-control" {...register("phone number",{required:true})}/>
            </div>
            <div className='text-center mt-3'>
            <button type="submit" className='btn btn-primary text-dark'>Order</button>
            </div>
        </form>
        </div>
        </div>
      </div>
      <Footer />

      </div>
      </DashboardLayout>
  );
}

export default Basic;