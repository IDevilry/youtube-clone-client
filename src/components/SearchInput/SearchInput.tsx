import { type FC } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput: FC = () => {
  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        mr: { sm: 5 },
        boxShadow: "none",
      }}
    >
      <input
        className="search-input"
        placeholder="Поиск..."
        onChange={(e) => console.log(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#000",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
