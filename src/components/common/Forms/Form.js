import { Box, TextField } from "@mui/material";
import React, { Component } from "react";
import BasicButton from "../Button/BasicButton";

const Form = (props) => {
    const { title, setEmail, email, setPassword, handleButtonAction } = props;
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div>
            <div>
                <h3 className="heading-container">{title} Form</h3>
            </div>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="email"
                    label="Enter Email"
                    type="email"
                    variant="outlined"
                    onBlur={handleEmailChange}
                />
                <TextField
                    id="password"
                    label="Enter Password"
                    type="password"
                    variant="outlined"
                    onBlur={handlePasswordChange}
                />
            </Box>
            <BasicButton
                title={title}
                handleButtonAction={handleButtonAction}
            ></BasicButton>
        </div>
    );
};

export default Form;
