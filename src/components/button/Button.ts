import Block from "../../core/Block";

class Button extends Block {
	//@ts-ignore
	constructor(props) {
		super(props);
	}

	render(): string {
		return `
			<button class="button button__{{type}}">
					{{label}}
			</button>
		`;
	}
}

export default Button;
