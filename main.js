console.clear();

const { gsap } = window;

const btn = document.querySelector(".menu-btn");

btn.addEventListener("click", () => {
	if (btn.classList.contains("active")) {
		btn.classList.remove("active");
		hide();
	} else {
		btn.classList.add("active");
		show();
	}
});

function show() {
	let tl = gsap.timeline();

	gsap.set(".nav__inner, .menu-btn", {
		pointerEvents: "none",
	});

	tl.fromTo(
		".nav--transition-slide",
		{
			scaleX: 0,
			transformOrigin: "left center",
		},
		{
			duration: 0.5,
			scaleX: 1,
			ease: "Expo.inOut",
		}
	)
		.set(".nav__inner, .menu-btn", {
		pointerEvents: "all",
	})
		.fromTo(
		".nav--item-line",
		{
			scaleX: 0,
			transformOrigin: "left center",
		},
		{
			duration: 0.65,
			scaleX: 1,
			ease: "Expo.inOut",
			stagger: 0.15,
		}
	)
		.fromTo(
		".nav--link",
		{
			translateY: "100%",
		},
		{
			duration: 2.25,
			translateY: 0,
			ease: "elastic.inOut",
			stagger: 0.15,
		},
		"-=1.65"
	);
}

function hide() {
	let tl = gsap.timeline();

	gsap.set(".nav__inner, .menu-btn", {
		pointerEvents: "none",
	});

	tl.to(".nav--item-line", {
		duration: 0.6,
		scaleX: 0,
		transformOrigin: "right center",
		ease: "Expo.inOut",
		stagger: -0.15,
	})
		.to(
		".nav--link",
		{
			duration: 0.35,
			translateY: "100%",
			ease: "Expo.inOut",
			stagger: -0.15,
		},
		0
	)
		.to(".nav--transition-slide", {
		duration: 0.5,
		transformOrigin: "right center",
		scaleX: 0,
		ease: "Expo.inOut",
	})
		.set(" .menu-btn", {
		pointerEvents: "all",
	});
}

/*play button */
TweenMax.set(".play-circle-01", {
	rotation: 90,
	transformOrigin: "center"
  })
  
  TweenMax.set(".play-circle-02", {
	rotation: -90,
	transformOrigin: "center"
  })
  
  TweenMax.set(".play-perspective", {
	xPercent: 6.5,
	scale: .175,
	transformOrigin: "center",
	perspective: 1
  })
  
  TweenMax.set(".play-video", {
	visibility: "hidden",
	opacity: 0,
  })
  
  TweenMax.set(".play-triangle", {
	transformOrigin: "left center",
	transformStyle: "preserve-3d",
	rotationY: 10,
	scaleX: 2
  })
  
  const rotateTL = new TimelineMax({ paused: true })
	.to(".play-circle-01", .7, {
	  opacity: .1,
	  rotation: '+=360',
	  strokeDasharray: 456,
	  ease: Power1.easeInOut
	}, 0)
	.to(".play-circle-02", .7, {
	  opacity: .1,
	  rotation: '-=360',
	  strokeDasharray: 411,
	  ease: Power1.easeInOut
	}, 0)
  
  const openTL = new TimelineMax({ paused: true })
	.to(".play-backdrop", 1, {
	  opacity: .95,
	  visibility: "visible",
	  ease: Power2.easeInOut
	}, 0)
	.to(".play-close", 1, {
	  opacity: 1,
	  ease: Power2.easeInOut
	}, 0)
	.to(".play-perspective", 1, {
	  xPercent: 0,
	  scale: 1,
	  ease: Power2.easeInOut
	}, 0)
	.to(".play-triangle", 1, {
	  scaleX: 1,
	  ease: ExpoScaleEase.config(2, 1, Power2.easeInOut)
	}, 0)
	.to(".play-triangle", 1, {
	  rotationY: 0,
	  ease: ExpoScaleEase.config(10, .01, Power2.easeInOut)
	}, 0)
	.to(".play-video", 1, {
	  visibility: "visible",
	  opacity: 1
	}, .5)
  
  
  const button = document.querySelector(".play-button")
  const backdrop = document.querySelector(".play-backdrop")
  const close = document.querySelector(".play-close")
  
  button.addEventListener("mouseover", () => rotateTL.play())
  button.addEventListener("mouseleave", () => rotateTL.reverse())
  button.addEventListener("click", () => openTL.play())
  backdrop.addEventListener("click", () => openTL.reverse())
  close.addEventListener("click", e => {
	e.stopPropagation()
	openTL.reverse()
  })