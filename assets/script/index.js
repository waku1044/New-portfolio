const toogle = document.querySelector('#menu_toogle');
const btn_menu = document.querySelector('.menu_img');
const link = document.querySelectorAll('.menu_nav a');



function abreMenu(){
	if(toogle.childNodes[1].style.display == 'flex'){
		toogle.childNodes[1].style.display = 'none';
		
	}else{
		toogle.childNodes[1].style.display = 'flex'
		
	}
}

	link.forEach((e)=>{
			e.addEventListener('click', ()=>{
					console.log(window.screen.width)
				if(window.screen.width <= 703){
					toogle.childNodes[1].style.display = 'none';
				}
			});	
	});



window.screen.onchange
btn_menu.onclick = abreMenu;