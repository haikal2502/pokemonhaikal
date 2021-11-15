import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container fluid={true} className="py-5">
                <Container>
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <img draggable="false" src="/logo.png" width="300px" w className="w-900" alt={"Logo " + process.env.REACT_APP_TITLE} />
                        </Col>
                    </Row>

                    
                    <Row className="my-5 text-center">
                        <Col className= "font-weight-bold">
                            <div className="">           
                                <h1 className="display-5 text-dark">Welcome to Pokemon-Tokped</h1>
                                <h2 className="lead text-dark">
                                    Project Assignment<br />
                                    Web Platform Engineers - Tokopedia
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-5 justify-content-center">
                        <Col md={{ size: 3 }} xl={{ size: 4 }}></Col>
                        <Col>
                            <Link to="/pokemon-list">
                                <Button color="success" className="w-100">Pokemon List</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/my-pokemon-list">
                                <Button color="success" className="w-100">My Pokemon</Button>
                            </Link>
                        </Col>
                        <Col md={{ size: 3 }} xl={{ size: 4 }}></Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Home;