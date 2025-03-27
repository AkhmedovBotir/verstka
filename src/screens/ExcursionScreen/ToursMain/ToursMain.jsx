import { Box, Container, Pagination, PaginationItem } from '@mui/material'
import React from 'react'
import { NavigationSection } from '../sections/NavigationSection'
import { FeaturedToursSection } from '../sections/FeaturedToursSection'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function ToursMain() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ display: "flex", mt: 2, gap: 4 }}>
                <Box sx={{ width: "20%" }}>
                    <NavigationSection />
                </Box>

                <Box sx={{ width: "80%" }}>
                    <FeaturedToursSection />

                    <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                        <Pagination
                            count={5}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{
                                        previous: ArrowBackIosNewIcon,
                                        next: ArrowForwardIosIcon,
                                    }}
                                    {...item}
                                    sx={{
                                        "&.Mui-selected": {
                                            color: "primary.main",
                                        },
                                    }}
                                />
                            )}
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
