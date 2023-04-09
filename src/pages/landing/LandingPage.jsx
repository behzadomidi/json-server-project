import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SliderComponent from "../../components/slider/Slider";
import useSWR from "swr";
import { ReactComponent as PostSvg } from "../../assets/undraw_online_article_re_daq5.svg";
import TypeItComponent from "./typeit/TypeIt";
import { useNavigate } from "react-router-dom";
import ShowPostSlider from "../../components/landingComponent/ShowPost";

function LandingPage() {
  const { data: sliderData, error: sliderError } = useSWR(
    "http://localhost:8000/slider"
  );

  //   last post req
  const { data: lastPostData, error: lastPostError } = useSWR(
    "http://localhost:8000/lastpost"
  );

  // best post req
  const { data: bestPostData, error: bestPostError } = useSWR(
    "http://localhost:8000/bestpost"
  );

  const navigate = useNavigate();

  if (sliderError || lastPostError || bestPostError)
    return <h1>{sliderError.message}</h1>;

  return (
    <Container className="mt-3">
      {/* Last Post */}
      <Row>
        <Col xs={4}>
          <SliderComponent data={sliderData} />
        </Col>
        <Col xs={8}>
          <PostSvg
            className="h-75  position-relative start-50"
            style={{ width: "350px" }}
          />
          <TypeItComponent />
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12}>
          <div className="d-flex justify-content-between">
            <h3>Last Post</h3>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/lastpost")}
            >
              More ...
            </button>
          </div>
        </Col>
        <Col xs={12}>
          <ShowPostSlider data={lastPostData} />
        </Col>
      </Row>

      {/* best posts */}
      <Row className="my-4">
        <Col xs={12}>
          <div className="d-flex justify-content-between">
            <h3>Best Post</h3>
            <button
              onClick={() => navigate("/bestpost")}
              className="btn btn-outline-secondary"
            >
              More ...
            </button>
          </div>
        </Col>
        <Col xs={12}>
          <ShowPostSlider data={bestPostData} />
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
