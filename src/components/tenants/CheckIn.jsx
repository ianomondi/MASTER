import React from "react";
import { Link } from "react-router-dom";

const CheckIn = () => {
  return (
    <>
      <ol className="breadcrumb">
        <Link to="/" className="breadcrumb-item">
          Dashboard
        </Link>
        <Link to="/AddTenant" className="breadcrumb-item">
          Add Tenant
        </Link>
        <Link to="/CheckIn" className="breadcrumb-item">
          Check In
        </Link>
      </ol>
      <form action="" className="form-group row needs-validation">
        <div className="col-lg-12 mb-4">
          <div className="card">
            <h5 className="card-header">Tenant Check-In(Name Unit)</h5>
            <div className="card-body">
              <div class="form-group row">
                <label for="inputName" class="col-sm-4 col-form-label">
                  Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Manyi Sabun Eot"
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputName" class="col-sm-4 col-form-label">
                  Description
                </label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    id="checkin"
                    name="editordata"
                  />
                  <div className="invalid-feedback">
                    Please choose a Description.
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputName" class="col-sm-4 col-form-label">
                  Images
                </label>
                <div className="col-sm-8">
                  <input type="file" className="form-control" id="unitImages" />
                  <div className="invalid-feedback">
                    Please choose a Description.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="mt-8">
            <button className="btn btn-success ml-8">Save</button>
            <button className="btn btn-info">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default CheckIn;
