import { Stack, Divider } from "@mui/material";
import { categories } from "../../utils/consts";

import { type FC, useState } from "react";
import { type ISidebarProps } from "./Sidebar.props";

import LoginIcon from "@mui/icons-material/Login";
import AuthModal from "../Modal/AuthModal";

const Sidebar: FC<ISidebarProps> = ({ selectedCategory, setCategory }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { md: "95%" },
          flexDirection: { md: "column" },
        }}
      >
        <button className="category-btn" onClick={() => setIsOpen(true)}>
          <span className="category-btn__icon">
            <LoginIcon />
          </span>
          <span>Войти</span>
        </button>
        <Divider />
        {categories.map((category) => (
          <button
            onClick={() => setCategory(category.name)}
            className="category-btn"
            style={{
              color: "black",
              background: category.name === selectedCategory ? "gray" : "",
            }}
            key={category.name}
          >
            <span className="category-btn__icon">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
