import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState("");

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 2) {
            setCategories((categ) => [inputValue, ...categ]);
            setinputValue("");
        } else {
            return;
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder="Category"
                onChange={(e) => handleInputChange(e)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

AddCategory.propTypes = {};

export default AddCategory;
