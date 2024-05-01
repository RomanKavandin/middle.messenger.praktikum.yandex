import Handlebars from "handlebars";
import * as Pages from "./pages";
import { addFileModal, addUserModal, removeUserModal } from "./pages/userPage/constants";

// Это мапа страниц с пропсами

const pages = {
	notFound: [
		Pages.ErrorPage,
		{
			code: 404,
			message: "Не туда попали",
		},
	],
	serverError: [
		Pages.ErrorPage,
		{
			code: 500,
			message: "Мы уже фиксим",
		},
	],
	navigatePage: [Pages.NavigatePage, {}],
	registration: [Pages.Registration, { isRegistration: true }],
	login: [Pages.Registration, { isLogin: true }],
	userPageEdit: [Pages.UserPage, { isEditing: true }],
	userPage: [Pages.UserPage, { isEditing: false }],
	userPageUploadFile: [
		Pages.UserPage,
		{
			popUp: true,
			popUpContent: addFileModal.addFile,
		},
	],
	userPageUploadFileNotSelected: [
		Pages.UserPage,
		{
			popUp: true,
			popUpContent: addFileModal.errorNoFile,
		},
	],
	userPageUploadFileFinish: [
		Pages.UserPage,
		{
			popUp: true,
			popUpContent: addFileModal.sendFileDone,
		},
	],
	userPageUploadFileError: [
		Pages.UserPage,
		{
			popUp: true,
			popUpContent: addFileModal.sendFileError,
		},
	],
	chat: [
		Pages.ChatPage,
		{
			chatBodyContent: {
				person: "Вадим",
				date: "19 июня",
			},
		},
	],
	chatEmpty: [
		Pages.ChatPage,
		{
			chatBodyContent: {
				isEmpty: true,
			},
		},
	],
	chatAddUser: [
		Pages.ChatPage,
		{
			hasPopUp: true,
			popUpContent: addUserModal,
		},
	],
	chatRemoveUser: [
		Pages.ChatPage,
		{
			hasPopUp: true,
			popUpContent: removeUserModal,
		},
	],
};

function navigate(page: string) {
	//@ts-ignore
	const [source, context] = pages[page];
	const container = document.getElementById("app")!;
	if (source instanceof Object) {
		const page = new source(context);
		container.innerHTML = "";
		container.append(page.getContent());
		return;
	}
	container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener("click", (e) => {
	//@ts-ignore
	const page = e.target.getAttribute("page");
	if (page) {
		navigate(page);

		e.preventDefault();
		e.stopImmediatePropagation();
	}
});

document.addEventListener("DOMContentLoaded", () => navigate("navigatePage"));
