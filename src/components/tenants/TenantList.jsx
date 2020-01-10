import React from "react";
import { Link } from "react-router-dom";

const TenantList = () => {
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

          <span>
            <Link
              to="/AddTenant"
              title="Add Tenant"
              className="fa fa-user mr-2  btn btn-primary float-right ml-2"
            >
              Add
            </Link>
          </span>
          <Link to="/">
            <div className="btn btn-success float-right">Back</div>
          </Link>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Search Tenant</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-striped table-hover"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Property Name</th>
                  <th>Tenant Id</th>
                  <th>Unit</th>
                  <th>Tenant Name</th>
                  <th>Phone</th>
                  <th>Entry date</th>
                  <th>Balance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Property Name</th>
                  <th>Tenant Id</th>
                  <th>Unit</th>
                  <th>Tenant Name</th>
                  <th>Phone</th>
                  <th>Entry date</th>
                  <th>Balance</th>
                  <th>Actions</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                  <td>$320,800</td>
                  <td>
                    <i
                      className="fa fa-edit text-warning mr-2"
                      aria-hidden="true"
                      title="Edit"
                    ></i>
                    <Link to="/LeaseUpload">
                      <i
                        className="fa fa-upload text-primary mr-2"
                        aria-hidden="true"
                        title="Upload Lease"
                      ></i>
                    </Link>
                    <Link to="/CheckIn">
                      <i
                        className="fa fa-eye text-success mr-2"
                        aria-hidden="true"
                        title="Check-in Tenant"
                      ></i>
                    </Link>
                    <Link
                      to="/Info"
                      class="fa fa-info text-info mr-2"
                      aria-hidden="true"
                      title="tenant info"
                    ></Link>
                    <Link
                      to="/RenewLease"
                      class="fa fa-sync text-success mr-2"
                      aria-hidden="true"
                      title="Renew Lease"
                    ></Link>
                    <Link to="/Checkout">
                      <i
                        className="fa fa-eye-slash text-secondary mr-2"
                        aria-hidden="true"
                        title="Check-out Tenant"
                      ></i>
                    </Link>
                    <Link to="/Notice">
                      <i
                        className="fa fa-bell text-warning mr-2"
                        aria-hidden="true"
                        title="Issue Vacation Notice"
                      ></i>
                    </Link>
                    <i
                      className="fas fa-trash text-danger mr-2 "
                      aria-hidden="true"
                      title="Delete"
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008/11/28</td>
                  <td>$162,700</td>
                  <td>$320,800</td>
                  <td>
                    <i
                      className="fa fa-edit text-warning mr-2"
                      aria-hidden="true"
                      title="Edit"
                    ></i>
                    <Link to="/LeaseUpload">
                      <i
                        className="fa fa-upload text-primary mr-2"
                        aria-hidden="true"
                        title="Upload Lease"
                      ></i>
                    </Link>
                    <Link to="/CheckIn">
                      <i
                        className="fa fa-eye text-success mr-2"
                        aria-hidden="true"
                        title="Check-in Tenant"
                      ></i>
                    </Link>
                    <Link
                      to="/Info"
                      class="fa fa-info text-info mr-2"
                      aria-hidden="true"
                      title="tenant info"
                    ></Link>
                    <Link
                      to="/RenewLease"
                      class="fa fa-sync text-success mr-2"
                      aria-hidden="true"
                      title="Renew Lease"
                    ></Link>
                    <Link to="/Checkout">
                      <i
                        className="fa fa-eye-slash text-secondary mr-2"
                        aria-hidden="true"
                        title="Check-out Tenant"
                      ></i>
                    </Link>
                    <Link to="/Notice">
                      <i
                        className="fa fa-bell text-warning mr-2"
                        aria-hidden="true"
                        title="Issue Vacation Notice"
                      ></i>
                    </Link>
                    <i
                      className="fas fa-trash text-danger mr-2 "
                      aria-hidden="true"
                      title="Delete"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantList;
