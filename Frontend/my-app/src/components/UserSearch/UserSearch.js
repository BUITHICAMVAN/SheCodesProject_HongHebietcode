import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function UserSearch() {
  const userData = React.useRef([]);
  const [filteredUserData, setFilteredUserData] = useState([]);
  //   const [location, setLocation] = React.useState("");
  React.useEffect(() => {
    const data = [
      {
        job: "Odd Job",
        location: "District 12",
      },
      {
        job: "Copy Writer",
        location: "District 10",
      },
      {
        job: "Content Writer",
        location: "District 9",
      },
      {
        job: "Input Data",
        location: "District 7",
      },
      {
        job: "Input Data",
        location: "District 7",
      },
    ];

    userData.current = data;
    setFilteredUserData(data);
  }, []);

  const handleSearch = (s) => {
    // const newData = userData.filter((x) => x.job === job);
    setFilteredUserData(() => [
      ...userData.current.filter((x) => x.job.includes(s)),
    ]);
  };

  return (
    <div>
      <Table>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Job search"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </td>
        </tr>
      </Table>
      <Table responsive stripped size="sm">
        <thead>
          <tr>
            <th>Job Type</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserData && filteredUserData.length > 0
            ? filteredUserData.map((item) => (
                <tr>
                  <td>{item.job}</td>
                  <td>{item.location}</td>
                </tr>
              ))
            : "No data"}
        </tbody>
      </Table>
    </div>
  );
}

export default UserSearch;
