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

  var vertices = [
    [-1, 1, 1],
    [-1, -1, 1],
    [1, -1, 1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle = makeTriangle(vertices, faces)
  scene.add(triangle)

  var vertices = [
    [-1, 1, 1],
    [1, -1, 1],
    [1, 1, 1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle2 = makeTriangle(vertices, faces)
  scene.add(triangle2)

  var vertices = [
    [-1, 1, 1],
    [1, 1, -1],
    [-1, 1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle3 = makeTriangle(vertices, faces)
  scene.add(triangle3)

  var vertices = [
    [-1, 1, 1],
    [1, 1, 1],
    [1, 1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle4 = makeTriangle(vertices, faces)
  scene.add(triangle4)

  var vertices = [
    [1, 1, 1],
    [1, 1, -1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle5 = makeTriangle(vertices, faces)
  scene.add(triangle5)

  var vertices = [
    [1, 1, 1],
    [1, -1, 1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle6 = makeTriangle(vertices, faces)
  scene.add(triangle6)

  var vertices = [
    [-1, 1, 1],
    [-1, -1, 1],
    [-1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle7 = makeTriangle(vertices, faces)
  scene.add(triangle7)

  var vertices = [
    [-1, 1, 1],
    [-1, 1, -1],
    [-1, -1, -1]
  ];
  var faces = [
    [0, 1, 2]
  ]
  var triangle8 = makeTriangle(vertices, faces)
  scene.add(triangle8)

  var vertices = [
    [-1, -1, 1],
    [1, -1, -1],
    [-1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle9 = makeTriangle(vertices, faces)
  scene.add(triangle9)

  var vertices = [
    [-1, -1, 1],
    [1, -1, 1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle10 = makeTriangle(vertices, faces)
  scene.add(triangle10)

  var vertices = [
    [-1, 1, -1],
    [-1, -1, -1],
    [1, -1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle11 = makeTriangle(vertices, faces)
  scene.add(triangle11)

  var vertices = [
    [-1, 1, -1],
    [1, -1, -1],
    [1, 1, -1]
  ];
  var faces = [
    [0, 2, 1]
  ]
  var triangle12 = makeTriangle(vertices, faces)
  scene.add(triangle12)

  loop()

  function loop(){
    requestAnimationFrame(loop)
    rotation(triangle)
    rotation(triangle2)
    rotation(triangle3)
    rotation(triangle4)
    rotation(triangle5)
    rotation(triangle6)
    rotation(triangle7)
    rotation(triangle8)
    rotation(triangle9)
    rotation(triangle10)
    rotation(triangle11)
    rotation(triangle12)
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
  triangle.rotation.x += 0.001
  triangle.rotation.y += 0.001
}
