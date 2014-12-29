$(document).ready(function() {
	/* add item to list */
	$("#submit").on("click", function() {
		var add = $("#list-item").val();
		$("#main").css("display", "block");
		$("#list").append('<li><button type="button" id="checkmark"><span class="glyphicon glyphicon-ok"></span></button><span class="added">' + add + '</span><button type="button" id="trashcan" class="pull-right"><span class="glyphicon glyphicon-trash"></span></button></li>');
		$("#list-item").val("");
		event.preventDefault();
	});
	$("#list-item").keydown(function(event) {
		if(event.keyCode == 13) {
			var add = $("#list-item").val();
			$("#main").css("display", "block");
			$("#list").append('<li><button type="button" id="checkmark"><span class="glyphicon glyphicon-ok"></span></button><span class="added">' + add + '</span><button type="button" id="trashcan" class="pull-right"><span class="glyphicon glyphicon-trash"></span></button></li>');
			$("#list-item").val("");
			event.preventDefault();
		};
	});
	/*button to clear list*/
	$("#reset").on("click", function() {
		$("#list li").hide();
		$("#main").css("display", "none");
	});
	/*button to cross off items*/
	$("#list").on("click", ".glyphicon-ok", function() {
		$(this).closest("li").css("text-decoration","line-through");
	});
	/*button to delete items*/
	$("#list").on("click", ".glyphicon-trash", function() {
		$(this).closest("li").remove();
	});
});