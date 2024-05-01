import Block from "../../core/Block";
import { Sider, ChatBody, PopUpForm } from "../../components";

export default class Chat extends Block {
	//@ts-ignore
	constructor(props) {
		props.Sider = new Sider({});
		if (props.chatBodyContent) {
			props.ChatBody = new ChatBody(props.chatBodyContent);
		}
		if (props.popUpContent) {
			props.PopUpForm = new PopUpForm(props.popUpContent);
		}

		super(props);
	}

	render(): string {
		return `
			<main class="chat__container">
				{{#if hasPopUp}}
					{{{PopUpForm}}}
				{{/if}}
				{{{Sider}}}
				{{{ChatBody}}}
			</main>
		`;
	}
}
