import { Box, Card, Container, Typography, Link, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const FeaturedDestinationsSection = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Иван Иванов, 25 лет",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-26-1.png",
    },
    {
      id: 2,
      name: "Иван Иванов, 25 лет",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-26.png",
    },
    {
        id: 1,
        name: "Иван Иванов, 25 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-26-1.png",
      },
      {
        id: 2,
        name: "Иван Иванов, 25 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://c.animaapp.com/m8pgdzd8FQTPbO/img/rectangle-26.png",
      },
    // Add more testimonials if needed
  ];

  const handleSlideChange = (swiper) => {
    const totalSlides = swiper.slides.length - swiper.params.slidesPerView + 1;
    const progress = ((swiper.activeIndex) / (totalSlides - 1)) * 100;
    setProgress(progress);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Container sx={{ py: 10 }} maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 10,
          mt: 5,
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="primary">
          Отзывы
        </Typography>
        <Link
          href="#"
          underline="always"
          sx={{
            fontSize: "0.75rem",
            color: "#282828",
            fontWeight: 500,
          }}
        >
          Смотреть все
        </Link>
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
          900: {
            slidesPerView: 2,
          },
        }}
        modules={[Navigation]}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card
              sx={{
                position: "relative",
                height: 322,
                borderRadius: "10px",
                bgcolor: "#F8F8F8",
                p: 2,
                overflow: "visible",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  src={testimonial.image}
                  alt="User"
                  sx={{
                    width: 245,
                    height: 245,
                    objectFit: "cover",
                    ml: 0.5,
                  }}
                />
                <Box sx={{ ml: 3, width: "100%" }}>
                  <Typography
                    fontWeight="bold"
                    fontSize="0.875rem"
                    color="#282828"
                    sx={{ mb: 1 }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    fontSize="0.875rem"
                    color="#282828"
                    fontWeight="medium"
                    sx={{ maxWidth: 395 }}
                  >
                    {testimonial.text}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  position: "absolute",
                  top: 56,
                  right: 36,
                  fontSize: "500px",
                  fontFamily: "'Marko One', Helvetica",
                  color: "#FFD700",
                  opacity: 0.4,
                  transform: "rotate(16.66deg)",
                  lineHeight: 1,
                  zIndex: 0,
                }}
              >
                "
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

       {/* Navigation controls and progress bar */}
       <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
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
          disabled={activeIndex >= testimonials.length - 1} // Assuming 1 slide is visible at a time
        >
          <ArrowForwardIosIcon
           sx={{
            color: activeIndex >= 1 ? 'primary.main' : 'gray'
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
    </Container>
  );
};