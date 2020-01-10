import React from "react";
import { Link } from "react-router-dom";

const RenewLease = () => {
  return (
    <>
      <ol className="breadcrumb">
        <Link to="/AddTenant" className="breadcrumb-item">
          Add Tenant
        </Link>
        <Link to="/RenewLease" className="breadcrumb-item">
          Renew Lease
        </Link>
      </ol>
      <form action="" className="form-group row needs-validation">
        <div className="col-lg-12 mb-4">
          <div className="card">
            <h5 className="card-header">Lease For(Name Unit)</h5>
            <div className="card-body">
              <div class="form-group row">
                <label for="current Date" class="col-sm-4 col-form-label">
                  Current Lease Expiry Date
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    id="currentDate"
                    placeholder="Manyi Sabun Eot"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="Expiry Date" class="col-sm-4 col-form-label">
                  New Lease Expiry Date
                </label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="expirydate" />
                  <div className="invalid-feedback">
                    Please choose a Description.
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="Remarks" class="col-sm-4 col-form-label">
                  Remarks
                </label>
                <div className="col-sm-8">
                  <textarea
                    className="form-control"
                    id="remarks"
                    name="editordata"
                  />
                  <div className="invalid-feedback">
                    Please leave a Remark(s).
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
export default RenewLease;
