import { Stack, Divider } from "@mui/material";
import { categories } from "../../utils/consts";

import { type FC, useState } from "react";
import { type ISidebarProps } from "./Sidebar.props";

import { useAuth } from "../../hooks/useAuth";

import AuthModal from "../AuthModal/AuthModal";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar: FC<ISidebarProps> = ({ selectedCategory, setCategory }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isAuth = useAuth();

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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
        <button
          className="category-btn"
          onClick={isAuth ? logOut : () => setIsOpen(true)}
        >
          <span className="category-btn__icon">
            {isAuth ? <LogoutIcon /> : <LoginIcon />}
          </span>
          <span>{isAuth ? "Выйти" : "Войти"}</span>
        </button>
        <Divider />
        {categories.map((category) => (
          <button
            onClick={() => setCategory(category.name)}
            className="category-btn"
            disabled={!isAuth && category.name !== "Главная"}
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
