import { type FC } from "react";
import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchInput } from "../";

import YouTubeIcon from "@mui/icons-material/YouTube";
import { useAppSelector } from "../../hooks/typedRedux";
import { selectCurrentUser } from "../../redux/selectors";

const Navbar: FC = () => {
  const { currentUser } = useAppSelector(selectCurrentUser());

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
      {currentUser ? (
        <Stack direction="row" alignItems="center" p={2}>
          <Avatar src={currentUser.profileImage} />
        </Stack>
      ) : null}
    </Stack>
  );
};

export default Navbar;
