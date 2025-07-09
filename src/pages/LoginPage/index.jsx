import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import styled from "styled-components";
import { TextField } from "../../components/TextField";
import SimpleReactValidator from "simple-react-validator";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";
import SocialLinks from "../components/SocialLinks";
import bg from "./assets/img/bg.webp";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const [loading, setLoading] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => setFormData((s) => ({ ...s })) },
      element: (message) => (
        <div className="text-danger small mt-1">{message}</div>
      ),
    })
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.current.allValid()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/homepage");
      }, 1000);
    } else {
      validator.current.showMessages();
      setFormData((prev) => ({ ...prev }));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormInvalid(!validator.current.allValid());
    }, 150);
    return () => clearTimeout(timer);
  }, [formData]);

  const { email, password, keepSignedIn } = formData;

  return (
    <Main
      fluid
      className="min-vh-100 d-flex align-items-center justify-content-center bg-white"
    >
      <RowBlock>
        <Col md={6}>
          <LoginCard>
            <h2 className="fw-bold text-gray-3D">Sign In</h2>
            <p className="fw-semibold text-gray-3D">
              New user?{" "}
              <a href="#" className="fw-semibold text-decoration-none">
                Create an account
              </a>
            </p>

            <Form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="email"
                placeholder="Username or email"
                value={email}
                onChange={handleChange}
              >
                {validator.current.message("username or email", email, "required")}
              </TextField>

              <TextField
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              >
                {validator.current.message(
                  "password",
                  password,
                  "required|min:8|regex:^(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])"
                )}
              </TextField>

              <Form.Group className="mb-3">
                <CheckBox
                  name="keepSignedIn"
                  checked={keepSignedIn}
                  onChange={handleChange}
                  label="Keep me signed in"
                />
              </Form.Group>

              <Button type="submit" className="w-100" disabled={loading}>
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Form>

            <div className="text-center mt-3">
              <div className="signin-with">
                <small className="text-muted">Or sign In With</small>
              </div>
              <SocialLinks />
            </div>
          </LoginCard>
        </Col>

        <Col
          md={6}
          className="mb-4 mb-md-0 d-flex align-items-center justify-content-center d-none d-md-block"
        >
          <div className="h-100 ps-5 ms-5">
            <img src={bg} className="h-100" alt="Background" />
          </div>
        </Col>
      </RowBlock>
    </Main>
  );
};

export default LoginPage;


  // Styled Components
  const Main = styled(Container)`
    .signin-with {
      position: relative;
      padding: 15px 0;
      &::before {
        transform: translateY(-50%);
        background: #cfcfcf;
        position: absolute;
        height: 2px;
        width: 100%;
        content: "";
        right: 0;
        top: 50%;
        left: 0;
      }
      small {
        color: #3d3d3c !important;
        background: #ffffff;
        letter-spacing: 0.2px;
        position: relative;
        font-weight: 600;
        padding: 0 15px;
        font-size: 13px;
      }
    }
  `;
  const LoginCard = styled.div`
    max-width: 280px;
    margin: 0 auto;
  `;
  const RowBlock = styled(Row)`
    max-width: 1250px;
    padding: 50px 0;
    width: 100%;
  `;
