import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButonClick, setIdFromButtonClick]=useState(1);

const handleClick = () =>{
    setIdFromButtonClick(id);
}

  useEffect(() => {
      
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButonClick}`)
      .then(response => {
        console.log(response);
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [idFromButonClick]);

  return (
    <div>
      <input type="text " value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <ul>
        <li key={post.id}>{post.title}</li>
      </ul>
      {/* <ul>
        {
          posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
        }
      </ul> */}
    </div>
  );
}

export default DataFetching;
