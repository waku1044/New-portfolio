const toogle = document.querySelector('#menu_toogle');
const btn_menu = document.querySelector('.menu_img');
const link = document.querySelectorAll('.menu_nav a');
const img_habil = document.querySelectorAll('.habilidades-img img');
const $modals = document.querySelector('#dialog');
const $titulo = document.querySelector('#titulo');
const $img_modal = document.querySelector('#img_dialog');
const $btn_cerrar = document.querySelector('.btn_cerrar');

const img_certificados = ['./assets/img/certificado_html.png','./assets/img/certificado_css.png','./assets/img/certificado_js.png','./assets/img/certificado_jquery.png'];


function modal(id){
	console.log(id)
	switch(id){
	case 'html':
		$titulo.innerHTML = '';
		$img_modal.style.display = 'block';
		$img_modal.src = img_certificados[0];
		$modals.showModal();
		break;
	case 'css':
		$titulo.innerHTML = '';
		$img_modal.style.display = 'block';
		$img_modal.src = img_certificados[1];
		$modals.showModal();
		break;
	case 'js':
		$titulo.innerHTML = '';
		$img_modal.style.display = 'block';
		$img_modal.src = img_certificados[2];
		$modals.showModal();
		break;
	case 'jquery':
		$titulo.innerHTML = '';
		$img_modal.style.display = 'block';
		$img_modal.src = img_certificados[3];
		$modals.showModal();
		break;
	default:
		$img_modal.style.display = 'none';
		$titulo.innerHTML = '<h2>Sin certificado por el momento.</h2>'
		$modals.showModal();
	}	
	 // $modals.style.display = 'block'
		
}
//modal  en habilidades
function cerrar(){
	// $modals.style.display = 'none'
	$modals.close();
	// alert('anda')
}


img_habil.forEach((img)=>{
	img.addEventListener('click', ()=>{
		modal(img.id);
	})
})
function abreMenu(){
	if(toogle.childNodes[1].style.display == 'flex'){
		toogle.childNodes[1].style.display = 'none';
		
	}else{
		toogle.childNodes[1].style.display = 'flex';
		
	}
}

link.forEach((e)=>{
	e.addEventListener('click', ()=>{
		if(window.screen.width <= 703){
			toogle.childNodes[1].style.display = 'none';
		}
	});	
});



$btn_cerrar.onclick = cerrar;
btn_menu.onclick = abreMenu;