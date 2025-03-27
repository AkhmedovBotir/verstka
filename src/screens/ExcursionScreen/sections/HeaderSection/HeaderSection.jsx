import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export const HeaderSection = () => {
  // Navigation links data
  const navLinks = [
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

  // Social media icons
  const socialIcons = [
    <Box
      key="vk"
      component="img"
      src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/vk-vkontakte-media-social.png"
      alt="VK"
      sx={{ width: 31, height: 20 }}
    />,
    <InstagramIcon style={{color: "#E59B06"}} key="instagram" />,
    <FacebookIcon style={{color: "#17C1BC"}} key="facebook" />,
  ];

  return (
    <Box sx={{ bgcolor: "#F6F6F6", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          {/* Logo */}
          <Grid item xs={12} sm={3}>
            <Box
              component="img"
              src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/logo-color-1.png"
              alt="Logo color"
              sx={{ height: 114, width: 80, objectFit: "cover" }}
            />
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              {navLinks.map((link, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  fontFamily="Montserrat, Helvetica"
                  fontWeight={500}
                  color="#282828"
                  sx={{ cursor: "pointer" }}
                >
                  {link.text}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              {contactInfo.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  {item.icon}
                  <Typography
                    variant="body2"
                    fontFamily="Montserrat, Helvetica"
                    fontWeight={500}
                    color="#282828"
                  >
                    {item.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Email and Social Media */}
          <Grid item xs={12} sm={3}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography
                  variant="body2"
                  fontFamily="Montserrat, Helvetica"
                  fontWeight={500}
                  color="#282828"
                >
                  office@perotravel.ru
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                {socialIcons.map((icon, index) => (
                  <Box key={index} sx={{ cursor: "pointer" }}>
                    {icon}
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeaderSection;