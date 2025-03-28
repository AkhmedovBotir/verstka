import PaidIcon from "@mui/icons-material/Paid";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const CalendarSection = () => {
  // Data for the activity cards
  const activities = [
    {
      id: 1,
      name: "Дача Сталина",
      price: "200 ₽",
      hasPrice: true,
    },
    {
      id: 2,
      name: "Молочный водопад",
      price: "200 ₽",
      hasPrice: true,
    },
    {
      id: 3,
      name: "Новоафинская пещера",
      price: "500 ₽",
      hasPrice: true,
    },
    {
      id: 4,
      name: "Термальный источник",
      price: "500 ₽",
      hasPrice: true,
    },
    {
      id: 5,
      name: "Обед",
      price: "",
      hasPrice: false,
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 4, mb: 4 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        fontFamily="Montserrat, Helvetica"
        mb={3}
      >
        Дополнительные расходы (по желанию)
      </Typography>

      <Stack direction="row" spacing={2} sx={{ overflowX: "auto" }}>
        {activities.map((activity) => (
          <Box
            key={activity.id}
            sx={{
              position: "relative",
              minWidth: activity.hasPrice ? "178px" : "160px",
            }}
          >
            {/* Yellow circle */}
            <Box
              sx={{
                width: 57,
                height: 57,
                bgcolor: "warning.main",
                borderRadius: "50%",
                position: "relative",
                zIndex: 2,
              }}
            />

            {/* Card */}
            <Box
              sx={{
                width: activity.hasPrice
                  ? activity.name.length > 15
                    ? "220px"
                    : "180px"
                  : "160px",
                height: 100,
                position: "relative",
                top: -40,
                left: 18,
                bgcolor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px) brightness(100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pt: 2,
              }}
            >
              {activity.hasPrice && (
                <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                  <PaidIcon color="primary" sx={{ width: 30, height: 30 }} />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="primary"
                    fontFamily="Montserrat, Helvetica"
                  >
                    {activity.price}
                  </Typography>
                </Stack>
              )}

              <Typography
                variant="body2"
                fontWeight="medium"
                fontFamily="Montserrat, Helvetica"
                sx={{ mt: activity.hasPrice ? 0 : 2 }}
              >
                {activity.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
