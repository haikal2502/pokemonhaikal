import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardFooter,
} from "reactstrap";

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            pokemonDetails : [],
        };
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    name: `${data.name}`,
                    url: `${data.url}`,
                    

                }
            )))
            .then(pokemon => this.setState({ pokemon },()=>{
                    this.state.pokemon.map(detail => {
                    fetch(detail.url)
                    .then(response => response.json())
                    .then(data => {
                    if (data) {
                        var temp = this.state.pokemonDetails
                        temp.push(data)
                        this.setState({pokemonDetails: temp})
                    }            
                    })
                    .catch(console.log)
                })
                        
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { pokemonDetails } = this.state;
        return (
            <Container fluid={true} className="py-5">
                <Container className="pokemonList">
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <h1 className="display-4 text-light text-center">Pokemon List</h1>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        {
                            pokemonDetails.length > 0 ? pokemonDetails.map(item => {
                                const { name } = item;
                                let urlDetail = "/detail/" + name;
                                return (
                                    <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-4">
                                        <Card className="h-100">
                                            <CardImg draggable="false" top src={item.sprites['front_default']}  className="h-100 p-4" />
                                            <CardBody>
                                                
                                            </CardBody>
                                            <CardBody>
                                                <CardTitle className="text-capitalize text-center" tag="h4">{name}</CardTitle>
                                            </CardBody>
                                            <CardFooter>
                                                <NavLink  to={urlDetail}>
                                                    <Button outline className="w-100" color="primary">View</Button>
                                                </NavLink>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                );
                            }) : null
                        }
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default PokemonList;