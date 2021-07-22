import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { borders } from '@material-ui/system';
import { positions } from '@material-ui/system';
import { Typography } from '@material-ui/core';
import { shadows } from '@material-ui/system';



function Form () {
  const [formSubmit, setFormSubmit] = useState(false);

  useEffect(() => {

    function logBooking(e) {
        let array= Array.from(e.target);
  
        //array.map((input) => input.value)
        console.log(array.map((input) => input.value))
    }

    document.addEventListener("submit", logBooking);
    return () => {
        document.removeEventListener("submit", logBooking);
    };
    //console.log("something");
  }, [formSubmit]); 

  //e.preventDefault(); hogy ne töltsön újra az oldal
  //          <button type="submit" onClick= {() => {setFormSubmit(true)}}>Send</button> 33.sor másik megoldás

  return (
    <Box className="cardContainer" width="500px" height="300px" position="absolute" top="50%" left="15%" bgcolor="rgba(255,255,255,0.6)" borderLeft={10} borderColor="white" borderRadius="0px 50px 50px 0px" boxShadow={3} letterSpacing={1}>

      <Box component="h1" height="50px" margin="10px" align="center" color="white" fontSize="28pt">
        Contact form
      </Box>

      <Box component="form" onSubmit={(e) => {e.preventDefault(); }} display="flex" flexDirection="column" alignItems="center">

        <TextField id="standard-basic" label="First name" display="block"/>
        <TextField id="standard-basic" label="Last name" display="block"/>
        <TextField id="standard-basic" label="E-mail" display="block"/>

        <Button id="button" variant="contained" display="block" color="primary" type="submit" onSubmit={(e) => {e.preventDefault(); setFormSubmit(true) }}>Send</Button>
      </Box>

      {/* <form onSubmit={(e) => {e.preventDefault(); }}>
        <Box display="block" >
          <TextField id="standard-basic" label="First name"/>
        </Box>
        <Box display="block">
          <TextField id="standard-basic" label="Last name"/>
        </Box>
        <Box display="block">
          <TextField id="standard-basic" label="E-mail"/>
        </Box>

        <Button variant="contained" display="block" color="primary" type="submit" onSubmit={(e) => {e.preventDefault(); setFormSubmit(true) }}>Send</Button>
      </form> */}

    </Box>
  );
}

export default Form;