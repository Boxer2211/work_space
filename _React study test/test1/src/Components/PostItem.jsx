import React from "react";


const PostItem = (props) => {


    return (
    <div className='post'>
        <div> {props.post.id} . {props.post.title} - {props.post.body} </div>
        <button>Delete</button>
    </div>
    );
};
export default PostItem;