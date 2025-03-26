import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export const GallerySection = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", py: 4 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Box
            component="img"
            src="https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-4.png"
            alt="Landscape view"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxHeight: 749,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#EDEDED", // gray-2 equivalent
              borderRadius: "10px",
              p: 6,
              position: 'absolute',
              right: '300px',
              top: "150px",
              width: '542px',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
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
