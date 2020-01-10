import React from "react";
import { Link } from "react-router-dom";

const AddTenant = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-11 mb-2 ">
          <div className="float-left">
            <ol className="breadcrumb">
              <Link to="/" className="breadcrumb-item">
                Dashboard
              </Link>
              <Link to="/TenantList" className="breadcrumb-item">
                Tenant List
              </Link>
            </ol>
          </div>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Search Tenant</h6>
        </div>
        <div className="card-body">
          <form className="form-group ">
            <div className="card-text">
              <i>
                <b>Personal Information</b>
              </i>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4 ">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Name"
                />
              </div>
              <div className="col-md-4 ">
                <input
                  type="text"
                  className="form-control "
                  placeholder="National Id Number"
                />
              </div>
              <div className="col-md-4 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-2 btn">
                <input type="file" className="form-control " />
              </div>
            </div>
            <br />
            <hr></hr>
            <div className="card-text">
              <i>
                <b>Unit Information</b>
              </i>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-4 ">
                <select className="form-control">
                  <option selected>Choose Property</option>
                  <option>...</option>
                  <option>..</option>
                </select>
              </div>
              <div className="col-md-4 ">
                <select className="form-control">
                  <option selected>
                    Choose Unit Where status is not active
                  </option>
                  <option>...</option>
                  <option>..</option>
                </select>
              </div>
              <div className="col-md-4 ">
                <select className="form-control">
                  <option selected>Choose Location(should have a list)</option>
                  <option>...</option>
                  <option>..</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-4 btn">
                <input type="file" className="form-control " />
              </div>
              <div className="col-md-4 ">
                <select className="form-control">
                  <option selected>Choose Rent</option>
                  <option>...</option>
                  <option>..</option>
                </select>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <div className="btn btn-primary float-right">Submit</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTenant;
