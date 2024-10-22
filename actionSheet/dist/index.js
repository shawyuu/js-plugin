const r = "yu-action-sheet-wrapper", g = "yu-action-sheet-in", f = "yu-action-sheet-out", y = "data:image/png;base64,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", h = function(e) {
  return document.getElementById(e);
}, d = function(e) {
  return document.querySelector(e);
}, A = function(e) {
  return document.createElement(e);
};
function m(e) {
  if (h(r)) return;
  let t = document.createDocumentFragment(), s = A("div");
  s.id = r, s.className = g;
  let i = A("div");
  i.className = "yu-action-sheet-mask", i.onclick = (l) => {
    l.stopPropagation(), p();
  }, s.appendChild(i);
  let n = A("div");
  if (n.className = "yu-action-sheet", n.onclick = (l) => {
    l.stopPropagation(), l.preventDefault();
  }, e.title && !e.grid && n.appendChild(b(e)), e.grid)
    n.appendChild(B(e));
  else {
    if (e.itemList.length > 6) {
      console.error('ActionSheet:fail parameter error: when "grid" is false, itemList should not be large than 6');
      return;
    }
    n.appendChild(u(e));
  }
  let a = A("div");
  a.className = "action-sheet-close", a.innerText = e.closeText, a.style.cssText = `position: relative;padding: 12px 16px;text-align: center;overflow: hidden;font-size: ${e.itemSize}px;border-top:10px solid #f5f5f5;line-height:32px;color:#333;`, a.onclick = c(e.fail, { msg: "fail cancel" }), n.appendChild(a), s.appendChild(n), t.appendChild(s), document.body.appendChild(t);
}
function u(e) {
  let o = A("div");
  o.className = "yu-action-sheet-normal";
  for (let t = 0, s = e.itemList.length; t < s; t++) {
    let i = e.itemList[t], n = A("div");
    n.className = "action-sheet-item", typeof i == "object" && i !== null ? (n.style.cssText = `display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;gap:8px;${e.align === "center" ? "justify-content: center;" : "text-align:left;"};`, n.innerHTML = `${i.icon ? '<img style="height:28px;" src="' + i.icon + '" alt="icon"/>' : ""}<div style="padding:4px 0;">
					<div style="font-size: ${i.size ? i.size : e.itemSize}px;line-height:24px;color:${i.color ? i.color : e.itemColor}">${i.name}</div>
					${i.desc ? '<div style="font-size: 14px;line-height:1.4;padding-top:4px;color:#999;">' + i.desc + "</div>" : ""}</div>`, n.onclick = c(e.success, { index: t })) : (typeof i == "string" || typeof i == "number") && (n.innerHTML = `<div style="padding:4px 0;line-height:24px;font-size: ${e.itemSize}px;color:${e.itemColor};text-align:${e.align}">${i}</div>`, n.onclick = c(e.success, { index: t })), o.appendChild(n);
  }
  return o;
}
function B(e) {
  let o = A("div");
  o.className = "yu-action-sheet-grid";
  for (let t = 0, s = e.itemList.length; t < s; t++) {
    let i = e.itemList[t], a = typeof i == "object" && i !== null ? i : { name: i }, l = A("div");
    l.className = "action-sheet-item", l.style.cssText = "display:block;width:25%;text-align:center;vertical-align: middle;", l.innerHTML = `<img style="height:36px;" src="${a.icon ? a.icon : y}" alt="icon"/><div style="padding-top:10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: ${a.size ? a.size : 13}px;line-height:24px;color:${a.color ? a.color : e.itemColor}">${a.name}</div>`, l.onclick = c(e.success, { index: t }), o.appendChild(l);
  }
  return o;
}
function c(e, o = {}) {
  return function(t) {
    t.stopPropagation(), t.preventDefault(), e && e(o), p();
  };
}
function b(e) {
  let o = A("div");
  return o.className = "action-sheet-title", o.style.cssText = `font-size:${e.size}px;${e.bold ? "font-weight:bolder;" : ""}`, o.innerHTML = `<p style="overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;">${e.title}</p>`, o;
}
function p() {
  let e = h(r);
  e && (e.classList.remove(g), e.classList.add(f), e.addEventListener("animationend", () => {
    e.remove();
  }));
}
function x() {
  let e = "data-action-sheet-style";
  if (d(`[${e}]`)) return;
  let t = A("style"), s = ".yu-action-sheet-mask{position:fixed;z-index:990;top:0;right:0;left:0;bottom:0;width:100%;height:100%;background:rgba(0,0,0,0.5)}.yu-action-sheet{position:fixed;bottom:0;left:0;right:0;z-index:990;background-color:#fff;border-radius:15px 15px 0 0;overflow:hidden;user-select:none}.yu-action-sheet .action-sheet-title{position:relative;height:56px;line-height:16px;padding:10px 24px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;justify-content:center;font-size:13px;color:rgba(0,0,0,0.55);text-align:center}.yu-action-sheet .action-sheet-title::after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:'';transform:scaleY(.5);background-color:#e6e6e6}.yu-action-sheet .yu-action-sheet-normal .action-sheet-item{position:relative;padding:12px 16px;box-sizing:border-box;overflow:hidden}.yu-action-sheet .yu-action-sheet-normal .action-sheet-item::after{position:absolute;z-index:3;right:15px;bottom:0;left:15px;height:1px;content:'';transform:scaleY(.5);background-color:#e6e6e6}.yu-action-sheet .yu-action-sheet-grid{display:-webkit-box;display:-webkit-flex;display:flex;align-items:center;flex-wrap:wrap;padding-top:15px}.yu-action-sheet .yu-action-sheet-grid .action-sheet-item{position:relative;box-sizing:border-box;padding:15px 10px}.yu-action-sheet .action-sheet-item:active,.yu-action-sheet .action-sheet-close:active{background-color:#f0f0f0}.yu-action-sheet-in .yu-action-sheet-mask{animation:actionSheetFadeIn 0.1s}.yu-action-sheet-out .yu-action-sheet-mask{animation:actionSheetFadeOut 0.1s}.yu-action-sheet-in .yu-action-sheet{animation:actionSheetSlideUpApp 0.3s}.yu-action-sheet-out .yu-action-sheet{animation:actionSheetSlideDownApp 0.3s}@media screen and (min-width:768px){.yu-action-sheet{bottom:50%;left:50%;right:auto;border-radius:15px;width:360px;transform:translate(-50%,50%)}.yu-action-sheet .action-sheet-item,.yu-action-sheet .action-sheet-close{cursor:pointer}.yu-action-sheet-in .yu-action-sheet{animation:actionSheetSlideUp 0.3s}.yu-action-sheet-out .yu-action-sheet{animation:actionSheetSlideDown 0.3s}}@keyframes actionSheetFadeIn{0%{opacity:0}100%{opacity:1}}@keyframes actionSheetFadeOut{0%{opacity:1}100%{opacity:0}}@keyframes actionSheetSlideUpApp{0%{bottom:-50vw;opacity:0}100%{bottom:0;opacity:1}}@keyframes actionSheetSlideDownApp{0%{bottom:0;opacity:1}100%{bottom:-50vw;opacity:0}}@keyframes actionSheetSlideUp{0%{bottom:0;opacity:0}100%{bottom:50%;opacity:1}}@keyframes actionSheetSlideDown{0%{bottom:50%;opacity:1}100%{bottom:0;opacity:0}}";
  if (t.type = "text/css", t.setAttribute(e, !0), t.styleSheet)
    t.styleSheet.cssText = s;
  else {
    let i = document.createTextNode(s);
    t.appendChild(i);
  }
  d("head").appendChild(t);
}
function C(e) {
  let o = ["left", "center"], t = [!0, !1];
  if (typeof e == "object" && typeof e !== null) {
    x();
    let s = {
      title: e.title || "",
      size: e.size || 13,
      bold: t.includes(e.bold) ? e.bold : !1,
      grid: t.includes(e.grid) ? e.grid : !1,
      align: o.includes(e.align) ? e.align : "center",
      itemList: e.itemList || [],
      itemColor: e.itemColor || "#333",
      itemSize: e.itemSize || 17,
      closeText: e.closeText || "取消",
      success: e.success || null,
      fail: e.fail || null
    };
    return m(s);
  }
}
const w = {
  show: (e) => C(e)
};
export {
  w as default
};
