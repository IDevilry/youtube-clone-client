import { type FormEventHandler, type FC, useState } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Link,
  Modal,
} from "@mui/material";
import { fetcher } from "../../api";
import { toast } from "react-toastify";
import { type IAuthError, type IAuthResponse } from "./AuthModal.types";
import { type IModalProps } from "./AuthModal.props";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const AuthModal: FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [variant, setVariant] = useState<"login" | "register">("login");

  const handleLogin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetcher.post<IAuthResponse>("auth/login", {
        email: data.get("email"),
        password: data.get("password"),
      });
      localStorage.setItem("token", response.data.access_token);
      setIsOpen(false);
      toast.success("Успех!");
    } catch {
      toast.error("Почта или пароль введены не верно!");
    }
  };

  const handleRegister: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetcher.post<IAuthResponse>("auth/register", {
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
      });
      localStorage.setItem("token", response.data.access_token);
      setIsOpen(false);

      toast.success("Успех!");
    } catch (e: any) {
      const error: IAuthError = e;
      toast.error(error.response.data.message.join(", "));
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container
        component="main"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          maxWidth: "400px",
          maxHeight: "100%",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {variant === "login" ? "Войти" : "Зарегистрироваться"}
          </Typography>
          <Box
            component="form"
            onSubmit={variant === "login" ? handleLogin : handleRegister}
            noValidate
            sx={{ mt: 1 }}
          >
            {variant === "register" && (
              <TextField
                margin="normal"
                required={true}
                fullWidth
                id="name"
                label="Имя"
                name="name"
                autoFocus
              />
            )}
            <TextField
              margin="normal"
              required={true}
              fullWidth
              id="email"
              label="Почта"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required={true}
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {variant === "login" ? "Войти" : "Зарегистрироваться"}
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  onClick={() =>
                    setVariant(variant === "login" ? "register" : "login")
                  }
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {variant === "login"
                    ? "Ещё нет аккаута? Зарегистрируйтесь"
                    : "Уже есть аккаут? Войти"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default AuthModal;
