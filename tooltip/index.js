/*
 * tooltip
 * ver 1.0.4
 */

(function(global, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory());
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		module.exports = factory();
	} else {
		global.Tooltip = factory();
	}
}(this, function() {
	"use strict";
	let _yu_box_name = 'yu-tool-tip-wrapper';
	const chooseElById = function(id) { return document.getElementById(id) };
	const chooseEl = function(attr) { return document.querySelector(attr) };
	const chooseAllEl = function(attr) { return document.querySelectorAll(attr) };
	const createEl = function(tag) { return document.createElement(tag) };
	const Tooltip = function() {
		const _this = this;

		function isElementVisible(el) {
			const rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth
			);
		}

		function create(config) {
			_this.options = config;
			let _el = chooseElById(_yu_box_name + config.index);
			if (_el) return;
			let _el_wrapper = createEl('div');
			_el_wrapper.id = _yu_box_name + config.index;
			_el_wrapper.className = _yu_box_name + ` yu-tool-tip-${config.placement}`;
			_el_wrapper.style.animation = `toolTipAnimateIn${config.animation} 0.3s ease-out`;

			let _el_content = createEl('div');
			_el_content.className = "tool-tip-content";
			if (!config.showArrow) {
				_el_content.style.background = `${config.bgColor}`;
			}
			_el_content.innerHTML = config.content;
			_el_wrapper.appendChild(_el_content);

			document.body.appendChild(_el_wrapper);

			setPosition(_el_wrapper, config.placement, config.target)
			checkElementVisible(_el_wrapper, config.placement, config.target)
			if (config.showArrow) {
				let _el_arrow = createEl('div');
				_el_arrow.className = "tool-tip-arrow";
				let arrow_inner = createEl('div');
				arrow_inner.style.cssText = `width: 100%;height: 100%;border-radius:2px;transform: rotate(45deg); background: rgba(51, 51, 51, 1);`;
				_el_arrow.appendChild(arrow_inner);
				_el_wrapper.appendChild(_el_arrow);
			}
		}

		function checkElementVisible(el,_p,_target) {
			let isVisible = isElementVisible(el);
			if(!isVisible){
				const rect = el.getBoundingClientRect();
				let replaceObj = {
					'top':'top',
					'top-start':'bottom-end',
					'top-end':'bottom-start',
					'bottom':'bottom',
					'bottom-start':'top-end',
					'bottom-end':'top-start',
					'left':'left',
					'left-start':'right-end',
					'left-end':'right-start',
					'right':'right',
					'right-start':'left-end',
					'right-end':'left-start'
				}
				let sw = window.innerWidth,sh = window.innerHeight;
				if(_p.startsWith("top")){
					if (rect.top >= 0 && rect.left < 0) {
						replaceObj[_p] = "top-start";
					} else if (rect.top >= 0 && rect.right > sw) {
						replaceObj[_p] = "top-end";
					} else if (rect.top < 0 && rect.left < 0) {
						replaceObj[_p] = "bottom-start";
					} else if (rect.top < 0 && rect.right > sw) {
						replaceObj[_p] = "bottom-end";
					} else if (rect.top < 0 && rect.left >= 0 && rect.right <= sw) {
						let innerObj = {
							'top':'bottom',
							'top-start':'bottom-start',
							'top-end':'bottom-end',
						}
						replaceObj[_p] = innerObj[_p];
					} else if (rect.bottom > sh && rect.left >= 0 && rect.right <= sw) {
						/*This condition will not be enforced.*/
						replaceObj[_p] = "top";
					}
				}else if(_p.startsWith("bottom")){
					if (rect.bottom <= sh && rect.left < 0) {
						replaceObj[_p] = "bottom-start";
					} else if (rect.bottom <= sh && rect.right > sw) {
						replaceObj[_p] = "bottom-end";
					} else if (rect.bottom > sh && rect.left < 0) {
						replaceObj[_p] = "top-start";
					} else if (rect.bottom > sh && rect.right > sw) {
						replaceObj[_p] = "top-end";
					} else if (rect.bottom > sh && rect.left >= 0 && rect.right <= sw) {
						let innerObj = {
							'bottom':'top',
							'bottom-start':'top-start',
							'bottom-end':'top-end',
						}
						replaceObj[_p] = innerObj[_p];
					} else if (rect.top < 0 && rect.left >= 0 && rect.right <= sw) {
						/*This condition will not be enforced.*/
						replaceObj[_p] = "bottom";
					}
				}else if(_p.startsWith("left")){
					if (rect.top < 0 && rect.left >= 0) {
						replaceObj[_p] = "left-start";
					} else if (rect.bottom > sh && rect.left >= 0) {
						replaceObj[_p] = "left-end";
					} else if (rect.top < 0 && rect.left < 0) {
						replaceObj[_p] = "right-start";
					} else if (rect.bottom > sh && rect.left < 0) {
						replaceObj[_p] = "right-end";
					} else if (rect.top >= 0 && rect.bottom <= sh && rect.left < 0) {
						let innerObj = {
							'left':'right',
							'left-start':'right-start',
							'left-end':'right-end'
						}
						replaceObj[_p] = innerObj[_p];
					} else if (rect.top >= 0 && rect.bottom <= sh && rect.right > sw) {
						/*This condition will not be enforced.*/
						replaceObj[_p] = "left";
					}
				}else if(_p.startsWith("right")){
					if (rect.top < 0 && rect.right <= sw) {
						replaceObj[_p] = "right-start";
					} else if (rect.bottom > sh && rect.right <= sw) {
						replaceObj[_p] = "right-end";
					} else if (rect.top < 0 && rect.right > sw) {
						replaceObj[_p] = "left-start";
					} else if (rect.bottom > sh && rect.right > sw) {
						replaceObj[_p] = "left-end";
					} else if (rect.top >= 0 && rect.bottom <= sh && rect.right > sw) {
						let innerObj = {
							'right':'left',
							'right-start':'left-start',
							'right-end':'left-end'
						}
						replaceObj[_p] = innerObj[_p];
					} else if (rect.top >= 0 && rect.bottom <= sh && rect.left < 0) {
						/*This condition will not be enforced.*/
						replaceObj[_p] = "right";
					}
				}
				el.classList.replace(`yu-tool-tip-${_p}`, `yu-tool-tip-${replaceObj[_p]}`);
				setPosition(el, replaceObj[_p], _target)
			}
		}

		function setPosition(elWrapper, _p, _target) {
			const toolTipRect = elWrapper.getBoundingClientRect();
			const sw = window.innerWidth,sh = window.innerHeight;
			let w = _target.width,h = _target.height,left = _target.left,top = _target.top;
			let ew = toolTipRect.width,eh = toolTipRect.height;
			if(ew > 200 && sw <= 576){
				elWrapper.style.width = '200px';
				const newRect = elWrapper.getBoundingClientRect();
				ew = newRect.width;
				eh = newRect.height;
			}else if(ew > 200 && sw > 576){
				elWrapper.style.width = '300px';
				const newRect = elWrapper.getBoundingClientRect();
				ew = newRect.width;
				eh = newRect.height;
			}else{
				elWrapper.style.width = `${ew}px`;
			}
			let gap = _this.options.showArrow?10:6;
			if (_p.startsWith('top')) {
				elWrapper.style.top = `${top + window.scrollY - (eh + gap)}px`;
				setVerticalLeft(elWrapper, _p, left, w, ew);
			} else if (_p.startsWith('bottom')) {
				elWrapper.style.top = `${top + window.scrollY + (h + gap)}px`;
				setVerticalLeft(elWrapper, _p, left, w, ew);
			} else if (_p.startsWith('left')) {
				elWrapper.style.left = `${left - (ew + gap)}px`;
				setLevelTop(elWrapper, _p, top, h, eh);
			} else if (_p.startsWith('right')) {
				elWrapper.style.left = `${left + (w + gap)}px`;
				setLevelTop(elWrapper, _p, top, h, eh);
			}
		}

		function setVerticalLeft(el, _p, left, w, ew) {
			if (['bottom', 'top'].includes(_p)) {
				el.style.left = `${left + w/2 - ew/2}px`;
			} else if (['bottom-start', 'top-start'].includes(_p)) {
				el.style.left = `${left}px`;
			} else if (['bottom-end', 'top-end'].includes(_p)) {
				el.style.left = `${left + w - ew}px`;
			}
		}

		function setLevelTop(el, _p, top, h, eh) {
			if (['left', 'right'].includes(_p)) {
				el.style.top = `${top + window.scrollY + h/2 - eh/2}px`;
			} else if (['left-start', 'right-start'].includes(_p)) {
				el.style.top = `${top + window.scrollY}px`;
			} else if (['left-end', 'right-end'].includes(_p)) {
				el.style.top = `${top + window.scrollY + h -eh}px`;
			}
		}

		function close() {
			let _el = chooseElById(_yu_box_name);
			if(!_el) return
			_el.style.animation = `toolTipAnimateOut${_this.options.animation} 0.3s ease-in`;
			_el.addEventListener('animationend', () => {
				_el.remove();
			});
		}

		function closeAll() {
			let els = chooseAllEl(`.${_yu_box_name}`);
			for (let i = 0, len = els.length; i < len; i++) {
				let _el = els[i];
				if(!_el) continue
				_el.style.animation = `toolTipAnimateOut${_this.options.animation} 0.3s ease-in`;
				_el.addEventListener('animationend', () => {
					_el.remove();
				});
			}
		}
		function setOptions(options) {
			if (typeof options === 'object' && typeof options !== null) {
				let boolArr = [true, false];
				let placementArr = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'];
				let config = {
					content: options.dataContent || options.content || "",
					placement: placementArr.includes(options.placement) ? options.placement : "top",
					showArrow: boolArr.includes(options.showArrow) ? options.showArrow : true,
					animation: options.animation || "FadeDown",
					bgColor: options.bgColor || "#333",
					target: options.target || {},
					isLot:options.isLot || false,
					index:options.index || ''
				}
				return create(config)
			}
		}
		function checkElementEventListener(nodeList,options) {
			let attr = options.attr || "data-tip-content";
			if(nodeList.length > 1){
				for (let i = 0, len = nodeList.length; i < len; i++) {
					nodeList[i].addEventListener('mouseover', (e) => {
						const rect = nodeList[i].getBoundingClientRect();
						const content = nodeList[i].getAttribute(attr);
						options.target = rect;
						options.isLot = true;
						options.index = i + 1;
						options.dataContent = content || '';
						setOptions(options)
					});
					nodeList[i].addEventListener('mouseout', (e) => {
						closeAll()
					});
				}
			}else if(nodeList.length === 1){
				let el = nodeList[0];
				el.addEventListener('mouseover', (e) => {
					const rect = el.getBoundingClientRect();
					const content = el.getAttribute(attr);
					options.target = rect;
					options.dataContent = content || '';
					setOptions(options)
				});
				el.addEventListener('mouseout', (e) => {
					close()
				});
			}
		}
		function _show(target, options = {}) {
			if (typeof(target) === 'object' && target.length > 0) {
				checkElementEventListener(target, options)
			} else if (typeof(target) === 'string') {
				let nodeList = chooseAllEl(target);
				checkElementEventListener(nodeList, options)
			}
		}
		
		function init() {
			let key = 'data-tooltip-style';
			let _style = chooseEl(`[${key}]`);
			if (_style) return
			let _style_el = createEl('style');
			let _cssText = `.yu-tool-tip-wrapper{position:absolute;z-index:990;max-width:60%;}.yu-tool-tip-wrapper .tool-tip-content{position:relative;z-index:2;width:auto;background:#333;color:#fff;border-radius:5px;padding:10px 12px;font-size:13px;word-break: break-all;text-align: left;}.yu-tool-tip-wrapper .tool-tip-arrow{position:absolute;z-index:1;width:14px;height:14px}.yu-tool-tip-top .tool-tip-arrow{bottom:-4px;left:50%;transform:translateX(-50%)}.yu-tool-tip-top-start .tool-tip-arrow{bottom:-4px;left:8px}.yu-tool-tip-top-end .tool-tip-arrow{bottom:-4px;right:8px}.yu-tool-tip-left .tool-tip-arrow{top:50%;right:-4px;transform:translateY(-50%)}.yu-tool-tip-left-start .tool-tip-arrow{top:8px;right:-4px}.yu-tool-tip-left-end .tool-tip-arrow{bottom:8px;right:-4px}.yu-tool-tip-right .tool-tip-arrow{top:50%;left:-4px;transform:translateY(-50%)}.yu-tool-tip-right-start .tool-tip-arrow{top:8px;left:-4px}.yu-tool-tip-right-end .tool-tip-arrow{bottom:8px;left:-4px}.yu-tool-tip-bottom .tool-tip-arrow{top:-4px;left:50%;transform:translateX(-50%)}.yu-tool-tip-bottom-start .tool-tip-arrow{top:-4px;left:8px}.yu-tool-tip-bottom-end .tool-tip-arrow{top:-4px;right:8px}@keyframes toolTipAnimateInFade{from{opacity:0}to{opacity:1}}@keyframes toolTipAnimateOutFade{0%{opacity:1}100%{opacity:0}}@keyframes toolTipAnimateInFadeDown{from{opacity:0;transform:translateY(-6px);z-index:-990}to{opacity:1;z-index:990;transform:translateY(0)}}@keyframes toolTipAnimateOutFadeDown{from{opacity:1;transform:translateY(0);z-index:990}to{opacity:0;transform:translateY(-6px);z-index:-990}}@keyframes toolTipFadeOut{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0)}}`;
			_style_el.type = 'text/css';
			_style_el.setAttribute(key,true);
			
			if (_style_el.styleSheet) { //IE
				_style_el.styleSheet.cssText = _cssText;
			} else {  //w3c
				let textNode = document.createTextNode(_cssText);
				_style_el.appendChild(textNode);
			}
			chooseEl('head').appendChild(_style_el);
		}
		
		this.show = function(target, options = {}) {
			init(); //init css
			return _show(target, options);
		}
	}
	// Tooltip.prototype = {}
	return new Tooltip();
}));
