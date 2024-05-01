import "./registration.css";
import Handlebars from "handlebars";
// export { default as RegistrationPage } from "./registration.hbs?raw";
import Registration from "./Registration";
export default Registration;

Handlebars.registerHelper("registrationFields", () => {
	return [
		{ label: "Почта", title: "email" },
		{ label: "Логин", title: "login" },
		{ label: "Логин", title: "password" },
		{ label: "Имя", title: "first_name" },
		{ label: "Фамилия", title: "second_name" },
		{ label: "Телефон", title: "phone" },
		{ label: "Пароль", title: "password" },
		{
			label: "Пароль (ещё раз)",
			title: "password",
			errorText: "Ошибочка",
			value: "*******",
		},
	];
});
Handlebars.registerHelper("loginFields", () => {
	return [
		{ label: "Логин", title: "login" },
		{ label: "Пароль", title: "password" },
	];
});
