<template>
  <div class='webgl-view'>
    <h3>three js 绘制</h3>
    <button @click='createScene'>绘制</button>
    <div id="webgl" style="margin-top: 200px;margin-left: 100px;"></div>
  </div>
</template>

<script setup lang='ts'>

import { onMounted } from 'vue'
import * as THREE from 'three';

onMounted(() => {

})

/**
 * 创建场景
 */
const createScene = () => {
  const scene = new THREE.Scene(); // 三维场景
  const geometry = new THREE.BoxGeometry(100, 100, 100); // 长方体
  const material = new THREE.MeshBasicMaterial({ // 创建一个材质对象Material
    color: 0xff0000, // 0xff0000设置材质颜色为红色
  });
  const mesh = new THREE.Mesh(geometry, material); // 网格模型
  mesh.position.set(0,10,0); // 设置网格模型在三维空间中的位置坐标，默认是坐标原点
  scene.add(mesh); // 把网格模型mesh添加到三维场景scene中。
  const camera = new THREE.PerspectiveCamera(); // 实例化一个透视投影相机对象
  camera.position.set(200, 200, 200); // 相机在Three.js三维坐标系中的位置，根据需要设置相机位置具体值
  camera.lookAt(mesh.position); // 指向mesh对应的位置
  // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
  const width = 800; // 宽度
  const height = 500; // 高度
  // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
  const camera2 = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
  const renderer = new THREE.WebGLRenderer(); // 创建渲染器对象
  // const width = 800; // 宽度
  // const height = 500; // 高度
  renderer.setSize(width, height); // 设置three.js渲染区域的尺寸(像素px)
  renderer.render(scene, camera); // 执行渲染操作
  document.getElementById('webgl').appendChild(renderer.domElement);
}
//
// /**
//  * 创建虚拟相机
//  */
// const createCamera = (mesh:any) => {
//
//   createRender(camera2)
// }
//
// const createRender = (scene:any,camera:any) => {
//
// }

</script>

<style lang='scss' scoped>
.webgl-view {

}
</style>
