import React, { Component } from "react";
import { CardHeader, FormGroup, Label, Form, Alert, Container, Row, Col, CardGroup, Card, CardBody, Button, InputGroup, InputGroupAddon, Input } from "reactstrap";
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'
import { Redirect, Route } from 'react-router-dom';
import routes from '../../Routes'
class Full extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false
        };
    }
    render() {
        
        return (
            <div>
                    <Redirect from="/" to="/home"/>
                    <Col md="12">
                        <Card>
                            <Header />
                        </Card>
                    </Col>
                    {routes.map((route, i) =>
                        <Route
                            path={route.path}
                            component={route.component}
                        />
                    )}
            </div >
        );
    }
}

export default Full;