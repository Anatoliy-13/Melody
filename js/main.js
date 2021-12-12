$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPass = $(".home-image path"); //каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); // кнопка увеличения этажа
  var counterDown = $(".counter-down"); //кнопка уменьшения этажа
  /*функиция при наведении на этаж */
  floorPass.on("mouseover", function () {
    floorPass.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); /*узнаю какой этаж кликаю */
    $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
  });
  counterUp.on("click", function () {
    // console.log("отслеживаем клик по кнопке вверх");
    // currentFloor++; /*увеличиваем этаж на +1 */
    // usCurrentFloor = currentFloor.toLocaleString("en-US", {
    //   minimumIntegerDigits: 2,
    //   useGrouping: false,
    // });
    // $(".counter").text(usCurrentFloor);

    if (currentFloor < 18) {
      //проверяем значение этажа
      currentFloor++; /*увеличиваем этаж на +1 */
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); // форматируем переменную с этажем, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPass.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass(
        "current-floor"
      ); /*подсвечиваем каждый этаж */
    }
  });

  counterDown.on("click", function () {
    // console.log("отслеживаем клик по кнопке вниз");
    if (currentFloor > 2) {
      currentFloor--; /*увеличиваем этаж на +1 */
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPass.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
}); /* функция проверяуе готов ли наш сайт к манипуляциям, выполнять изменения*/
