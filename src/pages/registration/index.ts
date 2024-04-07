import "./registration.css";
import Handlebars from "handlebars";
export { default as RegistrationPage } from "./registration.hbs?raw";

Handlebars.registerHelper("registrationFields", () => {
  return [
    { label: "Почта", title: "login" },
    { label: "Логин", title: "password" },
    { label: "Имя", title: "first_name" },
    { label: "Почта", title: "login" },
    { label: "Фамилия", title: "second_name" },
    { label: "Электронная почта", title: "email" },
    { label: "Телефон", title: "phone" },
    { label: "Пароль", title: "password" },
    { label: "Пароль (ещё раз)", title: "password" },
  ];
});
