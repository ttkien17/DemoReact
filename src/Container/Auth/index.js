import React, { Component } from "react";
import { Form, Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon } from "reactstrap";
// import { Redirect, Link } from "react-router-dom";
import { loginRequest } from "../../action/UserAction";
import { connect } from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false
    };
  }
  handleLogin(e) {
    e.preventDefault()
    const { dispatch } = this.props
    const { username, password } = this.refs;
    dispatch(loginRequest(username.value, password.value))
  }

  render() {
    // const { handleSubmit, auth: { isFetching, error } } = this.props;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <h1>Đăng nhập</h1>
                  <p className="text-muted">Đăng nhập vào tài khoản của bạn</p>
                  <Form onSubmit={this.handleLogin.bind(this)}>
                    <InputGroup className="mb-3">
                      <InputGroupAddon>E</InputGroupAddon>
                      <input className="form-control" type="text" ref="username" placeholder="nhap email" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon>
                        P
                      </InputGroupAddon>
                      <input className="form-control" type="password" ref="password" placeholder="nhap pass" />
                    </InputGroup>
                    <Row>
                      <Col xs="12">
                        <Button>
                          Đăng nhập
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default connect()(Login)