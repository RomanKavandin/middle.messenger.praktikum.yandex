import Block from "../../core/Block";
import { siderItems } from "./constants";
import { SiderItem } from "../../components";

class Sider extends Block {
	//@ts-ignore
	constructor(props) {
		siderItems.forEach((item, index) => {
			props[`siderItem_${index}`] = new SiderItem(item);
		});
		super(props);
	}

	render(): string {
		return `
			<div class="side__container {{#if hidden}}side__container__hidden{{/if}}">
				{{#unless hidden }}
					<div class="side__search">
						<span class="side__profile">Профиль ></span>
						<input class="side-search__input" name="search" placeholder="Поиск"/>
					</div>

					${siderItems
						.map((_, index) => {
							return "{{{" + `siderItem_${index}` + "}}}";
						})
						.join("")}
    		{{/unless}}

				{{#if hidden}}
					<object class="side__hidden_button" data="./src/assets/icons/arrow_left.svg"  width="28" height="28"></object>
				{{/if}}
			</div>
		`;
	}
}

export default Sider;
