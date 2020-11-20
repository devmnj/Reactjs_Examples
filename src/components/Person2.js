import React from "react";

function Person2(props) {
  return (
    <div>
        {props.name}<p> </p>
      <button onClick={()=>props.greetHim(`Hi ${props.rel}`)}>Greet</button>

    </div>
  );
}

export default Person2;


