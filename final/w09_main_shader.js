function main_gouraud()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var scene = new THREE.Scene()

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
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
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );   

    var light_gouraud = new THREE.PointLight();
    light_gouraud.position.set( 5, 5, 5 );
    screen.scene.add( light_gouraud );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, light_gouraud );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    renderer.render( scene, camera );

    screen.loop();
}
