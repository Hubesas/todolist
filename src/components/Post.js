import React from 'react';



const Post = (props) => {
    return (
        <div className="d-flex gap-2" style={{backgroundColor: props.post.hex}}>
                <h1>{props.post.name}</h1>
                <p>Colors: {props.post.families.join(`, `)}</p>
                <p>{props.post.rgb}</p>
        </div>
    );
};

export default Post;