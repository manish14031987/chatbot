	function change_parent(height) {
		parent.postMessage(height, '*');
		return false;
	};
	function miniminimizeChat(){
		change_parent('50%');
		document.getElementById('livechat-room-main').style.display = 'none';	
		document.getElementById('scpopup').style.display = 'block';	
	}		
	function maximinimizeChat(){	
		change_parent('100%');
		document.getElementById('livechat-room-main').style.display = 'block';		
		document.getElementById('scpopup').style.display = 'none';		 
	}

	function play_sound(){
		var music_e = document.getElementById("music");
		music_e.play();
	}
	function zoomimg(){
		var zoom_val = document.getElementById("agent_img").getAttribute("zoom_val");
		zoomnow(zoom_val);
	}
	function zoomnow(zoom_val){

		if(zoom_val <= 3){
		var element = document.getElementById("agent_img");
		setTimeout(function() { 
		element.classList.add("zoomed_img");
		}, 500);
		setTimeout(function() { 
		element.classList.remove("zoomed_img");
		zoom_val = parseInt(zoom_val) + parseInt('1');
		document.getElementById("agent_img").setAttribute("zoom_val",zoom_val);
		zoomnow(zoom_val); 
		console.log('start'); 
		}, 1000);

		}
		else {
		//console.log('ended');
		document.getElementById("agent_img_text").innerHTML = '<img src="assets/online-img.png">';
		}
	}
	function login_with_fb(){}