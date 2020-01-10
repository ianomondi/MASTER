import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
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
                  href="#checkout"
                >
                  Check-0ut Dates
                </a>
                <a
                  class="nav-item nav-link"
                  data-toggle="tab"
                  href="#unitImages"
                >
                  Unit Images
                </a>
                <a
                  class="nav-item nav-link "
                  data-toggle="tab"
                  href="#unitCondition"
                >
                  Unit Conditions
                </a>
                <a
                  class="nav-item nav-link "
                  data-toggle="tab"
                  href="#deductions"
                >
                  Deductions
                </a>
                <a class="nav-item nav-link " data-toggle="tab" href="#refund">
                  Refund
                </a>
              </nav>
              <br></br>

              <div class="tab-content ">
                <div id="checkout" class="tab-pane fade show active ">
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-4 col-form-label">
                      Notice Date
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control text-center"
                        id="noticedate"
                        width="220"
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                      <br></br>
                    </div>
                    <label for="inputName" class="col-sm-4 col-form-label">
                      Notice Date
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control text-center"
                        id="vacationdate"
                        width="220"
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                </div>
                <div id="unitCondition" class="tab-pane fade">
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-4 col-form-label">
                      Description
                    </label>
                    <div className="col-sm-6">
                      <textarea
                        className="form-control"
                        id="checkout"
                        name="editordata"
                        placeholder="Unit description before renting out/leasing"
                      />
                      <div className="invalid-feedback">
                        Please choose a Description.
                      </div>
                    </div>
                  </div>
                </div>
                <div id="unitImages" class="tab-pane fade">
                  <h3>Menu 2</h3>
                  <p>Some content in menu 2.</p>
                </div>
                <div id="deductions" class="tab-pane fade show  ">
                  <div class="form-group row">
                    <div className="col-md-4 row">
                      <label for="category" class="col-sm-4 col-form-label">
                        Category
                      </label>
                      <div className="col-sm-8">
                        <select className="form-control">
                          <option selected>Choose a category</option>
                          <option value="">Notice</option>
                          <option value="">Unit Condition</option>
                        </select>
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="amount" class="col-sm-4 col-form-label">
                        Amount
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control text-center"
                          id="amount"
                          width="220"
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                      <label for="description" class="col-sm-4 col-form-label">
                        Description
                      </label>
                      <div className="col-sm-8">
                        <textarea className="form-control" />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                        <br></br>
                      </div>
                    </div>
                    <div className="col-md-8 row">
                      <table
                        className="table table-stripped"
                        width="100%"
                        cellspacing="0"
                      >
                        <thead>
                          <tr>
                            <th>Numner</th>
                            <th>Ctegory</th>
                            <th>Description</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div id="refund" class="tab-pane fade">
                  <div class="form-group row">
                    <label for="inputName" class="col-sm-4 col-form-label">
                      Deposit
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        disabled
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
                      Notice
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
                      Unit Condition Penalties
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
                      Balance
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        disabled
                        className="form-control"
                        id="inputName"
                        placeholder="Manyi Sabun Eot"
                      />
                      <div className="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="mt-8">
            <button className="btn btn-success ml-8">Add</button>
            <button className="btn btn-info">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
