$('#myModal').on('hidden.bs.modal', function () {
  // do something…
})

function changeToEditor(){
	$(".modal-content").addClass("modal-edit");
	$(".media-body").addClass("form__group");
	$(".media-body").addClass("field");
	$(".close")[0].children[0].setAttribute('style', 'color:red');
	$("#modal_title")[0].setAttribute('style', 'color:white');
	$("#modal_title")[0].innerText += "- 편집";
	
	
	for(i=0; i<$(".field").length; ++i){
		var originText = $(".field").children()[i].innerText;
		//$(".filed").children()[0].remove();
		var newInput = document.createElement("input");
		newInput.setAttribute("class", "form__field cameraName");
		newInput.value=originText;
		newInput.setAttribute("name", "name");
		$(".field").children()[i].replaceWith(newInput)
	}
	
	$(".ipAddr").addClass("form__group");
	$(".ipAddr").addClass("field");
	for(i=0; i<$(".ipAddr.field").length; ++i){
		var originText = $(".ipAddr.field").children()[i].innerText;
		//$(".filed").children()[0].remove();
		var newInput = document.createElement("input");
		newInput.setAttribute("class", "form__field ipAddr");
		newInput.setAttribute("style", "width:445px!important");
		newInput.value=originText;
		newInput.setAttribute("name", "name");
		$(".ipAddr.field").children()[i].replaceWith(newInput)
	}
	$(".col.text-right")[0].children[0].children[0].setAttribute("style","display:none");
	$(".col.text-right")[0].children[0].children[1].setAttribute("style","display:none");
	var saveBtn = document.createElement("a");
	saveBtn.setAttribute("href", "#");
	saveBtn.setAttribute("class", "btn btn-sm btn-neutral rounded-pill shadow hover-translate-y-n3");
	saveBtn.innerText = "SAVE"
	$(".col.text-right")[0].append(saveBtn);
	
	$("th.sort")[2].setAttribute("style","display:none");
	for(i=0; i<$("td.text-right").length; ++i){
		$("td.text-right")[i].setAttribute("style","display:none");
	}
	
}

function toYaml(){
	var data = {
		
	}
}