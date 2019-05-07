function main()
{
  //シーンの基本設定
  var scene = new THREE.Scene()
  var width = 600
  var height = 400
  var fov = 60
  var aspect = width/height //アス比
  var near = 1 //ここから
  var far = 1000 //ここまでの間に3D描画を行う

  var camera = new THREE.PerspectiveCamera(fov, aspectl, near, far)
  camera.position.set(0, 0, 10)
  var controls = new THREE.OrbitControls(camera)

  if(!Detector.webgl)Detector.addGetWebGLMessage()
  //レンダラーをDOM常に配置する
  var renderer = new THREE.WebGLRenderer({antialias:true})
  renderer.setClearColor(0xFFFFFF, 1)
  renderer.setSize(width, height)
  document.body.appendChild(renderer.domElement)

  var vertices = [
    [-1, 1, 0],
    [-1, -1, 0],
    [1, -1, 0]
  ];
  var faces = [
    [0, 1, 2]
  ]

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
  material.vertexColors = THREE.FaceColors
  geometry.faces[0].color = new THREE.Color(1, 0, 0)
}
