<template>
  <div class='docx-templater'>
    <h1>word模版填入内容（文件位置在：assets/file/template.docx）</h1>
    <input type="file" @change="handleImport" />
    <div ref="docxPreview"></div>
  </div>
</template>

<script setup lang='ts'>
import PizZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver' // fixme:npm安装报错，用yarn安装

/**
 * 导入word文件
 * @param e
 */
const handleImport = async (e) => {
  let data = {
    student: [
      { name: "张三", id: 100, score: 99 },
      { name: "张四", id: 200, score: 99 },
      { name: "张五", id: 300, score: 99 }
    ]
  }
  let _file = e.target.files[0];
  _file.arrayBuffer().then((res) => {
    let zip = new PizZip(res);
    const doc = new Docxtemplater(zip);
    doc.setData(data)
    doc.render();
    const out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    })
    saveAs(out, "test1.docx")
  })
}


</script>

<style lang='scss' scoped>
.docx-templater {

}
</style>
