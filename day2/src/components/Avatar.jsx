import React from 'react'

const Avatar = () => {
 const style={
    borderRadius:"50%",
 }

  return (
    <div>
        <img src="https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016_1280.jpg" alt="img"
        width="200px"
        style={style}
        />
        <h4>Romuiia</h4>
    </div>
  )
}

export default Avatar