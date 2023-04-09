import React, { useState } from "react";
import ModalQuestion from "../../components/admin/ModalQuestion";
import useSWR from "swr";
import { FcPlus } from "react-icons/fc";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const handleShowCheck = (result) => {
    result === 8 && setUser(true);
  };
  const { data } = useSWR(() => (user ? "http://localhost:8000/user" : null));

  return (
    <div>
      {user ? (
        <>
          <div className="d-flex justify-content-md-between p-3">
            <h1>welcome to user page</h1>
            <FcPlus onClick={() => navigate("/addadmin")} className="fs-2" />
          </div>
          <hr />
          <div className="row">
            {data.map((item) => (
              <div className="col-3  my-2">
                <Card className="h-100 ">
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.email}</Card.Text>
                    <Card.Text>{item.address.country}</Card.Text>
                    <Card.Text>{item.address.city}</Card.Text>
                    <Card.Text>{item.address.fullAddress}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </>
      ) : (
        <ModalQuestion handleShowCheck={handleShowCheck} />
      )}
    </div>
  );
};

export default Admin;
