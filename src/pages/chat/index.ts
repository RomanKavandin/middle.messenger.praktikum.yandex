import "./chat.css";
import Handlebars from "handlebars";
export { default as ChatPage } from "./chat.hbs?raw";

Handlebars.registerHelper("chatSideItems", () => [
  {
    name: "Вадим",
    preview:
      "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
    time: "14:00",
    counter: 0,
    isOpen: true,
  },
  {
    name: "Девочка из тиндера 1",
    preview: "Хватит меня игнорировать",
    time: "14:00",
    counter: 10,
  },
  {
    name: "Девочка из тиндера 2",
    preview: "Хватит меня игнорировать",
    time: "14:00",
    counter: 25,
  },
  {
    name: "Девочка из тиндера 3",
    preview: "Хватит меня игнорировать",
    time: "14:00",
    counter: 5,
  },
  {
    name: "Не брать",
    preview: "Хватит меня игнорировать",
    time: "14:00",
    counter: 103,
  },
  {
    name: "Девочка из тиндера 4",
    preview: "Хватит меня игнорировать",
    time: "14:00",
    counter: 5,
  },
  {
    name: "Василий с дачи",
    preview:
      "Тут дрова привезли, когда будешь на даче -- напиши, у меня тут 100 кубов валяется",
    time: "14:00",
    counter: 1,
  },
]);

Handlebars.registerHelper("chatCards", () => [
  {
    type: "received",
    message: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
          \n
          Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
    time: "14:00",
  },
  {
    type: "sent",
    message: "Ну, давай разберем по частям тобою написанное",
    time: "14:01",
    seen: true,
  },
]);
