export const registrationInputFields = [
	{ label: "Почта", title: "email", value: "pochta@yandex.ru" },
	{ label: "Логин", title: "login", value: "ivanivanov" },
	{ label: "Имя", title: "first_name", value: "Иван" },
	{ label: "Фамилия", title: "second_name", value: "Иванов" },
	{ label: "Имя в чате", title: "display_name", value: "Индивидуалка Диана" },
	{
		label: "Телефон",
		title: "phone",
		value: "+7(000) 000-14-88",
		outerClasses: "user_page__input__last",
	},
];

export const addFileModal = {
	addFile: {
		title: "Загрузите файл",
		buttons: [
			{
				label: "Выбрать файл на компьютере",
				type: "link",
				title: "selectFile",
			},
			{
				label: "Поменять",
				type: "primary",
				title: "changeFile",
			},
		],
	},

	errorNoFile: {
		title: "Загрузите файл",
		buttons: [
			{
				label: "Выбрать файл на компьютере",
				type: "link",
				title: "selectFile",
			},
			{
				label: "Поменять",
				type: "primary",
				title: "changeFile",
			},
		],
		errorMessage: "Нужно выбрать файл",
	},

	sendFileError: {
		danger: true,
		title: "Ошибка, попробуйте ещё раз",
		buttons: [
			{
				label: "Выбрать файл на компьютере",
				type: "link",
				title: "selectFile",
			},
			{
				label: "Поменять",
				type: "primary",
				title: "changeFile",
			},
		],
	},

	sendFileDone: {
		title: "Загрузите файл",
		message: "pic.jpg",
		buttons: [
			{
				label: "Поменять",
				type: "primary",
				title: "changeFile",
			},
		],
	},
};

export const addUserModal = {
	title: "Добавить пользователя",
	inputFields: [
		{
			label: "Логин",
			title: "login",
			hasError: false,
			errorText: "Соси",
		},
	],
	buttons: [
		{
			label: "Добавить",
			type: "primary",
			title: "addUser",
		},
	],
};
export const removeUserModal = {
	title: "Удалить пользователя",
	inputFields: [
		{
			label: "Логин",
			title: "login",
			hasError: false,
			errorText: "Соси",
		},
	],
	buttons: [
		{
			label: "Добавить",
			type: "primary",
			title: "addUser",
		},
	],
};
