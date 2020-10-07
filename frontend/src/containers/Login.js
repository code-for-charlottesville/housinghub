import React from "react";
import "../style/App.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLoginField, loginUser } from "../actions/login";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { Alert, Container, Row, Col, Form, Button } from "react-bootstrap";
const Login = (props) => {
  if (props.isLoggedIn) return <Redirect to="/home" />;
  return (
    <Container>
      <Row className="login">
        <Col>
          <h1>Housing Hub</h1>
          {props.error ? (
            <Alert variant="primary">Invalid Email or Password</Alert>
          ) : (
            ""
          )}
          {props.loading && <LoadingSpinner />}
          {!props.loading && (
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={props.fields.email}
                  onChange={(e) =>
                    props.dispatch(setLoginField("email", e.target.value))
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={props.fields.password}
                  className="input"
                  onChange={(e) =>
                    props.dispatch(setLoginField("password", e.target.value))
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember Me"
                  checked={props.fields.rememberMe}
                  onChange={() =>
                    props.dispatch(
                      setLoginField("rememberMe", !props.fields.rememberMe)
                    )
                  }
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={() => loginUser()}
              >
                Login
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};
function mapStateToProps(state) {
  return {
    fields: state.login.fields,
    isLoggedIn: state.login.isLoggedIn,
    loading: state.appState.loading,
    error: state.login.error,
  };
}
export default connect(mapStateToProps)(Login);
