import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const FooterSection = () => {
  // Data for form fields
  const formData = {
    title: "Забронировать тур",
    date: "10 ноября 2021",
    adults: "5 взрослых",
    children: "Количество детей",
    bookButtonText: "Забронировать",
  };

  return (
    <Grid container sx={{ position: "relative", height: "640px" }}>
      <Grid item xs={12} md={8}>
        <Box
          component="img"
          src="https://c.animaapp.com/m8se7bge4ci0t5/img/-----.png"
          alt="Scenic landscape"
          sx={{
            width: "100%",
            height: "640px",
            objectFit: "cover",
          }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ p: 4, mt: 8 }}>
          <Stack spacing={3}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              fontFamily="Montserrat, Helvetica"
            >
              {formData.title}
            </Typography>

            {/* Date field */}
            <Paper
              elevation={1}
              sx={{
                p: 0,
                borderRadius: "10px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Typography
                fontFamily="Montserrat, Helvetica"
                fontWeight="medium"
                variant="body2"
              >
                {formData.date}
              </Typography>
              <CalendarTodayIcon fontSize="small" />
            </Paper>

            {/* Adults field */}
            <Paper
              elevation={1}
              sx={{
                p: 0,
                borderRadius: "10px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Typography
                fontFamily="Montserrat, Helvetica"
                fontWeight="medium"
                variant="body2"
              >
                {formData.adults}
              </Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </Paper>

            {/* Children field */}
            <Paper
              elevation={1}
              sx={{
                p: 0,
                borderRadius: "10px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Typography
                fontFamily="Montserrat, Helvetica"
                fontWeight="medium"
                variant="body2"
              >
                {formData.children}
              </Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </Paper>

            {/* Booking buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "60px",
                  height: "50px",
                  width: "267px",
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {formData.bookButtonText}
              </Button>

              <IconButton
                sx={{
                  bgcolor: "grey.200",
                  width: "50px",
                  height: "50px",
                  backdropFilter: "blur(500px)",
                }}
              >
                <FavoriteIcon color="action" />
              </IconButton>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};
export default FooterSection;