
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useState } from "react";
import MapData from "mapData";
import {Hospitals} from "Hospitals"
import { Table1Data } from "Table1_data";
import { ColdStorage } from "ColdStorage"
// Data
import "./Maps.css";
import Table from "Table";
import Table1 from "Table1";
import Table2 from "Table2"
// Dashboard components

function Maps() {
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
        <div className="search-bar">
          <input
            type="text"
             className="search"
            placeholder="search.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Table data={search(Hospitals)}/>
         <Table1 data={search(Table1Data)}/>
         <Table2 data={search(ColdStorage)}/>
         <MapData data={search(Hospitals,Table1Data,ColdStorage)} />
        
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Maps;
