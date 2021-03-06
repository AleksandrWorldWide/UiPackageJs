import './lib/lib';

$('#first').on('click', () => {
	$('div').eq(1).fadeToggle(800)
});


$('[data-count="second"]').on('click', () => {
	$('div').eq(2).fadeToggle(800)
});

$('button').eq(2).on('click', () => {
	$('.w-500').fadeToggle(800);
});

// $('.wrap').html(`
// 	<div class="dropdown">
// 		<button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
// 		<div class="dropdown-menu" data-toggle-id='dropdownMenuButton'>
// 			<a href="" class="dropdown-item">press 1</a>
// 			<a href="" class="dropdown-item">press 2</a>
// 			<a href="" class="dropdown-item">press 3</a>
// 		</div>
// 	</div>
// 	`);

// 	$('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'modal title',
		body: 'modal body'
	},
	btns: {
		count: 3,
		settings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('complete');
				}
			],
			[
				'Another btn',
				['btn-warning', 'ml-10'],
				false,
				() => {
					alert('complete 2');
				}
			]
		]
	}
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res));