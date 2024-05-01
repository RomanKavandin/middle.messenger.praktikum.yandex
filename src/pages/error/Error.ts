import Block from "../../core/Block";
import { Button } from "../../components/button";
export default class Error extends Block {
	//@ts-ignore
	constructor(props) {
		props.ButtonBack = new Button({ label: "Назад к чатам", type: "link" });
		super(props);
	}

	render(): string {
		return `
            <main class="error__container">
    					<div class="error__body">
        				<div class="error__type">{{code}}</div >
        				<div  class="error__message">Мы уже фиксим</div >
        				{{{ ButtonBack }}}
							</div>
						</main>
        `;
	}
}
