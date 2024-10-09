/**
 * contextmenu v1.1.1
 * MIT License
 * 作者：shaw
 * ＱＱ：758815944
 * -------------------------------------------------------------
 * 右键菜单
 * Date 2024-10-09
 * options      {json}
 *  ├ menu      {array<string|number>}       右键菜单列表
 * 	├ target    {string}                     选择器
 *  ├ pointX    {number}                     鼠标箭头相对屏幕的x坐标
 *  ├ pointY    {number}                     鼠标箭头相对屏幕的y坐标
 *  ├ success   {function}               	 右键成功点击后的的回调函数
 */
const _BOXNAME = 'yu-contextmenu-wrapper';
const chooseElById = function(id) { return document.getElementById(id) };
const chooseEl = function(attr) { return document.querySelector(attr) };
const createEl = function(tag) { return document.createElement(tag) };
let option = null;

function createNode(x, y) {
	let _el = chooseElById(_BOXNAME);
	if (_el) {
		setPosition(_el, x, y);
		return
	};
	_el = createEl("div");
	_el.id = _BOXNAME;
	_el.className = _BOXNAME;
	_el.style.cssText = `background-color: #fff;color: #333;font-size: 15px;line-height: 24px;padding: 8px 0;border-radius: 8px;box-shadow: 0 5px 18px rgba(0,0,0,0.1);position: absolute;left: 0;top: 0;z-index: 99;`;
	createItemNode(_el);
	setPosition(_el, x, y);
	document.oncontextmenu = documentCallback();
	document.onclick = documentCallback();
}

function createItemNode(el) {
	let fragmentEl = document.createDocumentFragment();
	let menu = option.menu;
	for (let i = 0, len = menu.length; i < len; i++) {
		if (typeof(menu[i]) === "object" && menu[i] !== null) {
			console.error(`Contextmenu:fail parameter "menu" error: expected Array<string|number> but get Array<object> value.`)
			return
		}
		let _item = createEl("div");
		_item.className = "yu-contextmenu-item";
		_item.innerText = menu[i];
		_item.style.cssText = `padding: 8px 20px;background-color: transparent;cursor: pointer;`;
		_item.onclick = (e) => {
			e.stopPropagation();
			option.success && option.success(i)
			closeContextmenu()
		}
		_item.onmouseenter = (e) => {
			_item.style.backgroundColor = '#f2f2f2';
		}
		_item.onmouseleave = (e) => {
			_item.style.backgroundColor = 'transparent';
		}
		fragmentEl.appendChild(_item);
	}
	el.appendChild(fragmentEl)
	document.body.appendChild(el);
}

function setPosition(el, posX, posY) {
	let winWidth = window.innerWidth;
	let winHeight = window.innerHeight;
	let rect = el.getBoundingClientRect();
	let menuWidth = rect.width,
		menuHeight = rect.height;
	let posLeft = 0,
		posTop = 0;
	if (posX + menuWidth >= winWidth && posY + menuHeight >= winHeight) { // 右边和底部同时超出
		posLeft = posX - menuWidth;
		posTop = posY - menuHeight;
	} else if (posX + menuWidth >= winWidth) { // 右侧超出
		posLeft = posX - menuWidth;
		posTop = posY;
	} else if (posY + menuHeight >= winHeight) { // 底部超出
		posLeft = posX;
		posTop = posY - menuHeight;
	} else { // 默认情况，都不超出
		posLeft = posX;
		posTop = posY;
	}
	el.style.left = posLeft + 'px';
	el.style.top = posTop + 'px';
}

function closeContextmenu() {
	let _el = chooseElById(_BOXNAME);
	if (!_el) return
	_el.remove();
	document.oncontextmenu = null;
	document.onclick = null;
}

function documentCallback() {
	return function(e) {
		e.preventDefault();
		e.stopPropagation();
		closeContextmenu()
	}
}

function _init(params) {
	if (typeof(params) === "object" && params !== null) {
		let menu = Array.isArray(params.menu) ? params.menu : [];
		option = {
			menu,
			target: params.target || "",
			success: params.success || null
		}
		if (!option.target) {
			console.error(`Contextmenu: fail parameter error: "target" is required in init({}) function.`)
		}
		let target = chooseEl(option.target);
		target.oncontextmenu = (e) => {
			e.preventDefault();
			e.stopPropagation();
			let x = e.pageX; // 鼠标点击的位置
			let y = e.pageY;
			createNode(x, y);
		};
	} else {
		let err = typeof(option) === "object" ? null : typeof(option);
		console.error(`Contextmenu:fail parameter error: expected <object> but get <${err}> value.`)
	}
}

function _show(params) {
	if (typeof(params) === "object" && params !== null) {
		let menu = Array.isArray(params.menu) ? params.menu : [];
		option = {
			menu,
			pointX: params.pointX || 0,
			pointY: params.pointY || 0,
			success: params.success || null
		}
		createNode(option.pointX, option.pointY);
	} else {
		let err = typeof(option) === "object" ? null : typeof(option);
		console.error(`Contextmenu:fail parameter error: expected <object> but get <${err}> value.`)
	}
}

export default {
	init: (params) => {
		return _init(params)
	},
	show: (params) => {
		return _show(params)
	}
}