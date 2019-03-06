$( document ).ready(function() {
	var arrSlider = [
	{ 
		title: 'Дорогие братья и сестры', 
		content: 'Приглашаем Вас каждое воскресенье в 13.00 на молебен о строительстве Храма преподобного Саввы Сторожевского. Молебен служится на месте строительства по адресу: пл.Викторио Кодовильи, вл. 1 напротив бывшего кинотеатра “Енисей”'
	},
	{
		title: 'Дорогие братья и сестры',
		content: 'Приглашаем детей в возрасте от 5 лет для занятий в воскресной группе при храме преподобного Саввы Сторожевского. Занятия начнутся с октября 2016 года. Запись в группу осуществляется по воскресеньям с 13-14 часов.'
	}
	]
	$('.slider-item').on('click', function(e){
		var num = $(this).attr('data-num');
		$('.slider-item').removeClass('active_slid');
		$(this).addClass('active_slid');
		var imageUrl = 'img/image' + num + '.png';
		console.log(imageUrl);
		$('.block1').css('background-image', 'url('+imageUrl+')');
		console.log($('.block1').css('background-image'));
		$('.info__title').text(arrSlider[num - 1].title);
		$('.info__text').text(arrSlider[num - 1].content);
	});
});