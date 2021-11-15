import React, { Component } from "react";
import { PokemonConsumer } from './Pokemon-Context';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardFooter,
} from "reactstrap";

class MyPokemon extends Component {
    render() {
        return (
            <PokemonConsumer>
                {({ pokemon, releasepokemon }) => (
                    <React.Fragment>
                        <Container fluid={true} className="py-5">
                            <Container className="pokemonList">
                                <Row>
                                    <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                                        <h1 className="display-4 text-light text-center">My Pokemon</h1>
                                        <p className="h2 fw-light text-light text-center">List Captured Pokemon</p>
                                    </Col>
                                </Row>
                                <Row className="my-5">
                                    {
                                        pokemon.length > 0 ? pokemon.map(item => {
                                            const { name, nickname } = item;

                                            return (
                                                <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="myPokemon mb-4" key={Math.random()}>
                                                    <Card className="h-100">
                                                        <CardImg draggable="false" top src={"pokemon/" + name + ".jpg"} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} className="h-100 p-4" />
                                                        <CardBody>
                                                            <CardTitle className="text-capitalize text-center" tag="h4">{nickname}</CardTitle>
                                                            <CardSubtitle tag="h6" className="text-capitalize text-center">{name}</CardSubtitle>
                                                        </CardBody>
                                                        <CardFooter>
                                                            <Button outline className="w-100" color="primary" onClick={() => releasepokemon(name)}>Release</Button>
                                                        </CardFooter>
                                                    </Card>
                                                </Col>
                                            );
                                        }) : null
                                    }
                                </Row>
                            </Container>
                        </Container>
                    </React.Fragment>
                )}
            </PokemonConsumer>
        );
    }
}

export default MyPokemon;