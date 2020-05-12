# quill-video-image-module

#### 介绍
quill整合视频上传，图片上传到服务器模块，用video标签替换iframe，中文提示框，中文描述

#### 软件架构
软件架构说明


#### 安装教程

1. npm i vue-quill-editor 
2. npm i quill 
3. npm i quill-video-image-module

#### 使用说明

```javascript
<template>
  <div class="createArticle">
    <quill-editor class="ql-editor" v-model="content" :options="editorOption"></quill-editor>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css' // import styles
  import 'quill/dist/quill.snow.css' // for snow theme
  import 'quill/dist/quill.bubble.css' // for bubble theme
  import {
    quillEditor,
    Quill
  } from 'vue-quill-editor';
  import {
    container,
    addQuillTitle
  } from 'quill-video-image-module';
  import {
    ImageExtend,
    QuillWatch
  } from 'quill-video-image-module/quill-image-module';
  import {
    VideoExtend,
    QuillVideoWatch
  } from 'quill-video-image-module/quill-video-module'

  import ImageResize from 'quill-image-resize-module'

  // 引入video模块并注册
  import video from 'quill-video-image-module/video'
  Quill.register(video, true)

  Quill.register('modules/ImageResize', ImageResize)
  Quill.register('modules/ImageExtend', ImageExtend)
  Quill.register('modules/VideoExtend', VideoExtend)
  export default {
    components: {
      quillEditor
    },
    data() {
      return {
        content: '',
        // 富文本框参数设置
        editorOption: {
          modules: {
            ImageResize: {},
            ImageExtend: {
              loading: true, // 可选参数 是否显示上传进度和提示语
              name: 'img', // 图片参数名
              size: 2, // 可选参数 图片大小，单位为M，1M = 1024kb
              action: 'http://127.0.0.1:5000/upload/img', // 服务器地址, 如果action为空，则采用base64插入图片
              // response 为一个函数用来获取服务器返回的具体图片地址
              // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}}
              // 则 return res.data.url
              response: res => {
                return res.data.url;
              },
              headers: () => {}, // 可选参数 设置请求头部
              start: () => {}, // 可选参数 自定义开始上传触发事件
              end: () => {}, // 可选参数 自定义上传结束触发的事件，无论成功或者失败
              error: () => {}, // 可选参数 自定义网络错误触发的事件
              change: () => {}, // 可选参数 每次选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
              sizeError: () => {
                alert('图片不能大于1M')
              }
            },
            VideoExtend: {
              loading: true,
              name: 'img',
              size: 100, // 可选参数 视频大小，单位为M，1M = 1024kb
              action: 'http://127.0.0.1:5000/upload/img', // 视频上传接口
              headers: (xhr) => {
                // set custom token(optional)
              },
              response: (res) => {
                // video uploaded path
                // custom your own
                return res.data.url;
              },
              sizeError: () => {
                alert('视频不能大于100M')
              }
            },
            toolbar: {
              container: container, // container为工具栏，此次引入了全部工具栏，也可自行配置
              handlers: {
                image: function() {
                  // 劫持原来的图片点击按钮事件
                  QuillWatch.emit(this.quill.id);
                },
                video: function() {
                  QuillVideoWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      };
    },
    methods: {},
    created() {

    },
    mounted() {
      addQuillTitle();
    }
  };
</script>
```
```css
<style>
  .createArticle {
    padding: 40px 40px;
  }

  .ql-editor {
    min-height: 800px;
  }

  /* 解决粘贴后光标会自动弹到文档的初始位置 */
  .ql-clipboard {
    position: fixed;
    display: none;
    left: 50%;
    top: 50%;
  }

</style>
```
