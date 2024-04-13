import "./contextMenu.css";
import Handlebars from "handlebars";
export { default as ContextMenuAttach } from "./contextMenuAttach.hbs?raw";
export { default as ContextMenuManageUser } from "./contextMenuManageUser.hbs?raw";

Handlebars.registerHelper("attachButtons", () => {
  return [
    {
      label: "Фото или Видео",
      iconUrl: "./src/assets/icons/image-icon.svg",
      iconWidth: 22,
      iconHeight: 22,
    },
    {
      label: "Файл",
      iconUrl: "./src/assets/icons/file.svg",
      iconWidth: 22,
      iconHeight: 22,
    },
    {
      label: "Локация",
      iconUrl: "./src/assets/icons/location.svg",
      iconWidth: 22,
      iconHeight: 22,
    },
  ];
});
Handlebars.registerHelper("manageUserButtons", () => {
  return [
    {
      label: "Добавить пользователя",
      iconUrl: "./src/assets/icons/plus.svg",
      iconWidth: 22,
      iconHeight: 22,
    },
    {
      label: "Удалить пользователя",
      iconUrl: "./src/assets/icons/cross.svg",
      iconWidth: 22,
      iconHeight: 22,
    },
  ];
});
