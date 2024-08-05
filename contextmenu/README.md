# @shawyu/contextmenu

contextmenu.js 是一款轻量的`JavaScript`和`Node.js`插件。不依赖任何第三方库。专门用于Web应用中的右键菜单功能。ContextMenu不需要将其自身绑定到触发对象上，这使得它非常灵活，可以随时注入和删除触发器，而不必重新初始化或更新菜单。

[Github地址](https://github.com/shawyuu/js-plugin/tree/main/contextmenu)

```
https://github.com/shawyuu/js-plugin/tree/main/contextmenu
```

## 开始使用

### npm安装

```sh
npm install @shawyu/contextmenu
```

### script引入

```
<script src="../contextmenu/index.js"></script>
```

### import引入

```js
import Contextmenu from '@shawyu/contextmenu'
```

### 使用一

```js
Contextmenu.init({
    target:"selector", /* 支持类名和id选择器，类名最好唯一，多个相同类名只获取第一个，在init方法中为必填参数 */
	menu:["关闭全部","关闭当前","关闭其他","关闭右侧"], /* 不支持对象数组 */
	success:(index)=>{
		console.log('序号',index)
	}
})
```

### 使用二
```vue
<div>
    <div onclick="handle(window.event)">菜单一</div>
    <div onclick="handle(window.event)">菜单二</div>
</div>
```
```js
function handle(e){
    e.preventDefault(); //e为当前事件对象
    e.stopPropagation();
    let x = e.pageX; // 鼠标点击的位置
    let y = e.pageY;
    Contextmenu.show({
        pointX:x,
        pointY:y,
        menu:["关闭全部","关闭当前","关闭其他","关闭右侧"],
        success:(index)=>{
            console.log('序号',index)
        }
    })
}
```

### 所有属性

| 属性           | 类型                       | 默认值  | 必需    | 描述            |
|--------------|--------------------------|------|-------|---------------|
| menu         | `Array.<string\|number>` | `[]` | `YES` | 菜单列表          |
| target       | `string`                 |      | `NO`  | 选择器           |
| pointX       | `number`                 |      | `NO`  | 鼠标箭头相对屏幕的x坐标  |
| pointY       | `number`                 |      | `NO`  | 鼠标箭头相对屏幕的y坐标  |
| ~~callback~~ | `function`               |      | `NO`  | 菜单点击回调方法      |
| success      | `function`               |      | `NO`  | 右键成功点击后的的回调函数 |

### 版本日志

>
> 1.0.0  
>   新版本
> 
> 1.1.0  
>     
>   废弃callback\
>   新增target属性  selector改为 target获取\
>   新增pointX和pointY 必需同时存在时生效
>
> 1.1.0  
>     
>   不再需要new Contextmenu()来创建实例，直接引用即可使用，单例。
>

