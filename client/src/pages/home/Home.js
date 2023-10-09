/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react'
import "./home.scss"
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'


const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGVhYjVlMGI2MWI2MTYwMDRmNTJmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NjA5NDQ3OSwiZXhwIjoxNjk2NTI2NDc5fQ.J3lzxAO0JNWmadI5ZSbmdoaEp_b_TRPn5tFC9e-v9Ng"
          },
        }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home

