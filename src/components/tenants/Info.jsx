import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <>
      <ol className="breadcrumb">
        <Link to="/" className="breadcrumb-item">
          Dashboard
        </Link>
        <Link to="/AddTenant" className="breadcrumb-item">
          Add Tenant
        </Link>
        <Link to="/CheckOut" className="breadcrumb-item">
          Check Out
        </Link>
      </ol>
      <form action="" className="form-group row needs-validation">
        <div className="col-lg-12 mb-4">
          <div className="card">
            <h5 className="card-header">Tenant Check-Out(Name Unit)</h5>
            <div className="card-body">
              <nav class="nav nav-tabs ">
                <a
                  class="nav-item nav-link active"
                  data-toggle="tab"
                  href="#personalInfo"
                >
                  Personal Info
                </a>
                <a
                  class="nav-item nav-link "
                  data-toggle="tab"
                  href="#documents"
                >
                  Billing
                </a>
                <a
                  class="nav-item nav-link"
                  data-toggle="tab"
                  href="#correspondence"
                >
                  Correspondence
                </a>
                <a
                  class="nav-item nav-link "
                  data-toggle="tab"
                  href="#uploaddocuments"
                >
                  Upload Documents
                </a>
              </nav>
              <br></br>

              <div class="tab-content ">
                <div id="personalInfo" class="tab-pane fade show active ">
                  <div class="form-group row">
                    <div className="col-md-6 row">
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Status
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control r"
                          id="status"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Name
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="name"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Phone
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="phone"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Address
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Unit Number
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="unitNumber"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Property Name
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyName"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                    </div>
                    <div className="col-md-6 row">
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Monthly Rent
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="monthlyrent"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Billing Cycle
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="billingcycle"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Date Created
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="dateCreated"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Total Balance
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="balance"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Total Deposit
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="totalDeposit"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Lease No
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="leaseNo"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Lease Upload Date
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="leaseUploadDate"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="inputName" class="col-sm-4 col-form-label">
                        Handover By
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control "
                          id="handover"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="documents" class="tab-pane fade">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Search Tenant
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-bordered"
                          id="dataTable"
                          width="100%"
                          cellspacing="0"
                        >
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Type</th>
                              <th>Invoice/Receipt No</th>
                              <th>Description</th>
                              <th>Amount</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>Date</th>
                              <th>Type</th>
                              <th>Invoice/Receipt No</th>
                              <th>Description</th>
                              <th>Amount</th>
                              <th>Balance</th>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr>
                              <td>2019/08/08</td>
                              <td>Invoice/Recept</td>
                              <td>2345346</td>
                              <td>Bill Payment:ref no 12345</td>
                              <td>10000</td>
                              <td>2000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="correspondence" class="tab-pane fade">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Search Tenant
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-bordered"
                          id="dataTable"
                          width="100%"
                          cellspacing="0"
                        >
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>type</th>
                              <th>Description</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>Date</th>
                              <th>type</th>
                              <th>Description</th>
                              <th>Action</th>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr>
                              <td>2019/11/28</td>
                              <td>SMS</td>
                              <td>
                                Hello tenantName , Your Account for unit no. 123
                                at propertyName has been invoiced. Ksh.6789
                                being the rent for the month of date. Thank You
                                for your partnership
                              </td>
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
                                <Link to="/Checkout">
                                  <i
                                    className="fa fa-eye-slash text-secondary mr-2"
                                    aria-hidden="true"
                                    title="Check-out Tenant"
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
                </div>
                <div id="deductions" class="tab-pane fade">
                  <h3>Menu 3</h3>
                  <p>Some content in menu 3.</p>
                </div>
                <div id="uploaddocuments" class="tab-pane fade">
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-4 col-form-label">
                      Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Manyi Sabun Eot"
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-4 col-form-label">
                      Billing
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="file"
                        className="form-control"
                        id="documents"
                      />
                      <div className="invalid-feedback">
                        Please choose a file.
                      </div>
                    </div>
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

export default Info;
