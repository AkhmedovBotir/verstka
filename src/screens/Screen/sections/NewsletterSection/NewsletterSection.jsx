import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import React from "react";

export const NewsletterSection = () => {
  // Form field data for mapping
  const formFields = [
    { id: "name", label: "Имя" },
    { id: "phone", label: "Телефон" },
    { id: "email", label: "Почта" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "700px",
        backgroundImage:
          "url(https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-27.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "600px",
          height: "100%",
          marginLeft: "auto",
          marginRight: "200px",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px) brightness(100%)",
        }}
      >
        <Box sx={{ padding: "100px" }}>
          <Typography
            variant="h5"
            fontFamily="Montserrat, Helvetica"
            fontWeight="bold"
            color="white"
            mb={2}
          >
            Остались вопросы?
          </Typography>

          <Typography
            variant="body2"
            fontFamily="Montserrat, Helvetica"
            fontWeight="medium"
            color="yellow"
            mb={4}
          >
            Оставь заявку и мы ответим
          </Typography>

          <Stack spacing={5}>
            {formFields.map((field) => (
              <Box key={field.id} sx={{ position: "relative" }}>
                <TextField
                  id={field.id}
                  label={field.label}
                  variant="standard"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      color: "white",
                      fontFamily: "Montserrat, Helvetica",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "white",
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: "medium",
                      fontSize: "0.875rem",
                    },
                  }}
                  sx={{
                    "& .MuiInput-root:before": {
                      borderBottom: "none",
                    },
                    "& .MuiInput-root:after": {
                      borderBottom: "none",
                    },
                  }}
                />
                <Box
                  component="img"
                  src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/line-3.svg"
                  alt="Line"
                  sx={{
                    width: "360px",
                    height: "1px",
                    marginTop: "0px",
                  }}
                />
              </Box>
            ))}
          </Stack>

          <Button
            variant="contained"
            sx={{
              width: "230px",
              height: "50px",
              borderRadius: "60px",
              backgroundColor: "#007BFF",
              marginTop: "50px",
              textTransform: "none",
              fontFamily: "Montserrat, Helvetica",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Оставить заявку
          </Button>
        </Box>
      </Box>
    </Box>
  );
};