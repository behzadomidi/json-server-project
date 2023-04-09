import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function ShowPostSlider({ data }) {
  return (
    <Row>
      {data &&
        data
          .filter((items, index) => index < 4)
          .map((item) => (
            <Col className="my-3" xs={3} key={item.id}>
              <Card className="border-3 shadow-lg h-100 ">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <p>{item.email}</p>
                    <small>
                      {item.text.length < 50
                        ? item.text
                        : `${item.text.slice(0, 50)} ...`}
                    </small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <p>{item.date}</p>
                </Card.Footer>
              </Card>
            </Col>
          ))}
    </Row>
  );
}

export default ShowPostSlider;
