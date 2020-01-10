import React from "react";
import { Link } from "react-router-dom";

const AddProperty = () => {
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
                <b>Basic Information</b>
              </i>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 ">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Property Name"
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Property Location"
                />
              </div>
            </div>
            <br />
            <br />
            <hr></hr>
            <div className="card-text">
              <i>
                <b>Property Information</b>
              </i>
            </div>
            <br></br>
            <div className="row">
              <div className="col-md-4  ">
                <div>
                  <input
                    type="radio"
                    id="rent"
                    className="form-check form-check-inline"
                    value="rent"
                  ></input>
                  <label for="rent" className="form-check-label">
                    Rent
                  </label>
                </div>
              </div>
              <div className="col-md-2 ">
                <input
                  type="radio"
                  id="sale"
                  className="form-check form-check-inline"
                  value="ForSale"
                ></input>
                <label for="sale" className="form-check-label">
                  For Sale
                </label>
              </div>
              <div className="col-md-4 ">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rent/Price"
                ></input>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-3 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Number of Bedrooms"
                />
              </div>
              <div className="col-md-3 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Square ft"
                />
              </div>
              <div className="col-md-3 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Car parking(s)"
                />
              </div>
              <div className="col-md-3 btn">
                <input
                  id="yearbuild"
                  className="form-control "
                  placeholder="Year build"
                />
              </div>
            </div>
            <br></br>
            <hr></hr>
            <div className="card-text">
              <i>
                <b>Dimension (Square ft)</b>
              </i>
            </div>
            <div className="row">
              <div className="col-md-2 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Dinning room"
                />
              </div>
              <div className="col-md-2 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Kitchen"
                />
              </div>
              <div className="col-md-2 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Living room"
                />
              </div>
              <div className="col-md-2 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Master bedroom"
                />
              </div>
              <div className="col-md-2 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Bedroom 2"
                />
              </div>
              <div className="col-md-2 btn">
                <input
                  type="number"
                  className="form-control "
                  placeholder="Other bedrooms"
                />
              </div>
            </div>
            <br></br>
            <hr></hr>
            <div className="card-text">
              <i>
                <b>General Amenities</b>
              </i>
            </div>
            <div className="row">
              <div class="col-md-2">
                <input
                  class="form-check form-check-inline"
                  type="checkbox"
                  id="Swimo"
                  value="option1"
                  aria-label="..."
                />
                <label class="form-check-label" for="gridCheck">
                  Swimming pool
                </label>
              </div>
              <div class="col-md-2">
                <input
                  class="form-check form-check-inline"
                  type="checkbox"
                  id="Internet"
                  value="option2"
                  aria-label="..."
                />
                <label class="form-check-label" for="gridCheck">
                  Internet
                </label>
              </div>
              <div class="col-md-2">
                <input
                  class="form-check form-check-inline"
                  type="checkbox"
                  id="Air"
                  value="option1"
                  aria-label="..."
                />
                <label class="form-check-label" for="gridCheck">
                  Air conditioning
                </label>
              </div>
              <div class="col-md-2">
                <input
                  class="form-check form-check-inline"
                  type="checkbox"
                  id="Terrace"
                  value="option3"
                  aria-label="..."
                />
                <label class="form-check-label" for="gridCheck">
                  Terrace
                </label>
              </div>
              <div class="col-md-2">
                <input
                  class="form-check form-check-inline"
                  type="checkbox"
                  id="Gym"
                  value="option4"
                  aria-label="..."
                />
                <label class="form-check-label" for="gridCheck">
                  Gym
                </label>
              </div>
              <div class="col-md-2">
                <input
                  class="form-check form-check-inline"
                  type="checkbox"
                  id="Laundry"
                  value="option5"
                  aria-label="..."
                />
                <label class="form-check-label" for="gridCheck">
                  Laundry Machine
                </label>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <div className="row">
              <div class="col-sm-3">
                <label>Attachment(s) (Attach multiple files.)</label>
              </div>
              <div class="col-sm-9">
                <span class="btn btn-default btn-file">
                  <input
                    id="input-2"
                    name="input2[]"
                    type="file"
                    class="file"
                    multiple
                    data-show-upload="true"
                    data-show-caption="true"
                  />
                </span>
              </div>
            </div>
            <div className="btn btn-primary float-right">Submit</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
