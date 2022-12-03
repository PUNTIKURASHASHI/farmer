
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useState } from "react";
import MapData from "mapData";
import {Hospitals} from "Hospitals"
// Data
// Dashboard components

function Abnormalities() {
  const [query, setQuery] = useState("");
  const [filterData, setData] = useState("");
  // console.log(query)
  const search = (data) => {
    const k = data.filter(
      item =>
        item.HospitalName.toLowerCase().includes(query.toLowerCase()) ||
        item.facilities.toLowerCase().includes(query.toLowerCase())
    );
    // setData(k);
    return k;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="container">
       <h1>under development</h1>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Abnormalities;
