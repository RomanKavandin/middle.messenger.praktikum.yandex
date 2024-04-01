import "./userPage.css";
import Handlebars from "handlebars";
export { default as UserPage } from "./userPage.hbs?raw";

Handlebars.registerHelper("userPageFields", () => {
  return [
    { label: "Почта", title: "email", value: "pochta@yandex.ru" },
    { label: "Логин", title: "login", value: "ivanivanov" },
    { label: "Имя", title: "first_name", value: "Иван" },
    { label: "Имя в чате", title: "nickname", value: "Индивидуалка Диана" },
    {
      label: "Телефон",
      title: "phone",
      value: "+7(000) 000-14-88",
      outerClasses: "user_page__input__last",
    },
  ];
});
