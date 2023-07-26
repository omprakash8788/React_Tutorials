import React from 'react'

const Button = () => {
    const isUserAuth=true;
  return (
    <div>
        <button>Click</button>
        {/* conditional rendering */}
        {/* <h5>{1*2===4 ? "1":"0"}</h5> */}
        {isUserAuth ? "User Authenticated":"User Not Authenticated"}
    </div>
  )
}

export default Button