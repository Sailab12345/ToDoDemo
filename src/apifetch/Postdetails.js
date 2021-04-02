import React, { useEffect, useState } from "react";
import axios from "axios";
const PostDetails = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [buttonid, setbuttonid] = useState(1);

  const handleClick = () => {
    setbuttonid(id);
  };

  const handleChangeclick = (e) => {
    setId(e.target.value);
    post.title = " ";
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonid]);

  return (
    <div>
      <input type="text" value={id} onChange={handleChangeclick} />
      <button type="button" onClick={handleClick}>
        Fetch data
      </button>
      <div>{post.title}</div>
    </div>
  );
};

export default PostDetails;
