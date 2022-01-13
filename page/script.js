console.clear();

const nav = document.querySelector("nav");
const navLinksContainer = document.querySelector(".nav-links");
const navLinks = [...document.querySelectorAll(".link")];
const menuBtn = document.querySelector(".menu-btn");
const subMenuBtn = document.querySelector(".sub-menu-btn");

function createHoverEl() {
	let hoverEl = document.createElement("div");
	hoverEl.className = "hover-el";
	hoverEl.style.setProperty("--y", "0px");
	hoverEl.style.setProperty("--mousex", "0px");
	hoverEl.style.setProperty("--mousey", "0px");
	navLinksContainer.appendChild(hoverEl);
}
createHoverEl();

navLinks.forEach((link, index) => {
	let hoverEl = navLinksContainer.querySelector(".hover-el");
	link.style.setProperty("--delay", `${index * 50}ms`);
	link.addEventListener("mousemove", function(e) {
		hoverEl.style.setProperty("--y", `${index * 60}px`);
		hoverEl.style.setProperty("opacity", "1");
		hoverEl.style.setProperty("--mousex", `${e.pageX - hoverEl.offsetLeft}px`);
		hoverEl.style.setProperty("--mousey", `${e.pageY - hoverEl.offsetTop}px`);
	});
	navLinksContainer.addEventListener("mouseout", function() {
		hoverEl.style.setProperty("opacity", "0");
	});
	link.addEventListener("click", function() {
		let hoverEl = navLinksContainer.querySelector(".hover-el");
		hoverEl.style.opacity = '0';
		toggleSubmenu(link);
	});
});

menuBtn.addEventListener("click", function() {
	nav.classList.toggle("nav-open");
	menuBtn.classList.toggle("close");
});
subMenuBtn.addEventListener("click", function() {
	nav.classList.toggle("sub-menu-open");
	removeSubmenu();
});

function toggleSubmenu(el) {
	let subMenu = nav.querySelector(".sub-menu");
	if (el.children[1]) {
		createSubmenu(el);
	} else if (nav.contains(subMenu)) {
		removeSubmenu();
	} else {
		return;
	}
}

function createSubmenu(el) {
	let subMenuContainer = document.createElement("div");
	subMenuContainer.className = "sub-menu";
	let subMenuItem = el.children[1].cloneNode(true);
	let subMenuItemList = [...subMenuItem.children];
	subMenuItemList.forEach((item, index) => {
		item.classList.add("off-menu");
		item.style.setProperty("--delay", `${index * 40}ms`);
	});
	nav.classList.toggle("sub-menu-open");
	nav.appendChild(subMenuContainer);
	subMenuContainer.appendChild(subMenuItem);
	setTimeout(function() {
		subMenuItemList.forEach(item => {
			item.classList.remove("off-menu");
			item.classList.add("on-menu");
		});
	}, 200);
}
function removeSubmenu() {
	let subMenu = nav.querySelector(".sub-menu");
	let subMenuItemList = [...subMenu.children[0].children];
	if (nav.contains(subMenu)) {
		subMenuItemList.forEach(item => {
			item.classList.add("off-menu");
			item.classList.remove("on-menu");
		});
		setTimeout(function() {
			nav.removeChild(subMenu);
		}, 500);
	}
}

// 
// tabs

var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btnTarget = el.currentTarget;
   var country = btnTarget.dataset.country;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + country).classList.add("active");
   
   btnTarget.classList.add("active");
}


// 캐러셀
let curPos = 0;
let postion = 0;
const IMAGE_HEIGTH = 42;
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".imagesmain")
 
function prev(){
  if(curPos > 0){
    nextBtn.removeAttribute("disabled")
    postion += IMAGE_HEIGTH;
    images.style.transform = `translateY(${postion}rem)`;
    curPos = curPos - 1;
	console.log('ok')
  }
  if(curPos == 0){
    prevBtn.setAttribute('disabled', 'true')
  }
}
function next(){
  if(curPos < 2){
    prevBtn.removeAttribute("disabled")
    postion -= IMAGE_HEIGTH;
    images.style.transform = `translateY(${postion}rem)`;
    curPos = curPos + 1;
	console.log('ok')
  }
  if(curPos == 2){
    nextBtn.setAttribute('disabled', 'true')
  }
}
 
function init(){
  prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
}
 
init();

// 캐러셀끝
