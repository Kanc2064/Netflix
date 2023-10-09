import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { useLocation } from 'react-router-dom'
import "./watch.scss"

export default function Watch() {
  //const location = useState([]);
  const location = useLocation();
  console.log(location)
  //const movie = location.movie;
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress controls src="https://www.vecteezy.com/free-videos/nature" />
    </div>
  )
}
