import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { positions } from '@material-ui/system';


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
    <Box className="cardContainer" maxWidth="40%" minWidth="30%" height="50vh" position="absolute" top="50%" left="10%" bgcolor="white">

      <h1>Contact form</h1>

      <form onSubmit={(e) => {e.preventDefault(); }}>
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
      </form>

    </Box>
  );
}

export default Form;