import React from "react";
import useSWRInfinite from "swr/infinite";

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `http://localhost:8000/bestpost?_page=${pageIndex}&_limit=10`;
};

const LastPost = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, {
    initialSize: 1,
    revalidateFirstPage: false,
  });

  return (
    <div className="container mt-3">
      <h1 className="lead fs-3">Welcome to Last Post Page</h1>
      <hr />
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>index</th>
            <th>name</th>
            <th>email</th>
            <th>text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((posts, indexPost) =>
            posts.map((post, index) => (
              <tr key={post.id}>
                <td>{indexPost * 10 + index + 1}</td>
                <td>{post.title}</td>
                <td>{post.email}</td>
                <td>{post.text}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button
        onClick={() => setSize(size + 1)}
        className="btn btn-outline-secondary w-100 my-5"
      >
        Load more ...
      </button>
    </div>
  );
};

export default LastPost;
