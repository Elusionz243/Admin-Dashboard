import "./Reports.scss";

export default function Reports({ listOfReports }) {
  return (
    <div className="Reports">
      <div className="Reports-toolbar">
        <a href="/reports/create" className="btn btn-primary">
          <i className="bi bi-plus-lg" /> Create Form
        </a>
      </div>
      <div className="Reports-table">
        <table border="2">
          <tr className="table-headers">
            <th>Report Name</th>
            <th>Date of Creation</th>
            <th>Last Updated</th>
            <th># of Fields</th>
          </tr>
          <tr className="table-data">
            <td>Report #1</td>
            <td>9/4/2024</td>
            <td>9/4/2024</td>
            <td>4</td>
          </tr>
          <tr className="table-data">
            <td>Report #2</td>
            <td>9/4/2024</td>
            <td>9/4/2024</td>
            <td>4</td>
          </tr>
          <tr className="table-data">
            <td>Report #3</td>
            <td>9/4/2024</td>
            <td>9/4/2024</td>
            <td>4</td>
          </tr>
          <tr className="table-data">
            <td>Report #4</td>
            <td>9/4/2024</td>
            <td>9/4/2024</td>
            <td>4</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
