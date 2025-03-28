import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

export const BookingSection = () => {
  // Document requirement data
  const documentRequirements = [
    {
      id: 1,
      title: "Паспорт гражданина РФ",
      description: "",
      icon: "https://c.animaapp.com/m8se7bge4ci0t5/img/pasport-1.svg",
    },
    {
      id: 2,
      title: "Гражданам до 14 лет свидетельство о рождении",
      description:
        "Несовершеннолетние дети пересекают границу в сопровождении родителей, в сопровождении законного представителя (нотариально заверенная доверенность с указанием страны вывоза ребенка).",
      icon: "https://c.animaapp.com/m8se7bge4ci0t5/img/pasport-1.svg",
    },
  ];

  // Alert information data
  const alertInfo = [
    {
      id: 1,
      text: (
        <Typography variant="body2" fontWeight="medium">
          <span style={{ fontWeight: 500 }}>
            Иностранным гражданам въезд в Абхазию{" "}
          </span>
          <span style={{ fontWeight: 700 }}>ограничен</span>
          <span style={{ fontWeight: 500 }}>
            , кроме граждан Украины, республик ДНР и ЛНР.
          </span>
        </Typography>
      ),
    },
    {
      id: 2,
      text: (
        <Typography variant="body2" fontWeight="medium">
          При возвращении из Абхазии в Россию сдавать ПЦР-тест не нужно, на
          карантин помещать не будут (Постановление Правительства РФ 1996-Р от
          01.08.2020).
        </Typography>
      ),
    },
  ];

  return (
    <Box sx={{ py: 4, width: "100%" }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Важная информация
      </Typography>

      <Typography variant="h6" fontWeight="medium" sx={{ mt: 3, mb: 2 }}>
        При пересечении границы (Россия-Абхазия) при себе иметь:
      </Typography>

      <Stack spacing={4}>
        {documentRequirements.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            spacing={2}
            alignItems="flex-start"
          >
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "warning.main",
                  borderRadius: "50%",
                }}
              />
              <Box
                component="img"
                src={item.icon}
                alt="Document icon"
                sx={{
                  position: "absolute",
                  width: 51,
                  height: 51,
                  top: 17,
                  left: 17,
                }}
              />
            </Box>
            <Box sx={{ maxWidth: 455 }}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                {item.title}
              </Typography>
              {item.description && (
                <Typography variant="body2" fontWeight="medium" sx={{ mt: 2 }}>
                  {item.description}
                </Typography>
              )}
            </Box>
          </Stack>
        ))}
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mt: 4 }}
        justifyContent="flex-end"
      >
        {alertInfo.map((alert) => (
          <Paper
            key={alert.id}
            elevation={0}
            sx={{
              bgcolor: "grey.100",
              borderRadius: "10px",
              p: 3,
              position: "relative",
              width: { xs: "100%", md: 360 },
              height: 131,
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: 6,
                right: 24,
                opacity: 0.4,
                fontFamily: "'Marko One', Helvetica",
                color: "warning.main",
                fontSize: "4rem",
              }}
            >
              !
            </Typography>
            <Box sx={{ maxWidth: 275, pt: 1 }}>{alert.text}</Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
