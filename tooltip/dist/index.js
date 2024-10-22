let p = "yu-tool-tip-wrapper";
const A = function(t) {
  return document.getElementById(t);
}, b = function(t) {
  return document.querySelector(t);
}, C = function(t) {
  return document.querySelectorAll(t);
}, h = function(t) {
  return document.createElement(t);
};
let d = null;
function T(t) {
  const e = t.getBoundingClientRect();
  return e.top >= 0 && e.left >= 0 && e.bottom <= window.innerHeight && e.right <= window.innerWidth;
}
function k(t) {
  if (d = t, A(p + t.index)) return;
  let i = h("div");
  i.id = p + t.index, i.className = p + ` yu-tool-tip-${t.placement}`, i.style.animation = `toolTipAnimateIn${t.animation} 0.3s ease-out`;
  let l = h("div");
  if (l.className = "tool-tip-content", t.showArrow || (l.style.background = `${t.bgColor}`), l.innerHTML = t.content, i.appendChild(l), document.body.appendChild(i), $(i, t.placement, t.target), v(i, t.placement, t.target), t.showArrow) {
    let o = h("div");
    o.className = "tool-tip-arrow";
    let n = h("div");
    n.style.cssText = "width: 100%;height: 100%;border-radius:2px;transform: rotate(45deg); background: rgba(51, 51, 51, 1);", o.appendChild(n), i.appendChild(o);
  }
}
function v(t, e, i) {
  if (!T(t)) {
    const o = t.getBoundingClientRect();
    let n = {
      top: "top",
      "top-start": "bottom-end",
      "top-end": "bottom-start",
      bottom: "bottom",
      "bottom-start": "top-end",
      "bottom-end": "top-start",
      left: "left",
      "left-start": "right-end",
      "left-end": "right-start",
      right: "right",
      "right-start": "left-end",
      "right-end": "left-start"
    }, r = window.innerWidth, s = window.innerHeight;
    if (e.startsWith("top"))
      if (o.top >= 0 && o.left < 0)
        n[e] = "top-start";
      else if (o.top >= 0 && o.right > r)
        n[e] = "top-end";
      else if (o.top < 0 && o.left < 0)
        n[e] = "bottom-start";
      else if (o.top < 0 && o.right > r)
        n[e] = "bottom-end";
      else if (o.top < 0 && o.left >= 0 && o.right <= r) {
        let a = {
          top: "bottom",
          "top-start": "bottom-start",
          "top-end": "bottom-end"
        };
        n[e] = a[e];
      } else o.bottom > s && o.left >= 0 && o.right <= r && (n[e] = "top");
    else if (e.startsWith("bottom"))
      if (o.bottom <= s && o.left < 0)
        n[e] = "bottom-start";
      else if (o.bottom <= s && o.right > r)
        n[e] = "bottom-end";
      else if (o.bottom > s && o.left < 0)
        n[e] = "top-start";
      else if (o.bottom > s && o.right > r)
        n[e] = "top-end";
      else if (o.bottom > s && o.left >= 0 && o.right <= r) {
        let a = {
          bottom: "top",
          "bottom-start": "top-start",
          "bottom-end": "top-end"
        };
        n[e] = a[e];
      } else o.top < 0 && o.left >= 0 && o.right <= r && (n[e] = "bottom");
    else if (e.startsWith("left"))
      if (o.top < 0 && o.left >= 0)
        n[e] = "left-start";
      else if (o.bottom > s && o.left >= 0)
        n[e] = "left-end";
      else if (o.top < 0 && o.left < 0)
        n[e] = "right-start";
      else if (o.bottom > s && o.left < 0)
        n[e] = "right-end";
      else if (o.top >= 0 && o.bottom <= s && o.left < 0) {
        let a = {
          left: "right",
          "left-start": "right-start",
          "left-end": "right-end"
        };
        n[e] = a[e];
      } else o.top >= 0 && o.bottom <= s && o.right > r && (n[e] = "left");
    else if (e.startsWith("right"))
      if (o.top < 0 && o.right <= r)
        n[e] = "right-start";
      else if (o.bottom > s && o.right <= r)
        n[e] = "right-end";
      else if (o.top < 0 && o.right > r)
        n[e] = "left-start";
      else if (o.bottom > s && o.right > r)
        n[e] = "left-end";
      else if (o.top >= 0 && o.bottom <= s && o.right > r) {
        let a = {
          right: "left",
          "right-start": "left-start",
          "right-end": "left-end"
        };
        n[e] = a[e];
      } else o.top >= 0 && o.bottom <= s && o.left < 0 && (n[e] = "right");
    t.classList.replace(`yu-tool-tip-${e}`, `yu-tool-tip-${n[e]}`), $(t, n[e], i);
  }
}
function $(t, e, i) {
  const l = t.getBoundingClientRect(), o = window.innerWidth;
  let n = i.width, r = i.height, s = i.left, a = i.top, f = l.width, c = l.height;
  if (f > 200 && o <= 576) {
    t.style.width = "200px";
    const m = t.getBoundingClientRect();
    f = m.width, c = m.height;
  } else if (f > 200 && o > 576) {
    t.style.width = "300px";
    const m = t.getBoundingClientRect();
    f = m.width, c = m.height;
  } else
    t.style.width = `${f}px`;
  let u = d.showArrow ? 10 : 6;
  e.startsWith("top") ? (t.style.top = `${a + window.scrollY - (c + u)}px`, g(t, e, s, n, f)) : e.startsWith("bottom") ? (t.style.top = `${a + window.scrollY + (r + u)}px`, g(t, e, s, n, f)) : e.startsWith("left") ? (t.style.left = `${s - (f + u)}px`, w(t, e, a, r, c)) : e.startsWith("right") && (t.style.left = `${s + (n + u)}px`, w(t, e, a, r, c));
}
function g(t, e, i, l, o) {
  ["bottom", "top"].includes(e) ? t.style.left = `${i + l / 2 - o / 2}px` : ["bottom-start", "top-start"].includes(e) ? t.style.left = `${i}px` : ["bottom-end", "top-end"].includes(e) && (t.style.left = `${i + l - o}px`);
}
function w(t, e, i, l, o) {
  ["left", "right"].includes(e) ? t.style.top = `${i + window.scrollY + l / 2 - o / 2}px` : ["left-start", "right-start"].includes(e) ? t.style.top = `${i + window.scrollY}px` : ["left-end", "right-end"].includes(e) && (t.style.top = `${i + window.scrollY + l - o}px`);
}
function E() {
  let t = A(p);
  t && (t.style.animation = `toolTipAnimateOut${d.animation} 0.3s ease-in`, t.addEventListener("animationend", () => {
    t.remove(), d = null;
  }));
}
function O() {
  let t = C(`.${p}`);
  for (let e = 0, i = t.length; e < i; e++) {
    let l = t[e];
    l && (l.style.animation = `toolTipAnimateOut${d.animation} 0.3s ease-in`, l.addEventListener("animationend", () => {
      l.remove(), d = null;
    }));
  }
}
function y(t) {
  if (typeof t == "object" && typeof t !== null) {
    let e = [!0, !1], i = ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], l = {
      content: t.dataContent || t.content || "",
      placement: i.includes(t.placement) ? t.placement : "top",
      showArrow: e.includes(t.showArrow) ? t.showArrow : !0,
      animation: t.animation || "FadeDown",
      bgColor: t.bgColor || "#333",
      target: t.target || {},
      isLot: t.isLot || !1,
      index: t.index || ""
    };
    return k(l);
  }
}
function x(t, e) {
  let i = e.attr || "data-tip-content";
  if (t.length > 1)
    for (let l = 0, o = t.length; l < o; l++)
      t[l].onmouseover = (n) => {
        const r = t[l].getBoundingClientRect(), s = t[l].getAttribute(i);
        e.target = r, e.isLot = !0, e.index = l + 1, e.dataContent = s || "", y(e);
      }, t[l].onmouseout = (n) => {
        O();
      };
  else if (t.length === 1) {
    let l = t[0];
    l.onmouseover = (o) => {
      const n = l.getBoundingClientRect(), r = l.getAttribute(i);
      e.target = n, e.dataContent = r || "", y(e);
    }, l.onmouseout = (o) => {
      E();
    };
  }
}
function Y() {
  let t = "data-tooltip-style";
  if (b(`[${t}]`)) return;
  let i = h("style"), l = ".yu-tool-tip-wrapper{position:absolute;z-index:990;max-width:60%;}.yu-tool-tip-wrapper .tool-tip-content{position:relative;z-index:2;width:auto;background:#333;color:#fff;border-radius:5px;padding:10px 12px;font-size:13px;word-break: break-all;text-align: left;}.yu-tool-tip-wrapper .tool-tip-arrow{position:absolute;z-index:1;width:14px;height:14px}.yu-tool-tip-top .tool-tip-arrow{bottom:-4px;left:50%;transform:translateX(-50%)}.yu-tool-tip-top-start .tool-tip-arrow{bottom:-4px;left:8px}.yu-tool-tip-top-end .tool-tip-arrow{bottom:-4px;right:8px}.yu-tool-tip-left .tool-tip-arrow{top:50%;right:-4px;transform:translateY(-50%)}.yu-tool-tip-left-start .tool-tip-arrow{top:8px;right:-4px}.yu-tool-tip-left-end .tool-tip-arrow{bottom:8px;right:-4px}.yu-tool-tip-right .tool-tip-arrow{top:50%;left:-4px;transform:translateY(-50%)}.yu-tool-tip-right-start .tool-tip-arrow{top:8px;left:-4px}.yu-tool-tip-right-end .tool-tip-arrow{bottom:8px;left:-4px}.yu-tool-tip-bottom .tool-tip-arrow{top:-4px;left:50%;transform:translateX(-50%)}.yu-tool-tip-bottom-start .tool-tip-arrow{top:-4px;left:8px}.yu-tool-tip-bottom-end .tool-tip-arrow{top:-4px;right:8px}@keyframes toolTipAnimateInFade{from{opacity:0}to{opacity:1}}@keyframes toolTipAnimateOutFade{0%{opacity:1}100%{opacity:0}}@keyframes toolTipAnimateInFadeDown{from{opacity:0;transform:translateY(-6px);z-index:-990}to{opacity:1;z-index:990;transform:translateY(0)}}@keyframes toolTipAnimateOutFadeDown{from{opacity:1;transform:translateY(0);z-index:990}to{opacity:0;transform:translateY(-6px);z-index:-990}}@keyframes toolTipFadeOut{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0)}}";
  if (i.type = "text/css", i.setAttribute(t, !0), i.styleSheet)
    i.styleSheet.cssText = l;
  else {
    let o = document.createTextNode(l);
    i.appendChild(o);
  }
  b("head").appendChild(i);
}
function R(t, e = {}) {
  if (typeof t == "object" && t.length > 0)
    x(t, e);
  else if (typeof t == "string") {
    let i = C(t);
    x(i, e);
  }
}
const B = {
  show: (t, e = {}) => (Y(), R(t, e))
};
export {
  B as default
};
