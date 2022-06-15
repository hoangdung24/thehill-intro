import { useTheme, useMediaQuery } from "@mui/material";

const useMedia = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return {
    isMdUp,
    isSmUp,
    isSmDown,
    isMdDown,
  };
};

export default useMedia;
