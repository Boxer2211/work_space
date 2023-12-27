import React, { useState } from 'react';
import './CommentArea.css';


function CommentArea() {
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [parentComment, setParentComment] = useState(null);

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const coments = []



  

  return (
    <div className='CommentArea'>
      <div>
      </div>  

    </div>
  );
}

export default CommentArea;
