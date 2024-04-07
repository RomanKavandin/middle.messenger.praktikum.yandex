import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

const pages = {
  login: [Pages.RegistrationPage, { isLogin: true }],
  registration: [Pages.RegistrationPage, { isRegistration: true }],
  list: [Pages.ListPage],
  notFound: [Pages.ErrorPage, { code: 404, message: "Не туда попали" }],
  serverError: [Pages.ErrorPage, { code: 500, message: "Мы уже фиксим" }],
  chat: [Pages.ChatPage, { isEmpty: false, person: "Вадим", date: "19 июня" }],
  chatEmpty: [Pages.ChatPage, { isEmpty: true }],
  nav: [Pages.NavigatePage],
  userPage: [Pages.UserPage, { isEditing: false }],
  userPageEdit: [Pages.UserPage, { isEditing: true }],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById("app")!;
  container.innerHTML = Handlebars.compile(source)(context);
}

Handlebars.registerHelper("loginInputFields", () => {
  console.log("loginInputFields");
  return [
    { label: "Логин", title: "login" },
    { label: "Пароль", title: "password" },
  ];
});

document.addEventListener("DOMContentLoaded", () => navigate("nav"));

document.addEventListener("click", (e) => {
  //@ts-ignore
  const page = e.target.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
