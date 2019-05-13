function main()
{
  //シーンの基本設定
  var scene = new THREE.Scene()
  var width = 400
  var height = 400
  var fov = 30
  var aspect = width/height //アス比
  var near = 1 //ここから
  var far = 500 //ここまでの間に3D描画を行う

  var camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.set(0, 0, 10)
  scene.add(camera)

  var light = new THREE.PointLight(0xffffff)
  light.position.set(5, 5, 5)
  scene.add(light)

  var renderer = new THREE.WebGLRenderer({antialias:true})
  renderer.setSize(width, height)
  document.body.appendChild(renderer.domElement)

  /*********************************************三角形建立開始!***************************************************/

    var vertices = [
      [-1, 1, 1],
      [-1, -1, 1],
      [1, -1, 1]
    ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle = makeTriangle(vertices, faces)
  var triangles = [triangle]

  var vertices = [
    [-1, 1, 1],
    [1, -1, 1],
    [1, 1, 1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle2 = makeTriangle(vertices, faces)
  triangles.push(triangle2)

  var vertices = [
    [-1, 1, 1],
    [1, 1, -1],
    [-1, 1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle3 = makeTriangle(vertices, faces)
  triangles.push(triangle3)

  var vertices = [
    [-1, 1, 1],
    [1, 1, 1],
    [1, 1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle4 = makeTriangle(vertices, faces)
  triangles.push(triangle4)

  var vertices = [
    [1, 1, 1],
    [1, 1, -1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle5 = makeTriangle(vertices, faces)
  triangles.push(triangle5)

  var vertices = [
    [1, 1, 1],
    [1, -1, 1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle6 = makeTriangle(vertices, faces)
  triangles.push(triangle6)

  var vertices = [
    [-1, 1, 1],
    [-1, -1, 1],
    [-1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle7 = makeTriangle(vertices, faces)
  triangles.push(triangle7)

  var vertices = [
    [-1, 1, 1],
    [-1, 1, -1],
    [-1, -1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle8 = makeTriangle(vertices, faces)
  triangles.push(triangle8)

  var vertices = [
    [-1, -1, 1],
    [1, -1, -1],
    [-1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle9 = makeTriangle(vertices, faces)
  triangles.push(triangle9)

  var vertices = [
    [-1, -1, 1],
    [1, -1, 1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle10 = makeTriangle(vertices, faces)
  triangles.push(triangle10)

  var vertices = [
    [-1, 1, -1],
    [-1, -1, -1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle11 = makeTriangle(vertices, faces)
  triangles.push(triangle11)

  var vertices = [
    [-1, 1, -1],
    [1, -1, -1],
    [1, 1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle12 = makeTriangle(vertices, faces)
  triangles.push(triangle12)

  /*******************************************三角形建立終了！**********************************/

  for(let i = 0; i < triangles.length; i++){
      scene.add(triangles[i])
    }

  loop()

  function loop(){
    requestAnimationFrame(loop)
    for(let i = 0; i < triangles.length; i++){
      rotation(triangles[i])
    }

    document.addEventListener('mousedown', onmousedown)

  onmousedown = function(ev){
    if(ev.target == renderer.domElement){
      var mouse = new THREE.Vector2

      mouse.x = (ev.clientX/renderer.domElement.ClientWidth)*2 - 1
      mouse.y = (ev.clientY/renderer.domElement.Clientheight)*2 - 1
      var vector = new THREE.Vector3(mouse.x, mouse.y, 1)

      var ray = new THREE.Raycaster()
      ray.setFromCamera(vector, camera)
       //クリック判定
       var obj = ray.intersectObjects(triangles)

       if(obj.length > 0){
        obj[0].face.color.setRGB(1, 0, 0)
        obj[0].object.geometry.colorsNeedUpdate = true
       }
    }
  }

    renderer.render(scene, camera)
  }
}

function makeTriangle(vertices, faces){
  var v0 = new THREE.Vector3().fromArray(vertices[0])
  var v1 = new THREE.Vector3().fromArray(vertices[1])
  var v2 = new THREE.Vector3().fromArray(vertices[2])
  var id = faces[0]
  var f0 = new THREE.Face3(id[0], id[1], id[2])

  var geometry = new THREE.Geometry()
  geometry.vertices.push(v0)
  geometry.vertices.push(v1)
  geometry.vertices.push(v2)
  geometry.faces.push(f0)

  var material = new THREE.MeshBasicMaterial()
  material.vertexColors = new THREE.Color(
    (1, 0, 0), (0, 1, 0), (0, 0, 1)
  )
  geometry.faces[0].color = new THREE.Color(
    vertices[0][0], vertices[0][1], vertices[0][2])
  geometry.computeFaceNormals();
  var triangle = new THREE.Mesh(geometry, material)
  return triangle
}

function rotation(triangle){
  triangle.rotation.x += 0.005
  triangle.rotation.y += 0.01
}

