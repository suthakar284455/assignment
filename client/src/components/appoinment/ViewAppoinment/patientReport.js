import React from "react";

const PatientReport = props => {
  return (
    <div className="patient-report">
      <table border="1">
        <tr>
          <th>S.No</th>
          <th>Patient Name</th>
          <th>Age Gender</th>
          <th>Appoinment Date</th>
          <th>Balance Amount</th>
          <th>Ation</th>
        </tr>

        {props.patientdata.data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.patientname}</td>
              <td>{item.age} - {item.gender}</td>
              <td>{item.appoimentdate}</td>
              <td>{item.scan[0].scan_amount}</td>
              <td><a>Click to Pay</a></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default PatientReport;
