import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

  

const UserPage = () => {
    const {user_id}=useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchAndUpdateData = () => {
        setLoading(true);
        getData(`https://reqres.in/api/users/${user_id}`)
          .then((res) => {
            console.log(res);
            setUser(res);
            // setLoading(false)
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          })
          .finally(() => setLoading(false));
      };
    
      useEffect(() => {
        fetchAndUpdateData();
      }, []);

      return loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
    <div style={{border:"1px solid black", padding:"20px", margin:"20px"}}>
        <img src={user?.data?.avatar} alt={user?.data?.first_name}/>
        <p>{`${user?.data?.first_name} ${user?.data?.last_name}`}</p>
        <p>{user?.data?.email}</p>
        <p>{user?.data?.id}</p>

    </div>
  )
}

export default UserPage



// 
// avatar
// : 
// "https://reqres.in/img/faces/1-image.jpg"
// email
// : 
// "george.bluth@reqres.in"
// first_name
// : 
// "George"
// id
// : 
// 1
// last_name
// : 
// "Bluth"