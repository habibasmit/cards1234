import React, { useEffect, useState } from "react";

const Greet = ({ name, course }) => {

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  
},[userName])

  
};

export default Greet;