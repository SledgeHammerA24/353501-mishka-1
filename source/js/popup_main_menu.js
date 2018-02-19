
// переменные. показ Главного Меню в мобильной версии
var MainMenu = document.querySelector(".page-header__wrapper"); // переменной MainMenu присваиваем первый элемент с классом (чтобы убрать у него nojs)
var ToggleMenu = document.querySelector(".page-header__toggle--closed"); // переменной ToggleMenu присваиваем первый элемент с классом .page-header__toggle--closed - то бишь это кнопка Гамбургер, которое будем открывать

// Удаляем класс nojs у блока меню
MainMenu.classList.remove("page-header--nojs"); // убираем класс (page-header--nojs) (если он есть) - то бишь скрываем все меню, которые будут видны если отвалится js


// показ модального окошка при нажатии на Гамбургер/Крестик
ToggleMenu.addEventListener("click", function(event) { // ToggleMenuClosed - ЭЛЕМЕНТ, у которого будем ловить событие, "click" - само событие,
 event.preventDefault(); // отменяем действие по умолчанию - переход по ссылке у ссылки на другую страницу
 console.log("показ меню"); // вывод в консоль сообщения при событии "click"


// показ/скрытие Гамбургер/Крестик
if (ToggleMenu.classList.contains("page-header__toggle--closed")) {
  ToggleMenu.classList.remove("page-header__toggle--closed"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
  ToggleMenu.classList.add("page-header__toggle--opened"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик

} else {
  ToggleMenu.classList.remove("page-header__toggle--opened"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
  ToggleMenu.classList.add("page-header__toggle--closed"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик
}

// показ/скрытие Меню
if (MainMenu.classList.contains("page-header__mobile-menu--closed")) {
  MainMenu.classList.remove("page-header__mobile-menu--closed"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
  MainMenu.classList.add("page-header__mobile-menu--opened"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик

} else {
  MainMenu.classList.remove("page-header__mobile-menu--opened"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
  MainMenu.classList.add("page-header__mobile-menu--closed"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик
}

});

// закрытие Меню при нажатии на кнопку Esc

window.addEventListener("keydown", function(event) { // window - ЭЛЕМЕНТ, у которого будем ловить событие, "keydown" - само событие,
if (event.keyCode===27) {

  // показ/скрытие Гамбургер/Крестик
  if (ToggleMenu.classList.contains("page-header__toggle--closed")) {
    ToggleMenu.classList.remove("page-header__toggle--closed"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
    ToggleMenu.classList.add("page-header__toggle--opened"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик

  } else {
    ToggleMenu.classList.remove("page-header__toggle--opened"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
    ToggleMenu.classList.add("page-header__toggle--closed"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик
  }

  // показ/скрытие Меню
  if (MainMenu.classList.contains("page-header__mobile-menu--closed")) {
    MainMenu.classList.remove("page-header__mobile-menu--closed"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
    MainMenu.classList.add("page-header__mobile-menu--opened"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик

  } else {
    MainMenu.classList.remove("page-header__mobile-menu--opened"); // удаляем класс (page-header__toggle--closed) к ToggleMenu - то бишь удаляем картинку Гамбургер
    MainMenu.classList.add("page-header__mobile-menu--closed"); // добавляем класс (page-header__toggle--opened) к ToggleMenu - то бишь рисуем закрывающий крестик
  }

}
});
