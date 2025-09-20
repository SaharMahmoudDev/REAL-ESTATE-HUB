import React from "react";

// LOCAL COMPONENTS
import Section from "../../components/ui/Section";
import { layoutVariants } from "./../../animations/BrowserAnimation";

//  EXTARNAL COMPONENTS
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const PaginationSection = ({ count, onChange, page }) => {
  const isSmall = useMediaQuery("(max-width:600px)");
  return (
    <Section variant="!border-b-0 ">
      <motion.div variants={layoutVariants} initial="hidden" whileInView="show">
        <Stack spacing={2}>
          <Pagination
            page={page}
            count={count}
            siblingCount={1}
            boundaryCount={1}
            onChange={(_, p) => onChange(p)}
            variant="outlined"
            shape="rounded"
            size={isSmall ? "medium" : "large"}
            sx={{
              "& ul": { justifyContent: "center", gap: "4px 2px" },
              "& .MuiPaginationItem-root": {
                borderColor: "#D1D5DB",
                borderRadius: "8px",
              },
              "& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected":
                {
                  background: "#6155F5",
                  color: "white",
                },
            }}
          />
        </Stack>
      </motion.div>
    </Section>
  );
};

export default PaginationSection;
