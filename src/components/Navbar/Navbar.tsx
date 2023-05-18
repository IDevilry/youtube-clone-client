import { type FC } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchInput } from "../";

import YouTubeIcon from "@mui/icons-material/YouTube";

const Navbar: FC = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <YouTubeIcon
          style={{
            width: 75,
            height: 75,
            color: "red",
          }}
        />
      </Link>
      <SearchInput />
    </Stack>
  );
};

export default Navbar;
