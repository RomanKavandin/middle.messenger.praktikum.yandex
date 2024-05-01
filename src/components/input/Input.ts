import Block from "../../core/Block";
export default class Input extends Block {
	//@ts-ignore
	constructor(props) {
		super(props);
	}
	render() {
		return `
			<div class="input">
				<label class="input__container {{#if errorText}}input__error{{/if}}" >
					<input class="input__element" placeholder="" name="{{title}}" title="{{title}}" />
					<div class="input__label">{{label}}</div>
				</label>
					{{#if errorText}}
						<div class="input__text-error">{{errorText}}</div>
					{{/if}}
			</div>
		`;
	}
}
