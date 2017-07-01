//check off li 
//we can add listener to only elements present initially
//so we add it to ul and listen when li is clicked 
$("ul").on('click','li',function()
{
	// if ($(this).css("color") ==="rgb(128, 128, 128)")
	// {
	// 	$(this).css("color","black");
	// 	$(this).css("text-decoration","none");
	// }
	// else
	// {
	// 	$(this).css("color","gray");
	// 	$(this).css("text-decoration","line-through");
	// }	
	$(this).toggleClass("chcked");
});
//click on x to delete to do 
$("ul").on('click','span',function(event) //event is added to avoid bubbling
{
	$(this).parent().fadeOut(500,function()
	{
		$(this).remove();
	}); //parent() method gives us the parent element 
	event.stopPropagation(); //stops buubling up 
});
$("input[type='text']").keypress(function(event)
{
	// alert("key pressed");
	if (event.which===13)
	{
		//getting the input and storing it
		var inp=$(this).val();
		//create a new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + inp + "</li>");

		$(this).val("");
	}
});
$(".fa-plus").click(function()
{
	$("input[type='text']").fadeToggle(500);
});