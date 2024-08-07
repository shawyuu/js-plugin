/**
 * imagePreview v1.0.0
 * MIT License
 * 作者：shaw
 * ＱＱ：758815944
 * -------------------------------------------------------------
 * 日历插件
 * Date 2024-07-24
 * options      {json}
 *  ├ src       {string}         图片路径
 *  ├ urls      {Array<string>}  图片路径列表
 *  ├ success      {string}      图片加载成功后的回调函数
 *  ├ fail      {function}       图片加载失败后的回调函数
 */
;
(function(global, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory(global));
	} else if (typeof exports === 'object' && typeof module !== 'undefined') {
		module.exports = factory(global);
	} else {
		global.ImagePreview = factory(global);
	}
}(this, function() {
	"use strict";
	const _BOXNAME = 'yu-image-preview-wrapper';
	const cssKey = 'data-image-preview-style';
	const chooseElById = function(id) { return document.getElementById(id) };
	const chooseEl = function(attr) { return document.querySelector(attr) };
	const createEl = function(tag) { return document.createElement(tag) };
	const maxRatio = 0.9;
	const arrowLeft = `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M703.967748 885.366929c-8.532661 0-14.932661-2.134677-21.332661-8.532661l-384-341.332662c-6.4-6.4-10.667339-14.932661-10.667339-23.467338s4.267339-17.067339 10.667339-23.467339l384-341.334677c12.8-12.8 34.134677-10.665323 44.8 2.134677 12.802016 12.8 10.667339 34.134677-2.132662 44.8L369.033071 512.034268l356.267338 317.865323c12.8 10.667339 14.932661 32 2.132662 44.8-6.4 6.4-14.932661 10.667339-23.465323 10.667338z"></path></svg>`;
	const arrowRight = `<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M320 885.333333c-8.533333 0-17.066667-4.266667-23.466667-10.666666-12.8-12.8-10.666667-34.133333 2.133334-44.8L654.933333 512 298.666667 194.133333c-12.8-10.666667-14.933333-32-2.133334-44.8 10.666667-12.8 32-14.933333 44.8-2.133333l384 341.333333c6.4 6.4 10.666667 14.933333 10.666667 23.466667 0 8.533333-4.266667 17.066667-10.666667 23.466667l-384 341.333333c-6.4 6.4-12.8 8.533333-21.333333 8.533333z"></path></svg>`;
	const iconZoomIn = {
		src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMA9+7gJPncJwX06aV0ShHkmo4+GrFIRbdvU3tsamZhNDDPxbaflU7WvzIgHg2tgzmHWNLgL/wAAAJTSURBVFjD7Zdrd7IwDMfDTRAE8QJDuaiIt6nb8/T7f7gR2TkeWEtT5975e5mUP23StCm8eMHHzsOjMWRsaJRhZj+qctqNWYvx7hPU+b9hHA65oyazPzABxh7oBFfWoM9HsR04TmDHo7n+bdyeqTrTJjaaF7Xtkac18j5NJ7FuMpPZT9ds0kgtKTr/GPJm8r3mG0N2cp2P23RSEJJqJKUMR7kr6GHlElY3xfgMTOjFHKDSvjfvmK/xO0h4x2F63y7wMD4nkLLWMB9if8xqMkAooVwI3Yfbf0hssVpEdbfAhZk0IRMXVwicWO8TIDLB9AoiiBOaUYVmOKWp8B8ekMEMh1yPUXsiulCEJcANH24yUADPpzXHntf2uYrQvP4g4djD2j5SERrVH1Qc+7G2+ypCfv1BybFjSdsqQjZubkHsLq0jxWAdjNa+CQTZwZEtQ1enOwGnNlh/KTTsLi3+oTQgLc1QDragbMtH0n/k2CvlDSmo2uSREkn5x5F60XIvCvdJxwiE6gdbxb9lFY9acZYHTzr8oVC7jsS7xTGwsaNfkO4Fem5IllN0chyZiP3Yjg3XhCYCK3zjgJCzTm9rrFVvf83IjVYiaSGprd8GJISyZjTTGK1F3snbY6LSkskadoRyevl6I+XFbXvsfctcoyGTxhs5b++PGr951Pj3R41eAEwbpRRkLAZMgFXhklGJVgZOceDJaJUNDXGjVICcz9DtTOaYBXd3pBGVkFMalvg41selt4wvnZxYN/UF/Jq9JdniZBao5MKTlK7wDFYfSQAvXgB8AbQmiYamqSF8AAAAAElFTkSuQmCC`,
		title: '缩小',
		type: 'zoom-in'
	};
	const iconZoomOut = {
		src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMA+ODk70Uk9belj3QnBdxKRzHonfyYVDUfGhFv7LF8bGpmYT3PxK9O1r4NhhWkhma1AAACU0lEQVRYw+2X2ZqaQBCFD4swCAgD4oYr7mbq/V8vFoxfPkw3VE/Mnf9lqae71i7x5o2aaFdcbZ/It4/5NsIP+Rw61MIppjBnciAFl10MI84X0mCfIefrRA3uKhxEizheRINw5VLDagYhe4cYK0jRIg0sYpYJRJTjWmY4x1/Mh43UGgJ+EfPhQYn3QcxQqGNtoGVTX6pAD1u6k3XWyzQTeLfn+Iw8dOKNWOncmXfOl9Ob3pnDuev6WsDx+RR0j8X5gJYB3dmCkYRyAh2X+hwRXAV2rOtTdsyDCI+dq6DmUFeakCGnVxNBvtBcETnHGSi6ha+0154RKOw2ka3JcA6of0Cpwk53FOaUW0AZPp4/kAuB55Oq5nY8s0yEVkRUKuwFEYUmQqEmSFciSkyEEiI6Kuzc0pGJUMTFrYndrV0/9ES7nhY8AiQH29Tm+QIxF/D/FPL7XbPTZ9dcVWEbB1vTtsefpP+qsOfGBal5lUrTFuEFYaMaR69qWmTmY2QJFfmrBtteO2rtVDNqEygZvWj4ozJ9jkKoiW2zBzK7oeOFpB0E7OhO2X2OL1kiuMMPMbTMlvK1ZjxFB2cSL1plzwopXf0O6KHoW0a3FslW5EKyHjMhelgT46sXdp9IrpQsv/9CDJ6aLvj2KkhdYsre9D7u757CpPlTk4Qn92GsgL1PzAZ9TEakYZx/AbWSrA3i6kIK/Dx6+NkoVehnWmTUwrpuF38+Tq36ghUkfG7yo+3T2HWOwXpwe8pJozTBP3O2ekpczISVMrxCaUx0wiuYrssF3rwBfgPQ0YapPYGLOQAAAABJRU5ErkJggg==`,
		title: '放大',
		type: 'zoom-out'
	};
	const iconFit = {
		src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA7+b59OdySknVttYPDGmoZHwAAACySURBVEjHYxgFQx5k2r0DgkcNEB6HHoj3eBqqGq53EKAA4TJBuQtQFOVBRQNQFT1DUTTvnaEgEDgVQLjsISCe8LvXKIrsHl/AdCev3WMU/ruH2Hwj925UETmKnmBT5IeqSO8plIFPtFQdykAXHQWjABU0aRAhqvcIysAQJZx8h0C+G6qK7B4fwFTDY/cYa2EPq1tUEIU9ZrWhgK/a4MJetyzAWpXB6pY4cFW2jWEUDHUAANSUoGLnF/1TAAAAAElFTkSuQmCC`,
		title: '适应窗口',
		type: 'fit'
	};
	const iconNormal = {
		src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA7vD5hXLVtg3W1HNKpeIJAAAAkUlEQVRIx2MYBaMABqJszmABh1OR1bCfwQEKkBTF4FJ0FElRzhlDQSxA+MxJJEU2hxuwuZTD5jAS78wh7P7ROTOqCIsiZxMgAWXhVAQOYCgLp6IzIDEoC78iZxNCimA2EVZEHetAYPApGorhhJZUCCe6wZIRhp4iAsUh4YKVcBF9mtTCniEMe7UxlWEUjAIoAACLZA9Ayw+XDwAAAABJRU5ErkJggg==`,
		title: '实际尺寸',
		type: 'normal'
	};
	const iconRotateReverse = {
		src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA+u1wMJv0EAzjysVFGwb81aJVCdu4aFrSzqiNijsV96+fkWFALSgj59dNNRizfFFJhe++/7y+OwAAAjhJREFUWMPt19dy4jAUBuBfLjHggsEB06vpJeyu3v/Z1kdyJmSwZMFwkZnwXWUic+RzJKvg5eU3mrRHndhifFr3XdvBgzzbb/JrljvG/TbulN+K03vfZsh4uTjDHfZ1LjQbo7YzieBtAntmcalVg6khF97tENcuAyb/ry97rfb5R4eTXbukcHNR/rdAl82ULWV5GvTs9ByhzKFPrawNpXfOt8glDf3bRwsRaQ+Vv3kz/XpGz/3zoNZtUnYrKJzyVhs4U5xOAp02Rdqpxs6mAHBoXBoJ9LrUm6todOh9RYG2R7P5ofpeaL4N6IEAlSLqsK9opCCkBQMOlelDnTilF1KPwXCmfzGXaolSaxlogXA5e6OpEkIjZGK6lKrLzPq8MIbOXHRaqsW/8aGV5Y/UUWrJv/SG+hIVCazL0+bStpVWzySZQBelZvmYdewVzCzVszv6yCIYO+jraK5Gqw2egeWVwDPQx/msQOxZqVk/qtiPD79+Qj5urv5EkPYGHgzJj1a9WI1gaCyWEfUaaSUw46oWNtITaRs50jHsoNv46onxyacBlWSbN59hYMWK7UizbzMH1XzNBkkiqlJcPQX+VO4yY9pBT6iQUhzXoK8BtC5MHmv0xAHypHsqZfKgVcHrUaT+BiojamcZKk1icZawFePuF4dRA54vN9s9boQLJnq5wEgy50JsT3AtaCkO7GqpdXuFGCiuEHoTl/FyuwD3Wc+Z/pplLrT736NYboYHHYurqCWvoi8vv85/WZV1EethCRYAAAAASUVORK5CYII=`,
		title: '向左旋转90°',
		type: 'rotate-reverse'
	};
	const iconRotate = {
		src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA+uLt1gYw/JxwDvbzysWhR7ORi2hVCtHPuamGWk9ANSIRCGFCLSgdGBXo2jquo5l1Gn1bVjAitwAAAkhJREFUWMPtl9ly6jAMhu1sZCMrgRASlrCGFgqt3//ZTmUfhsMc23HaXHSmfDeZiTW/LVmWZfTkye/DcuxA84iv5XGaNV9VeX3Tyb8MAmeFulMa5H88e9lRZmMQPjh1kTpuSBj6yYmWK+QuF1k6HBCKNlcP8QubvIgefu/fNRarmammE/nUPOSEI2MeT2/ujccSnQyDbb7gDpoXD0aHbPvW2KuEOhXVSUy530O6lCMhLyK7rQdujZCY1RSUYtCE7RBYjQ3QyZCMmiq9I3ShgnxssBkhOeMh7KmF4s+PwzeZ0/igNg5HCFMNu2vxLXIwMBUyBCYsxCGqIEAWUuCW+gV/GHx/ky/llG5gxVfYXGE4FxDDvTQ4kGT+ab1HCRPacc1gMJSXKPKX/MwOMN8MzqT8aJsBeeDMtdqxKeRE6YTcWXNtRtSzdg4f4ZEw+AG16RRqbJ2pJzwf4P8CKWPOK1Mcaxf1gE8IRn0AR+dnCfXgWs/BZtvfAywhewCOiN2HEDu0qrjFpJRF+1VVKCUEXwVjSQffap3VR2Gp9Q7qAZ0gQFT8E7UFadKLtILqv1URmn1aHmvxOJTRQKUV8+63tfjKnrVvPbQahtmW3eSjrTbGcCNLE4W1NTiSCxUq6976oFTK5oppG9neYWM6nzAAyxzGJwr1hjWjgSALHB9GjUa9PcbJnpNo7JoNVt0a9vPm4XfjGIQS1t2fEAV9QpiNlc1uTwi97OVRM7CbPp5ZONyh7szZw+9Ofrl+6ymqE6wb07Q8oCdPfiF/ANQydloYw+eCAAAAAElFTkSuQmCC`,
		title: '向右旋转90°',
		type: 'rotate'
	};
	const iconClose = {
		src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAbFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+T+BWAAAAI3RSTlMAsoyKtI+5mK+spJ/RvKecjnMGyb+pkw3AtoN6V0cb6js4LTOnxLwAAAFGSURBVFjD7dbLbsIwEIXhScCEBsilBcq1t3n/d6zTNjpIjjzOzKqS/w0L0KfRAQSUy+VyQ2vmmhK6MG9fI8/f2VfITsm+PvKCD06SHEsQNTy0TriHt88UaylLC2bGRIL0JN3jHakiLjk4adKBJut46AX7yFIzuU+6g50ao4Ob6mBnOGoJO5/SFUib8J79HAU7tQ/74B6NVKnvQcUoYZ8dkV464nO40iiQnN/H4mCnvodjuGnsTMgiLclYxXjzTF1/oavV6fiv0uYcMbazO23789DpDHwvivHztLDd4x2jVMEhOusXr/BTiZuc1cFNagetNDu1oxNK5VwHP9uQ5u60gTMldVYHO6kdtEuX6tAJpTLVORASFpcd9U3Yp6Foe3mnG+6JdeKhe+wPPe4RbhJOent/+Csj7fRFMam/UVKX+pNyudx/7hvtEkCDo9yvRAAAAABJRU5ErkJggg==`,
		title: '关闭',
		type: 'close'
	};
	let imgScale = 1;
	let scale = 1;
	let rotate = 0;
	let toolbar = [iconZoomIn,iconZoomOut,iconNormal,iconRotateReverse,iconRotate,iconClose];
	let imgWidth = 0,imgHeight = 0;
	function ImagePreview() {}

	function createNode(option) {
		let containerEl = chooseElById(_BOXNAME);
		if (containerEl) return; //开启单例
		const fragmentEl = document.createDocumentFragment();
		// PC遮罩禁止滚动
		document.body.style.overflow = 'hidden';
		let el_wrapper = createEl('div');
		el_wrapper.id = _BOXNAME;
		el_wrapper.className = _BOXNAME;
		// el_wrapper.style.cssText = `position: fixed;top: 0;bottom: 0;left: 0;right: 0;z-index: 2000;background-color:rgba(0,0,0,0.4);display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;align-items: center;justify-content: center;overflow: hidden;transition: all 0.3s ease-in-out;user-select: none;`;
		el_wrapper.onclick = reset;
		el_wrapper.onwheel = (e) => {
			if (e.wheelDelta > 0) {
				handleZoomOut(1);
			} else {
				handleZoomIn(1);
			}
		}

		function reset() {
			document.body.style.overflow = ""; //恢复页面样式
			resetParams();
			el_wrapper.remove();
			let _style_el = chooseEl(`[${cssKey}]`);
			_style_el.remove();
		}
		
		let img_el = createImage(option);
		let toolbar_el = createToolbar(reset);
		el_wrapper.appendChild(img_el);
		el_wrapper.appendChild(toolbar_el);
		(option.isMulti && createArrow(el_wrapper,option))
		fragmentEl.appendChild(el_wrapper);
		document.body.appendChild(fragmentEl);
	}
	
	function resetParams(){
		let img_el = chooseEl(`#${_BOXNAME} .img-show`);
		imgScale = 1;
		scale = 1;
		rotate = 0;
		imgWidth = 0;
		imgHeight = 0;
		img_el.style.setProperty('transform', `scale(${scale}) rotate(${rotate}deg)`);
	}
	
	function createImage(option) {
		let img_el = createEl('img');
		img_el.src = option.src;
		img_el.className = 'img-show';
		img_el.style.cssText = `max-width:${maxRatio * 100}%;max-height:${maxRatio * 100}%;transform: scale(${scale}) rotate(${rotate}deg);transition: all 0.3s ease;`;
		img_el.onclick = (e) => {
			bindStopPropagation(e)
		}
		img_el.onload = (e)=>{
			imgWidth = img_el.naturalWidth;
			imgHeight = img_el.naturalHeight;
			setImgScale();
			option.success && option.success(e)
		}
		img_el.onerror = (e)=>{
			option.fail && option.fail(e)
		}
		return img_el
	}
	
	function setImgScale(){
		let w = window.innerWidth,h = window.innerHeight;
		let winRatio = h/w;
		let ratio = imgHeight/imgWidth;
		let s = 1;
		if(ratio > winRatio){
			s = imgHeight / (h * maxRatio);
		}else{
			s = imgWidth / (w * maxRatio);
		}
		imgScale = s > 1?s:1;
	}
	
	function createToolbar(fn) {
		let toolbar_el = createEl('div');
		toolbar_el.className = "img-toolbar-wrapper";
		toolbar_el.onclick = (e) => {
			if (e.stopPropagation) {
				e.stopPropagation(); //W3C阻止冒泡方法
			} else {
				e.cancelBubble = true;
			}
		}
		const _fragment = document.createDocumentFragment();
		for (let i = 0, len = toolbar.length; i < len; i++) {
			let item_el = createEl('img');
			item_el.src = toolbar[i].src;
			item_el.title = toolbar[i].title;
			item_el.className = `toolbar-${toolbar[i].type}`;
			item_el.style.cssText = `width:24px;height:24px;margin:0 10px;cursor:pointer;`;
			if(i === 2){
				item_el.classList.add('toolbar-mid');
			}
			item_el.onclick = (e) => {
				if (i === 0) {
					//缩小
					handleZoomIn()
				} else if (i === 1) {
					//放大
					handleZoomOut()
				} else if (i === 2) {
					//显示
					handleShow(item_el)
				} else if (i === 3) {
					//逆时针旋转90
					handleRotateReverse()
				} else if (i === 4) {
					//顺时针旋转90
					handleRotate()
				} else if (i === 5) {
					fn();
				}
			}
			_fragment.appendChild(item_el);
		}
		toolbar_el.appendChild(_fragment);
		return toolbar_el
	}

	function createArrow(el,params){
		let len = params.urls.length;
		let idx = params.urls.findIndex(value => value === params.src);
		idx = idx < 0 ? 0:idx;
		let arrow_l = createEl('div');
		arrow_l.className = "img-arrow";
		arrow_l.innerHTML = arrowLeft;
		arrow_l.style.left = `40px`;
		arrow_l.onclick = (e)=>{
			bindStopPropagation(e)
			idx = idx <= 0 ? (len - 1):(idx - 1);
			switchImage(idx)
		};
		let arrow_r = createEl('div');
		arrow_r.className = "img-arrow";
		arrow_r.innerHTML = arrowRight;
		arrow_r.style.right = `50px`;
		arrow_r.onclick = (e)=>{
			bindStopPropagation(e)
			idx = idx >= len - 1 ? 0:(idx + 1);
			switchImage(idx)
		};
		function switchImage(index){
			let img_el = chooseEl(`#${_BOXNAME} .img-show`);
			img_el.setAttribute("src", params.urls[index]);
			img_el.style.setProperty('transition', "none");
			resetParams(img_el);
		}
		el.appendChild(arrow_l);
		el.appendChild(arrow_r);
	}
	
	function setMidIcon() {
		let el = chooseEl(`#${_BOXNAME} .toolbar-mid`);
		setImgScale();
		if (scale === imgScale) {
			el.setAttribute("src", iconFit.src);
			el.setAttribute("title", iconFit.title);
			el.classList.replace(`toolbar-${iconNormal.type}`, `toolbar-${iconFit.type}`);
		} else {
			el.setAttribute("src", iconNormal.src);
			el.setAttribute("title", iconNormal.title);
			el.classList.replace(`toolbar-${iconFit.type}`, `toolbar-${iconNormal.type}`);
		}
	}

	function setTransition() {
		let el = chooseEl(`#${_BOXNAME} .img-show`);
		el.style.setProperty('transition', "all 0.3s ease");
		el.style.setProperty('transform', `scale(${scale}) rotate(${rotate}deg)`)
	}

	function handleShow(e) {
		if(scale != imgScale){
			scale = imgScale;
		}else{
			scale = 1;
		}
		setMidIcon();
		setTransition();
	}

	function handleZoomIn(step = 2) {
		if (scale <= 0.2) return;
		scale = (scale * 10 - step) / 10;
		setMidIcon();
		setTransition();
	}

	function handleZoomOut(step = 2) {
		if (scale >= 5 * imgScale) return;
		scale = (scale * 10 + step) / 10;
		setMidIcon();
		setTransition();
	}

	function handleRotateReverse() {
		rotate -= 90;
		setTransition();
	}

	function handleRotate() {
		rotate += 90;
		setTransition();
	}
	
	function bindStopPropagation(e){
		if (e.stopPropagation) {
			e.stopPropagation(); //W3C阻止冒泡方法
		} else {
			e.cancelBubble = true;
		}
	}
	
	function initCss() {
		let cssKey = 'data-image-preview-style';
		let _style = chooseEl(`[${cssKey}]`);
		if (_style) return
		let _style_el = createEl('style');
		let _cssText = `.yu-image-preview-wrapper {position: fixed;top: 0;bottom: 0;left: 0;right: 0;z-index: 2000;background-color: rgba(0, 0, 0, 0.4);display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;align-items: center;justify-content: center;overflow: hidden;transition: all 0.3s ease-in-out;user-select: none;}.yu-image-preview-wrapper .img-arrow {position: fixed;top: 50%;transform: translateY(-50%);background: rgba(0, 0, 0, 0.2);width: 54px;height: 54px;border-radius: 100px;display: flex;align-items: center;justify-content: center;cursor: pointer;opacity: 0.4;transition: all 0.3s ease;}.yu-image-preview-wrapper .img-arrow .icon {fill: #fff;}.yu-image-preview-wrapper .img-arrow:hover{opacity: 1;}.img-toolbar-wrapper {position: fixed;bottom: 40px;left: 50%;z-index: 1;transform: translateX(-50%);font-size: 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;align-items: center;background-color: rgba(0, 0, 0, 0.5);padding: 15px;border-radius: 30px;}`;
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
	
	function _show(option) {
		if (typeof(option) === "object" && option !== null) {
			initCss();
			if (Array.isArray(option.urls) && option.urls.length > 1) {
				return createNode({
					isMulti:true,
					src: option.src || option.urls[0],
					urls: option.urls,
					success: option.success || null,
					fail: option.fail || null
				})
			} else if (option.src) {
				return createNode({
					isMulti:false,
					src: option.src,
					success: option.success || null,
					fail: option.fail || null
				})
			}
		}
		console.error(`ImagePreview:fail parameter error.`)
	}
	
	ImagePreview.prototype = {
		show: _show
	}

	return new ImagePreview();
}));