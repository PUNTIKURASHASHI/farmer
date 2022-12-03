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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Notifications() {
  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      {name}
    </MDTypography>
  );
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <MDBox p={2}>
                <MDTypography variant="h5">Alerts</MDTypography>
              </MDBox>
              <MDBox pt={2} px={2}>
                <MDAlert color="success" dismissible>
                  {alertContent(
                    "[TRANSPORTER] RADHIKA : The 90 Kgs Load was delivered to Nirmal successfully. 3:05 PM"
                  )}
                </MDAlert>
                <MDAlert color="secoundary" dismissible>
                  {alertContent("[CUSTOMER] SURESH : The Quality of Wheat is Excellent. 4:35 PM")}
                </MDAlert>
                <MDAlert color="secoundary" dismissible>
                  {alertContent(
                    "[CUSTOMER] SURESH : The Dal was deliverd on time.And quality is good. 5:02 PM"
                  )}
                </MDAlert>
                <MDAlert color="success" dismissible>
                  {alertContent(
                    "[TRANSPORTER] RAJESH : The 215 Kgs Load was delivered to Khammam successfully. 5:38 PM"
                  )}
                </MDAlert>
                <MDAlert color="warning" dismissible>
                  {alertContent(
                    "[TRANSPORTER] ISHA :The order of 90 Kgs got cancelled by the customer. 6:12 PM"
                  )}
                </MDAlert>
                <MDAlert color="success" dismissible>
                  {alertContent(
                    "[TRANSPORTER] PREETHI : 120 Kgs Load was delivered to Pedhapalli successfully. 6:18 PM"
                  )}
                </MDAlert>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
