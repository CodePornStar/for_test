			let size = 200;
			let canvas = document.createElement('canvas');
			let ctx = canvas.getContext('2d');
			canvas.width = size;
			canvas.height = size;
			canvas.classList.add('tempcanvas');
			document.body.appendChild(canvas);			
			function loadImages(paths,whenLoaded){
			  var imgs=[];
			  paths.forEach(function(path){
			    var img = new Image;
			    img.onload = function(){
			      imgs.push(img);
			      if (imgs.length==paths.length) whenLoaded(imgs);
			    }
			    img.src = path;
			  });
			}
			function fillUp(array,max){
				var length = array.length;
				for(i=0;i<max-length;i++){
					array.push(array[Math.floor(Math.random()*length)])
				}
				return array;
			}
			function shuffle(a) {
			  for (let i = a.length; i; i--) {
			    let j = Math.floor(Math.random() * i);
					[a[i - 1], a[j]] = [a[j], a[i - 1]];
			  }
			  return a;
			}
			function getArrayFromImage(img){
				let imageCoords = [];
				ctx.clearRect(0,0,size,size);
			    ctx.drawImage(img, 0, 0, size, size);
			    let data = ctx.getImageData(0, 0, size, size);
			    data = data.data;
			    for(var y = 0; y < size; y++) {
			      for(var x = 0; x < size; x++) {
			        var red = data[((size * y) + x) * 4];
			        var green = data[((size * y) + x) * 4 + 1];
			        var blue = data[((size * y) + x) * 4 + 2];
			        var alpha = data[((size * y) + x) * 4 + 3];
				        if(alpha>0){
				        	imageCoords.push([10*(x - size/2),10*(size/2 - y)]);
				        }
			        }
			      }
			      return shuffle(fillUp(imageCoords, 30000));
			}
			
			
			
			
				
				
				
				

var container;
			var camera, scene, renderer;			
			var mouseX = 0, mouseY = 0;
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			document.addEventListener( 'mousemove', onDocumentMouseMove, true);
			init();
			animate();
			
			
			
			
			
			
			
			
			
			
			
			
			
			function init() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );				
				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3500;
				
				
				
				scene = new THREE.Scene();	

				
				/*

				// LIGHTS
				var light = new THREE.AmbientLight(0xffffff, .9);
				scene.add(light);
				var light2 = new THREE.PointLight(0xffffff, 1);
				light2.position.x = 3000;
				light2.position.y = 2000;
				light2.position.z = -1000;
				//light2.castShadow = true;				
				scene.add(light2);
				//
				*/
				
				// Add the ground plane


				
				
				var plane_geometry = new THREE.PlaneGeometry(4000, 4000);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0x000000,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -700;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = .5;
				plane_mesh.position.x = 0;
				/*plane_mesh.rotation.y +=(-40*Math.PI/180); */
				scene.add(plane_mesh);
				
				//
				
				var plane_geometry = new THREE.PlaneGeometry(700, 700);
				
				var plane_material = new THREE.MeshBasicMaterial({ 
				map: THREE.ImageUtils.loadTexture("img/arrow1.svg") 
				
				});
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -490;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = 1900;
				plane_mesh.position.y = 1900;
				/*plane_mesh.rotation.y +=(-40*Math.PI/180); */
				scene.add(plane_mesh);	
				
				// 
				
				
				
				
				
				//
				
				var plane_geometry = new THREE.PlaneGeometry(700, 700);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0x0091e5,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -500;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = 1900;
				plane_mesh.position.y = 1900;
				/*plane_mesh.rotation.y +=(-40*Math.PI/180); */
				scene.add(plane_mesh);	
				
				// 
				//
				
				var plane_geometry = new THREE.PlaneGeometry(100, 700);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0x0078bd,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -550;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = 1550;
				plane_mesh.position.y = 1900;
				plane_mesh.rotation.y +=(90*Math.PI/180); 
				scene.add(plane_mesh);	
				
				// 
				
				//
				
				var plane_geometry = new THREE.PlaneGeometry(700, 100);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0x006199,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -550;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = 1900;
				plane_mesh.position.y = 1550;
				
				plane_mesh.rotation.x +=(90*Math.PI/180); 
				scene.add(plane_mesh);	
				
				// 
				
				
				
				///////////////////////////////////////
				
				
				
				
				
				
				
				
			var box_geometry = new THREE.PlaneGeometry(700, 700);
			var box_material = new THREE.MeshBasicMaterial({
					color: 0xFFFFFF,
					side: THREE.DoubleSide
				});	
				
				var box_mesh = new THREE.Mesh(box_geometry, box_material);
				box_mesh.position.z = -500;
				box_mesh.material.transparent = true;
				box_mesh.material.opacity = .8;
				box_mesh.position.x = -1900;
				box_mesh.position.y = -1900; 
				box_mesh.receiveShadow = true;
				box_mesh.rotation.z +=(-90*Math.PI/180); 
				scene.add(box_mesh);

			///
			//
				
				var plane_geometry = new THREE.PlaneGeometry(100, 700);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0xFFFFFF,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -550;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = -1550;
				plane_mesh.position.y = -1900;
				plane_mesh.rotation.y +=(90*Math.PI/180); 
				scene.add(plane_mesh);	
				
				// 

			//
				
				var plane_geometry = new THREE.PlaneGeometry(700, 100);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0xFFFFFF,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -550;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = -1900;
				plane_mesh.position.y = -1550;
				plane_mesh.rotation.x +=(-90*Math.PI/180); 
				scene.add(plane_mesh);	
				
				// 
			//
				///
				var plane_geometry = new THREE.PlaneGeometry(100, 700);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0xFFFFFF,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -550;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = -2250;
				plane_mesh.position.y = -1900;
				plane_mesh.rotation.y +=(90*Math.PI/180); 
				scene.add(plane_mesh);	
				
				// 

			//
				
				var plane_geometry = new THREE.PlaneGeometry(700, 100);
				
				var plane_material = new THREE.MeshBasicMaterial({
					color: 0xFFFFFF,
					side: THREE.DoubleSide
				});	
				
				var plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
				plane_mesh.position.z = -550;
				plane_mesh.material.transparent = true;
				plane_mesh.material.opacity = 1;
				plane_mesh.position.x = -1900;
				plane_mesh.position.y = -2250;
				plane_mesh.rotation.x +=(-90*Math.PI/180); 
				scene.add(plane_mesh);	
				
				// 
				
				
				//////////////////////////////////////////////
				
				
				
				scene.background = new THREE.CubeTextureLoader()
					.setPath( 'new_folder/' )
					.load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );
				
				
				let images = ['img/close.svg','img/arrow.svg','img/place.svg'];
			
			loadImages(images,function(loadedImages){
				gallery = [];
				loadedImages.forEach(function(el,index){
					gallery.push(getArrayFromImage(loadedImages[index]));
				});
				
				
				
				var texture = (new THREE.TextureLoader).load("img/particle.png");
					var material = new THREE.PointCloudMaterial({
					  size: 15,
					  vertexColors: THREE.VertexColors,
					  map: texture,
					  alphaTest: 0
					});
					
					geometry = new THREE.Geometry();
					var x, y, z;
				gallery[0].forEach((el,index)=>{
						geometry.vertices.push(new THREE.Vector3(el[0], el[1], Math.random()*50));
						geometry.colors.push(new THREE.Color(0xFFFFFF));
					});
					
					var pointCloud = new THREE.PointCloud(geometry, material);
					pointCloud.position.z = 0;
				pointCloud.position.x = 1000;
				pointCloud.rotation.y +=(-40*Math.PI/180); 
					
					
					
					scene.add(pointCloud);
				
				
				});
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				renderer = new THREE.WebGLRenderer();
				renderer.shadowMap.enabled = true;
				renderer.shadowMapType = THREE.PCFSoftShadowMap;
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				
				container.appendChild( renderer.domElement );
				
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
			
			
			
			
			
			
			
			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}
			
			
			
				
			
			
			function onDocumentMouseMove( event ) {
				mouseX = ( event.clientX - windowHalfX ) * 0.9;
				mouseY = ( event.clientY - windowHalfY ) * 0.9;
			}
			
			
			
			
			/*raycaster = new THREE.Raycaster();
				raycaster.setFromCamera( mouse1, camera );
				var intersects = raycaster.intersectObjects( scene.children );
				if ( intersects.length > 0 ) {
					if ( INTERSECTED != intersects[ 0 ].object ) {
						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
						INTERSECTED = intersects[ 0 ].object;
						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
						INTERSECTED.material.emissive.setHex( 0xff0000 );
					}
				} else {
					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
					INTERSECTED = null;
				}
			var mouse1 = new THREE.Vector2(), INTERSECTED;	
				
				function onDocumentMouseMove( event ) {
				event.preventDefault();
				mouse1.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse1.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}
				*/
			
			
			
			
			
			
			
					
			
			
			
			
			
			
			
			
			function render() {	






			
					var i = 0;			
					i++;					
					geometry.vertices.forEach( function(particle, index){
					  var dX, dY, dZ;
					  dX = 0;
					  dY = 0;
					  dZ = 0;
					  particle.add(new THREE.Vector3(dX, dY, dZ));
					});
					geometry.verticesNeedUpdate = true;					
					
				
				

			
				
				camera.position.x += ( mouseX - camera.position.x ) * .05;
				camera.position.y += ( - mouseY - camera.position.y ) * .05;
				camera.lookAt( scene.position );				
				renderer.render( scene, camera );
				
				
			}

function animate() {
				requestAnimationFrame( animate );					
				render();
			}	



		