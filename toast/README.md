# @shawyu/toast

toast.js is a lightweight plugin for JavaScript and Node.js. 

[Github地址](https://github.com/shawyuu/js-plugin/tree/main/toast)

```
https://github.com/shawyuu/js-plugin/tree/main/toast
```

## Getting started

### Install

```sh
npm install @shawyu/toast
```

### In browser

```
<script src="../toast/index.js"></script>
```

### Usage

```js
import Toast from '@shawyu/toast'

Toast.show('Toast Tip')
```

When the `option` is string!

```js
Toast.show('Toast Tip')
Toast.primary('primary Tip')
Toast.success('success Tip')
Toast.warning('warning Tip')
Toast.error('error Tip')
Toast.info('info Tip')

Toast.loading('Loading...') //When this type is loading! You must manually turn it off

setTimeout(()=>{
	Toast.hideLoading()
},1000)
```

When the `option` is object! 

When `showClose` is `true`! It will not automatically shut down. When you call the function(like Toast.primary(),Toast.warning(),Toast.error(),Toast.info(),Toast.loading()). the `type` parameter will become invalid.

```js
Toast.show({
	title:'Toast Tip',
	showClose:true,
	type:'info',
	placement:"center"
})


Toast.success({
	title:'Toast Tip',
	placement:"top",
	type:'info'  // is invalid
})

Toast.custom({
	title:'Toast Tip',
	placement:"top",
	bgColor:"linear-gradient(45deg, #96fbc4 0%, #f9f586 100%)",
	color:"#086030",
	type:'custom'
})

Toast.loading({
	title: 'loading',
	placement: 'center',
	bgColor: 'rgba(0,0,0,0.75)',
	color: '#fff',
	mask:false,
	loadingStyle: 'circle'
})
setTimeout(()=>{
	Toast.hideLoading({
		delay:1000,  // delay to run callback, default value:500
		success:()=>{
			console.log('it closed')
		},
		fail:()=>{
			console.log('fail')
		}
	})				
},1000)				
```

### All Props

|PROP|       TYPE       |DEFAULT|REQUIRED|DESCRIPTION|
|:-:|:----------------:|:-:|:-:|:-:|
|title|     `string`     | `""` | `YES` |The title of the Toast.  |
|type|     `string`     | `default` | `NO` |The type of Toast.Possible values:`default`,`primary`,`success`,`warning`,`error`,`info`,`custom`|
|placement|     `string`     | `center` | `NO` | Positions the toast relative to its reference element.Possible values:`top`,`center`,`bottom` |
|bgColor|     `string`     | `rgba(0,0,0,0.75)` |`YES` | Background of the toast. it takes effect when the `type` is `custom` or use `Toast.loading`.|
|color|     `string`     | `#fff` |`NO` | The text color of toast. , it takes effect when the `type` is `custom` or use `Toast.loading`|
|duration| `string\|number` | `1000` | `NO` | Delay duration for automatic shutdown. |
|showClose|    `boolean`     | `false` | `NO` | Determines if the toast has an close btn(icon).it takes effect when the `type` is one of `primary,success,warning,error,info`，when it's `true`,you must handle to close it|
|showIcon|    `boolean`     | `true` | `NO` | Determines if the toast has an icon.it takes effect when the `type` is one of `primary,success,warning,error,info`|
|mask|  `boolean`     | `false` | `NO` | Determine if the toast requires a mask. |
|onClose|  `function`     | `null` | `NO` | callback function |
|loadingStyle|     `string`     | `circle` | `NO` | when `type` is `loading`, it takes effect.Possible values:`circle`,`point` ，it takes effect when use `Toast.loading`.|

### Logs

>
> 1.0.0 version\
> 1.0.1 fix\
> 1.0.2 optimize
> 1.0.3 add showIcon and onClose(callback)\
>       add hideLoading（when use Toast.loading，you must use Toast.hideLoading to close it）\
> 1.0.4 fix parameter error\
>  
