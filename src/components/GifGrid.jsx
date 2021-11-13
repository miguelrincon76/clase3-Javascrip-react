import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
    const [images, setimages] = useState([]);
    useEffect(() => {
        getGifs();
    }, [category]);

    const getGifs = async () => {
        const api_key = "s1jyM9RHd6LzfJvL460KDTFs4pnxlHIm";
        const limit = 10;
        const endPoint = "api.giphy.com/v1/gifs/search";

        const urlApi = `https://${endPoint}?q=${encodeURI(
            category
        )}&limit=${limit}&api_key=${api_key}`;
        const resp = await fetch(urlApi);
        const { data } = await resp.json();

        const gifs = data.map((item) => {
            return {
                id: item.id,
                title: item.title,
                url: item.images.downsized_medium.url,
            };
        });
        setimages(gifs);
        console.log(gifs);
    };

    return (
        <div>
            <h2>{category}</h2>
            <div className="d-flex flex-wrap" >
                {
                    images.map(img => {
                        return (
                            <div key={img.id}>
                                <div className="card" style={{ maxWidth: '18rem' }}>
                                    <img src={img.url} className="card-img-top" alt={img.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{img.title}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    )
                }
            </div>

        </div>



    );
};

GifGrid.propTypes = {};

export default GifGrid;
