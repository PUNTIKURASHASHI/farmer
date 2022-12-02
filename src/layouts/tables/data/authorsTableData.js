/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Customer", accessor: "Customer", width: "45%", align: "left" },
      { Header: "Requirement", accessor: "Requirement", align: "left" },
      { Header: "City", accessor: "City", align: "center" },
      { Header: "Ordered Time", accessor: "Ordered_Time", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        Customer: <Author image={team2} name="Suresh" email="suresh@gmail.com" />,
        Requirement: <Job title="Wheat" description="25kg" />,
        City: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Hyderabad
          </MDTypography>
        ),
        Ordered_Time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10:02 AM - 02/12/22
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="SUPPLIED" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        Customer: <Author image={team3} name="Rajitha" email="rajitha@gmail.com" />,
        Requirement: <Job title="dal" description="15kgs" />,
        City: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Warangal
          </MDTypography>
        ),
        Ordered_Time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11:05 AM - 02/12/22
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="NOT SUPPLIED" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        Customer: <Author image={team4} name="Hari prasad" email="prasad@gmail.com" />,
        Requirement: <Job title="paddy" description="100kgs" />,
        City: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Nizamabad
          </MDTypography>
        ),
        Ordered_Time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11:34 AM - 02/12/22
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="supplied" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        Customer: <Author image={team2} name="sai krishna" email="krishna@gmail.com" />,
        Requirement: <Job title="rajma" description="35kgs" />,
        City: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Nirmal
          </MDTypography>
        ),
        Ordered_Time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            12:11 PM - 02/12/22
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="supplied" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        Customer: <Author image={team3} name="Adithi" email="adithi@gmail.com" />,
        Requirement: <Job title="wheat" description="50kgs" />,
        City: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Jagtial
          </MDTypography>
        ),
        Ordered_Time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            01:27 AM - 02/12/22
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Not supplied" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        Customer: <Author image={team4} name="Rithin" email="rithin@gmail.com" />,
        Requirement: <Job title="cotton" description="50kgs" />,
        City: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Khanapur
          </MDTypography>
        ),
        Ordered_Time: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            02:18 AM - 02/12/22
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Not supplied" color="warning" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
