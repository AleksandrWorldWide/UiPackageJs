import './lib/lib';

$('button').click(function() {
	$('div').eq(1).toggleClass('active');
});

$('div').click(function() {
	console.log($(this).index());
})

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findmedsg').addClass('fff'));

console.log($('.more').eq(0).siblings());
