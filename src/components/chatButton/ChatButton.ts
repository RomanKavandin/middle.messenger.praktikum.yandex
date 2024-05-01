import Block from "../../core/Block";

class ChatButton extends Block {
	//@ts-ignore
	constructor(props) {
		super(props);
	}

	render(): string {
		return `
				{{#if isContext}}
					<button class="context-menu__button">
						<img alt="кнопка {{label}}" src="{{iconUrl}}" width="{{iconWidth}}" height="{{iconHeight}}" />
						<span>{{label}}</span>
					</button>
				{{/if}}

				{{#if isAttach}}
					<button class="chat_body__button__clip chat_body__button">
						<img alt="Кнопка добавить" src="./src/assets/icons/clip.svg" width="32" height="32"/>
					</button>
				{{/if}}

				{{#if isSend}}
					<button class="chat_body__button__send chat_body__button">
						<img alt="Кнопка отправить" src="./src/assets/icons/send.svg" width="28" height="28"/>
					</button>
				{{/if}}

				{{#if isManageUser}}
					<button class="chat_body__button chat_body__button__dots">
						<img alt="Кнопка контекстного меню управления пользователем" src="./src/assets/icons/dots.svg" width="3" height="15"/>
					</button>
				{{/if}}
		`;
	}
}

export default ChatButton;
