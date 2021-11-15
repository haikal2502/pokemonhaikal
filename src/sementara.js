<Container fluid={true} className="py-5">
                <Container className="pokemonList">
                    <Row>
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                            <h1 className="display-4 text-light text-center">Pokemon List</h1>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        {
                            pokemon.length > 0 ? pokemon.map(item => {
                                const { name, thumbnail } = item;
                                let urlDetail = "/detail/" + name;
                                return (
                                    <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-4">
                                        <Card className="h-100">
                                            <CardImg draggable="false" top src={"pokemon/" + thumbnail} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} className="h-100 p-4" />
                                            <CardBody>
                                                <CardTitle className="text-capitalize text-center" tag="h4">{name}</CardTitle>
                                            </CardBody>
                                            <CardFooter>
                                                <NavLink key={name} to={urlDetail}>
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




const { pokemon } = this.state;
console.log(pokemon)
    return(
        <Fragment>
                {
                    pokemon.length > 0 ? pokemon.map(item => {
                        console.log(item);
                        const { name, thumbnail } = item;
                        let urlDetail = "/detail/" + name;
                        return (
                            <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-4">
                                <Card className="h-100">
                                    <CardImg draggable="false" top src={"pokemon/" + thumbnail} title={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} alt={"Pokemon - " + name + " - " + process.env.REACT_APP_TITLE} className="h-100 p-4" />
                                    
                                    <CardHeader>
                                        <span className="text-capitalize text-center" tag="h4">{name}</span>
                                    </CardHeader>
                                    <div>
                                        <NavLink key={name} to={urlDetail}>
                                            <Button outline className="w-100" color="primary">View</Button>
                                        </NavLink>
                                    </div>
                                </Card>
                            </Col>
                        );
                    }) : null
                }

        </Fragment>
    )