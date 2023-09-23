import React, { Component } from "react"
import axios from "axios"


  async function getPosts() {
   axios.get("https://httpbin.org/post").then(Response)
    console.log(Response)
  }


const index = () => {
  return (
    <div>index</div>
  )
}
export default index