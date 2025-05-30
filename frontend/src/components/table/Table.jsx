import React from "react";

const Table = ({ todoData }) => {
  return (
    <div className="table-responsive mt-5">
        <table className="table table-hover border custom-rounded-table">
          <thead className="text-center bg-light">
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Language</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {todoData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {entry.firstName} {entry.lastName}
                </td>
                <td>{entry.gender}</td>
                <td>{entry.languages.join(", ")}</td>
                <td>{entry.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Table;
