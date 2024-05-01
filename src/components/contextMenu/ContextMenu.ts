import Block from "../../core/Block";
import { attachButtons, manageUserButtons } from "./constants";
import { ChatButton } from "../../components";
export default class ContextMenu extends Block {
	//@ts-ignore
	constructor(props) {
		attachButtons.forEach((button, index) => {
			props[`attachButton_${index}`] = new ChatButton({
				label: button.label,
				iconUrl: button.iconUrl,
				iconWidth: button.iconWidth,
				iconHeight: button.iconHeight,
				isContext: true,
			});
		});

		manageUserButtons.forEach((button, index) => {
			props[`manageUserButton_${index}`] = new ChatButton({
				label: button.label,
				iconUrl: button.iconUrl,
				iconWidth: button.iconWidth,
				iconHeight: button.iconHeight,
				isContext: true,
			});
		});

		super(props);
	}
	render() {
		return `
			{{#if isAttach}}
				<div class="context-menu__window context-menu__window__attach">
					${attachButtons.map((_, index) => "{{{" + `attachButton_${index}` + "}}}").join("")}
				</div>
			{{/if}}

			{{#if isManageUser}}
				<div class="context-menu__window context-menu__window__manage">
					${manageUserButtons.map((_, index) => "{{{" + `manageUserButton_${index}` + "}}}").join("")}
				</div>
			{{/if}}
		`;
	}
}
