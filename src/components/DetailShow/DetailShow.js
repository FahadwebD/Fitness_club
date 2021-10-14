import React from 'react';

const DetailShow = (props) => {
    console.log(props)
    const{name} = props.data
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default DetailShow;