import React from "react";
import TypeIt from "typeit-react";

const TypeItComponent = () => {
  return (
    <div>
      <h4 className="text-muted">
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type("Hi , I'm behzad omidi")
              .pause(750)
              .delete(12)
              .pause(600)
              .type("developer");
            return instance;
          }}
          options={{
            loop: true,
            Speed: 200,
          }}
        ></TypeIt>
      </h4>
      <div>
        <h3 className="text-secondary display-6">
          <TypeIt
            option={{
              loop: true,
              speed: 100,
            }}
          >
            welcome to website
          </TypeIt>
        </h3>
      </div>
    </div>
  );
};

export default TypeItComponent;
