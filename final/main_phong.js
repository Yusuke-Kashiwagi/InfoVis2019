function main_phong()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth*0.3,
        height: window.innerHeight/2,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var fov = 45;
    var aspect = window.innerWidth / window.innerHeight;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    screen.scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    target_dom.appendChild( renderer.domElement )

    var light_phong = new THREE.PointLight(0xFFFFFF, 2, 50, 1.0);
    light_phong.position.set( 5, 5, 5 );
    screen.scene.add( light_phong );

    var isovalue = 60;
    var surfaces = Isosurfaces( volume, isovalue, light_phong );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.3, window.innerHeight/2 ] );
    });



    renderer.render( screen.scene, camera );

    screen.loop();
}
