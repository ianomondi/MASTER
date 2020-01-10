import React from "react";

const EditTenantInfo = () => {
  return (
    <>
      {/* form validation needed */}
      <form action="" className="form-group row needs-validation">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <h5 className="card-header">
              Edit Tenant Information-(TenantName ID)
            </h5>
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
                <label for="inputAddress" class="col-sm-4 col-form-label">
                  Address
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="12345-00100"
                  />
                  <div className="invalid-feedback">
                    Please choose a Address.
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPhone" class="col-sm-4 col-form-label">
                  Phone
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="inputPhone"
                    placeholder="07XX-XXX-XXX"
                  />
                  <div className="invalid-feedback">
                    Please choose a phone .
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputID" class="col-sm-4 col-form-label">
                  ID number
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="inputID"
                    placeholder="12345678"
                  />
                  <div className="invalid-feedback">Please choose a id no.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputEmail" class="col-sm-4 col-form-label">
                  Email
                </label>
                <div className="col-sm-8">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="john@mail.com"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputEmail" class="col-sm-4 col-form-label">
                  Select Unit
                </label>
                <div className="col-sm-8">
                  <select id="inputState" class="form-control">
                    <option selected>Choose Unit</option>
                    <option>...</option>
                  </select>

                  <div className="invalid-feedback">Please choose a unit.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Rent Amount
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticAmount"
                    value="12000"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputEmail" class="col-sm-4 col-form-label">
                  Billing Type
                </label>
                <div className="col-sm-8">
                  <select id="inputState" class="form-control">
                    <option selected>Choose Plan</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                    <option>halfly</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmail" className="col-sm-4 col-form-label">
                  Tenant Type
                </label>
                <div className="col-sm-8">
                  <select id="inputState" className="form-control">
                    <option selected>Choose Type</option>
                    <option>Residential</option>
                    <option>PArmanent</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="VATCheck" className="col-sm-4 col-form-label">
                  Open lease?
                </label>

                <div className="col-sm-8">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="lease"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Rent Payable date
                </label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="payableDate" />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Start date
                </label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="startDate" />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label">
                  Rent Deposit
                </label>
                <div class="col-sm-8">
                  <input type="number" class="form-control" id="startDate" />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card">
            <h5 className="card-header">Monthly Billables</h5>
            <div className="card-body">
              <div class="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  Security
                </label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="payableDate"
                  />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  Water
                </label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="startDate"
                  />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  Electricity
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="startDate"
                  />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  Service charge
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="payableDate"
                  />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  Garbage
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="startDate"
                  />
                  <div className="invalid-feedback">Please choose a date.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <h5 className="card-header">Penalties</h5>
            <div className="card-body">
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  Percentage Escalation
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="percentage"
                  />
                  <div className="invalid-feedback">
                    Please choose a percentage.
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-4 col-form-label">
                  Escalation intervals in years
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className="form-control"
                    id="intervals"
                  />
                  <div className="invalid-feedback">
                    Please choose a intervals.
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label for="VATCheck" className="col-sm-4 col-form-label">
                  Penalty
                </label>

                <div className="col-sm-8">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div className="mt-8">
            <button className="btn btn-success mr-8">Save</button>
            <button className="btn btn-info">Cancel</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditTenantInfo;
