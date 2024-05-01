import Block from "../../core/Block";
export default class UserPageInputData extends Block {
	//@ts-ignore
	constructor(props) {
		super(props);
	}
	render() {
		return `
			<div class="user_page_input__wrapper {{outerClasses}}">
				<span class="user_page_input__label">
					{{label}}
				</span>
				<span class="user_page_input__field">{{value}}</span>
			</div>
	`;
	}
}
