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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import "bootstrap/dist/css/bootstrap.min.css";
// import {FaSeedling} from "react-icons/fa"
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Our features
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="bullet"
          title="Seed recommandation"
          dateTime="Based on whether and type of soil"
        />
        <TimelineItem
          color="success"
          icon="seeds"
          title="Buy seeds"
          dateTime="You can order requried seeds here."
        />
        <TimelineItem
          color="success"
          icon="seeds"
          title="Suggesting fertilizer"
          dateTime="You can take recommandation of the fertilizer here."
        />
        <TimelineItem
          color="success"
          icon="seeds"
          title="Dectect abnormailty"
          dateTime="You can detect abnormality by just uploading a photo"
        />
        <TimelineItem
          color="success"
          icon=""
          title="Fix price"
          dateTime="Fix the price of your yield and enter the required details"
        />
        <TimelineItem
          color="success"
          icon="seeds"
          title="Suggesting fertilizer"
          dateTime="You can take recommandation of the fertilizer here."
        />
        <TimelineItem
          color="success"
          icon="seeds"
          title="Accept request"
          dateTime="Accept request from the customer"
        />
        <TimelineItem
          color="success"
          icon="seeds"
          title="Transport system"
          dateTime="Choose the transport system"
        />
        <TimelineItem
          color="success"
          icon="seeds"
          title="Deliver"
          dateTime="Deliver the yield to the required location"
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
