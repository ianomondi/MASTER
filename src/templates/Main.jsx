import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "../components/tenants/Content";
import TenantList from "../components/tenants/TenantList";
import EditTenantInfo from "../components/tenants/EditTenantInfo";
import LeaseUpload from "../components/tenants/LeaseUpload";
import CheckIn from "../components/tenants/CheckIn";
import Checkout from "../components/tenants/Checkout";
import Info from "../components/tenants/Info";
import Notice from "../components/tenants/Notice";
import Extenants from "../components/tenants/Extenants";
import RenewLease from "../components/tenants/RenewLease";
import PropertyList from "../components/property/PropertyList";
import AddTenant from "../components/tenants/AddTenant";
import AddProperty from "../components/property/AddProperty";
const Main = () => {
  return (
    <div id="wrapper">
      <Sidenav />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Content} />
              <Route path="/TenantList" component={TenantList} />
              <Route path="/AddTenant" component={AddTenant} />
              <Route path="/EditTenantInfo" component={EditTenantInfo} />
              <Route path="/LeaseUpload" component={LeaseUpload} />
              <Route path="/CheckIn" component={CheckIn} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/Info" component={Info} />
              <Route path="/Notice" component={Notice} />
              <Route path="/Extenants" component={Extenants} />
              <Route path="/RenewLease" component={RenewLease} />
              <Route path="/PropertyList" component={PropertyList}></Route>
              <Route path="/AddProperty" component={AddProperty}></Route>
              Info
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;
