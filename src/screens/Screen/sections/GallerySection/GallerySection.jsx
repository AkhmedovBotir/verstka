import { Box, Grid, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

export const GallerySection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ 
      width: "100%", 
      position: "relative", 
      py: 4,
      overflow: "hidden"
    }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-4.png"
            alt="Landscape view"
            sx={{
              width: "100%",
              height: isMd ? "749px" : "400px",
              objectFit: "cover",
              maxHeight: 749,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#EDEDED",
              borderRadius: "10px",
              p: isMd ? 6 : isSm ? 4 : 3,
              position: "absolute",
              right: isMd ? "300px" : "50%",
              transform: isMd ? "none" : "translateX(50%)",
              top: isMd ? "150px" : "50%",
              ...(!isMd && { transform: "translate(50%, -50%)" }),
              width: isMd ? "542px" : "90%",
              maxWidth: "542px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant={isMd ? "h4" : "h5"}
              fontWeight="bold"
              color="primary"
              sx={{ mb: 3 }}
            >
              О нас
            </Typography>

            <Typography
              variant="body2"
              fontWeight="medium"
              color="#282828"
              sx={{ mb: 3 }}
            >
              PeroTravel - Первый онлайн-сервис по бронированию экскурсий без
              очередей и операторов.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Typography
              variant="body2"
              fontWeight="medium"
              color="text.primary"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};