import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button, Input } from "../../atoms";
import * as userData from "../../../db.json";

export default function SignIn(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function validateForm() {
    // return email.length > 0 && password.length > 0;
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let findUser = userData.default.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (findUser) {
      setError("");
      props.successSignIn(findUser);
    } else {
      setError("Wrong email or password!");
    }
  }

  return (
    <>
      <div className="container p-3">
        <Form onSubmit={handleSubmit}>
          <Input
            controlId="Email"
            title="Email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            controlId="Password"
            title="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <p className="text-danger">{error}</p>

          <Button
            color="success"
            title="Sign In"
            type="submit"
            onClick={validateForm()}
          />
        </Form>
      </div>
    </>
  );
}
