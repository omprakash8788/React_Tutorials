import React from 'react'

const Avatar = ({src,name,rounded,age,  address, hobbies}) => {
    const styles={
        borderRadius:"16px",
    };
    if(rounded){
        styles.borderRadius="50%";
    }
  return (
    <div>
        <img src={src} alt="user-name" width="200px" style={styles} />
        <h5>Name:{name}</h5>
        <p>Age:{age}</p>
        {/* <p>{address}</p> */}
    </div>
  )
}

export default Avatar