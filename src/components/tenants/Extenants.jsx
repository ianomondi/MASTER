import React from "react";

const Extenants = () => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Ex-Tenants</h6>
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
                  <th>Tenant Id</th>
                  <th>Room No</th>
                  <th>Tenant Name</th>
                  <th>Phone</th>
                  <th>Entry date</th>
                  <th>Balance</th>
                  <th>Vacate Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Tenant Id</th>
                  <th>Property </th>
                  <th>Room No</th>
                  <th>Tenant Name</th>
                  <th>Phone</th>
                  <th>Entry Date</th>
                  <th>Vacate Date</th>
                  <th>Action</th>
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
                    <i className="fas fa-trash text-danger "></i>
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

export default Extenants;
