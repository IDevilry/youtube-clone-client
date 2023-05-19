import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

export const API_URL = process.env.REACT_APP_API_URL;

export const categories = [
  {
    name: "Главная",
    icon: <HomeIcon />,
  },
  {
    name: "Подписки",
    icon: <SubscriptionsIcon />,
  },
];
