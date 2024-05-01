import Block from "../../core/Block";
import { Button, Input } from "../index";

export default class PopUpForm extends Block {
	//@ts-ignore
	constructor(props) {
		if (props.buttons) {
			props.buttons.forEach((button: any) => {
				props[button.title] = new Button(button);
			});
		}

		if (props.inputFields) {
			props.inputFields.forEach((input: any, index: number) => {
				props[`input_${index}`] = new Input(input);
			});
		}

		super(props);
		//@ts-ignore
		this.props.title = props.title;
	}

	getButtons() {
		//@ts-ignore
		return this.props.buttons
			.map((button: any) => {
				return "{{{" + button.title + "}}}";
			})
			.join("");
	}
	getInputs() {
		//@ts-ignore
		if (this.props.inputFields) {
			//@ts-ignore
			return this.props.inputFields
				.map((_: any, index: number) => {
					return "{{{" + `input_${index}` + "}}}";
				})
				.join("");
		}
		return "</>";
	}

	render(): string {
		return `
			<div class="pop-up__background">
				<div class="pop-up__body">
					<div class="pop-up__title {{#if danger}}pop-up__title__danger{{/if}}">
						{{title}}
					</div>

            {{#if message }}
                <div class="pop-up__message">{{message}}</div>
            {{/if}}
            ${this.getInputs()}
						${this.getButtons()}
						{{#if errorMessage}}
							<div class="pop-up__error_message">{{errorMessage}}</div>
            {{/if}}
				</div>
			</div>
		`;
	}
}
