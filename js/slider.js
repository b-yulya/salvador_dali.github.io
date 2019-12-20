let images = document.querySelectorAll('.slider img');
let current=0;

function slider()
{
	for(let i=0; i<images.length; i++){
		images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
	if(current+1==images.length){
		current=0;
	}
	else{
		current++;
	}
}

document.querySelector('.slider').onclick=slider;
