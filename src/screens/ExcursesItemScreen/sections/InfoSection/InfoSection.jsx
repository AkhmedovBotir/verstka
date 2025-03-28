import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

export const InfoSection = () => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Иван Иванов, 25 лет",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://c.animaapp.com/m8se7bge4ci0t5/img/rectangle-26-1.png",
    },
    {
      id: 2,
      name: "Иван Иванов, 25 лет",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://c.animaapp.com/m8se7bge4ci0t5/img/rectangle-26.png",
    },
  ];

  return (
    <Container sx={{ py: 8, position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            fontSize: "1.5rem",
          }}
        >
          Отзывы
        </Typography>
        <Link
          href="#"
          underline="always"
          sx={{
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "#282828",
          }}
        >
          Смотреть все
        </Link>
      </Box>

      <Grid container spacing={3}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={6} key={testimonial.id}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: "10px",
                height: "322px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box sx={{ position: "relative", height: "100%", p: 2 }}>
                <Box
                  component="img"
                  src={testimonial.image}
                  alt="User profile"
                  sx={{
                    width: "245px",
                    height: "245px",
                    position: "absolute",
                    left: "45px",
                    top: "38px",
                    objectFit: "cover",
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    position: "absolute",
                    left: "318px",
                    top: "38px",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "#282828",
                  }}
                >
                  {testimonial.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    left: "318px",
                    top: "75px",
                    width: "395px",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    color: "#282828",
                  }}
                >
                  {testimonial.text}
                </Typography>

                <Typography
                  sx={{
                    position: "absolute",
                    top: testimonial.id === 1 ? "56px" : "57px",
                    left: "537px",
                    transform: "rotate(16.66deg)",
                    opacity: 0.4,
                    fontFamily: "'Marko One', Helvetica",
                    color: "#FFD700",
                    fontSize: "500px",
                    lineHeight: "normal",
                    width: "197px",
                    whiteSpace: "nowrap",
                  }}
                >
                  &quot;
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, position: "relative", height: "43px" }}>
        <Box
          component="img"
          src="https://c.animaapp.com/m8se7bge4ci0t5/img/----------.png"
          alt="Logo"
          sx={{
            position: "absolute",
            width: "86px",
            height: "44px",
            left: 0,
            top: "-1px",
          }}
        />
        <Box
          component="img"
          src="https://c.animaapp.com/m8se7bge4ci0t5/img/--------.png"
          alt="Divider"
          sx={{
            position: "absolute",
            width: "1143px",
            height: "0.5px",
            left: "137px",
            top: "20px",
          }}
        />
      </Box>
    </Container>
  );
};
