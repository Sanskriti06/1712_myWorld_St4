import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/data").then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    // console.log(data);
    let { firstname, lastname, email, username, id } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstname);
    localStorage.setItem("Last Name", lastname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Username", username);
  };

  const getData = () => {
    axios.get(`http://localhost:5000/data`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const deleteAPIData = (id) => {
    axios.delete(`http://localhost:5000/data/${id}`).then(() => {
      getData();
    });
  };

  const [q, setQ] = useState("");
  const [searchParam] = useState([
    "firstname",
    "lastname",
    "email",
    "username",
  ]);

  function search() {
    return APIData.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
    });
  }

  return (
    <>
      <input
        type="search"
        placeholder="search by name"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {search(APIData).map((data) => {
            return (
              <tr>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.email}</td>
                <td>{data.username}</td>
                <td>
                  <Link to="/update">
                    <input
                      className="btn btn-primary"
                      type="button"
                      value="Update"
                      onClick={() => setData(data)}
                    />
                  </Link>
                </td>
                <td>
                  <input
                  className="btn btn-danger"
                    type="button"
                    value="Delete"
                    onClick={() => deleteAPIData(data.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
