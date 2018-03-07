import React, { Component } from "react";
import { FormGroup, Input, FormFeedback, Form, Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon } from "reactstrap";
import { loginRequest } from "../../action/UserAction";
import { connect } from 'react-redux';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: {
        userName: '',
        passWord: ''
      }
    };
  }
  handleLogin(e) {
    e.preventDefault()
    const { dispatch } = this.props
    const { data: { userName, passWord } } = this.state;
    dispatch(loginRequest(userName, passWord))
  }
  change(e) {
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value }
    })
  }
  render() {
    const { user: { error } } = this.props;
    const { userName, passWord } = this.state
    return (
      <Container>

        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <h1>Login</h1>
                  <p className="text-muted">Log in your account</p>
                  <Form onSubmit={this.handleLogin.bind(this)}>
                    <InputGroup className="mb-3">
                      <InputGroupAddon>E</InputGroupAddon>
                      <Input name="userName" invalid={error} onChange={this.change.bind(this)} value={userName} className="form-control" type="text" ref="username" placeholder="input email" />
                    </InputGroup>
                    <FormGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon>
                          P
                      </InputGroupAddon>
                        <Input name="passWord" invalid={error} onChange={this.change.bind(this)} value={passWord} className="form-control" type="password" ref="password" placeholder="input pass" />
                        <FormFeedback>{error}</FormFeedback>
                      </InputGroup>
                    </FormGroup>
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
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Login)