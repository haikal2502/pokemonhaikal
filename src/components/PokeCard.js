import React from 'react'
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
    Navl
} from "reactstrap";

const PokeCard = ({pokemon}) => {
    return (
        <Col xs={{ size: 6 }} sm={{ size: 4 }} lg={{ size: 3 }} xl={{ size: 2 }} className="mb-4">
        <Card className="h-100">
            <CardImg draggable="false" top src="" />
            <CardBody>
                <CardTitle className="text-capitalize text-center" tag="h4"></CardTitle>
            </CardBody>
            <CardBody>
            </CardBody>
            <CardFooter>
                <NavLink>
                    <Button outline className="w-100" color="primary">View</Button>
                </NavLink>
            </CardFooter>
        </Card>
    </Col>
    )
};


export default PokeCard