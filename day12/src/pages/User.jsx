import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams} from "react-router-dom";
// import { } from "../contaxt/AuthContextProvider";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

// write function to convert string into number
const getCurrentPage=(page)=>{
  // let pageNumber=Number(page)

  // if(typeof pageNumber!="number"){
  //   pageNumber=1;
  // }
  // console.log("pagenumber", pageNumber);

  // return pageNumber

  page =Number(page);
  if(typeof page !=="number" || page <=0){
    page=1
  }
  if(!page){
    page=1
  }
  return page;
}

const User = () => {
  //   const [users, setUsers] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams]=useSearchParams()
  // 1. Pagination
  const intialPage = searchParams.get("page");
  const [page, setPage]= useState(getCurrentPage(intialPage));

  
  // const isAuth = false;
  // const {isAuth}=useContext(AuthContext)

  const fetchAndUpdateData = (page) => {
    setLoading(true);
    getData(`https://reqres.in/api/users?page=${page}`)
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
    fetchAndUpdateData(page);
  }, [page]);


  useEffect(()=>{
    setSearchParams({page:page});
  },[page])

// // this is condition for if the user is auth or not , if user not auth it render on login page
// if(!isAuth){
//  return <Navigate to="/login"/>
// }
// i am writing this code in private route

// page change functions
const handlePageChange=(val)=>{
   const updatePage = page+val;
   setPage(updatePage)
}


// serachparams


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
      {/*3. invoke it */}
      <button onClick={()=>navigate(`/`)}>Go to home page</button>
      <Link to="/about">
        <button>Go to about page</button>
      </Link>
      <br />
      <br />
      {/* page maitaining  */}
      <button onClick={()=>handlePageChange(-1)}>Previous</button>
      <button disabled >{page}</button>
      <button onClick={()=>handlePageChange(1)}>Next</button>

    </div>
  );
};

export default User;


