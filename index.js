/**
 *@description 全部工具栏
 */
export const container = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{
    'header': 1
  }, {
    'header': 2
  }],
  [{
    'list': 'ordered'
  }, {
    'list': 'bullet'
  }],
  [{
    'script': 'sub'
  }, {
    'script': 'super'
  }],
  [{
    'indent': '-1'
  }, {
    'indent': '+1'
  }],
  [{
    'direction': 'rtl'
  }],
  [{
    'size': ['small', false, 'large', 'huge']
  }],
  [{
    'header': [1, 2, 3, 4, 5, 6, false]
  }],
  [{
    'color': []
  }, {
    'background': []
  }],
  [{
    'font': []
  }],
  [{
    'align': []
  }],
  ['clean'],
  ['link', 'image', 'video']
]


const titleConfig = [{
    Choice: '.ql-bold',
    title: '加粗'
  },
  {
    Choice: '.ql-italic',
    title: '斜体'
  },
  {
    Choice: '.ql-underline',
    title: '下划线'
  },
  {
    Choice: '.ql-header',
    title: '段落格式'
  },
  {
    Choice: '.ql-strike',
    title: '删除线'
  },
  {
    Choice: '.ql-blockquote',
    title: '块引用'
  },
  {
    Choice: '.ql-code-block',
    title: '插入代码段'
  },
  {
    Choice: '.ql-font',
    title: '标准字体'
  },
  {
    Choice: '.ql-font .ql-picker-item[data-value="serif"]',
    title: '衬线字体'
  },
  {
    Choice: '.ql-font .ql-picker-item[data-value="monospace"]',
    title: '等宽字体'
  },
  {
    Choice: '.ql-size',
    title: '字体大小'
  },
  {
    Choice: '.ql-list[value="ordered"]',
    title: '编号列表'
  },
  {
    Choice: '.ql-list[value="bullet"]',
    title: '项目列表'
  },
  {
    Choice: '.ql-direction',
    title: '文本方向'
  },
  {
    Choice: '.ql-header[value="1"]',
    title: 'h1'
  },
  {
    Choice: '.ql-header[value="2"]',
    title: 'h2'
  },
  {
    Choice: '.ql-align',
    title: '对齐方式'
  },
  {
    Choice: '.ql-color',
    title: '字体颜色'
  },
  {
    Choice: '.ql-background',
    title: '背景颜色'
  },
  {
    Choice: '.ql-image',
    title: '图像'
  },
  {
    Choice: '.ql-video',
    title: '视频'
  },
  {
    Choice: '.ql-link',
    title: '添加链接'
  },
  {
    Choice: '.ql-clean',
    title: '清除字体格式'
  },
  {
    Choice: '.ql-script[value="sub"]',
    title: '下标'
  },
  {
    Choice: '.ql-script[value="super"]',
    title: '上标'
  },
  {
    Choice: '.ql-indent[value="-1"]',
    title: '向左缩进'
  },
  {
    Choice: '.ql-indent[value="+1"]',
    title: '向右缩进'
  },
  {
    Choice: '.ql-header .ql-picker-label',
    title: '标题大小'
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="1"]',
    title: '标题一'
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="2"]',
    title: '标题二'
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="3"]',
    title: '标题三'
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="4"]',
    title: '标题四'
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="5"]',
    title: '标题五'
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="6"]',
    title: '标题六'
  },
  {
    Choice: '.ql-header .ql-picker-item:last-child',
    title: '标准'
  },
  {
    Choice: '.ql-size .ql-picker-item[data-value="small"]',
    title: '小号'
  },
  {
    Choice: '.ql-size .ql-picker-item[data-value="large"]',
    title: '大号'
  },
  {
    Choice: '.ql-size .ql-picker-item[data-value="huge"]',
    title: '超大号'
  },
  {
    Choice: '.ql-size .ql-picker-item:nth-child(2)',
    title: '标准'
  },
  {
    Choice: '.ql-align .ql-picker-item:first-child',
    title: '居左对齐'
  },
  {
    Choice: '.ql-align .ql-picker-item[data-value="center"]',
    title: '居中对齐'
  },
  {
    Choice: '.ql-align .ql-picker-item[data-value="right"]',
    title: '居右对齐'
  },
  {
    Choice: '.ql-align .ql-picker-item[data-value="justify"]',
    title: '两端对齐'
  }

];

export function addQuillTitle() {
  titleConfig.forEach(function(item) {
    let tip = document.querySelector('.quill-editor ' + item.Choice)
    tip.setAttribute('title', item.title)
  });
  loadCssCode();
}

//动态创建css
export function loadCssCode() {
  let code = '\n' +
    '.ql-snow .ql-tooltip[data-mode="link"]::before {\n' +
    '  content: "请输入链接地址:";\n' +
    '}\n' +

    '.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n' +
    '  border-right: 0px;\n' +
    '  content: "保存";\n' +
    '  padding-right: 0px;\n' +
    '}\n' +

    '.ql-snow .ql-tooltip[data-mode="video"]::before {\n' +
    '  content: "请输入视频地址:";\n' +
    '}\n' +

    '.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n' +
    '.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n' +
    '  content: "14px";\n' +
    '}\n' +

    '.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,\n' +
    '.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {\n' +
    '  content: "10px";\n' +
    ' }\n' +

    ' .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,\n' +
    ' .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {\n' +
    '   content: "18px";\n' +
    ' }\n' +

    ' .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,\n' +
    ' .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {\n' +
    '   content: "32px";\n' +
    ' }\n' +

    ' .ql-snow .ql-picker.ql-header .ql-picker-label::before,\n' +
    ' .ql-snow .ql-picker.ql-header .ql-picker-item::before {\n' +
    '   content: "文本";\n' +
    ' }\n' +

    '.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,\n' +
    ' .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {\n' +
    '    content: "标题1";\n' +
    '  }\n' +

    ' .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,\n' +
    ' .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {\n' +
    '    content: "标题2";\n' +
    ' }\n' +

    '.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,\n' +
    '.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {\n' +
    '   content: "标题3";\n' +
    ' }\n' +

    ' .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,\n' +
    ' .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {\n' +
    '   content: "标题4";\n' +
    ' }\n' +

    ' .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,\n' +
    ' .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {\n' +
    '   content: "标题5";\n' +
    ' }\n' +

    '  .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,\n' +
    '  .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {\n' +
    '    content: "标题6";\n' +
    '  }\n' +

    ' .ql-snow .ql-picker.ql-font .ql-picker-label::before,\n' +
    ' .ql-snow .ql-picker.ql-font .ql-picker-item::before {\n' +
    '   content: "标准字体";\n' +
    ' }\n' +

    ' .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,\n' +
    ' .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {\n' +
    '   content: "衬线字体";\n' +
    ' }\n' +

    '.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,\n' +
    ' .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {\n' +
    '   content: "等宽字体";\n' +
    ' } \n'
  var style = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(code));
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}
