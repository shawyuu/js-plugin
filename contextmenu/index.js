/**
 * contextmenu v1.0.0
 * MIT License
 * 作者：shaw
 * ＱＱ：758815944
 * -------------------------------------------------------------
 * 右键菜单
 * Date 2024-08-01
 * options      {json}
 *  ├ id        {id}       input的id
 */
;
(function(global) {
	"use strict";
	const _BOXNAME = 'yu-contextmenu-wrapper';
	const _ANIMATION_IN = 'yu-contextmenu-in';
	const _ANIMATION_OUT = 'yu-contextmenu-out';
	const chooseElById = function(id) { return document.getElementById(id) };
	const chooseEl = function(attr) { return document.querySelector(attr) };
	const chooseAllEl = function(attr) { return document.querySelectorAll(attr) };
	const createEl = function(tag) { return document.createElement(tag) };
	let _this;
	const fn = function(selector) {
		_this = this;
		let target = chooseEl(selector || 'body');
		function initContextmenu(option){
			// const rect = target.getBoundingClientRect();
			target.oncontextmenu = (e) => {
				e.preventDefault();
				e.stopPropagation();
				let x = e.pageX; // 鼠标点击的位置
				let y = e.pageY;
				let _el = chooseElById(_BOXNAME);
				if (_el){
					setPosition(_el,x,y);
					return
				};
				_el = createEl("div");
				_el.id = _BOXNAME;
				_el.className = _BOXNAME;
				_el.style.cssText = `background-color: #fff;color: #333;font-size: 15px;line-height: 24px;padding: 8px 0;border-radius: 8px;box-shadow: 0 5px 18px rgba(0,0,0,0.1);position: absolute;left: 0;top: 0;z-index: 99;`;
				createItemNode(_el,option);
				setPosition(_el,x,y);
				document.oncontextmenu = documentCallback();
				document.onclick = documentCallback();
			}
		}
		
		function createItemNode(el,option) {
			let fragmentEl = document.createDocumentFragment();
			let menu = option.menu;
			for (let i = 0, len = menu.length; i < len; i++) {
				if(typeof(menu[i]) === "object" && menu[i] !== null){
					console.error(`Contextmenu:fail parameter "menu" error: expected Array<string|number> but get Array<object> value.`)
					return 
				}
				let _item = createEl("div");
				_item.className = "yu-contextmenu-item";
				_item.innerText = menu[i];
				_item.style.cssText = `padding: 8px 20px;background-color: transparent;cursor: pointer;`;
				_item.onclick = (e) => {
					e.stopPropagation();
					option.callback && option.callback(i)
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

		function setPosition(el,posX,posY){
			let winWidth = window.innerWidth;
			let winHeight = window.innerHeight;
			let rect = el.getBoundingClientRect();
			let menuWidth = rect.width,menuHeight = rect.height;
			let posLeft = 0,posTop = 0;
			if (posX + menuWidth >= winWidth && posY + menuHeight >= winHeight) { // 右边和底部同时超出
				posLeft = posX - menuWidth;
				posTop = posY - menuHeight;
			}else if (posX + menuWidth >= winWidth) { // 右侧超出
				posLeft = posX - menuWidth;
				posTop = posY;
			}else if (posY + menuHeight >= winHeight) { // 底部超出
				posLeft = posX;
				posTop = posY - menuHeight;
			}else { // 默认情况，都不超出
				posLeft = posX;
				posTop = posY;
			}
			el.style.left = posLeft + 'px';
			el.style.top = posTop + 'px';
		}
		
		function closeContextmenu() {
			let _el = chooseElById(_BOXNAME);
			if(!_el) return
			_el.remove();
			document.oncontextmenu = null;
			document.onclick = null;
		}
		
		function documentCallback(){
			return function(e){
				e.preventDefault();
				e.stopPropagation();
				closeContextmenu()
			}
		}
		
		this._init = (option) => {
			if(typeof(option) === "object" && option !== null){
				let menu = Array.isArray(option.menu)?option.menu:[];
				let config = {
					menu,
					callback:option.callback || null
				}
				return initContextmenu(config)
			}else{
				let err = typeof(option) === "object"? null:typeof(option);
				console.error(`Contextmenu:fail parameter error: expected <object> but get <${err}> value.`)
			}
		}
	}

	fn.prototype = {
		init: (option) => {
			_this._init(option)
		}
	};

	if (typeof define === 'function' && define.amd) {
		define([], fn);
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		module.exports = fn;
	} else {
		global.Contextmenu = fn;
	}
})(this);