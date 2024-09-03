/**
 * @license MIT
 * author shawyu
 * Toast version 1.0.4
 * ＱＱ：758815944
 */
;(function(global, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory());
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		module.exports = factory();
	} else {
		global.Toast = factory();
	}
}(this, function() {
	"use strict";
	let _m_box_name = 'yu-toast-wrapper';
	let _m_animation_in = 'yu-toast-in';
	let _m_animation_out = 'yu-toast-out';
	const cssKey = 'data-toast-style';
	const chooseElById = function(id) { return document.getElementById(id) };
	const chooseEl = function(attr) { return document.querySelector(attr)};
	const createEl = function(tag) { return document.createElement(tag) };
	let timer = null;
	let params = {};
	function Toast() {}
	
	function createNode(config) {
		let _el_box = chooseElById(_m_box_name);
		if (_el_box) return;
		clearTimeout(timer);
		timer = null;
		params = config;
		let hasIcon = ['primary','success','warning','error','info'].includes(config.type);
		let _el_wrapper = createEl('div');
		_el_wrapper.id = _m_box_name;
		_el_wrapper.className = _m_box_name + ' ' + _m_animation_in;

		let _el_mask = createEl('div');
		_el_mask.className = "yu-toast-mask";
		_el_mask.style.cssText = `background:${config.mask?'rgba(0, 0, 0, 0.5)':'transparent'}`;
		// _el_mask.addEventListener('click', (e) => {
		// 	e.stopPropagation();
		// 	bindHideToast();
		// });
		_el_wrapper.appendChild(_el_mask);

		let icon = "";
		let _el = createEl('div');
		_el.className = "yu-toast" + " yu-toast-" + config.placement + ' yu-toast-' + config.type;
		if (config.type === "default") {
			_el.style.cssText = `background:rgba(0,0,0,0.75);color:#fff`;
		}else if (config.type === "primary") {
			icon = `<svg class="icon" fill="#fff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 65.984C266.048 65.984 65.984 266.048 65.984 512S266.048 958.016 512 958.016 958.016 757.952 958.016 512 757.952 65.984 512 65.984zM544 736c0 17.696-14.304 32-32 32s-32-14.304-32-32l0-288c0-17.696 14.304-32 32-32s32 14.304 32 32L544 736zM512 352c-26.496 0-48-21.536-48-48C464 277.472 485.504 256 512 256s48 21.472 48 48C560 330.464 538.496 352 512 352z"></path></svg>`;
			_el.style.cssText = `background:${getColor(config.type)};color:#fff`;
		}else if (config.type === "success") {
			icon = `<svg class="icon" fill="#fff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM727.232 438.432l-256.224 259.008c-0.064 0.064-0.192 0.096-0.256 0.192-0.096 0.064-0.096 0.192-0.192 0.256-2.048 1.984-4.576 3.2-6.944 4.544-1.184 0.672-2.144 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.968 2.336-4.096 0-8.224-0.8-12.096-2.4-1.28-0.544-2.304-1.632-3.52-2.304-2.368-1.344-4.832-2.528-6.88-4.544-0.064-0.064-0.096-0.192-0.16-0.256-0.064-0.096-0.192-0.096-0.256-0.192l-126.016-129.504c-12.32-12.672-12.032-32.928 0.64-45.248 12.672-12.288 32.896-12.064 45.248 0.64l103.264 106.112 233.28-235.84c12.416-12.576 32.704-12.704 45.248-0.256C739.52 405.6 739.648 425.856 727.232 438.432z"></path></svg>`;
			_el.style.cssText = `background:${getColor(config.type)};color:#fff`;
		} else if (config.type === "warning") {
			icon = `<svg class="icon" fill="#fff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M942.656 769.376 602.112 159.584c-22.144-39.712-55.104-62.496-90.304-62.496-35.232 0-68.16 22.784-90.368 62.528L81.312 769.344c-22.016 39.456-24.256 79.456-6.112 110.4C93.344 910.624 129.664 928 174.88 928l674.24 0c45.184 0 81.536-17.376 99.648-48.256C966.944 848.8 964.672 808.832 942.656 769.376zM480 320c0-17.664 14.336-32 32-32s32 14.336 32 32l0 288c0 17.696-14.336 32-32 32s-32-14.304-32-32L480 320zM512 832.128c-26.528 0-48-21.504-48-48s21.472-48 48-48 48 21.504 48 48S538.528 832.128 512 832.128z"></path></svg>`;
			_el.style.cssText = `background:${getColor(config.type)};color:#fff`;
		} else if (config.type === "error") {
			icon = `<svg class="icon" fill="#fff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.992 64 64 264.96 64 512s200.96 448 448 448c247.008 0 448-200.96 448-448S759.04 64 512 64zM694.752 649.984c12.48 12.544 12.448 32.768-0.064 45.248-6.24 6.208-14.4 9.344-22.592 9.344-8.224 0-16.416-3.136-22.656-9.408l-137.6-138.016-138.048 136.576c-6.24 6.144-14.368 9.248-22.496 9.248-8.256 0-16.48-3.168-22.752-9.504-12.416-12.576-12.32-32.8 0.256-45.248l137.888-136.384-137.376-137.824c-12.48-12.512-12.448-32.768 0.064-45.248 12.512-12.512 32.736-12.448 45.248 0.064l137.568 137.984 138.048-136.576c12.544-12.448 32.832-12.32 45.248 0.256 12.448 12.576 12.32 32.832-0.256 45.248l-137.888 136.384L694.752 649.984z"></path></svg>`;
			_el.style.cssText = `background:${getColor(config.type)};color:#fff`;
		} else if (config.type === "info") {
			icon = `<svg class="icon" fill="${getColor(config.type)}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 65.984C266.048 65.984 65.984 266.048 65.984 512S266.048 958.016 512 958.016 958.016 757.952 958.016 512 757.952 65.984 512 65.984zM544 736c0 17.696-14.304 32-32 32s-32-14.304-32-32l0-288c0-17.696 14.304-32 32-32s32 14.304 32 32L544 736zM512 352c-26.496 0-48-21.536-48-48C464 277.472 485.504 256 512 256s48 21.472 48 48C560 330.464 538.496 352 512 352z"></path></svg>`;
			_el.style.cssText = `background:#f2f2f2;color:#333`;
		} else if (config.type === "custom") {
			_el.style.cssText = `background:${config.bgColor};color:${config.color}`;
		}

		_el.innerHTML = `${config.showIcon && icon?'<div class="toast-hd">' + icon + '</div>':''}<div class="toast-bd">${config.title}</div>`;
		_el_wrapper.appendChild(_el);
		document.body.appendChild(_el_wrapper);
		if (config.showClose && hasIcon && config.placement !== 'center') {
			const closeIcon = `<svg class="icon" fill="${config.type === 'info'?'#333':config.color}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z"></path></svg>`;
			let _close_el = document.createElement('div');
			_close_el.className = 'toast-ft';
			_close_el.innerHTML = closeIcon;
			_close_el.addEventListener('click', (e) => {
				e.stopPropagation();
				bindHideToast();
			});
			_el.appendChild(_close_el);
		}else{
			timer = setTimeout(() => {
				bindHideToast()
			}, config.duration);
		}
	}
	
	function getColor(type,alpha=1) {
		if(type === 'primary'){
			return `rgba(72, 116, 240, ${alpha})`
		}else if(type === 'success'){
			return `rgba(60, 195, 152, ${alpha})`
		}else if(type === 'warning'){
			return `rgba(236, 164, 86, ${alpha})`
		}else if(type === 'error'){
			return `rgba(236, 97, 97, ${alpha})`
		}else if(type === 'info'){
			return `rgba(102, 102, 102, ${alpha})`
		}
	}

	function init() {
		let _style = chooseEl(`[${cssKey}]`);
		if (_style) return
		let _style_el = createEl('style');
		let _cssText = `.yu-toast-wrapper .yu-toast-mask{position:fixed;z-index:990;top:0;right:0;left:0;bottom:0;width:100%;height:100%;background:transparent;}.yu-toast-wrapper .yu-toast{position:fixed;z-index:990;background:rgba(0,0,0,0.75);color:#fff;border-radius:15px 15px 0 0;overflow:hidden;user-select:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;align-items:center;gap:10px;border-radius:8px;padding:10px 15px;max-width:480px;min-width:140px;box-sizing:border-box;min-height:48px;}.yu-toast-wrapper .yu-toast-top{top:4vw;left:50%;width:92vw;transform:translate(-50%,0);}.yu-toast-wrapper .yu-toast-center{top:50%;left:50%;transform:translate(-50%,-50%);flex-direction:column;gap:5px;}.yu-toast-wrapper .yu-toast-bottom{bottom:4vw;width:92vw;left:50%;transform:translate(-50%,0);}.yu-toast-wrapper .yu-toast .toast-hd{font-size:0;line-height:0;}.yu-toast-wrapper .yu-toast .toast-hd .icon{width:20px;height:20px;}.yu-toast-wrapper .yu-toast-center .toast-hd .icon{width:40px;height:40px;}.yu-toast-wrapper .yu-toast .toast-bd{-webkit-flex:1;-ms-flex:1;-webkit-box-flex:1;-moz-box-flex:1;flex:1;line-height:1.4;font-size:14px;word-break:break-all;}.yu-toast-wrapper .yu-toast .toast-ft{font-size:0;line-height:0;padding:8px;}.yu-toast-wrapper .yu-toast .toast-ft .icon{width:20px;height:20px;}.yu-toast-wrapper .yu-toast-center .toast-hd{padding:5px 0;}.yu-toast-wrapper .yu-toast-center .toast-bd{padding:5px 0;}.yu-toast-wrapper .yu-toast-center .toast-ft{margin:0;}.yu-toast-wrapper .yu-toast-top .toast-ft,.yu-toast-wrapper .yu-toast-bottom .toast-ft{margin:-4px -8px -4px 0;}.yu-toast-wrapper.yu-toast-in .yu-toast-mask{animation:toastFadeIn 0.2s;}.yu-toast-wrapper.yu-toast-out .yu-toast-mask{animation:toastFadeOut 0.2s;}.yu-toast-wrapper.yu-toast-in .yu-toast-top{animation:toastTopSlideDown 0.3s ease-out;}.yu-toast-wrapper.yu-toast-out .yu-toast-top{animation:toastTopSlideUp 0.3s ease-out;}.yu-toast-wrapper.yu-toast-in .yu-toast-center{animation:toastCenterSlideDown 0.3s ease-out;}.yu-toast-wrapper.yu-toast-out .yu-toast-center{animation:toastCenterSlideUp 0.3s ease-out;}.yu-toast-wrapper.yu-toast-in .yu-toast-bottom{animation:toastSlideUp 0.3s ease-out;}.yu-toast-wrapper.yu-toast-out .yu-toast-bottom{animation:toastSlideDown 0.3s ease-out;}.yu-toast-wrapper .yu-toast .toast-hd .loading-wrapper{padding:8px;}.yu-toast-wrapper .yu-toast .toast-hd .loading-circle{width:30px;aspect-ratio:1;border-radius:50%;background:radial-gradient(farthest-side,#fff 94%,#0000) top/4px 4px no-repeat,conic-gradient(#0000 30%,#fff);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);animation:toastLoadingCircleRotate 1s infinite linear;}.yu-toast-wrapper .yu-toast .toast-hd .loading-point{width:36px;aspect-ratio:1;--_bg:no-repeat radial-gradient(farthest-side,#fff 92%,#0000);background:var(--_bg) top,var(--_bg) left,var(--_bg) right,var(--_bg) bottom;background-size:8px 8px;animation:toastLoadingPointRotate 0.75s infinite;}.yu-toast-wrapper .yu-toast-top .toast-hd .loading-wrapper,.yu-toast-wrapper .yu-toast-bottom .toast-hd .loading-wrapper{padding:2px;}.yu-toast-wrapper .yu-toast-top .toast-hd .loading-circle,.yu-toast-wrapper .yu-toast-bottom .toast-hd .loading-circle{width:24px;}.yu-toast-wrapper .yu-toast-top .toast-hd .loading-point,.yu-toast-wrapper .yu-toast-bottom .toast-hd .loading-point{width:24px;background-size:4px 4px;}@media screen and (min-width:768px){.yu-toast-wrapper .yu-toast-top{top:15px;width:auto;}.yu-toast-wrapper .yu-toast-bottom{bottom:15px;width:auto;}.yu-toast-wrapper .yu-toast .toast-ft{padding:4px;}}@keyframes toastLoadingCircleRotate{to{transform:rotate(1turn)}}@keyframes toastLoadingPointRotate{to{transform:rotate(.5turn)}}@keyframes toastFadeIn{0%{opacity:0;}100%{opacity:1;}}@keyframes toastFadeOut{0%{opacity:1;}100%{opacity:0;}}@keyframes toastTopSlideDown{0%{opacity:0;transform:translate(-50%,-50%);}100%{opacity:1;transform:translate(-50%,0);}}@keyframes toastTopSlideUp{0%{opacity:1;transform:translate(-50%,0);}100%{opacity:0;transform:translate(-50%,-50%);}}@keyframes toastCenterSlideDown{0%{opacity:0;transform:translate(-50%,-100%);}100%{opacity:1;transform:translate(-50%,-50%);}}@keyframes toastCenterSlideUp{0%{opacity:1;transform:translate(-50%,-50%);}100%{opacity:0;transform:translate(-50%,-100%);}}@keyframes toastSlideUp{0%{opacity:0;transform:translate(-50%,50%);}100%{opacity:1;transform:translate(-50%,0);}}@keyframes toastSlideDown{0%{opacity:1;transform:translate(-50%,0);}100%{opacity:0;transform:translate(-50%,50%);}}`;
		_style_el.type = 'text/css';
		_style_el.setAttribute(cssKey,true);
		
		if (_style_el.styleSheet) { //IE
			_style_el.styleSheet.cssText = _cssText;
		} else {  //w3c
			let textNode = document.createTextNode(_cssText);
			_style_el.appendChild(textNode);
		}
		chooseEl('head').appendChild(_style_el);
	}

	function bindHideToast() {
		let _el = chooseElById(_m_box_name);
		if (!_el) return
		_el.classList.remove(_m_animation_in);
		_el.classList.add(_m_animation_out);
		_el.addEventListener('animationend', () => {
			_el.remove()
			let _style_el = chooseEl(`[${cssKey}]`);
			_style_el.remove();
			params.onClose && params.onClose()
		});
	}
	
	function showToast(option, type) {
		init();
		if (typeof option === 'object' && option != null) {
			let boolArr = [true, false];
			let typeList = ['default','primary','success','warning','error','info','custom'];
			let newType = type ? type : typeList.includes(option.type) ? option.type : 'default';
			let showClose = boolArr.includes(option.showClose) ? option.showClose : false;
			let showIcon = boolArr.includes(option.showIcon) ? option.showIcon : true;
			let mask = boolArr.includes(option.mask) ? option.mask : false;
			let duration = option.duration && option.duration > 0 ? option.duration : 1000;
			let placement = ['top','center','bottom'].includes(option.placement) ? option.placement : 'center';
			let config = {
				title: option.title,
				type: newType,
				placement,
				bgColor: option.bgColor || 'rgba(0,0,0,0.75)',
				color: option.color || '#fff',
				duration,
				showClose,
				showIcon,
				mask,
				onClose: option.onClose || null
			};
			return createNode(config);
		} else if (typeof option === 'string') {
			let config = {
				title: option,
				type: type || 'default',
				placement: 'center',
				bgColor: 'rgba(0,0,0,0.75)',
				color: '#fff',
				duration:1000,
				showClose:false,
				showIcon:true,
				mask:false
			}
			return createNode(config);
		}
	}
	
	function createLoadingNode(config) {
		let _el_box = chooseElById(_m_box_name);
		if (_el_box) return;
		let _el_wrapper = createEl('div');
		_el_wrapper.id = _m_box_name;
		_el_wrapper.className = _m_box_name + ' ' + _m_box_name + '-loading ' + _m_animation_in;
		
		let _el_mask = createEl('div');
		_el_mask.className = "yu-toast-mask";
		_el_mask.style.cssText = `background:${config.mask?'rgba(0, 0, 0, 0.2)':'transparent'}`;
		_el_wrapper.appendChild(_el_mask);
		
		let _el = createEl('div');
		_el.className = "yu-toast" + " yu-toast-" + config.placement + ' yu-toast-loading';
		_el.style.cssText = `background:${config.bgColor};color:${config.color}`;
		_el.innerHTML = `<div class="toast-hd"><div class="loading-wrapper"><div class="loading-${config.loadingStyle}"></div></div></div><div class="toast-bd">${config.title}</div>`;
		
		_el_wrapper.appendChild(_el);
		document.body.appendChild(_el_wrapper);
	}
	
	function showLoading(option) {
		init();
		if (typeof option === 'object' && option != null) {
			let loadingStyle = ['circle','point'].includes(option.loadingStyle) ? option.loadingStyle : 'circle';
			let mask = [true, false].includes(option.mask) ? option.mask : false;
			let placement = ['top','center','bottom'].includes(option.placement) ? option.placement : 'center';
			let config = {
				title: option.title,
				placement,
				bgColor: option.bgColor || 'rgba(0,0,0,0.75)',
				color: option.color || '#fff',
				mask,
				loadingStyle
			};
			return createLoadingNode(config);
		} else if (typeof option === 'string') {
			let config = {
				title: option,
				placement: 'center',
				bgColor: 'rgba(0,0,0,0.75)',
				color: '#fff',
				mask:false,
				loadingStyle: 'circle'
			}
			return createLoadingNode(config);
		}
	}
	
	function bindHideLoading(option={}) {
		let _el = chooseEl(`.${_m_box_name}-loading`);
		if (!_el) return
		if (typeof option !== 'object' || option === null){
			console.error(`Toast:fail parameter error: hideLoading() expected an <object> param, but get <${typeof option}>`)
			return
		}
		let delay = option.delay || 500;
		try{
			_el.classList.remove(_m_animation_in);
			_el.classList.add(_m_animation_out);
			_el.addEventListener('animationend', () => {
				_el.remove()
				let _style_el = chooseEl(`[${cssKey}]`);
				_style_el.remove();
				setTimeout(()=>{
					option.success && option.success()
				},delay)
			});
		}catch(err){
			setTimeout(()=>{
				option.fail && option.fail()
			},delay)
		}
	}
	
	Toast.prototype = {
		primary:(option)=> {
			return showToast(option, 'primary')
		},
		success:(option)=> {
			return showToast(option, 'success')
		},
		warning:(option)=> {
			return showToast(option, 'warning')
		},
		error:(option)=> {
			return showToast(option, 'error')
		},
		info:(option)=> {
			return showToast(option, 'info')
		},
		show:(option)=> {
			return showToast(option, '')
		},
		hide:()=> {
			return bindHideToast()
		},
		loading:(option)=> {
			return showLoading(option)
		},
		hideLoading:(option)=> {
			return bindHideLoading(option)
		}
	}
	
	return new Toast();
}));
