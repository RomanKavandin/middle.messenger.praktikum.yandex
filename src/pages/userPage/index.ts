import "./userPage.css";
import UserPage from "./UserPage";
export default UserPage;
import Handlebars from "handlebars";

Handlebars.registerHelper("userPageFields", () => {
	return [
		{ label: "Почта", title: "email", value: "pochta@yandex.ru" },
		{ label: "Логин", title: "login", value: "ivanivanov" },
		{ label: "Имя", title: "first_name", value: "Иван" },
		{ label: "Фамилия", title: "second_name", value: "Иванов" },
		{ label: "Имя в чате", title: "display_name", value: "Индивидуалка Диана" },
		{
			label: "Телефон",
			title: "phone",
			value: "+7(000) 000-14-88",
			outerClasses: "user_page__input__last",
		},
	];
});
