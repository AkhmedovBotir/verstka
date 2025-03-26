import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Box, Button, Card, Container, Stack, Typography, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const BlogSection = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Tour data for mapping
  const tours = [
    {
      id: 1,
      type: "Автобусный тур",
      title: "Обзорная по Сочи (из Адлера)",
      duration: "6 часов",
      price: "618 ₽",
      description:
        'Приглашаем вас на экскурсию \n"Обзорная по Большому Сочи":\nЭкскурсия начнется с подъёма на гору Большой Ахун - это высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...',
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13-3.png",
    },
    {
      id: 2,
      type: "Конный тур",
      title: "Конные прогулки",
      duration: "1,5 часа",
      price: "1 809 ₽",
      description:
        "Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...",
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13-2.png",
    },
    {
      id: 3,
      type: "Квадротур",
      title: "Пасть дракона",
      duration: "2,5 часа",
      price: "3 515 ₽",
      description:
        'Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или "Пасть Дракона" (экскурсионное название). \nВысота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...',
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13-1.png",
    },
    {
      id: 4,
      type: "Автобусный тур",
      title: "Женский монастырь",
      duration: "4 часа",
      price: "618 ₽",
      description:
        "Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека. \nЭто удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах",
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13.png",
    },
    {
      id: 4,
      type: "Автобусный тур",
      title: "Женский монастырь",
      duration: "4 часа",
      price: "618 ₽",
      description:
        "Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека. \nЭто удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах",
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13.png",
    },
    {
      id: 4,
      type: "Автобусный тур",
      title: "Женский монастырь",
      duration: "4 часа",
      price: "618 ₽",
      description:
        "Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека. \nЭто удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах",
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13.png",
    },
    {
      id: 4,
      type: "Автобусный тур",
      title: "Женский монастырь",
      duration: "4 часа",
      price: "618 ₽",
      description:
        "Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека. \nЭто удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах",
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-13.png",
    },
  ];

  const handleSlideChange = (swiper) => {
    const totalSlides = swiper.slides.length - swiper.params.slidesPerView + 1;
    const progress = ((swiper.activeIndex) / (totalSlides - 1)) * 100;
    setProgress(progress);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 8, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="primary">
            Популярные экскурсии
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Смотреть все
          </Typography>
        </Box>

        {/* Swiper slider */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Initialize progress
            const totalSlides = swiper.slides.length - swiper.params.slidesPerView + 1;
            const initialProgress = ((swiper.activeIndex) / (totalSlides - 1)) * 100;
            setProgress(initialProgress);
          }}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation]}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id}>
              <Card
                sx={{
                  height: 497,
                  position: "relative",
                  backgroundImage: `url(${tour.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 0,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                    p: 2,
                    pt: 10,
                  }}
                >
                  <Typography variant="body2" color="white">
                    {tour.type}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="warning.main"
                    sx={{ mt: 0.5 }}
                  >
                    {tour.title}
                  </Typography>

                  <Stack direction="row" spacing={3} sx={{ mt: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon
                        sx={{ width: 12, height: 12, color: "white" }}
                      />
                      <Typography variant="body2" color="white">
                        {tour.duration}
                      </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems="center">
                      <AttachMoneyIcon
                        sx={{ width: 15, height: 15, color: "white" }}
                      />
                      <Typography variant="body2" color="white">
                        {tour.price}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      mt: 2,
                      mb: 3,
                      fontSize: "0.75rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {tour.description}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "40px",
                      textTransform: "none",
                      width: 160,
                      height: 40,
                    }}
                  >
                    Подробнее
                  </Button>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation controls and progress bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 4 }}>
          <IconButton 
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{ ml: 2 }}
            disabled={activeIndex === 0}
          >
            <ArrowBackIosNewIcon 
              sx={{
                color: activeIndex >= 1 ? 'primary.main' : 'gray'
              }} 
            />
          </IconButton>
          <IconButton 
            onClick={() => swiperRef.current?.slideNext()}
            sx={{ mr: 2 }}
            disabled={activeIndex >= tours.length - 4} // Assuming 4 slides are visible at max
          >
            <ArrowForwardIosIcon 
              sx={{
                color: activeIndex ? 'primary.main' : 'gray'
              }} 
            />

          </IconButton>
          
          <Box sx={{ flexGrow: 1, height: '4px', bgcolor: 'divider', borderRadius: '2px', position: 'relative' }}>
            <Box 
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100%',
                width: `${progress}%`,
                bgcolor: 'primary.main',
                borderRadius: '2px',
                transition: 'width 0.3s ease'
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};