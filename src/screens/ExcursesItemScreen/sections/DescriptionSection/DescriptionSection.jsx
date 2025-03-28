import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";

export const DescriptionSection = () => {
  // Navigation links data
  const navigationLinks = [
    { text: "Главная", href: "#" },
    { text: "Экскурсии", href: "#" },
    { text: "Личный кабинет", href: "#" },
  ];

  // Contact information data
  const contactInfo = [
    { icon: <PhoneIcon fontSize="small" />, text: "+7 964 944 18 74" },
    { icon: <PhoneIcon fontSize="small" />, text: "+7 918 919 98 28" },
    {
      icon: <TelegramIcon fontSize="small" />,
      text: "Телеграм-бот PeroTravel",
    },
  ];

  // Social media data
  const socialMedia = [
    { icon: <FacebookIcon />, href: "#" },
    { icon: <InstagramIcon />, href: "#" },
    // Using VK icon placeholder as MUI doesn't have a VK icon
    {
      icon: (
        <img
          src="https://c.animaapp.com/m8se7bge4ci0t5/img/vk-vkontakte-media-social.png"
          alt="VK"
          style={{ width: 24, height: 24 }}
        />
      ),
      href: "#",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "173px",
        backgroundColor: "#f5f5f5",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 5,
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Logo */}
        <Grid item xs={2}>
          <Box
            component="img"
            src="https://c.animaapp.com/m8se7bge4ci0t5/img/logo-color-1.png"
            alt="Logo color"
            sx={{
              height: 114,
              objectFit: "cover",
            }}
          />
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={2}>
          <Stack spacing={2}>
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                underline="none"
                sx={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  color: "#282828",
                  fontSize: "0.875rem",
                }}
              >
                {link.text}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={4}>
          <Stack spacing={2}>
            {contactInfo.map((contact, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                {contact.icon}
                <Typography
                  sx={{
                    ml: 2,
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    color: "#282828",
                    fontSize: "0.875rem",
                  }}
                >
                  {contact.text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Email and Social Media */}
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon fontSize="small" />
              <Typography
                sx={{
                  ml: 2,
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  color: "#282828",
                  fontSize: "0.875rem",
                }}
              >
                office@perotravel.ru
              </Typography>
            </Box>

            <Stack direction="row" spacing={2}>
              {socialMedia.map((social, index) => (
                <Link key={index} href={social.href} color="inherit">
                  {social.icon}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
