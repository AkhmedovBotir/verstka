import Add from "@mui/icons-material/Add";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Refresh from "@mui/icons-material/Refresh";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Paper,
  Slider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const NavigationSection = () => {
  // State for filter values
  const [priceRange, setPriceRange] = useState([1600, 4000]);
  const [peopleCount, setPeopleCount] = useState("5");

  // Location checkboxes state
  const [locations, setLocations] = useState({
    abkhazia: true,
    krasnayaPolyana: false,
    sochi: false,
    adler1: false,
    adler2: false,
  });

  // Collapsed sections state
  const [sectionsCollapsed, setSectionsCollapsed] = useState({
    duration: false,
    date: false,
  });

  // Handle price range change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Handle people count change
  const handlePeopleCountChange = (event, newValue) => {
    if (newValue !== null) {
      setPeopleCount(newValue);
    }
  };

  // Handle location checkbox change
  const handleLocationChange = (event) => {
    setLocations({
      ...locations,
      [event.target.name]: event.target.checked,
    });
  };

  // Toggle section collapse
  const toggleSection = (section) => {
    setSectionsCollapsed({
      ...sectionsCollapsed,
      [section]: !sectionsCollapsed[section],
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setPriceRange([1600, 4000]);
    setPeopleCount("5");
    setLocations({
      abkhazia: true,
      krasnayaPolyana: false,
      sochi: false,
      adler1: false,
      adler2: false,
    });
  };

  // People count options
  const peopleCountOptions = [
    { value: "1", label: "1 чел." },
    { value: "2", label: "2 чел." },
    { value: "3", label: "3 чел." },
    { value: "4", label: "4 чел." },
    { value: "5", label: "5 чел." },
    { value: "6", label: "6 чел." },
    { value: "7", label: "7 чел." },
    { value: "8", label: "8 чел." },
    { value: "9", label: "9 чел." },
    { value: "10", label: "10 чел." },
    { value: "10+", label: "Больше 10 чел." },
  ];

  // Location options
  const locationOptions = [
    { name: "abkhazia", label: "Абхазия" },
    { name: "krasnayaPolyana", label: "Красная поляна" },
    { name: "sochi", label: "Сочи" },
    { name: "adler1", label: "Адлер" },
    { name: "adler2", label: "Адлер" },
  ];

  return (
    <Box sx={{ width: 295, height: "auto" }}>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Filters Header */}
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="primary"
          fontFamily="Montserrat, Helvetica"
        >
          Фильтры
        </Typography>

        {/* Price Range Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              fontFamily="Montserrat, Helvetica"
            >
              Стоимость
            </Typography>
            <ExpandLess fontSize="small" />
          </Box>

          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "40px",
                flex: 1,
                textTransform: "none",
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              {priceRange[0]}
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "40px",
                flex: 1,
                textTransform: "none",
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: 12,
              }}
            >
              {priceRange[1]}
            </Button>
          </Stack>

          <Box px={1} mt={2}>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              min={0}
              max={10000}
              step={100}
              valueLabelDisplay="off"
              sx={{
                "& .MuiSlider-thumb": {
                  width: 15,
                  height: 15,
                  backgroundColor: "white",
                  border: "1px solid #d3d3d3",
                  "&::after": {
                    width: 7,
                    height: 7,
                    backgroundColor: "primary.main",
                    borderRadius: "50%",
                    top: 3,
                    left: 3,
                  },
                  "&::before": {
                    display: "none",
                  },
                },
                "& .MuiSlider-track": {
                  backgroundColor: "primary.main",
                  height: 3,
                },
                "& .MuiSlider-rail": {
                  height: 3,
                  backgroundColor: "#d3d3d3",
                },
              }}
            />
          </Box>
        </Box>

        <Divider />

        {/* People Count Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              fontFamily="Montserrat, Helvetica"
            >
              Количество человек
            </Typography>
            <ExpandLess fontSize="small" />
          </Box>

          <Box mt={2}>
            <ToggleButtonGroup
              value={peopleCount}
              exclusive
              onChange={handlePeopleCountChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid #ececec",
                  borderRadius: "40px !important",
                  m: 0,
                },
              }}
            >
              {peopleCountOptions.slice(0, 3).map((option) => (
                <ToggleButton
                  key={option.value}
                  value={option.value}
                  sx={{
                    width: 73,
                    height: 30,
                    borderRadius: "40px",
                    textTransform: "none",
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: 12,
                    color: peopleCount === option.value ? "white" : "black",
                    bgcolor:
                      peopleCount === option.value ? "primary.main" : "white",
                    "&.Mui-selected": {
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    },
                  }}
                >
                  {option.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          <Box mt={1}>
            <ToggleButtonGroup
              value={peopleCount}
              exclusive
              onChange={handlePeopleCountChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid #ececec",
                  borderRadius: "40px !important",
                  m: 0,
                },
              }}
            >
              {peopleCountOptions.slice(3, 6).map((option) => (
                <ToggleButton
                  key={option.value}
                  value={option.value}
                  sx={{
                    width: 73,
                    height: 30,
                    borderRadius: "40px",
                    textTransform: "none",
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: 12,
                    color: peopleCount === option.value ? "white" : "black",
                    bgcolor:
                      peopleCount === option.value ? "primary.main" : "white",
                    "&.Mui-selected": {
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    },
                  }}
                >
                  {option.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          <Box mt={1}>
            <ToggleButtonGroup
              value={peopleCount}
              exclusive
              onChange={handlePeopleCountChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid #ececec",
                  borderRadius: "40px !important",
                  m: 0,
                },
              }}
            >
              {peopleCountOptions.slice(6, 9).map((option) => (
                <ToggleButton
                  key={option.value}
                  value={option.value}
                  sx={{
                    width: 73,
                    height: 30,
                    borderRadius: "40px",
                    textTransform: "none",
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: 12,
                    color: peopleCount === option.value ? "white" : "black",
                    bgcolor:
                      peopleCount === option.value ? "primary.main" : "white",
                    "&.Mui-selected": {
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    },
                  }}
                >
                  {option.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          <Box mt={1}>
            <ToggleButtonGroup
              value={peopleCount}
              exclusive
              onChange={handlePeopleCountChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid #ececec",
                  borderRadius: "40px !important",
                  m: 0,
                },
              }}
            >
              {peopleCountOptions.slice(9).map((option) => (
                <ToggleButton
                  key={option.value}
                  value={option.value}
                  sx={{
                    minWidth: 73,
                    height: 30,
                    borderRadius: "40px",
                    textTransform: "none",
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: 12,
                    color: peopleCount === option.value ? "white" : "black",
                    bgcolor:
                      peopleCount === option.value ? "primary.main" : "white",
                    "&.Mui-selected": {
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": {
                        bgcolor: "primary.dark",
                      },
                    },
                  }}
                >
                  {option.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>

        <Divider />

        {/* Location Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              fontFamily="Montserrat, Helvetica"
            >
              Место
            </Typography>
            <Add fontSize="small" />
          </Box>

          <Stack spacing={1} mt={2}>
            {locationOptions.map((option) => (
              <FormControlLabel
                key={option.name}
                control={
                  <Checkbox
                    checked={locations[option.name]}
                    onChange={handleLocationChange}
                    name={option.name}
                    size="small"
                    sx={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      padding: 0,
                      marginRight: 1,
                      "& .MuiSvgIcon-root": {
                        width: 15,
                        height: 15,
                        borderRadius: "50%",
                      },
                      "&.Mui-checked": {
                        "& .MuiSvgIcon-root": {
                          backgroundColor: "white",
                          border: "1px solid #d3d3d3",
                          borderRadius: "50%",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            width: 7,
                            height: 7,
                            backgroundColor: "primary.main",
                            borderRadius: "50%",
                            top: 3,
                            left: 3,
                          },
                        },
                      },
                    }}
                    checkedIcon={
                      <Box
                        sx={{
                          width: 15,
                          height: 15,
                          backgroundColor: "white",
                          border: "1px solid #d3d3d3",
                          borderRadius: "50%",
                          position: "relative",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            width: 7,
                            height: 7,
                            backgroundColor: "primary.main",
                            borderRadius: "50%",
                            top: 3,
                            left: 3,
                          },
                        }}
                      />
                    }
                    icon={
                      <Box
                        sx={{
                          width: 15,
                          height: 15,
                          backgroundColor: "white",
                          border: "1px solid #d3d3d3",
                          borderRadius: "50%",
                        }}
                      />
                    }
                  />
                }
                label={
                  <Typography
                    variant="caption"
                    fontWeight={500}
                    fontFamily="Montserrat, Helvetica"
                  >
                    {option.label}
                  </Typography>
                }
                sx={{ margin: 0 }}
              />
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* Duration Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => toggleSection("duration")}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              fontFamily="Montserrat, Helvetica"
            >
              Длительность
            </Typography>
            {sectionsCollapsed.duration ? (
              <ExpandMore fontSize="small" />
            ) : (
              <ExpandLess fontSize="small" />
            )}
          </Box>
        </Box>

        <Divider />

        {/* Date Section */}
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => toggleSection("date")}
            sx={{ cursor: "pointer" }}
          >
            <Typography
              variant="subtitle2"
              fontWeight="bold"
              fontFamily="Montserrat, Helvetica"
            >
              Дата
            </Typography>
            {sectionsCollapsed.date ? (
              <ExpandMore fontSize="small" />
            ) : (
              <ExpandLess fontSize="small" />
            )}
          </Box>
        </Box>

        <Divider />

        {/* Show Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: "40px",
            height: 40,
            textTransform: "none",
            fontFamily: "Montserrat, Helvetica",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Показать
        </Button>

        {/* Reset Filters */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ cursor: "pointer" }}
          onClick={resetFilters}
        >
          <Refresh fontSize="small" sx={{ mr: 1 }} />
          <Typography
            variant="caption"
            fontWeight={500}
            fontFamily="Montserrat, Helvetica"
          >
            Сбросить фильтры
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
