import axios from "axios";
import React from "react";
import useSWR from "swr";

const AddAdmin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const admin = {
      name: data.get("name"),
      email: data.get("email"),
    };
    axios.post(`http://localhost:8000/admin`, admin);
  };
  const { data, mutate } = useSWR("http://localhost:8000/admin", {
    refreshInterval: 0,
  });
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h1>Add Admin Page</h1>
        <button
          className="btn btn-outline-secondary"
          onClick={() => mutate(data)}
        >
          get new admin
        </button>
      </div>
      <biv className="row">
        <div className="col-3 border-end">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="form-label">
                Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                E-mail :
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="my-3">
              <button type="submit" className="btn btn-outline-success">
                save admin
              </button>
            </div>
          </form>
        </div>
        <div className="col-9">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      onClick={() =>
                        axios.delete(`http://localhost:8000/admin/${item.id}`)
                      }
                      className="btn btn-danger"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </biv>
    </div>
  );
};

export default AddAdmin;
