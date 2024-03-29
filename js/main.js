
window.addEventListener("load", function(){
	let pageList=document.querySelectorAll("section");
	let total=pageList.length;
	let headerFix=document.querySelector("header");
	let n=0;
	n=0; // test case
	let moving=false;
	let winh;

	function moveCategory(){
		moving=true;
		winh=window.innerHeight;

		for(let i=0; i<=pageList.length; i++){
			if(n < pageList.length){ // 0, 1, 2, 3, 4
				if(i <= n){ // 0, 1, 2
					if(i == n){ // 2
						gsap.to(pageList[i], {top: 0, duration: 0.5, onComplete: function(){
							moving=false;

							for(j=0; j<pageList.length; j++){
								if(j == n){
									pageList[j].classList.add("sc");
								}
								else{
									pageList[j].classList.remove("sc");
								}
							}
						}});
					}
					else{ // 0, 1
						gsap.to(pageList[i], {top: 0, duration: 0.5});
					}
				}
				else{ // 3, 4
					gsap.to(pageList[i], {top: winh, duration: 0.5});
				}
			}
			else{ // 5
				gsap.to(pageList[pageList.length-1], {top: -358, duration: 0.5, onComplete: function(){
					moving=false;
				}});
			}
		}

		if(n !== 0){
			headerFix.classList.add("fixed");
		}
		else{
			headerFix.classList.remove("fixed");
		}
	}

	moveCategory();



	document.addEventListener("mousewheel", function(e){
		if(moving == true) return;

		if(e.wheelDeltaY > 0){ // up
			if(n > 0){
				n-=1;
			}
			else{
				return;
			}
		}
		else{ // down
			if(n < total){
				n+=1;
			}
			else{
				return;
			}
		}
		moveCategory();
});

$("#nav > ul > li").hover(
    function(){
        $("header").addClass("active");
    },
    function(){
        $("header").removeClass("active");
    }
);

let totalLi=$("#nav > ul > li").length;

$("#nav > ul > li > a").focusin(function(){
    $(this).parent().addClass("active");

    if($(this).parent().index() === 0){
        $("header").addClass("active");
    }
});

let wint=0;

$("#nav li li:last-child").focusout(function(){
    $(this).parent().parent().removeClass("active");

    if($(this).parent().parent().index() === (totalLi-1)){
        $("header").removeClass("active");
    }
});


let mainSwiper=new Swiper(".mySwiper", {function(){
  
},

pagination: {
    el: ".swiper-pagination",
    type: "fraction",
},
navigation: {
    nextEl: ".controller .next",
    prevEl: ".controller .prev",
},

});


});
