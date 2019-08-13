var myFullpage = new fullpage('#fullpage', {
        
        anchors: ['firstPage', 'secondPage', 'thirdPage','fourthPage'],
        menu: '#menu',
		scrollingSpeed: 1000,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		slidesNavigation: true,
	onSlideLeave: function( section, origin, destination, direction){
		var leavingSlide = this;
		
/////СЕКЦИЯ 0


		//ПРАВО
		if(section.index == 0 && direction == 'right'){
			anime({
					  targets: '.sec_slide_0 .sl_0',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
					
			anime({
					  targets: '.sec_slide_1 .sl_1',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec_slide_2 .sl_2',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});				
		}

		// ЛЕВО
               if(section.index == 0 && direction == 'left'){
			anime({
					  targets: '.sec_slide_0 .sl_0',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec_slide_1 .sl_1',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});	
			anime({
					  targets: '.sec_slide_2 .sl_2',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});			
		}
		
		
	/////СЕКЦИЯ 1

	//ПРАВО
		if(section.index == 1 && direction == 'right'){
			anime({
					  targets: '.sec1_slide_0 .sl1_0',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
					
			anime({
					  targets: '.sec1_slide_1 .sl1_1',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec1_slide_2 .sl1_2',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});				
		}

		// ЛЕВО
               if(section.index == 1 && direction == 'left'){
			anime({
					  targets: '.sec1_slide_0 .sl1_0',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec1_slide_1 .sl1_1',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});	
			anime({
					  targets: '.sec1_slide_2 .sl1_2',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});			
		}
		
		/////СЕКЦИЯ 2

	//ПРАВО
		if(section.index == 2 && direction == 'right'){
			anime({
					  targets: '.sec2_slide_0 .sl2_0',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
					
			anime({
					  targets: '.sec2_slide_1 .sl2_1',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec2_slide_2 .sl2_2',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});				
		}

		// ЛЕВО
               if(section.index == 2 && direction == 'left'){
			anime({
					  targets: '.sec2_slide_0 .sl2_0',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec2_slide_1 .sl2_1',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});	
			anime({
					  targets: '.sec2_slide_2 .sl2_2',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});			
		}
		
		/////СЕКЦИЯ 3

	//ПРАВО
		if(section.index == 3 && direction == 'right'){
			anime({
					  targets: '.sec3_slide_0 .sl3_0',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
					
			anime({
					  targets: '.sec3_slide_1 .sl3_1',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec3_slide_2 .sl3_2',
					  keyframes: [
						{translateX: 10},
						{translateX: -5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});				
		}

		// ЛЕВО
               if(section.index == 3 && direction == 'left'){
			anime({
					  targets: '.sec3_slide_0 .sl3_0',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});
			anime({
					  targets: '.sec3_slide_1 .sl3_1',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});	
			anime({
					  targets: '.sec3_slide_2 .sl3_2',
					  keyframes: [
						{translateX: -10},
						{translateX: 5},
						{translateX: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(20, {from: 'center'}),
					  loop: false
					});			
		}
		
	
		
	},

	
	
	onLeave: function(origin, destination, direction){
		var leavingSection = this;

		if(direction =='down'){
			anime({
					  targets: '.animation-keyframes-demo .el',
					  keyframes: [
						{translateY: 10},
						{translateY: -5},
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),
					  loop: false
					});
			anime({
					  targets: '.animation-keyframes-demo1 .el1',
					  keyframes: [
						{translateY: 10},
						{translateY: -5},
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),
					  loop: false
					});
			anime({
					  targets: '.animation-keyframes-demo2 .el2',
					  keyframes: [
						{translateY: 10},
						{translateY: -5},						
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),					  
					  loop: false
					});	
			anime({
					  targets: '.animation-keyframes-demo3 .el3',
					  keyframes: [
						{translateY: 10},
						{translateY: -5},						
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),					  
					  loop: false
					});		
			anime({
					  targets: '.animation-keyframes-demo4 .el4',
					  keyframes: [
						{translateY: 10},
						{translateY: -5},						
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),					  
					  loop: false
					});	
			
		}		
			
		else if(direction == 'up'){
		
		anime({
				  targets: '.animation-keyframes-demo .el',
				  keyframes: [
					{translateY: -10},
					{translateY: 5},
					{translateY: 0}
				  ],
				  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),
					  loop: false
				});
		anime({
					  targets: '.animation-keyframes-demo1 .el1',
					  keyframes: [
						{translateY: -10},
						{translateY: 5},
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),
					  loop: false
					});	
		anime({
					  targets: '.animation-keyframes-demo2 .el2',
					  keyframes: [
						{translateY: -10},
						{translateY: 5},
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),
					  loop: false
					});	
		anime({
					  targets: '.animation-keyframes-demo3 .el3',
					  keyframes: [
						{translateY: -10},
						{translateY: 5},
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),
					  loop: false
					});
		anime({
					  targets: '.animation-keyframes-demo4 .el4',
					  keyframes: [
						{translateY: -10},
						{translateY: 5},
						{translateY: 0}
					  ],
					  duration: 1500,
					  easing: 'easeInCubic',	
					  delay: anime.stagger(10, {start: 10}),
					  loop: false
					});
					
	}		
		
		
		
		
		
		
		
		
		
		//после покидания раздела 1
		if(origin.index == 0 && direction =='down'){
			//alert("Going to section 2!");
			
		geometry.vertices.forEach( function(particle, index){
						let tl = new TimelineMax();
						tl.to(particle,1,{x:gallery[1][index][0],y:gallery[1][index][1]});
					})	
			
			
			
		}

		else if(origin.index == 1 && direction == 'up'){
			//alert("Going to section 1!");
			
			geometry.vertices.forEach( function(particle, index){
						let tl = new TimelineMax();
						tl.to(particle,1,{x:gallery[0][index][0],y:gallery[0][index][1]});
					})	
			
			
			
			
		}
		
		
		//после покидания раздела 2
		if(origin.index == 1 && direction =='down'){
			//alert("Going to section 3!");
			
		geometry.vertices.forEach( function(particle, index){
						let tl = new TimelineMax();
						tl.to(particle,1,{x:gallery[2][index][0],y:gallery[2][index][1]});
					})	
			
			
			
		}

		else if(origin.index == 2 && direction == 'up'){
			//alert("Going to section 2!");
			
			geometry.vertices.forEach( function(particle, index){
						let tl = new TimelineMax();
						tl.to(particle,1,{x:gallery[1][index][0],y:gallery[1][index][1]});
					})	
			
			
			
			
		}
		
		
		//после покидания раздела 3
		if(origin.index == 2 && direction =='down'){
			//alert("Going to section 3!");
			
		geometry.vertices.forEach( function(particle, index){
						let tl = new TimelineMax();
						tl.to(particle,1,{x:gallery[3][index][0],y:gallery[3][index][1]});
					})	
			
			
			
		}

		else if(origin.index == 3 && direction == 'up'){
			//alert("Going to section 2!");
			
			geometry.vertices.forEach( function(particle, index){
						let tl = new TimelineMax();
						tl.to(particle,1,{x:gallery[2][index][0],y:gallery[2][index][1]});
					})	
			
			
			
			
		}
		
		
		/////
		
		
		
		
		
		/////
		
		
		
	}
	
	
        
    });
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	