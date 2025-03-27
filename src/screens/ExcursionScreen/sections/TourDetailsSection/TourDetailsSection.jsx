import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const TourDetailsSection = () => {
  const tourData = {
    title: "Золотое кольцо Абхазии (из Адлера)",
    type: "Автобусный тур",
    adultPrice: "1 618 ₽",
    childPrice: "1 412 ₽",
    duration: "2,5 часа",
    description:
      'Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...',
    image: "https://c.animaapp.com/m8pweegwWhFvRw/img/rectangle-40-3.png",
  };

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Card
        sx={{
          display: "flex",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: 1,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 238, height: 303 }}
          image={tourData.image}
          alt="Tour image"
        />

        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto", p: 3 }}>
            <Typography variant="caption" color="warning.main" fontWeight="500">
              {tourData.type}
            </Typography>

            <Typography variant="h6" fontWeight="bold" mt={1} mb={2}>
              {tourData.title}
            </Typography>

            <Stack direction="row" spacing={3} mb={2}>
              <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AttachMoneyIcon sx={{ color: "primary.main" }} />
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {tourData.adultPrice}
                  </Typography>
                </Stack>
                <Typography variant="caption" fontWeight="500">
                  Взрослый билет
                </Typography>
              </Box>

              <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <AttachMoneyIcon sx={{ color: "primary.main" }} />
                  <Typography variant="h6" color="primary" fontWeight="bold">
                    {tourData.childPrice}
                  </Typography>
                </Stack>
                <Typography variant="caption" fontWeight="500">
                  Детский билет
                </Typography>
              </Box>

              <Stack direction="row" alignItems="center" spacing={1}>
                <AccessTimeIcon
                  fontSize="small"
                  sx={{ color: "primary.main" }}
                />
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {tourData.duration}
                </Typography>
              </Stack>
            </Stack>

            <Box sx={{ display: "flex", mt: 1 }}>
              <Divider
                orientation="vertical"
                sx={{ mr: 1, borderWidth: 1.5 }}
              />
              <Typography variant="body2" fontWeight="500">
                {tourData.description}
              </Typography>
            </Box>
          </CardContent>

          <Box sx={{ display: "flex", alignItems: "center", pl: 3, pb: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "40px",
                textTransform: "none",
                px: 4,
                py: 1,
              }}
            >
              <Typography fontWeight="bold" fontSize="12px">
                Подробнее
              </Typography>
            </Button>

            <IconButton
              sx={{
                ml: 2,
                bgcolor: "grey.200",
                "&:hover": { bgcolor: "grey.300" },
              }}
              aria-label="add to favorites"
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
