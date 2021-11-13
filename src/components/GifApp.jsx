import React, { useState } from "react";
import PropTypes from "prop-types";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifApp = (props) => {
    const [categories, setCategories] = useState(["Mazda"]);

    return (
        <div>
            <h1>Gif App</h1>
            <label htmlFor="addCat">Categoría:</label>
            <AddCategory setCategories={setCategories} />

            <ol>
                {categories.map((category) => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </div>
    );
};

GifApp.propTypes = {};

export default GifApp;
