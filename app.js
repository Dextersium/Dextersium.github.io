$(function(){

	/*FIXED HEADER*/
	//фиксированный хедер 

	//переменная для класса header
	let header = $("#header");
	//переменная для класса intro
	let intro = $("#intro");
	//метод для показания высоты блока intro (с паддингами)
	let introH = intro.innerHeight();
	//работаем с окном и измеряем высоту прокрутки от верха окна
	let scrollPos = $(window).scrollTop();


	//работаем с окном, при(.on) скролле и (или обновлении страницы) и (или измениния размера и положения экрана) срабатывает функция
	$(window).on("scroll load resize", function() {

		//перезаписываем переменную introH при каждом изменении экрана
		introH = intro.innerHeight();
		//обновляем значение scrollPos при каждом скролле от верха окна (вызывается функция) в этом методе this $(window) 
		scrollPos = $(this).scrollTop();
		if (scrollPos > introH) {
			//добавляем к классу header класс fixed
			header.addClass("fixed");
		}else {
			//удаляем от класса header класс fixed
			header.removeClass("fixed");
		};
	});


	/*SMOOTH SCROLL*/
	//мягкая прокрутка к нужному пункту меню 

	//переменная с id body
	let scrollBody = $("#body");
	//переменная с id burger__item 
	let closeBurger = $("#burger__item");

	//делаем выборку из атрибутов data-scroll, что в HTML, и по клику на него срабатывает функция
	$("[data-scroll]").on("click", function(event) {
		//отменяем стандартное поведение ссылки (event) при клике
		event.preventDefault();

		//переменная, которая заходит в элемент data-scroll методом this и получаем атрибут с data а именно scroll
		let elementId = $(this).data('scroll');
		//получаем отступ элемента от верха страницы
		let elementOffset = $(elementId).offset().top;

		//убираем навигацию (убирая класс show), когда к этому блоку приходит прокрутка
		nav.removeClass("show");

		//когда доходит прокрутка разрешаем скролл, показываем бургер, убираем бургер закрытия 
		scrollBody.removeClass("no-scroll");
		closeBurger.addClass("burger__item");
		closeBurger.removeClass("burger__item-close");
		
		//в нашем HTML документе работаем пишем что мы ходим анимировать
		$("html, body").animate({
			//работаем со скроллом от верха к элементу elementOffset - 45px, длительность 400мс
			scrollTop: elementOffset - 45
		}, 400);
	});


	/*NAV*/
	//открытие навигации на моб меню

	let nav = $("#nav");
	let navToggle = $("#navToggle");

	navToggle.on("click", function(event){
		//отменяем стандартное поведение ссылки (event) при клике
		event.preventDefault();
		//добавляет к nav класс по нажатию и по нажатию убирает 
		nav.toggleClass("show");

		//когда нажимаем на бургер запрещаем скролл, показываем бургер закрытия, убираем бургер открытия 
		scrollBody.toggleClass("no-scroll");
		closeBurger.toggleClass("burger__item");
		closeBurger.toggleClass("burger__item-close");
	});


	/*sliderReviews https://kenwheeler.github.io/slick/*/
	//слайдер

	let sliderH = $(".reviewsSlider");
	sliderH.slick({
		//бесконечный скролл - да
  		infinite: true,
  		//сколько хотим показать слайдов - 1
  		slidesToShow: 1,
  		//сколько мы будем скролить слайдов при клике на слайд - 1
  		slidesToScroll: 1,
  		//один затемняется другой появляется (true), один за другим (false)
  		fade: false,
  		//исчезновение кнопок
  		arrows: false,
  		//автопрокрутка картинок
  		autoplay: true,
  		//показывать точки, что бы видеть сколько слайдов
  		dots: true
	});


});

