# @shawyu/contextmenu

contextmenu.js 是一款轻量的`JavaScript`和`Node.js`插件。不依赖任何第三方库。专门用于Web应用中的右键菜单功能。ContextMenu不需要将其自身绑定到触发对象上，这使得它非常灵活，可以随时注入和删除触发器，而不必重新初始化或更新菜单。

[Github地址](https://github.com/shawyuu/js-plugin/tree/main/contextmenu)

```sh
https://github.com/shawyuu/js-plugin/tree/main/contextmenu
```

## 开始使用

### npm安装

```sh
npm install @shawyu/contextmenu
```

### <script>引入

```sh
<script src="../contextmenu/index.js"></script>
```

### 使用

```js
import Contextmenu from '@shawyu/contextmenu'

let menu = new Contextmenu(selector) //selector控制可以使用右键菜单功能的区域，默认为body
menu.init({
	menu:["关闭全部","关闭当前","关闭其他","关闭右侧"], /* 不支持对象数组 */
	callback:(index)=>{
		console.log('序号',index)
	}
})
```

### 所有属性

|属性|类型|默认值|必需|描述|
|:-:|:-:|:-:|:-:|:-:|
|menu|`Array.<string\|number>`| `[]` |`YES` | 菜单列表 |
|callback|`function`|  | `NO` |菜单点击回调方法 |

### 版本日志

>
> 1.0.0  新版本
> 
