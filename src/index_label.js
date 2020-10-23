import $ from 'jQuery';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer, CSS2DObject } from 'three-css2drender';

var width = $('#root').width();
var height = $('#root').height();
$("#root").empty();
var camera, scene, renderer, labelRenderer;
var earth, moon;

init();
renderer.render(scene, camera);
labelRenderer.render(scene, camera);


function init () {

  var EARTH_RADIUS = 1;
  var MOON_RADIUS = 0.27;

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(10, 5, 20);

  scene = new THREE.Scene();

  var dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 0, 1);
  scene.add(dirLight);

  // var axesHelper = new THREE.AxesHelper(5);
  // scene.add(axesHelper);

  //
  var earthGeometry = new THREE.SphereBufferGeometry(1, 1, 1);
  var earthMaterial = new THREE.MeshBasicMaterial();
  earth = new THREE.Mesh(earthGeometry, earthMaterial);
  scene.add(earth);

  var moonGeometry = new THREE.SphereBufferGeometry(1, 1, 1);
  var moonMaterial = new THREE.MeshBasicMaterial();
  moon = new THREE.Mesh(moonGeometry, moonMaterial);
  scene.add(moon);

  //

  var earthDiv = document.createElement('div');
  earthDiv.className = 'label';
  earthDiv.textContent = 'Earth';
  earthDiv.style.marginTop = '-1em';
  var earthLabel = new CSS2DObject(earthDiv);
  earthLabel.position.set(0, 1, 0);
  earth.add(earthLabel);

  var moonDiv = document.createElement('div');
  moonDiv.className = 'label';
  moonDiv.textContent = 'Moon';
  moonDiv.style.marginTop = '-1em';
  var moonLabel = new CSS2DObject(moonDiv);
  moonLabel.position.set(0, 0.27, 0);
  moon.add(moonLabel);

  //

  renderer = new THREE.WebGLRenderer();
  // renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  $("#root").append(renderer.domElement);

  labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(width, height);
  labelRenderer.domElement.style.position = 'absolute';
  labelRenderer.domElement.style.top = '0px';
  $("#root").append(labelRenderer.domElement);

  // var controls = new OrbitControls(camera, labelRenderer.domElement);
  // controls.minDistance = 5;
  // controls.maxDistance = 100;

}

