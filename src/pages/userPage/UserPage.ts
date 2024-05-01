import Block from "../../core/Block";
import { registrationInputFields } from "./constants";
import { UserPageInput, UserPageInputData, PopUpForm, Sider, Button } from "../../components";

export default class UserPage extends Block {
	//@ts-ignore
	constructor(props) {
		registrationInputFields.forEach((item) => {
			props[item.title] = new UserPageInput(item);
		});

		registrationInputFields.forEach((item) => {
			props[item.title + "data"] = new UserPageInputData(item);
		});

		props.SaveButton = new Button({ label: "Сохранить", type: "primary" });
		props.ChangeDataButton = new Button({ label: "Изменить данные", type: "link__input_like" });
		props.ChangePassButton = new Button({ label: "Изменить пароль", type: "link__input_like" });
		props.ExitButton = new Button({ label: "Выйти", type: "link__input_like", danger: true });
		props.Sider = new Sider({ hidden: true });

		if (props.popUpContent) {
			props.PopUpForm = new PopUpForm(props.popUpContent);
		}

		super(props);
	}

	render(): string {
		return `
			<main class="user_page__container">

				{{{Sider}}}
				<div class="user_page__inner_container">

					{{{PopUpForm}}}

					<div class="user_page__avatar__container">
						<label class="user_page__avatar__change" for="avatar">
								Поменять аватар
						</label>
						<input name="avatar" id="avatar" class="user_page__avatar__change"/>
						<object data="./src/assets/icons/no_image.svg"  width="40" height="40"> </object>
					</div>

					{{#unless isEditing}}
						<span class="user_page__name">
								Иван
						</span>
					{{/unless}}

					<Form class="user_page__form">
						{{#unless isEditing}}
							${registrationInputFields
								.map((item) => {
									return "{{{" + item.title + "data" + "}}}";
								})
								.join("")}
  		      {{/unless}}


						{{#unless isEditing}}
							<div class="user_page__buttons_container">
								{{{ChangeDataButton}}}
								{{{ChangePassButton}}}
								{{{ExitButton}}}
							</div>
						{{/unless}}

						{{#if isEditing}}
								${registrationInputFields
									.map((item) => {
										return "{{{" + item.title + "}}}";
									})
									.join("")}
						{{/if}}

						{{#if isEditing}}
								<div class="user_page__buttons_container">
										{{{SaveButton}}}
								</div>
						{{/if}}
					</Form>
				</div>
			</main>
    `;
	}
}
