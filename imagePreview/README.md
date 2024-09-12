# @shawyu/image-preview

imagePreview是一个轻量级、无依赖的JavaScript插件，可以网页中实现图片预览功能，快速查看图片的大图，并提供了一些基本的交互功能，如放大、缩小、旋转等。

[Github地址](https://github.com/shawyuu/js-plugin/tree/main/imagePreview)

```
https://github.com/shawyuu/js-plugin/tree/main/imagePreview
```

## Getting started

### Install

```sh
npm install @shawyu/image-preview
```

### In browser

```
<script src="../imagePreview/index.js"></script>
```

### Usage

```js
import ImagePreview from '@shawyu/image-preview'

/*单图预览*/
ImagePreview.show({
	src:"图片路径",
	success:()=>{},
	fail:()=>{}
})

/*多图预览*/
ImagePreview.show({
	urls:["图片路径1","图片路径2"]
})

ImagePreview.show({
	src:"图片路径1",
	urls:["图片路径1","图片路径2"]
})
```

### All Props

|属性|类型|默认值|必需|描述|
|:-:|:-:|:-:|:-:|:-:|
|src|`string`| `""` | `NO` |要预览的图片路径，多图预览非必需(或为urls其中一张路径)，单图预览必需|
|urls|`Array<string>`| `[]` | `NO` |多图预览时(必填)的图片路径列表|
|success|`function`| | `NO` |图片加载成功后的回调函数 |
|fail|`function`|  | `NO` |图片加载失败后的回调函数 |

### Logs

>
> 1.0.0 version\
> 1.0.2 Adapt to mobile devices
> 
