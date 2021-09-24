import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Input } from "../../atoms";

export default function SignUp() {
  const [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
    phone: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    fullname: "",
    phone: "",
  });

  const handleChange = (event) => {
    console.log(event.target.name + " " + event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangePhoneNumber = (event) => {
    let value = event.target.value;

    if (data.phone > 5) {
      value = value.replace(/\D+/g, "").replace(/(\d{3})/, "($1)");
    } else {
      value = event.target.value;
    }

    setData({
      ...data,
      phone: value,
    });
  };

  const validate = (event) => {
    event.preventDefault();

    let fullname = data.fullname;
    if (fullname.length < 3) {
      setError({
        ...error,
        fullname: "Minimum 3 karakter",
      });
      return;
    } else {
      setError({
        ...error,
        fullname: "",
      });
    }

    let password = data.password;

    if (password.length > 6 && password.match(/[A-Za-z0-9]+/)) {
      setError({
        ...error,
        password: "",
      });
    } else {
      setError({
        ...error,
        password: "Minimum 6 karakter dan harus alpha numerik",
      });
      return;
    }
    if (
      error.password.length === 0 &&
      error.fullname.length === 0 &&
      error.email.length === 0 &&
      error.phone.length === 0
    ) {
      alert("SUCCESS");
    }
  };

  return (
    <div className="container p-3">
      <Form onSubmit={validate}>
        <Input
          controlId="FullName"
          title="Full Name"
          type="text"
          name="fullname"
          placeholder="Your Full Name"
          onChange={handleChange}
        />
        <p>{error.fullname}</p>
        <Input
          controlId="PhoneNumber"
          title="Phone Number"
          type="text"
          name="phone"
          value={data.phone}
          placeholder="Phone Number (021) 2950000"
          onChange={handleChangePhoneNumber}
        />
        <p>{error.phone}</p>
        <Input
          controlId="Email"
          title="Email"
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <p>{error.email}</p>
        <Input
          controlId="Password"
          title="Password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <p>{error.password}</p>
        <Button color="primary" title="Sign Up" type="submit" />
      </Form>
    </div>
  );
}
