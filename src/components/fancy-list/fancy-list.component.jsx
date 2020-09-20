import React from "react";

const FancyList = ({list}) => {

    return (
        <ol>
            {list.map((i, index) => (
                <li key={index}>{i.name}</li>
            ))}
        </ol>
    );
};

export default FancyList;