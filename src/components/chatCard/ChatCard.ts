import Block from "../../core/Block";
export default class ChatCard extends Block {
	//@ts-ignore
	constructor(props) {
		super(props);
	}
	render() {
		return `
			<div class="chat-card chat-card__{{type}} {{#if selected}} chat-card__selected {{/if}}">
				<div>{{message}}</div>
					{{#if seen}}
						<object class="chat-card__tick" data="./src/assets/icons/tick.svg" width="9" height="4"> </object>
					{{/if}}
				<div class="chat-card__time chat-card__time__{{type}}">{{time}}</div>
			</div>
		`;
	}
}
