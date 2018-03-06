import React, { Component } from "react";
import _ from 'lodash'
import { CardHeader, FormGroup, Label, Form, Alert, Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon, Input } from "reactstrap";
import { connect } from 'react-redux'
class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { user: { profile } } = this.props
        const {email, name, phone, } = JSON.parse(profile)
        return (
            <Col xs="12" md={12}>
                <Card>
                    <CardHeader>
                        <i className="fa fa-user" /> Profile
                            </CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input value={name} disabled />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">Phone number</Label>
                                    <Input value={phone} disabled />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <FormGroup>
                                    <Label htmlFor="name">Email</Label>
                                    <Input value={email} disabled />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(Profile)