$('ul').on('click', 'li',function(){
	$(this).toggleClass("completed");
});

$("ul").on('click','span', function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('.fa-plus-square').on('click',function(){
	$("input[type='text']").slideToggle('400');
})

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var ntodos = $(this).val();
		$(this).val('');
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + ntodos + "</li>");
	}
});