import $ from 'jQuery';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer, CSS2DObject } from 'three-css2drender';
$("#root").empty();
var scene, camera, point, axesHelper, dirLight, renderer, labelRenderer;


init();

meshObject();

render();


function meshObject () {
  var geometry = new THREE.SphereBufferGeometry(65, 60, 60);
  var material = new THREE.MeshBasicMaterial();
  var sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(0, 5, 0);
  scene.add(sphere);

  var moonDiv = document.createElement('div');
  moonDiv.className = 'label';
  moonDiv.textContent = 'Moon';
  moonDiv.style.marginTop = '-1em';
  var moonLabel = new CSS2DObject(moonDiv);
  moonLabel.position.set(100, 0, 0);
  scene.add(moonLabel);
}


function render () {
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

function init () {
  var root = document.getElementById("root");
  var width = $('#root').width();
  var height = $('#root').height();
  var k = width / height;
  var s = 200;

  ///---
  // var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
  // camera.position.set(10, 5, 20);
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  camera.position.set(200, 300, 200);
  camera.lookAt(scene.position);

  point = new THREE.PointLight(0xffffff);
  point.position.set(400, 200, 300);
  scene.add(point);

  axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 0, 1);
  scene.add(dirLight);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(0xb9d3ff, 1);
  root.appendChild(renderer.domElement);

  labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(width, height);
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.top = '0';
  labelRenderer.domElement.style.pointerEvents = 'none';
  root.appendChild(labelRenderer.domElement);
}