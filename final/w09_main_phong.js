function main_phong()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth/2,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var fov = 45;
    var aspect = window.innerWidth/2 / window.innerHeight;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    screen.scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight );
    target_dom.appendChild( renderer.domElement )

    var light_phong = new THREE.PointLight();
    light_phong.position.set( 2000, 500, 5 );
    screen.scene.add( light_phong );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, light_phong );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth/2, window.innerHeight ] );
    });

    renderer.render( screen.scene, camera );

    screen.loop();
}
