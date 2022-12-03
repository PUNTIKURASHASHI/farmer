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
      { Header: "Fertilizer Store", accessor: "Company", width: "45%", align: "left" },
      { Header: "Location", accessor: "Location", align: "left" },
      { Header: "Fertilizer Type", accessor: "status", align: "center" },
      { Header: "Price", accessor: "employed", align: "center" },
      { Header: "Option", accessor: "action", align: "center" },
    ],

    rows: [
      {
        Company: <Author image={team2} name="Bio Factor" email="Rated 9.5/10" />,
        Location: <Job title="NGO'S Colony" description="Siddipet" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Down To Earth Acid Mix
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ₹27.5 / Kg
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Add To Cart" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
      },
      {
        Company: <Author image={team3} name="Swamaai Enterprises" email="Rated 9.5/10" />,
        Location: <Job title="Ameerpet" description="Hyderabad" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Espoma Garden-Tone
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ₹25.0 / Kg
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Add To Cart" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
      },
      {
        Company: <Author image={team4} name="Devagan Agritech" email="Rated 8.5/10" />,
        Location: <Job title="Pragathi Nagar" description="Nizamabad" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Vigoro Tomato and Vegetable
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ₹23.5 / Kg
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Add To Cart" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
      },
      {
        Company: <Author image={team3} name="Kumar Fertilizers & Chemicals" email="Rated 9/10" />,
        Location: <Job title="JK Nagar" description="Nirmal" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Di-ammonium Phosphate
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ₹19.0 / Kg
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Add To Cart" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
      },
      {
        Company: <Author image={team3} name="Richard Store" email="Rated 9.5/10" />,
        Location: <Job title="LB Nagar" description="Hyderbad" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Dr.Earth Bulb Food
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ₹27.0 / Kg
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Add To Cart" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
      },
      {
        Company: <Author image={team4} name="Dream Garden" email="Rated 8.5/10" />,
        Location: <Job title="Simapuri Colony" description="Medak" />,
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Bawa Fertilizer Company
          </MDTypography>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            ₹38.0 / Kg
          </MDTypography>
        ),
        action: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Add To Cart" color="success" variant="gradient" size="lg" />
          </MDBox>
        ),
      },
    ],
  };
}