import axios from "axios";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";

const BestPost = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `http://localhost:8000/bestpost?_page=${pageIndex}&_limit=10`
  );
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <h1 className="lead fs-3">Welcome to Best Post Page</h1>
        <button
          onClick={() =>
            mutate(
              `http://localhost:8000/bestpost?_page=${pageIndex + 1}&_limit=10`,
              axios
                .get(
                  `http://localhost:8000/bestpost?_page=${
                    pageIndex + 1
                  }&_limit=10`
                )
                .then((res) => res.data)
            )
          }
          className="btn btn-outline-primary"
        >
          prefetch next pagination{" "}
        </button>
      </div>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>index</th>
            <th>title</th>
            <th>email</th>
            <th>text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.email}</td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-5 d-flex justify-content-between">
        <button
          onClick={() => setPageIndex(pageIndex - 1)}
          className="btn btn-outline-secondary w-50 mx-2"
        >
          Prev
        </button>
        <button
          onClick={() => setPageIndex(pageIndex + 1)}
          className="btn btn-outline-success w-50 mx-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BestPost;
