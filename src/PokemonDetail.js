import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PokemonConsumer } from './Pokemon-Context';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardText,
    CardImg,
} from "reactstrap";

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon_details: [],
            name: ""
        };
    }

    componentDidMount() {
        let url = window.location.href;
        let url_split = url.split("/");
        let pokemon_name = url_split[5];
        

        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_name)
            .then(res => res.json())
            .then(pokemon_details => this.setState({
                pokemon_details,
                name: pokemon_name
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const { name, pokemon_details } = this.state;
        console.log(pokemon_details)

        function catchPokemon() {
            if (Math.random() >= 0.5) {
                return prompt("You caught " + name + ". Please Enter A Nickname For This Pokemon");
            } else {
                alert(" Catch " + name + " Failed. Please Try Again");
                return false;
            }
        }

        return (
          <PokemonConsumer>
            {({ updatepokemon }) => (
              <Container fluid={true} className="py-5">
                <Container id="pokemonDetail">
                  <Col>
                    <Card body>
                      <CardTitle align="center" tag="h1">
                        {name}
                      </CardTitle>
                      <CardText>
                        <Row>
                          <Col>
                          <CardImg draggable="false" top src={pokemon_details.sprites}  className="h-100 p-4" />
                          </Col>

                          <Col className="col-md-5 mx-auto">
                            <Row>
                              <Col>ID</Col>
                              <Col>
                                <Button color="success" variant="danger">
                                  {pokemon_details.id}
                                </Button>
                              </Col>
                            </Row>
                            <Row>
                              <Col>HEIGHT</Col>
                              <Col>
                                <Button color="success" variant="danger">
                                  {pokemon_details.height}
                                </Button>
                              </Col>
                            </Row>
                            <Row>
                              <Col>WEIGHT</Col>
                              <Col>
                                <Button color="success" variant="danger">
                                  {pokemon_details.weight}
                                </Button>
                              </Col>
                            </Row>
                            <Row>
                              <Col>ABILITIES</Col>
                              <Col>
                                {" "}
                                {pokemon_details.abilities
                                  ? pokemon_details.abilities.map((ab) => {
                                      const { ability } = ab;
                                      return (
                                        <li
                                          className="text-capitalize"
                                          key={ability.name}
                                        >
                                          {ability.name}
                                        </li>
                                      );
                                    })
                                  : null}
                              </Col>
                            </Row>
                            <Row>
                              <Col>TYPE</Col>
                              <Col>
                                {pokemon_details.types
                                  ? pokemon_details.types.map((ty) => {
                                      const { type } = ty;
                                      return (
                                        <li
                                          className="text-capitalize"
                                          key={type.name}
                                        >
                                          {type.name}
                                        </li>
                                      );
                                    })
                                  : null}
                              </Col>
                            </Row>

                            <Row>
                              <Col>Stats</Col>
                              <Col>
                                {pokemon_details.stats
                                  ? pokemon_details.stats.map((item) => {
                                      const { stat } = item;
                                      return (
                                        <li
                                          className="text-capitalize"
                                          key={stat.name}
                                        >
                                          {stat.name}
                                          {item.base_sta}
                                        </li>
                                      );
                                    })
                                  : null}
                              </Col>
                            </Row>

                            <Row>
                              <Col>Types</Col>
                              <Col>
                                {pokemon_details.types
                                  ? pokemon_details.types.map((item1) => {
                                      const { type } = item1;
                                      return (
                                        <li
                                          className="text-capitalize"
                                          key={type.name}
                                        >
                                          {type.name}
                                        </li>
                                      );
                                    })
                                  : null}
                              </Col>
                            </Row>

                            <Row>
                              <Col>Held Items</Col>
                              <Col>
                                {pokemon_details.held_items
                                  ? pokemon_details.held_items.map((he) => {
                                      const { item } = he;
                                      return (
                                        <li
                                          className="text-capitalize"
                                          key={item.name}
                                        >
                                          {item.name}
                                        </li>
                                      );
                                    })
                                  : null}
                              </Col>
                            </Row>
                          </Col>

                          <Col>
                            <Row className="justify-content-center mb-4">
                              Action
                            </Row>
                            <Row className="justify-content-center mb-4">
                              <Button
                                className="w-100 text-capitalize"
                                color="primary"
                                onClick={(event) => {
                                  let nickname = catchPokemon();
                                  if (nickname) {
                                    updatepokemon([
                                      { name: name, nickname: nickname },
                                    ]);
                                    alert(
                                      "Pokemon Successfully Added to My Pokemon List"
                                    );
                                  }
                                }}
                              >
                                Tangkap {name}
                              </Button>
                            </Row>
                            <Row className="justify-content-center mb-4">
                              <Link to="/my-pokemon-list">
                                <Button color="warning" className="w-100">
                                  My Pokemon
                                </Button>
                              </Link>
                            </Row>

                            <Row className="justify-content-center mb-4">
                              <Link to="/pokemon-list">
                                <Button color="warning" className="w-100">
                                  Back To List
                                </Button>
                              </Link>
                            </Row>
                          </Col>
                        </Row>
                      </CardText>
                    </Card>
                  </Col>
                </Container>
              </Container>
            )}
          </PokemonConsumer>
        );
    }
}

export default PokemonDetail;