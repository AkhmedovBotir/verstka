import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const TourCardWrapperSection = () => {
  // Tour data
  const tourData = {
    title: "Золотое кольцо Абхазии (из Адлера)",
    type: "Автобусный тур",
    adultPrice: "1 618 ₽",
    childPrice: "1 412 ₽",
    duration: "2,5 часа",
    image: "https://c.animaapp.com/m8pweegwWhFvRw/img/rectangle-40-3.png",
    description:
      'Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...',
  };

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      <Card
        sx={{
          display: "flex",
          maxWidth: 780,
          height: 303,
          borderRadius: "10px",
          boxShadow: 1,
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Tour Image */}
        <CardMedia
          component="img"
          sx={{ width: 238, height: 303 }}
          image={tourData.image}
          alt="Tour destination"
        />

        {/* Content Container */}
        <Box
          sx={{ display: "flex", flexDirection: "column", width: "100%", p: 3 }}
        >
          {/* Tour Type Label */}
          <Typography
            variant="caption"
            sx={{
              color: "#F2C94C",
              fontWeight: 500,
              mb: 1,
            }}
          >
            {tourData.type}
          </Typography>

          {/* Tour Title */}
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            {tourData.title}
          </Typography>

          {/* Price and Duration Row */}
          <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
            {/* Adult Price */}
            <Box>
              <Stack direction="row" alignItems="center" spacing={1}>
                <AttachMoneyIcon sx={{ color: "#2F80ED" }} />
                <Typography
                  variant="h6"
                  sx={{ color: "#2F80ED", fontWeight: 700 }}
                >
                  {tourData.adultPrice}
                </Typography>
              </Stack>
              <Typography variant="caption" sx={{ fontWeight: 500 }}>
                Взрослый билет
              </Typography>
            </Box>

            {/* Child Price */}
            <Box>
              <Stack direction="row" alignItems="center" spacing={1}>
                <AttachMoneyIcon sx={{ color: "#2F80ED" }} />
                <Typography
                  variant="h6"
                  sx={{ color: "#2F80ED", fontWeight: 700 }}
                >
                  {tourData.childPrice}
                </Typography>
              </Stack>
              <Typography variant="caption" sx={{ fontWeight: 500 }}>
                Детский билет
              </Typography>
            </Box>

            {/* Duration */}
            <Stack direction="row" alignItems="center" spacing={1}>
              <AccessTimeIcon sx={{ color: "#2F80ED" }} />
              <Typography
                variant="h6"
                sx={{ color: "#2F80ED", fontWeight: 700 }}
              >
                {tourData.duration}
              </Typography>
            </Stack>
          </Stack>

          {/* Description */}
          <Box sx={{ display: "flex", mb: 2 }}>
            <Divider orientation="vertical" sx={{ mr: 1, borderWidth: 1.5 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {tourData.description}
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "40px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "12px",
              }}
            >
              Подробнее
            </Button>
            <IconButton
              sx={{
                bgcolor: "#F2F2F2",
                width: 40,
                height: 40,
                "&:hover": { bgcolor: "#E0E0E0" },
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
