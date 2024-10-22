const s = "yu-image-preview-wrapper", b = "data-image-preview-style", U = function(e) {
  return document.getElementById(e);
}, n = function(e) {
  return document.querySelector(e);
}, c = function(e) {
  return document.createElement(e);
};
const V = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M703.967748 885.366929c-8.532661 0-14.932661-2.134677-21.332661-8.532661l-384-341.332662c-6.4-6.4-10.667339-14.932661-10.667339-23.467338s4.267339-17.067339 10.667339-23.467339l384-341.334677c12.8-12.8 34.134677-10.665323 44.8 2.134677 12.802016 12.8 10.667339 34.134677-2.132662 44.8L369.033071 512.034268l356.267338 317.865323c12.8 10.667339 14.932661 32 2.132662 44.8-6.4 6.4-14.932661 10.667339-23.465323 10.667338z"></path></svg>', F = '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M320 885.333333c-8.533333 0-17.066667-4.266667-23.466667-10.666666-12.8-12.8-10.666667-34.133333 2.133334-44.8L654.933333 512 298.666667 194.133333c-12.8-10.666667-14.933333-32-2.133334-44.8 10.666667-12.8 32-14.933333 44.8-2.133333l384 341.333333c6.4 6.4 10.666667 14.933333 10.666667 23.466667 0 8.533333-4.266667 17.066667-10.666667 23.466667l-384 341.333333c-6.4 6.4-12.8 8.533333-21.333333 8.533333z"></path></svg>', k = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMA9+7gJPncJwX06aV0ShHkmo4+GrFIRbdvU3tsamZhNDDPxbaflU7WvzIgHg2tgzmHWNLgL/wAAAJTSURBVFjD7Zdrd7IwDMfDTRAE8QJDuaiIt6nb8/T7f7gR2TkeWEtT5975e5mUP23StCm8eMHHzsOjMWRsaJRhZj+qctqNWYvx7hPU+b9hHA65oyazPzABxh7oBFfWoM9HsR04TmDHo7n+bdyeqTrTJjaaF7Xtkac18j5NJ7FuMpPZT9ds0kgtKTr/GPJm8r3mG0N2cp2P23RSEJJqJKUMR7kr6GHlElY3xfgMTOjFHKDSvjfvmK/xO0h4x2F63y7wMD4nkLLWMB9if8xqMkAooVwI3Yfbf0hssVpEdbfAhZk0IRMXVwicWO8TIDLB9AoiiBOaUYVmOKWp8B8ekMEMh1yPUXsiulCEJcANH24yUADPpzXHntf2uYrQvP4g4djD2j5SERrVH1Qc+7G2+ypCfv1BybFjSdsqQjZubkHsLq0jxWAdjNa+CQTZwZEtQ1enOwGnNlh/KTTsLi3+oTQgLc1QDragbMtH0n/k2CvlDSmo2uSREkn5x5F60XIvCvdJxwiE6gdbxb9lFY9acZYHTzr8oVC7jsS7xTGwsaNfkO4Fem5IllN0chyZiP3Yjg3XhCYCK3zjgJCzTm9rrFVvf83IjVYiaSGprd8GJISyZjTTGK1F3snbY6LSkskadoRyevl6I+XFbXvsfctcoyGTxhs5b++PGr951Pj3R41eAEwbpRRkLAZMgFXhklGJVgZOceDJaJUNDXGjVICcz9DtTOaYBXd3pBGVkFMalvg41selt4wvnZxYN/UF/Jq9JdniZBao5MKTlK7wDFYfSQAvXgB8AbQmiYamqSF8AAAAAElFTkSuQmCC",
  title: "缩小",
  type: "zoom-in"
}, N = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALXRSTlMA+ODk70Uk9belj3QnBdxKRzHonfyYVDUfGhFv7LF8bGpmYT3PxK9O1r4NhhWkhma1AAACU0lEQVRYw+2X2ZqaQBCFD4swCAgD4oYr7mbq/V8vFoxfPkw3VE/Mnf9lqae71i7x5o2aaFdcbZ/It4/5NsIP+Rw61MIppjBnciAFl10MI84X0mCfIefrRA3uKhxEizheRINw5VLDagYhe4cYK0jRIg0sYpYJRJTjWmY4x1/Mh43UGgJ+EfPhQYn3QcxQqGNtoGVTX6pAD1u6k3XWyzQTeLfn+Iw8dOKNWOncmXfOl9Ob3pnDuev6WsDx+RR0j8X5gJYB3dmCkYRyAh2X+hwRXAV2rOtTdsyDCI+dq6DmUFeakCGnVxNBvtBcETnHGSi6ha+0154RKOw2ka3JcA6of0Cpwk53FOaUW0AZPp4/kAuB55Oq5nY8s0yEVkRUKuwFEYUmQqEmSFciSkyEEiI6Kuzc0pGJUMTFrYndrV0/9ES7nhY8AiQH29Tm+QIxF/D/FPL7XbPTZ9dcVWEbB1vTtsefpP+qsOfGBal5lUrTFuEFYaMaR69qWmTmY2QJFfmrBtteO2rtVDNqEygZvWj4ozJ9jkKoiW2zBzK7oeOFpB0E7OhO2X2OL1kiuMMPMbTMlvK1ZjxFB2cSL1plzwopXf0O6KHoW0a3FslW5EKyHjMhelgT46sXdp9IrpQsv/9CDJ6aLvj2KkhdYsre9D7u757CpPlTk4Qn92GsgL1PzAZ9TEakYZx/AbWSrA3i6kIK/Dx6+NkoVehnWmTUwrpuF38+Tq36ghUkfG7yo+3T2HWOwXpwe8pJozTBP3O2ekpczISVMrxCaUx0wiuYrssF3rwBfgPQ0YapPYGLOQAAAABJRU5ErkJggg==",
  title: "放大",
  type: "zoom-out"
}, u = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMA7+b59OdySknVttYPDGmoZHwAAACySURBVEjHYxgFQx5k2r0DgkcNEB6HHoj3eBqqGq53EKAA4TJBuQtQFOVBRQNQFT1DUTTvnaEgEDgVQLjsISCe8LvXKIrsHl/AdCev3WMU/ruH2Hwj925UETmKnmBT5IeqSO8plIFPtFQdykAXHQWjABU0aRAhqvcIysAQJZx8h0C+G6qK7B4fwFTDY/cYa2EPq1tUEIU9ZrWhgK/a4MJetyzAWpXB6pY4cFW2jWEUDHUAANSUoGLnF/1TAAAAAElFTkSuQmCC",
  title: "适应窗口",
  type: "fit"
}, d = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMA7vD5hXLVtg3W1HNKpeIJAAAAkUlEQVRIx2MYBaMABqJszmABh1OR1bCfwQEKkBTF4FJ0FElRzhlDQSxA+MxJJEU2hxuwuZTD5jAS78wh7P7ROTOqCIsiZxMgAWXhVAQOYCgLp6IzIDEoC78iZxNCimA2EVZEHetAYPApGorhhJZUCCe6wZIRhp4iAsUh4YKVcBF9mtTCniEMe7UxlWEUjAIoAACLZA9Ayw+XDwAAAABJRU5ErkJggg==",
  title: "实际尺寸",
  type: "normal"
}, S = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA+u1wMJv0EAzjysVFGwb81aJVCdu4aFrSzqiNijsV96+fkWFALSgj59dNNRizfFFJhe++/7y+OwAAAjhJREFUWMPt19dy4jAUBuBfLjHggsEB06vpJeyu3v/Z1kdyJmSwZMFwkZnwXWUic+RzJKvg5eU3mrRHndhifFr3XdvBgzzbb/JrljvG/TbulN+K03vfZsh4uTjDHfZ1LjQbo7YzieBtAntmcalVg6khF97tENcuAyb/ry97rfb5R4eTXbukcHNR/rdAl82ULWV5GvTs9ByhzKFPrawNpXfOt8glDf3bRwsRaQ+Vv3kz/XpGz/3zoNZtUnYrKJzyVhs4U5xOAp02Rdqpxs6mAHBoXBoJ9LrUm6todOh9RYG2R7P5ofpeaL4N6IEAlSLqsK9opCCkBQMOlelDnTilF1KPwXCmfzGXaolSaxlogXA5e6OpEkIjZGK6lKrLzPq8MIbOXHRaqsW/8aGV5Y/UUWrJv/SG+hIVCazL0+bStpVWzySZQBelZvmYdewVzCzVszv6yCIYO+jraK5Gqw2egeWVwDPQx/msQOxZqVk/qtiPD79+Qj5urv5EkPYGHgzJj1a9WI1gaCyWEfUaaSUw46oWNtITaRs50jHsoNv46onxyacBlWSbN59hYMWK7UizbzMH1XzNBkkiqlJcPQX+VO4yY9pBT6iQUhzXoK8BtC5MHmv0xAHypHsqZfKgVcHrUaT+BiojamcZKk1icZawFePuF4dRA54vN9s9boQLJnq5wEgy50JsT3AtaCkO7GqpdXuFGCiuEHoTl/FyuwD3Wc+Z/pplLrT736NYboYHHYurqCWvoi8vv85/WZV1EethCRYAAAAASUVORK5CYII=",
  title: "向左旋转90°",
  type: "rotate-reverse"
}, j = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA+uLt1gYw/JxwDvbzysWhR7ORi2hVCtHPuamGWk9ANSIRCGFCLSgdGBXo2jquo5l1Gn1bVjAitwAAAkhJREFUWMPtl9ly6jAMhu1sZCMrgRASlrCGFgqt3//ZTmUfhsMc23HaXHSmfDeZiTW/LVmWZfTkye/DcuxA84iv5XGaNV9VeX3Tyb8MAmeFulMa5H88e9lRZmMQPjh1kTpuSBj6yYmWK+QuF1k6HBCKNlcP8QubvIgefu/fNRarmammE/nUPOSEI2MeT2/ujccSnQyDbb7gDpoXD0aHbPvW2KuEOhXVSUy530O6lCMhLyK7rQdujZCY1RSUYtCE7RBYjQ3QyZCMmiq9I3ShgnxssBkhOeMh7KmF4s+PwzeZ0/igNg5HCFMNu2vxLXIwMBUyBCYsxCGqIEAWUuCW+gV/GHx/ky/llG5gxVfYXGE4FxDDvTQ4kGT+ab1HCRPacc1gMJSXKPKX/MwOMN8MzqT8aJsBeeDMtdqxKeRE6YTcWXNtRtSzdg4f4ZEw+AG16RRqbJ2pJzwf4P8CKWPOK1Mcaxf1gE8IRn0AR+dnCfXgWs/BZtvfAywhewCOiN2HEDu0qrjFpJRF+1VVKCUEXwVjSQffap3VR2Gp9Q7qAZ0gQFT8E7UFadKLtILqv1URmn1aHmvxOJTRQKUV8+63tfjKnrVvPbQahtmW3eSjrTbGcCNLE4W1NTiSCxUq6976oFTK5oppG9neYWM6nzAAyxzGJwr1hjWjgSALHB9GjUa9PcbJnpNo7JoNVt0a9vPm4XfjGIQS1t2fEAV9QpiNlc1uTwi97OVRM7CbPp5ZONyh7szZw+9Ofrl+6ymqE6wb07Q8oCdPfiF/ANQydloYw+eCAAAAAElFTkSuQmCC",
  title: "向右旋转90°",
  type: "rotate"
}, K = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAbFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+T+BWAAAAI3RSTlMAsoyKtI+5mK+spJ/RvKecjnMGyb+pkw3AtoN6V0cb6js4LTOnxLwAAAFGSURBVFjD7dbLbsIwEIXhScCEBsilBcq1t3n/d6zTNjpIjjzOzKqS/w0L0KfRAQSUy+VyQ2vmmhK6MG9fI8/f2VfITsm+PvKCD06SHEsQNTy0TriHt88UaylLC2bGRIL0JN3jHakiLjk4adKBJut46AX7yFIzuU+6g50ao4Ob6mBnOGoJO5/SFUib8J79HAU7tQ/74B6NVKnvQcUoYZ8dkV464nO40iiQnN/H4mCnvodjuGnsTMgiLclYxXjzTF1/oavV6fiv0uYcMbazO23789DpDHwvivHztLDd4x2jVMEhOusXr/BTiZuc1cFNagetNDu1oxNK5VwHP9uQ5u60gTMldVYHO6kdtEuX6tAJpTLVORASFpcd9U3Yp6Foe3mnG+6JdeKhe+wPPe4RbhJOent/+Csj7fRFMam/UVKX+pNyudx/7hvtEkCDo9yvRAAAAABJRU5ErkJggg==",
  title: "关闭",
  type: "close"
};
let p = 1, A = 1, g = 0, f = [k, N, d, S, j, K], h = 0, y = 0;
function T(e) {
  if (U(s)) return;
  const r = document.createDocumentFragment();
  document.body.style.overflow = "hidden";
  let t = c("div");
  t.id = s, t.className = s, t.onclick = a, t.onwheel = (o) => {
    o.wheelDelta > 0 ? C(1) : M(1);
  };
  function a() {
    document.body.style.overflow = "", B(), t.remove(), n(`[${b}]`).remove();
  }
  let l = I(e), m = O(a);
  t.appendChild(l), t.appendChild(m), e.isMulti && J(t, e), r.appendChild(t), document.body.appendChild(r);
}
function B() {
  let e = n(`#${s} .img-show`);
  p = 1, A = 1, g = 0, h = 0, y = 0, e.style.setProperty("transform", `scale(${A}) rotate(${g}deg)`);
}
function I(e) {
  let i = c("img");
  return i.src = e.src, i.className = "img-show", i.style.cssText = `max-width:${0.9 * 100}%;max-height:${0.9 * 100}%;transform: scale(${A}) rotate(${g}deg);transition: all 0.3s ease;`, i.onclick = (r) => {
    x(r);
  }, i.onload = (r) => {
    h = i.naturalWidth, y = i.naturalHeight, v(), e.success && e.success(r);
  }, i.onerror = (r) => {
    e.fail && e.fail(r);
  }, i;
}
function v() {
  let e = window.innerWidth, i = window.innerHeight, r = i / e, t = y / h, a = 1;
  t > r ? a = y / (i * 0.9) : a = h / (e * 0.9), p = a > 1 ? a : 1;
}
function O(e) {
  let i = c("div");
  i.className = "img-toolbar-wrapper", i.onclick = (t) => {
    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
  };
  const r = document.createDocumentFragment();
  for (let t = 0, a = f.length; t < a; t++) {
    let l = c("img");
    l.src = f[t].src, l.title = f[t].title, l.className = `toolbar-${f[t].type} toolbar-icon`, l.style.cssText = "width:24px;height:24px;max-width: none;", t === 2 && l.classList.add("toolbar-mid"), l.onclick = (m) => {
      t === 0 ? M() : t === 1 ? C() : t === 2 ? D() : t === 3 ? H() : t === 4 ? G() : t === 5 && e();
    }, r.appendChild(l);
  }
  return i.appendChild(r), i;
}
function J(e, i) {
  let r = i.urls.length, t = i.urls.findIndex((o) => o === i.src);
  t = t < 0 ? 0 : t;
  let a = c("div");
  a.className = "img-arrow img-arrow-left", a.innerHTML = V, a.onclick = (o) => {
    x(o), t = t <= 0 ? r - 1 : t - 1, m(t);
  };
  let l = c("div");
  l.className = "img-arrow img-arrow-right", l.innerHTML = F, l.onclick = (o) => {
    x(o), t = t >= r - 1 ? 0 : t + 1, m(t);
  };
  function m(o) {
    let R = n(`#${s} .img-show`);
    R.setAttribute("src", i.urls[o]), R.style.setProperty("transition", "none"), B();
  }
  e.appendChild(a), e.appendChild(l);
}
function E() {
  let e = n(`#${s} .toolbar-mid`);
  v(), A === p ? (e.setAttribute("src", u.src), e.setAttribute("title", u.title), e.classList.replace(`toolbar-${d.type}`, `toolbar-${u.type}`)) : (e.setAttribute("src", d.src), e.setAttribute("title", d.title), e.classList.replace(`toolbar-${u.type}`, `toolbar-${d.type}`));
}
function w() {
  let e = n(`#${s} .img-show`);
  e.style.setProperty("transition", "all 0.3s ease"), e.style.setProperty("transform", `scale(${A}) rotate(${g}deg)`);
}
function D(e) {
  A != p ? A = p : A = 1, E(), w();
}
function M(e = 2) {
  A <= 0.2 || (A = (A * 10 - e) / 10, E(), w());
}
function C(e = 2) {
  A >= 5 * p || (A = (A * 10 + e) / 10, E(), w());
}
function H() {
  g -= 90, w();
}
function G() {
  g += 90, w();
}
function x(e) {
  e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
}
function Y() {
  if (n(`[${b}]`)) return;
  let i = c("style"), r = ".yu-image-preview-wrapper {position: fixed;top: 0;bottom: 0;left: 0;right: 0;z-index: 2000;background-color: rgba(0, 0, 0, 0.4);display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;align-items: center;justify-content: center;overflow: hidden;transition: all 0.3s ease-in-out;user-select: none;}.yu-image-preview-wrapper .img-arrow {position: fixed;top: 50%;transform: translateY(-50%);background: rgba(0, 0, 0, 0.2);width: 54px;height: 54px;border-radius: 100px;display: flex;align-items: center;justify-content: center;opacity: 0.4;transition: all 0.3s ease;}.yu-image-preview-wrapper .img-arrow .icon {fill: #fff;}@media screen and (min-width: 768px) {.yu-image-preview-wrapper .img-arrow {cursor: pointer;}.yu-image-preview-wrapper .img-arrow-left {left: 40px;}.yu-image-preview-wrapper .img-arrow-right {right: 40px;}.yu-image-preview-wrapper .img-arrow:hover {opacity: 1;}.yu-image-preview-wrapper .img-toolbar-wrapper {position: fixed;bottom: 40px;left: 50%;z-index: 1;transform: translateX(-50%);font-size: 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;align-items: center;background-color: rgba(0, 0, 0, 0.5);padding: 15px;border-radius: 30px;}.yu-image-preview-wrapper .img-toolbar-wrapper .toolbar-icon{margin:0 10px;}}@media screen and (max-width: 768px) {.yu-image-preview-wrapper .img-arrow {width: 48px;height: 48px;}.yu-image-preview-wrapper .img-arrow-left {left: 15px;}.yu-image-preview-wrapper .img-arrow-right {right: 15px;}.yu-image-preview-wrapper .img-arrow:active {opacity: 1;}.yu-image-preview-wrapper .img-toolbar-wrapper {position: fixed;bottom: 10px;left: 10px;right: 10px;z-index: 1;font-size: 0;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;align-items: center;justify-content: space-around;background-color: rgba(0, 0, 0, 0.5);padding: 8px 10px;border-radius: 10px;}.yu-image-preview-wrapper .img-toolbar-wrapper .toolbar-icon{padding: 10px;}}";
  if (i.type = "text/css", i.setAttribute(b, !0), i.styleSheet)
    i.styleSheet.cssText = r;
  else {
    let t = document.createTextNode(r);
    i.appendChild(t);
  }
  n("head").appendChild(i);
}
function Q(e) {
  if (typeof e == "object" && e !== null) {
    if (Y(), Array.isArray(e.urls) && e.urls.length > 1)
      return T({
        isMulti: !0,
        src: e.src || e.urls[0],
        urls: e.urls,
        success: e.success || null,
        fail: e.fail || null
      });
    if (e.src)
      return T({
        isMulti: !1,
        src: e.src,
        success: e.success || null,
        fail: e.fail || null
      });
  }
  console.error("ImagePreview:fail parameter error.");
}
const P = {
  show: Q
};
export {
  P as default
};
