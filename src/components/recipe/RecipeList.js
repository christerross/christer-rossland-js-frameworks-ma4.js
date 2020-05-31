import React, {useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";
import { BASE_URL } from "../../constants/api";
import Search from "./Search";

function RecipeList() {
    const [ingredients, setIngredients] = useState([]);
    const [filteredIngredients, setFilteredIngredients] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setIngredients(json.results);
                setFilteredIngredients(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterCards = function(e) {
        const searchValue = e.target.value.toLowerCase();

        const filteredArray = ingredients.filter(function(char) {
            const lowerCaseName = char.name.toLowerCase();

            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });

        setFilteredIngredients(filteredArray);
    };

    if (loading) {
        return <Spinner animation="border" className="spinner" />;
    }

    return (
       <>
        <Search handleSearch={filterCards} /> 
        <Row>
            {ingredients.map(ingredients => {
                const { id, title, image } = ingredients;

                return (
                    <Col sm={6} md={3} key={id}>
                        <RecipeItem id={id} name={title} image={image} /> 
                    </Col>
                );
            })}
        </Row>
       </> 
    );
}

export default RecipeList;