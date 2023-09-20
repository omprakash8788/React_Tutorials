import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const User = () => {
  //   const [users, setUsers] = useState([]);
  const [users, setUsers] = useState({});

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAndUpdateData = () => {
    setLoading(true);
    getData(`https://reqres.in/api/users`)
      .then((res) => {
        console.log(res);
        setUsers(res);
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
    <div>
      <h1>User Pages</h1>

      {/* {users.map((el) => (
        <p key={el.id}>{el.first_name}</p>
      ))} */}

      {users?.data?.map((user) => (
        // <p>{user.first_name}</p>
        <div key={user.id} style={{margin:"10px", border:"1px solid black"}}>
          <img src={user.avatar} alt={user.first_name} />
          <p>{`${user.first_name} ${user.last_name}`}</p>
          <Link to={`/users/${user.id}`}>More info</Link>
        </div>
      ))}
    </div>
  );
};

export default User;

// get the data

// https://reqres.in/api/users?page=2

// display the data

// loading indiacator

// error into ui
