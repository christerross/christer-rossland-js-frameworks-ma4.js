import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function RecipeItem({ id, name, image }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Link to={"recipe/" + id}>
                <Button variant="secondary" block>
                    View
                </Button>
            </Link>
            </Card.Body>
        </Card>
    );
}

RecipeItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default RecipeItem;