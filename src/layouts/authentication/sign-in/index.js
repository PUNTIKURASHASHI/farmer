// /**
// =========================================================
// * Material Dashboard 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// import { useState } from "react";
// import {useForm} from "react-hook-form";
// // react-router-dom components
// import { Link } from "react-router-dom";

// // @mui material components
// import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// // @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";
// import MDButton from "components/MDButton";

// // Authentication layout components
// import BasicLayout from "layouts/authentication/components/BasicLayout";

// // Images
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// function Basic() {
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSetRememberMe = () => setRememberMe(!rememberMe);

//   let {register,handleSubmit}=useForm();

//   let onFormSubmit=(obj)=>{
//     console.log(obj);
//   }

//   return (
//     <BasicLayout image={bgImage}>
//       <Card>
//         <MDBox
//           variant="gradient"
//           bgColor="info"
//           borderRadius="lg"
//           coloredShadow="info"
//           mx={2}
//           mt={-3}
//           p={2}
//           mb={1}
//           textAlign="center"
//         >
//           <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
//             Sign in
//           </MDTypography>
//           <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
//             <Grid item xs={2}>
//               <MDTypography component={MuiLink} href="#" variant="body1" color="white">
//                 <FacebookIcon color="inherit" />
//               </MDTypography>
//             </Grid>
//             <Grid item xs={2}>
//               <MDTypography component={MuiLink} href="#" variant="body1" color="white">
//                 <GitHubIcon color="inherit" />
//               </MDTypography>
//             </Grid>
//             <Grid item xs={2}>
//               <MDTypography component={MuiLink} href="#" variant="body1" color="white">
//                 <GoogleIcon color="inherit" />
//               </MDTypography>
//             </Grid>
//           </Grid>
//         </MDBox>
//         <form onSubmit={handleSubmit(onFormSubmit)}>
//         <MDBox pt={4} pb={3} px={3}>
//           <MDBox component="form" role="form">
//           <div className="form-check">
//   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
//   <label className="form-check-label" htmlFor="flexRadioDefault1">
//     Farmer
//   </label>
// </div>
// <div className="form-check">
//   <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
//   <label className="form-check-label" htmlFor="flexRadioDefault2">
//     Customer
//   </label>
// </div>
//             {/* <MDBox mb={2}>
//               <MDInput type="email" label="Email" fullWidth {...register("email")}/>
//             </MDBox>
//             <MDBox mb={2}>
//               <MDInput type="password" label="Password" fullWidth {...register("password")}/>
//             </MDBox> */}



//             <MDBox display="flex" alignItems="center" ml={-1}>
//               <Switch checked={rememberMe} onChange={handleSetRememberMe} />
//               <MDTypography
//                 variant="button"
//                 fontWeight="regular"
//                 color="text"
//                 onClick={handleSetRememberMe}
//                 sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
//               >
//                 &nbsp;&nbsp;Remember me
//               </MDTypography>
//             </MDBox>
//             <MDBox mt={4} mb={1}>
//               <MDButton variant="gradient" color="info" fullWidth type="submit">
//                 sign in
//               </MDButton>
//             </MDBox>
//             <MDBox mt={3} mb={1} textAlign="center">
//               <MDTypography variant="button" color="text">
//                 Don&apos;t have an account?{" "}
//                 <MDTypography
//                   component={Link}
//                   to="/authentication/sign-up"
//                   variant="button"
//                   color="info"
//                   fontWeight="medium"
//                   textGradient
//                 >
//                   Sign up
//                 </MDTypography>
//               </MDTypography>
//             </MDBox>
//           </MDBox>
//         </MDBox>
//         </form>
//       </Card>
//     </BasicLayout>
//   );
// }

// export default Basic;

import {useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import './sign-in.css'
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


function Basic() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    
    const navigate=useNavigate();
    const onFormSubmit=(userCredentialsObject)=>{
         console.log(userCredentialsObject)
        if(userCredentialsObject.userType==="farmer"){
            if(userCredentialsObject.username==="farmer"){
                if(userCredentialsObject.password==="farmer123"){
                   navigate("/tables");
                   console.log(userCredentialsObject)
                }
                else{
                    alert("Invalid password");
                }
            }
            else{
                alert("Invalid username");
            }
        }
        if(userCredentialsObject.userType==="customer"){
          if(userCredentialsObject.username==="customer"){
              if(userCredentialsObject.password==="customer123"){
                 navigate("/Request");
                 console.log(userCredentialsObject)
              }
              else{
                  alert("Invalid password");
              }
          }
          else{
              alert("Invalid username");
          }
      }
  
      }
      


     
  return (
    
    <div className=''>
       
        <div className="container mt-5 zx w-50">
        <div className="card w-50 mx-auto a1">
        <div className="card-body logabc text-dark">
        <h1 className="text-center text-dark b1">Login</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="form-check ">
  <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="farmer" {...register("userType",{required:true})}/>
  <label className="form-check-label text-dark" htmlFor="flexRadioDefault1">
    Farmer
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="customer" {...register("userType",{required:true})}/>
  <label className="form-check-label text-dark" htmlFor="flexRadioDefault2">
    Customer
  </label>
</div>
            <div>
            <label htmlFor="name" className="form-label text-dark" placeholder="Enter username">User name</label>
            <input type="text" id="name" className="form-control" {...register("username",{required:true})} />
            {errors.username?.type==='required'&&<p className='text-danger'>*username is required</p>}
            </div>
            <div>
            <label htmlFor="pass" className="form-label text-dark" placeholder="Enter password">Password</label>
            <input type="password" id="pass" className="form-control" {...register("password",{required:true})}/>
            {errors.password?.type==='required'&&<p className='text-danger'>*password is required</p>}
            </div>
            <div className='text-center mt-3'>
            <button type="submit" className='btn btn-primary text-dark'>login</button>
            </div>
        </form>
        </div>
        </div>
      </div>
      
      </div>
   
  );
}

export default Basic;