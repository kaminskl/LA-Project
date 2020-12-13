import React from 'react'
const logo = ({img}) => {

    const myImage = React.createElement("img", {
       src:"../images/logo.png",
       // any other image attributes you need go here
    }, null);
  
    return (
      {myImage}
    );
  };
  export {logo};