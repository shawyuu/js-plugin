# @shawyu/modal

modal.js 是一款轻量级用来显示模态对话框的插件。

[Github地址](https://github.com/shawyuu/js-plugin/tree/main/modal)

```
https://github.com/shawyuu/js-plugin/tree/main/modal
```

## Getting started

### Install

```sh
npm install @shawyu/modal
```

### In browser

```
<script src="../modal/index.js"></script>
```

### Usage

```js
import Modal from '@shawyu/modal'

Modal.show({
	title: '提示',
	content: '这是一个模态弹窗',
	confirm:()=> {
		console.log('用户点击确定')
	},
	cancel:()=> {
		console.log('用户点击取消')
	}
})
```

### All Props

|属性|       类型       |默认值|必需|描述|
|:-:|:----------------:|:-:|:-:|:-:|
|title|     `string`     | `` | `NO` | 提示的标题  |
|content|     `string`     | `` | `YES` |提示的内容，可以是普通字符串，也可以是HTML字符串 |
|showCancel|     `boolean`     | `true` | `NO` | 是否显示取消按钮 |
|cancelText|     `string`     | `取消` |`NO` | 取消按钮的文字 |
|cancelColor|     `string`     | `#f5f6f7` |`NO` | 取消按钮的文字颜色，显示颜色的字符串|
|showConfirm|     `boolean`     | `true` | `NO` | 是否显示确认按钮 |
|confirmText|     `string`     | `确定` |`NO` | 确认按钮的文字 |
|confirmColor|     `string`     | `#3565ee` |`NO` | 确认按钮的文字颜色，显示颜色的字符串 |
|maskColor|     `string`     | `rgba(0,0,0,0.5)` |`NO` | 确认按钮的文字颜色，显示颜色的字符串 |
|maskClosable|     `boolean`     | `true` | `NO` | 是否可以点击遮罩关闭提示 |
|cancel|  `function`     | `null` | `NO` | 点击取消的回调函数 |
|confirm|  `function`     | `null` | `NO` | 点击确认的回调函数 |

### Logs

>
> 1.0.0 version\
>  
