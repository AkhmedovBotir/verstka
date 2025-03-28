import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

export const HeroSection = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/1.png",
      alt: "Mountain landscape",
      gridArea: { xs: "auto", md: "1 / 1 / 3 / 3" },
    },
    {
      id: 2,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13-1.png",
      alt: "Waterfall scene",
      gridArea: { xs: "auto", md: "1 / 3 / 5 / 3" },
    },
    {
      id: 3,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/3.png",
      alt: "Nature view",
      gridArea: { xs: "auto", md: "1 / 4 / 3 / 5" },
    },
    {
      id: 4,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/4.png",
      alt: "Scenic landscape",
      gridArea: { xs: "auto", md: "1 / 5 / 3 / 6" },
    },
    {
      id: 5,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/5.png",
      alt: "Mountain view",
      gridArea: { xs: "auto", md: "3 / 1 / 5 / 2" },
    },
    {
      id: 6,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/6.png",
      alt: "Lake scene",
      gridArea: { xs: "auto", md: "3 / 2 / 4 / 3" },
    },
    {
      id: 7,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/7.png",
      alt: "Forest view",
      gridArea: { xs: "auto", md: "4 / 2 / 5 / 3" },
    },
    {
      id: 8,
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/8.png",
      alt: "Sunset landscape",
      gridArea: { xs: "auto", md: "3 / 4 / 5 / 6" },
    },
  ];

  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ position: "relative", width: "100%", py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 10,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            fontFamily="Montserrat, Helvetica"
          >
            Галерея
          </Typography>
          <Link
            href="#"
            underline="always"
            sx={{
              fontSize: "0.75rem",
              fontWeight: 500,
              fontFamily: "Montserrat, Helvetica",
              color: "text.primary",
            }}
          >
            Смотреть все
          </Link>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gridTemplateRows: { md: "repeat(4, auto)" },
            gap: 3,
            width: "100%",
          }}
        >
          {galleryImages.map((image) => (
            <Box
              key={image.id}
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                gridArea: image.gridArea,
                display: "block",
                borderRadius: '10px',
                transition: 'transform 0.5s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.07)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  zIndex: 1,
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};