import React from 'react';
import PostItem from './Components/PostItem';

const PostList = ({posts}) => {


    return (
    <div>
        	<h1>Post list</h1>
			{posts.map(post => 
				<PostItem post={post} key={post.id} />)}
        
    </div>
    );
};
export default PostList;