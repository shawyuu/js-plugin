let m = "yu-modal-wrapper", y = "yu-modal-in", h = "yu-modal-out";
const p = "data-modal-style", f = function(e) {
  return document.getElementById(e);
}, u = function(e) {
  return document.querySelector(e);
}, o = function(e) {
  return document.createElement(e);
};
function w(e) {
  if (f(m)) return;
  let a = o("div");
  a.id = m, a.className = m + " " + y;
  let d = o("div");
  d.className = "yu-modal-mask", d.style.cssText = `background:${e.maskColor}`, d.onclick = (s) => {
    e.cancel && e.cancel(), c();
  }, a.appendChild(d);
  let n = o("div"), r = o("div"), i = o("div");
  if (n.className = "yu-modal", r.className = "yu-modal-hd", r.innerText = e.title, i.className = "yu-modal-bd", i.innerHTML = e.content, n.appendChild(r), n.appendChild(i), e.showCancel || e.showConfirm) {
    let s = o("div");
    if (s.className = "yu-modal-ft", e.showCancel) {
      let l = o("div");
      l.innerText = e.cancelText, l.className = "btn cancel-btn", l.style.cssText = `background-color:${e.cancelColor}`, l.onclick = (x) => {
        e.cancel && e.cancel(), c();
      }, s.appendChild(l);
    }
    if (e.showConfirm) {
      let l = o("div");
      l.innerText = e.confirmText, l.className = "btn confirm-btn", l.style.cssText = `background-color:${e.confirmColor}`, l.onclick = (x) => {
        e.confirm && e.confirm(), c();
      }, s.appendChild(l);
    }
    n.appendChild(s);
  }
  a.appendChild(n), console.log(a), document.body.appendChild(a);
}
function c() {
  let e = f(m);
  e && (e.classList.remove(y), e.classList.add(h), e.addEventListener("animationend", () => {
    e.remove(), u(`[${p}]`).remove();
  }));
}
function b() {
  if (u(`[${p}]`)) return;
  let t = o("style"), a = ".yu-modal-wrapper{overflow:hidden;}.yu-modal-wrapper .yu-modal-mask{position:fixed;z-index:990;top:0;right:0;left:0;bottom:0;width:100%;height:100%;background:'rgba(0,0,0,0.5)';}.yu-modal-wrapper .yu-modal{position:fixed;left:50%;top:50%;z-index:990;transform:translate(-50%,-50%);background:#fff;color:#333;overflow:hidden;user-select:none;border-radius:5px;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;flex-direction:column;gap:12px;padding:12px 0;min-width:240px;max-width:560px;}.yu-modal-wrapper .yu-modal-hd{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5;font-size:16px;color:#333;padding:0 12px;}.yu-modal-wrapper .yu-modal-bd{line-height:1.4;font-size:14px;word-break:break-all;font-size:15px;color:#333;line-height:1.5;max-height:70vh;padding:0 12px;overflow-y:auto;}.yu-modal-wrapper .yu-modal-ft{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;align-items:center;justify-content:flex-end;gap:12px;padding:0 12px;}.yu-modal-wrapper .yu-modal-ft .btn{height:32px;line-height:32px;padding:0 12px;border-radius:3px;font-size:15px;}.yu-modal-wrapper .yu-modal-ft .cancel-btn{background-color:#f5f6f7;color:#333;}.yu-modal-wrapper .yu-modal-ft .confirm-btn{background-color:#3565ee;color:#fff;}.yu-modal-wrapper.yu-modal-in .yu-modal-mask{animation:modalFadeIn 0.2s;}.yu-modal-wrapper.yu-modal-out .yu-modal-mask{animation:modalFadeOut 0.2s;}.yu-modal-wrapper.yu-modal-in .yu-modal{animation:modalSlideDown 0.2s ease-out;}.yu-modal-wrapper.yu-modal-out .yu-modal{animation:modalSlideUp 0.2s ease-out;}@media screen and (min-width:768px){.yu-modal-wrapper .yu-modal-ft .btn{cursor:pointer;}.yu-modal-wrapper .yu-modal-ft .btn:hover{opacity:0.75;}}@media screen and (max-width:768px){.yu-modal-wrapper .yu-modal{min-width:unset;max-width:unset;width:90%;}.yu-modal-wrapper .yu-modal-ft .btn{height:40px;line-height:40px;padding:0 16px;}.yu-modal-wrapper .yu-modal-ft .btn:active{opacity:0.75;}}@keyframes modalFadeIn{0%{opacity:0;}100%{opacity:1;}}@keyframes modalFadeOut{0%{opacity:1;}100%{opacity:0;}}@keyframes modalSlideDown{0%{opacity:0;transform:translate(-50%,-100%);}100%{opacity:1;transform:translate(-50%,-50%);}}@keyframes modalSlideUp{0%{opacity:1;transform:translate(-50%,-50%);}100%{opacity:0;transform:translate(-50%,-100%);}}";
  if (t.type = "text/css", t.setAttribute(p, !0), t.styleSheet)
    t.styleSheet.cssText = a;
  else {
    let d = document.createTextNode(a);
    t.appendChild(d);
  }
  u("head").appendChild(t);
}
function _(e, t) {
  if (b(), typeof e == "object" && e != null) {
    let a = [!0, !1], d = a.includes(e.showCancel) ? e.showCancel : !0, n = a.includes(e.showConfirm) ? e.showConfirm : !0, r = a.includes(e.showConfirm) ? e.showConfirm : !0, i = {
      title: e.title,
      content: e.content,
      showCancel: d,
      cancelText: e.cancelText || "取消",
      cancelColor: e.cancelColor || "#f5f6f7",
      showConfirm: n,
      confirmText: e.confirmText || "确定",
      confirmColor: e.confirmColor || "#3565ee",
      maskColor: e.maskColor || "rgba(0,0,0,0.5)",
      maskClosable: r,
      cancel: e.cancel || null,
      confirm: e.confirm || null
    };
    return w(i);
  }
}
const C = {
  show: (e) => _(e)
};
export {
  C as default
};
