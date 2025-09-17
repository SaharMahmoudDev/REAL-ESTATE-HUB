import React from "react";

// LOCAL COMPONENTS
import Section from "../../components/ui/Section";

//  EXTARNAL COMPONENTS
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationSection = ({count,onChange}) => {
  return (
    <Section variant="!border-b-0">
      <Stack spacing={2}>
        <Pagination
        // page={page}
          count={count}
          siblingCount={1}
          boundaryCount={1}
          onChange={(_, p) => onChange(p)}
          variant="outlined"
          shape="rounded"
          size="large"
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
    </Section>
  );
};

export default PaginationSection;
