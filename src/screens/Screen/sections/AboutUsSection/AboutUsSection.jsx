import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

export const AboutUsSection = () => {
  // Navigation items
  const navItems = [
    { text: "Главная", isActive: true },
    { text: "Экскурсии", isActive: false },
    { text: "Личный кабинет", isActive: false },
  ];

  // Social media icons
  const socialIcons = [
    {
      alt: "VK",
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/vk-vkontakte-media-social-1.png",
    },
    {
      alt: "Group",
      src: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/group-4.png",
    },
    {
      component: <FacebookIcon sx={{ width: 30, height: 30, color: '#fff' }}/>,
      alt: "Facebook",
    },
  ];

  return (
    <Box sx={{ position: "relative", height: "902px", width: "100%" }}>
      <Box
        component="img"
        src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-1.png"
        alt="Background"
        sx={{
          width: "100%",
          height: "790px",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Logo */}
      <Box
        component="img"
        src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/----.png"
        alt="Logo"
        sx={{
          width: "40px",
          height: "57px",
          position: "absolute",
          top: "26px",
          left: "160px",
        }}
      />

      {/* Navigation */}
      <Stack
        direction="row"
        spacing={4}
        sx={{
          position: "absolute",
          top: "46px",
          right: "154px",
        }}
      >
        {navItems.map((item, index) => (
          <Typography
            key={index}
            variant="subtitle2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              color: item.isActive ? "#ffc700" : "white",
              cursor: "pointer",
            }}
          >
            {item.text}
          </Typography>
        ))}
      </Stack>

      {/* Main Heading */}
      <Box
        sx={{
          position: "absolute",
          top: "237px",
          left: "160px",
          width: "723px",
          height: "192px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 700,
            fontSize: "64px",
            color: "white",
            position: "absolute",
            top: 0,
            left: "2px",
          }}
        >
          ПУТЕШЕСТВУЙ
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "Helvetica",
            letterSpacing: "0.05em",
            fontWeight: 900,
            fontSize: "72px",
            color: "transparent",
            WebkitTextStroke: "2px #ffffff",
            position: "absolute",
            top: "75px",
            left: 0,
          }}
        >
          PERO TRAVEL
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "'mr_KindlyJasmineG-Regular', Helvetica",
            fontWeight: 400,
            fontSize: "64px",
            color: "#ffc700",
            position: "absolute",
            top: "48px",
            left: "500px",
          }}
          style={{fontFamily: "mr_KindlyJasmineG"}}
        >
          вместе с
        </Typography>
      </Box>

      {/* Excursions Button */}
      <Button
        variant="contained"
        endIcon={<ArrowForwardIosIcon sx={{ width: "14px", height: "7px" }} />}
        sx={{
          position: "absolute",
          top: "491px",
          left: "160px",
          width: "230px",
          height: "50px",
          borderRadius: "60px",
          backgroundColor: "#0499DD",
          "&:hover": {
            backgroundColor: "#0388c5",
          },
          textTransform: "none",
          fontFamily: "Montserrat, Helvetica",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        К экскурсиям
      </Button>

      {/* Social Media Icons */}
      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          top: "333px",
          right: "163px",
        }}
      >
        {socialIcons.map((icon, index) => (
          <IconButton
            key={index}
            sx={{ width: "32px", height: "32px", padding: 0 }}
          >
            {icon.component || (
              <Box
                component="img"
                src={icon.src}
                alt={icon.alt}
                sx={{
                  width: icon.alt === "VK" ? "26px" : "27px",
                  height: icon.alt === "VK" ? "17px" : "27px",
                  color: "white",
                }}
              />
            )}
          </IconButton>
        ))}
      </Stack>

      {/* Bottom Images */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: "0px",
          height: "227px",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "360px",
            height: "227px",
            backgroundImage:
              "url(https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-11.png)",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            position: "relative",
            borderRadius: "10px",

          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "66px",
              height: "66px",
              borderRadius: "33px",
              border: "1px solid #ffc700",
              boxShadow: "0px 0px 4px #ffc600, 0px 0px 6px rgba(0, 0, 0, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayArrowIcon
              sx={{ width: "44px", height: "44px", color: "#ffc700" }}
            />
          </Box>
        </Box>

        <Box
          component="img"
          src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-12.png"
          alt="Travel image"
          sx={{
            borderRadius: "10px",
            marginLeft: "15px",
            width: "235px",
            height: "227px",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};
