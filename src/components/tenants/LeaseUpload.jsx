import React from "react";
import { Link } from "react-router-dom";

const LeaseUpload = () => {
  return (
    <>
      {/* form validation needed */}
      <ol className="breadcrumb">
        <Link to="/" className="breadcrumb-item">
          Dashboard
        </Link>
        <Link to="/AddTenant" className="breadcrumb-item">
          Add Tenant
        </Link>
        <Link to="/LeaseUpload" className="breadcrumb-item">
          Upload Lease
        </Link>
      </ol>
      <form action="" className="form-group row needs-validation align-center">
        <div className="col-lg-12 mb-4">
          <div className="card">
            <h5 className="card-header">Upload Lease-(tenantName unit)</h5>
            <div className="card-body">
              <div class="form-group row">
                <label for="inputName" className="col-sm-4 col-form-label">
                  Lease No
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="leaseNo"
                    placeholder="Manyi Sabun Eot"
                  />
                  <div className="invalid-feedback">
                    Please choose a lease No.
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 col-form-label" for="defaultCheck2">
                  Disabled checkbox
                </label>
                <div className="col-sm-8">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Escalation Ok?
                  </label>
                  <br></br>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Period of Tenancy Ok?
                  </label>
                  <br></br>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    Lease Period Ok?
                  </label>
                  <br></br>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPhone" class="col-sm-4 col-form-label">
                  Name
                </label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="name" />
                  <div className="invalid-feedback">Please choose a Name .</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputID" class="col-sm-4 col-form-label"></label>
                <div className="col-sm-8">
                  <input type="file" className="form-control" id="file" />
                  <div className="invalid-feedback">Please choose a file</div>
                </div>
              </div>
              <br></br>
              <div className="mt-8">
                <button className="btn btn-success ml-8">Save</button>
                <button className="btn btn-info">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LeaseUpload;
