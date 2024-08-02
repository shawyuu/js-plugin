# @shawyu/toast

toast.js is a lightweight plugin for JavaScript and Node.js. 

## Getting started

### Install

```sh
npm install @shawyu/toast
```

### In browser

```sh
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
	Toast.hide()
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
```

### All Props

|PROP|TYPE|DEFAULT|REQUIRED|DESCRIPTION|
|:-:|:-:|:-:|:-:|:-:|
|title|`string`| `""` | `YES` |The title of the Toast.  |
|type|`string`| `default` | `NO` |The type of Toast.Possible values:`default`,`primary`,`success`,`warning`,`error`,`info`,`loading`,`custom`|
|placement|`string`| `center` | `NO` | Positions the toast relative to its reference element.Possible values:`top`,`center`,`bottom` |
|bgColor|`string`| `rgba(0,0,0,0.75)` |`YES` | Background of the toast. when `showArrow` is `false`, it takes effect when the `type` is `loading` or `custom`.|
|color|`string`| `#fff` |`NO` | The text color of toast. , it takes effect when the `type` is `loading` or `custom`|
|duration|`string|number`| `1000` | `NO` | Delay duration for automatic shutdown. |
|showClose|`boolean`| `false` | `NO` | Determines if the toast has an close btn(icon).it takes effect when the `type` is one of `primary,success,warning,error,info`|
|mask|`boolean`| `false` | `NO` | Determine if the toast requires a mask. |
|loadingStyle|`string`| `circle` | `NO` | when `type` is `loading`, it takes effect.Possible values:`circle`,`point`|

### Logs

>
> 1.0.0 version
> 1.0.1 fix
> 