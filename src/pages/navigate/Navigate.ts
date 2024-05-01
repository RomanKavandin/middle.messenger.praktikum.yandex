import Block from "../../core/Block";

export default class Navigate extends Block {
	constructor(props?: Record<string, unknown>) {
		super(props);
	}
	render(): string {
		return `
			<main>
				<nav class="navigation__list">
					<a class="navigation__item" href="#" page="login">Login</a>
					<a class="navigation__item" href="#" page="registration">Registration</a>
					<a class="navigation__item" href="#" page="chat">Chat Page</a>
					<a class="navigation__item" href="#" page="chatEmpty">Chat Empty</a>
					<a class="navigation__item" href="#" page="chatAddUser">Chat Add User</a>
					<a class="navigation__item" href="#" page="chatRemoveUser">Chat Remove User</a>
					<a class="navigation__item" href="#" page="userPage">User Page</a>
					<a class="navigation__item" href="#" page="userPageEdit">User Page Edit</a>
					<a class="navigation__item" href="#" page="userPageUploadFile">User Page Upload File Modal</a>
					<a class="navigation__item" href="#" page="userPageUploadFileNotSelected">User Page Upload File Modal
						Not Selected</a>
					<a class="navigation__item" href="#" page="userPageUploadFileFinish">User Page Upload File Modal
						Finish</a>
					<a class="navigation__item" href="#" page="userPageUploadFileError">User Page Upload File Modal Error</a>
					<a class="navigation__item" href="#" page="notFound">Not Found</a>
					<a class="navigation__item" href="#" page="serverError">Server Error</a>
				</nav>
			</main>
		`;
	}
}
