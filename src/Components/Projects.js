import React from "react";
import Form from "../Components/Form";

const Releases = () => {
  return (
    <>
      {" "}
      <h1>Projects</h1>
      <p>
        Kuratorium is a collection of independent projects. The first project is
        curated by Lennart Wiehe and called ‘A New Need for Subtlety and Hiss’.
        Upon its release in early 2019, you can read all about it here.
      </p>
      <br />
      <p>
        If you would like to receive updates about future Kuratorium activities,
        submit your email address here.
      </p>
      <br />
      <Form />
    </>
  );
};

export default Releases;
