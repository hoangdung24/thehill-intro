import {
  Pagination as MuiPagination,
  PaginationItem,
  useTheme,
} from "@mui/material";

const LIMIT = 6;

const Pagination = ({ data, onChange, currentPage }) => {
  const theme = useTheme();
  const count = Math.round(data.length / LIMIT);

  return (
    <MuiPagination
      count={Math.round(data.length / LIMIT)}
      variant="outlined"
      onChange={onChange}
      page={currentPage}
      sx={{
        ["& .MuiPagination-ul li"]: {
          marginLeft: "5px",
        },
        ["& .MuiPagination-ul li Mui-disabled"]: {
          color: "black",
        },
        ["& .MuiPagination-ul li button"]: {
          color: theme.palette.secondary.light,
          border: `2px solid ${theme.palette.secondary.light}`,
        },

        ["& .MuiPagination-ul"]: {
          justifyContent: "center",
        },
      }}
      renderItem={(props) => {
        const { type } = props;
        if (type === "page") {
          return null;
        }
        return <PaginationItem {...props} />;
      }}
    />
  );
};

export default Pagination;
