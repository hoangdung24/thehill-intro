import { Chip, Stack } from "@mui/material";
import { useCallback } from "react";

const Tag = ({ items, selectedItem, ...props }) => {
  const onClick = useCallback((data) => {
    return (e) => {
      // console.log(data);
      // props.handleClick(e, data)
      props.onClick(e, data);
      // console.log(data)
    };
  }, []);

  return (
    <Stack spacing={2} direction={"row"} flexWrap={"wrap"}>
      {items.map((e, index) => {
        return (
          <Chip
            key={index}
            label={e}
            variant={selectedItem === e ? "filled" : "outlined"}
            clickable
            onClick={onClick(e)}
          />
        );
      })}
    </Stack>
  );
};

export default Tag;
