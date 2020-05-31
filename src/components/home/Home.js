import React from 'react';
import Heading from "../layout/Heading";
import RecipeList from "../recipe/RecipeList";

function Home() {
    return (
       <> 
        <Heading title="JavaScript Frameworks MA4" />
        <RecipeList />
       </> 
    );
}

export default Home;

