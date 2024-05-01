import Block from "../../core/Block";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { loginInputFields, registrationInputFields } from "./constants";

export default class Registration extends Block {
	//@ts-ignore
	constructor(props) {
		registrationInputFields.forEach((item) => {
			props[item.title] = new Input(item);
		});

		loginInputFields.forEach((item) => {
			props[item.title] = new Input(item);
		});

		props.RegisterButton = new Button({ label: "Зарегистрироваться", type: "primary" });
		props.EnterButton = new Button({ label: "Войти", type: "link" });
		props.AuthoriseButton = new Button({ label: "Авторизоваться", type: "primary" });
		props.NoAccButton = new Button({ label: "Нет аккаунта?", type: "link" });

		super(props);
	}
	render(): string {
		return `
			<main class="registration__container">
				<Form class="registration__form {{#if isLogin}}registration__form__login{{/if}}">
					{{#if isRegistration}}
						<div class="registration__header">Регистрация</div>
							${registrationInputFields.map((item) => "{{{" + item.title + "}}}").join("")}
						<div class="registration__buttons">
							{{{RegisterButton}}}
							{{{EnterButton}}}
						</div>
					{{/if}}

					{{#if isLogin}}
						<div class="registration__header">Вход</div>
							${loginInputFields.map((item) => "{{{" + item.title + "}}}").join("")}
						<div class="registration__buttons">
							{{{AuthoriseButton}}}
							{{{NoAccButton}}}
						</div>
					{{/if}}
				</Form>
			</main>
    `;
	}
}
