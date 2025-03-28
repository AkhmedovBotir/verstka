import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";

export const GallerySection = () => {
  // Navigation menu items
  const navItems = [
    { label: "Главная", href: "#", isActive: false },
    { label: "Экскурсии", href: "#", isActive: true },
    { label: "Личный кабинет", href: "#", isActive: false },
  ];

  return (
    <Box sx={{ position: "relative", width: "100%", height: "670px" }}>
      <Box
        sx={{
          position: "relative",
          height: "671px",
          backgroundImage:
            "url(https://c.animaapp.com/m8se7bge4ci0t5/img/------4.png)",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        {/* Favorite Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: "408px",
            left: "447px",
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(500px) brightness(100%)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            },
          }}
        >
          <FavoriteIcon
            sx={{ color: "white", width: "30px", height: "30px" }}
          />
        </IconButton>

        {/* Back to tours button */}
        <Button
          variant="text"
          sx={{
            position: "absolute",
            top: "408px",
            left: "160px",
            width: "274px",
            height: "50px",
            borderRadius: "60px",
            color: "white",
            fontFamily: "'Montserrat', Helvetica",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          endIcon={
            <ArrowForwardIosIcon sx={{ width: "14px", height: "7px" }} />
          }
        >
          К другим экскурсиям
        </Button>

        {/* Tour Title Section */}
        <Box
          sx={{
            position: "absolute",
            width: "765px",
            height: "157px",
            top: "211px",
            left: "160px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              fontFamily: "'Montserrat', Helvetica",
              fontWeight: "bold",
              fontSize: "24px",
              color: "#FFCC00", // Yellow color
              lineHeight: "normal",
            }}
          >
            Автобусный тур
          </Typography>

          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              top: "39px",
              left: "0",
              fontFamily: "'Montserrat', Helvetica",
              fontWeight: "bold",
              fontSize: "48px",
              color: "white",
              lineHeight: "normal",
            }}
          >
            ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ
            <br />
            (ИЗ АДЛЕРА)
          </Typography>
        </Box>

        {/* Navigation Bar */}
        <Box
          sx={{
            position: "absolute",
            width: "1120px",
            height: "57px",
            top: "26px",
            left: "160px",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="https://c.animaapp.com/m8se7bge4ci0t5/img/----.png"
            alt="Logo"
            sx={{
              position: "absolute",
              width: "40px",
              height: "57px",
              top: "0",
              left: "0",
            }}
          />

          {/* Navigation Menu */}
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              gap: "20px",
              top: "20px",
              right: "0",
            }}
          >
            {navItems.map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                component="a"
                href={item.href}
                sx={{
                  fontFamily: "'Montserrat', Helvetica",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: item.isActive ? "#FFCC00" : "white",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
