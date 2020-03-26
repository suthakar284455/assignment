import React from "react";

const ScanReport = props => {
  return (
    <div className="scan-report">
      <table border="1">
        <tr>
          <th>S.No</th>
          <th>Scan Name</th>
          <th>Scan Amount</th>
          <th>Discount</th>
          <th>Total Amount</th>
        </tr>

        {props.scan_report.map((item, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.scan_name}</td>
              <td>{item.scan_amount}</td>
              <td>{item.discount_amount}</td>
              <td>{item.scan_amount - item.discount_amount}</td>
            </tr>
          );
        })}
      </table>
      <br />
      <br />
    </div>
  );
};

export default ScanReport;
