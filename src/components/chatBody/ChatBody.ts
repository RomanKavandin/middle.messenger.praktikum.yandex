import Block from "../../core/Block";
import { chatCards } from "./constants";
import { ChatButton, ChatCard, ContextMenu } from "../../components";
export default class ChatBody extends Block {
	//@ts-ignore
	constructor(props) {
		chatCards.forEach((card, index) => {
			props[`card_${index}`] = new ChatCard({
				index: index,
				type: card.type,
				message: card.message,
				time: card.time,
				seen: card.seen,
			});
		});

		props.ContextMenuManageUser = new ContextMenu({ isManageUser: true });
		props.ContextMenuAttach = new ContextMenu({ isAttach: true });
		props.AttachButton = new ChatButton({ isAttach: true });
		props.SendButton = new ChatButton({ isSend: true });
		props.ManageUserButton = new ChatButton({ isManageUser: true });
		super(props);
	}

	render() {
		return `
			<div class="chat_body__container">
				{{#if isEmpty}}
					<div class="chat_body__state">Выберите чат, чтобы отправить сообщение</div>
				{{/if}}

				{{#unless isEmpty}}
					<div class="chat_body__rest_container chat_body__header">
						<div class="chat_body__user_image"></div>
						<div class="chat_body__user_name">{{person}}</div>
						{{{ManageUserButton}}}
						{{{ContextMenuManageUser}}}
					</div>

					<div class="chat_body__block">
						<div class="chat_body__state">
							{{date}}
						</div>
						${chatCards
							.map((_, index) => {
								return "{{{" + `card_${index}` + "}}}";
							})
							.join("")}
					</div>

					<div class="chat_body__rest_container chat_body__footer">
						{{{ContextMenuAttach}}}
						{{{AttachButton}}}
						<input name="message" class="chat_body__input" placeholder="Сообщение"/>
						{{{SendButton}}}
					</div>
				{{/unless}}
			</div>
		`;
	}
}
