import React, { Component } from 'react';
import Button from '@mui/material/Button';

export default function BasicButton(props) {
    const {title, handleButtonAction} = props;
    return ( 
        <Button variant="contained" onClick={handleButtonAction}>{title}</Button>
     );
}
 