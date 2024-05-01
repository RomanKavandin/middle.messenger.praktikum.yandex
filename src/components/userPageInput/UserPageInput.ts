import Block from "../../core/Block";
export default class UserPageInput extends Block {
	//@ts-ignore
	constructor(props) {
		super(props);
	}
	render() {
		return `
			<div class="user_page_input__wrapper {{outerClasses}}">
				<label class="user_page_input__label" for="{{title}}">
					{{label}}
				</label>
				<input
					class="user_page_input__field"
					placeholder="placeholder"
					name="{{title}}"
					title="{{title}}"
				/>
			</div>
		`;
	}
}
