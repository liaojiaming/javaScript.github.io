(function(){

	var ale = document.querySelector(".alert");
	var oSp = ale.querySelector("span")
	var btn = document.querySelectorAll(".btn");

	for(var i=0;i<btn.length;i++){
			btn[i].onclick=function(){
				ale.style.display="block";
			}
	}

	oSp.onclick=function(){
		ale.style.display="none";
	}
})();