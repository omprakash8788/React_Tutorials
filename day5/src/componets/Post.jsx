import React, { useEffect, useState } from "react";

const PostItem = ({ id, title, body }) => {
  return (
    <div style={{border:'1px solid red',margin:"30px" }}>
      <h3>
        {id}-{title}
      </h3>
      <h4>{body}</h4>
    </div>
  );
};

const getData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
const Post = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [posts, setPosts] = useState([]);
  //2. maintain page state
  const [page, setPage] = useState(1)

  useEffect(()=>{
    fetchAndUpdateData()
  },[])


  const fetchAndUpdateData = async () => {
    // get the data
    // update my ui with that data
    try {
      setLoading(true);

      const data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      // make fetch request and get the data
      console.log(data);

      // update my local state "posts" with that data
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  const handlePageChange =(val)=>{
    const updatePage = page+val;
    setPage(updatePage)

  }

  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (err) {
    return <h1>Something went wrong... please refresh</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {/* <button onClick={fetchAndUpdateData}>Click this button get posts</button> */}
      <hr />
      <div>
        {posts.map((postItem) => (
          <PostItem
            key={postItem.id}
            id={postItem.id}
            title={postItem.title}
            body={postItem.body}
          />
        ))}
      </div>
      {/* create buttons---> pagination sections */}
      <div>
        <button disabled={page===1} onClick={()=>handlePageChange(-1)}>Previous</button>
        <button disabled>{page}</button>
        <button onClick={()=>handlePageChange(1)}>Next</button>

      </div>
    </div>
  );
};

export default Post;
