import { Box, Grid, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

export const HighlightsSection = () => {
  // Route description items data
  const routeItems = [
    {
      text: 'Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца Ольденбурского;',
    },
    {
      text: 'Смотровая площадка "Прощай Родина", "Чабгарский" карниз, Подвесной мост через реку "Бзыбь";',
    },
    {
      text: 'Дегустация сыра, меда, вина, чачи (входит в стоимость экскурсии), Голубое Озеро, Юпшарский каньон ("Каменный мешок"), Озеро "Рица", Водопады "Девичьи и мужские слезы".',
    },
  ];

  // Optional route items
  const optionalRouteItems = [
    {
      text: 'Монастырь "Новый Афон", Новоафонская Пещера, "Рукотворный" водопад, храм "Симона Кананита", Лебединое озеро.',
    },
    {
      text: "Термальный источник в с. Приморское.",
    },
  ];

  // Destination images data
  const destinations = [
    {
      image: "https://c.animaapp.com/m8se7bge4ci0t5/img/------2.png",
      name: "Гагра",
      width: "413px",
    },
    {
      image: "https://c.animaapp.com/m8se7bge4ci0t5/img/------1.png",
      name: "Коллонада",
      width: "182px",
    },
  ];

  return (
    <Box sx={{ py: 8, px: 5 }}>
      <Grid container spacing={4}>
        {/* Left side - Route description */}
        <Grid item xs={12} md={5}>
          <Box sx={{ maxWidth: 554 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              color={blue[700]}
              gutterBottom
              fontFamily="Montserrat, Helvetica"
            >
              Описание маршрута
            </Typography>

            <Stack spacing={3} sx={{ mt: 4 }}>
              {routeItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: "warning.main",
                      borderRadius: 1,
                      mt: 0.5,
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    fontFamily="Montserrat, Helvetica"
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}

              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ ml: 5 }}
                fontFamily="Montserrat, Helvetica"
              >
                Далее на выбор:
              </Typography>

              {optionalRouteItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: "warning.main",
                      borderRadius: 1,
                      mt: 0.5,
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body2"
                    fontWeight="medium"
                    fontFamily="Montserrat, Helvetica"
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Right side - Destination images */}
        <Grid item xs={12} md={7}>
          <Box sx={{ position: "relative" }}>
            <Stack direction="row" spacing={2}>
              {destinations.map((destination, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: destination.width,
                    height: 570,
                    backgroundImage: `url(${destination.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                  }}
                >
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 24,
                      color: "warning.main",
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: "medium",
                      fontSize: 14,
                    }}
                  >
                    {destination.name}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src="https://c.animaapp.com/m8se7bge4ci0t5/img/-----------1.png"
                alt="Decoration"
                sx={{ height: 44, width: 86 }}
              />
              <Box
                component="img"
                src="https://c.animaapp.com/m8se7bge4ci0t5/img/---------1.png"
                alt="Decoration line"
                sx={{ height: 2, width: 476, ml: 4 }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
