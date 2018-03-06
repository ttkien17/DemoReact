import React, { Component } from "react";
import _ from 'lodash'
import { CardHeader, FormGroup, Label, Form, Alert, Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon, Input } from "reactstrap";
class News extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Col xs="12" md={12}>
                <Card>
                    <CardHeader>
                        <i className="fa fa-user" /> News
                            </CardHeader>
                    <CardBody>
                        
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default News