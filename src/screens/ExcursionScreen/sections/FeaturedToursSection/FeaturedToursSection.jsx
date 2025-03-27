import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export const FeaturedToursSection = () => {
  const toursData = [
    {
      id: 1,
      title: "Золотое кольцо Абхазии (из Адлера)",
      type: "Автобусный тур",
      adultPrice: "1 618 ₽",
      childPrice: "1 412 ₽",
      duration: "2,5 часа",
      description:
        'Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок...',
      image: "https://c.animaapp.com/m8pweegwWhFvRw/img/rectangle-40-3.png",
    },
    {
      id: 2,
      title: "Тур по Сочи и Красной Поляне",
      type: "Групповая экскурсия",
      adultPrice: "2 350 ₽",
      childPrice: "1 950 ₽",
      duration: "6 часов",
      description:
      "Экскурсия по самым красивым местам Сочи и Красной Поляны. Посещение Олимпийского парка, смотровых площадок с видом на горы, и других достопримечательностей. Включен обед в традиционном кавказском ресторане.",
      image: "https://c.animaapp.com/m8pweegwWhFvRw/img/rectangle-40-3.png",
    },
    {
      id: 3,
      title: "Морская прогулка по Черному морю",
      type: "Морская экскурсия",
      adultPrice: "1 200 ₽",
      childPrice: "900 ₽",
      duration: "1,5 часа",
      description:
      "Незабываемая морская прогулка вдоль побережья с возможностью купания в открытом море. На борту есть все необходимое для комфортного отдыха. В стоимость включены прохладительные напитки.",
      image: "https://c.animaapp.com/m8pweegwWhFvRw/img/rectangle-40-3.png",
    },
  ];

  return (
    <Box sx={{ width: "100%", py: 2 }}>
      {toursData.map((tour) => (
        <Card
          key={tour.id}
          sx={{
            display: "flex",
            height: 303,
            borderRadius: "10px",
            boxShadow: 1,
            position: "relative",
            mb: 3,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 238, height: 303 }}
            image={tour.image}
            alt="Tour image"
          />

          <CardContent sx={{ flex: 1, p: 3, position: "relative" }}>
            <Typography
              variant="caption"
              color="warning.main"
              fontWeight="500"
              component="div"
            >
              {tour.type}
            </Typography>

            <Typography
              variant="h6"
              component="h2"
              fontWeight="bold"
              sx={{ mt: 1, mb: 2 }}
            >
              {tour.title}
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AttachMoneyIcon sx={{ mr: 1 }} />
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    component="span"
                  >
                    {tour.adultPrice}
                  </Typography>
                </Box>
                <Typography variant="caption" fontWeight="500">
                  Взрослый билет
                </Typography>
              </Box>

              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AttachMoneyIcon sx={{ mr: 1 }} />
                  <Typography
                    variant="h6"
                    color="primary"
                    fontWeight="bold"
                    component="span"
                  >
                    {tour.childPrice}
                  </Typography>
                </Box>
                <Typography variant="caption" fontWeight="500">
                  Детский билет
                </Typography>
              </Box>

              <Box sx={{ display: "flex", ml: 5, alignItems: "center" }}>
                <AccessTimeIcon sx={{ mr: 1 }} />
                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight="bold"
                  component="span"
                >
                  {tour.duration}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                borderLeft: "3px solid",
                borderColor: "divider",
                pl: 2,
                mb: 2,
              }}
            >
              <Typography variant="body2" fontWeight="500">
                {tour.description}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "40px",
                  px: 3,
                  py: 1,
                  textTransform: "none",
                }}
              >
                Подробнее
              </Button>
              <IconButton
                sx={{
                  ml: 2,
                  bgcolor: "grey.200",
                  border: 2,
                  borderColor: "primary.main",
                  width: 40,
                  height: 40,
                }}
                aria-label="add to favorites"
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default FeaturedToursSection;