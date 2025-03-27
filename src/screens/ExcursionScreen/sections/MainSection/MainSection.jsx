import { Box, Stack, Typography, IconButton, Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import bgVideo from "../../../../assets/video2.mp4"; // Adjust the path to your video

export const MainSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isTablet = useMediaQuery('(max-width:1024px)');

  // Navigation items data
  const navItems = [
    { label: "Главная", isActive: false, link: "/" },
    { label: "Экскурсии", isActive: true, link: "/excursion" },
    { label: "Личный кабинет", isActive: false, link: "/" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(56, 77, 112)',
        padding: '20px'
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          color: '#fff'
        }}
      >
        <CloseIcon />
      </IconButton>
      <Stack spacing={4}>
        {navItems.map((item, index) => (
          <Typography
            key={index}
            variant="h5"
            component="a"
            href={item.link}
            onClick={handleDrawerToggle}
            sx={{
              fontFamily: "'Montserrat', Helvetica",
              fontWeight: 500,
              color: item.isActive ? "#FFFF00" : "white",
              letterSpacing: 0,
              lineHeight: "normal",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Box width="100%" position="relative" sx={{ height: "290px" }}>
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        src={bgVideo}
        sx={{
          width: "100%",
          height: "290px",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      {/* Logo */}
      <Box
        component="img"
        src="https://c.animaapp.com/m8pweegwWhFvRw/img/----.png"
        alt="Logo"
        sx={{
          position: "absolute",
          width: 40,
          height: 57,
          top: 26,
          left: 160,
          '@media (max-width: 1024px)': {
            left: '20px'
          }
        }}
      />

      {/* Navigation - Desktop */}
      {!isTablet ? (
        <Stack
          direction="row"
          spacing={2}
          position="absolute"
          top={46}
          right={154}
        >
          {navItems.map((item, index) => (
            <Typography
              key={index}
              component="a"
              href={item.link}
              sx={{
                fontFamily: "'Montserrat', Helvetica",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: item.isActive ? "#FFFF00" : "white",
                letterSpacing: 0,
                lineHeight: "normal",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>
      ) : (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: 26,
            right: 20,
            color: '#fff'
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: 'rgb(56, 77, 112)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Title */}
      <Box
        position="absolute"
        top={142}
        left={160}
        sx={{
          '@media (max-width: 1024px)': {
            left: '20px',
            right: '20px',
            textAlign: 'center'
          }
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Montserrat', Helvetica",
            fontWeight: 700,
            fontSize: "4.5rem",
            color: "white",
            letterSpacing: 0,
            lineHeight: "normal",
            '@media (max-width: 768px)': {
              fontSize: '3rem'
            }
          }}
        >
          НАШИ ЭКСКУРСИИ
        </Typography>
      </Box>
    </Box>
  );
};