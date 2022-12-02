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

// @mui material components
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Driver", accessor: "Driver", width: "30%", align: "left" },
      { Header: "Load", accessor: "Load", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "destination", accessor: "destination", align: "center" },
    ],

    rows: [
      {
        Driver: <Project image={LogoAsana} name="Prashanth" />,
        Load: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            125 Kgs
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            On The Way
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        destination: (
          <MDTypography component="a" href="#" color="text">
            Khanapur
          </MDTypography>
        ),
      },
      {
        Driver: <Project image={logoGithub} name="Radhika" />,
        Load: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            90 Kgs
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Delivered
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        destination: (
          <MDTypography component="a" href="#" color="text">
            Nirmal
          </MDTypography>
        ),
      },
      {
        Driver: <Project image={logoAtlassian} name="Sravan Kumar" />,
        Load: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            150 Kgs
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Canceled
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        destination: (
          <MDTypography component="a" href="#" color="text">
            Mahabubnagar
          </MDTypography>
        ),
      },
      {
        Driver: <Project image={logoSpotify} name="Preethi" />,
        Load: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            120 Kgs
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            On The Way
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        destination: (
          <MDTypography component="a" href="#" color="text">
            Pedhapalli
          </MDTypography>
        ),
      },
      {
        Driver: <Project image={logoSlack} name="Isha" />,
        Load: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            75 Kgs
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Canceled
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
        destination: (
          <MDTypography component="a" href="#" color="text">
            Warangal
          </MDTypography>
        ),
      },
      {
        Driver: <Project image={logoInvesion} name="Rajesh" />,
        Load: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            215 Kgs
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Delivered
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        destination: (
          <MDTypography component="a" href="#" color="text">
            Khammam
          </MDTypography>
        ),
      },
    ],
  };
}
