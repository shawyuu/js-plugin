const d = "yu-contextmenu-wrapper", p = function(e) {
  return document.getElementById(e);
}, b = function(e) {
  return document.querySelector(e);
}, g = function(e) {
  return document.createElement(e);
};
let u = null;
function x(e, n) {
  let t = p(d);
  if (t) {
    f(t, e, n);
    return;
  }
  t = g("div"), t.id = d, t.className = d, t.style.cssText = "background-color: #fff;color: #333;font-size: 15px;line-height: 24px;padding: 8px 0;border-radius: 8px;box-shadow: 0 5px 18px rgba(0,0,0,0.1);position: absolute;left: 0;top: 0;z-index: 99;", h(t), f(t, e, n), document.oncontextmenu = m(), document.onclick = m();
}
function h(e) {
  let n = document.createDocumentFragment(), t = u.menu;
  for (let o = 0, c = t.length; o < c; o++) {
    if (typeof t[o] == "object" && t[o] !== null) {
      console.error('Contextmenu:fail parameter "menu" error: expected Array<string|number> but get Array<object> value.');
      return;
    }
    let r = g("div");
    r.className = "yu-contextmenu-item", r.innerText = t[o], r.style.cssText = "padding: 8px 20px;background-color: transparent;cursor: pointer;", r.onclick = (l) => {
      l.stopPropagation(), u.success && u.success(o), y();
    }, r.onmouseenter = (l) => {
      r.style.backgroundColor = "#f2f2f2";
    }, r.onmouseleave = (l) => {
      r.style.backgroundColor = "transparent";
    }, n.appendChild(r);
  }
  e.appendChild(n), document.body.appendChild(e);
}
function f(e, n, t) {
  let o = window.innerWidth, c = window.innerHeight, r = e.getBoundingClientRect(), l = r.width, a = r.height, i = 0, s = 0;
  n + l >= o && t + a >= c ? (i = n - l, s = t - a) : n + l >= o ? (i = n - l, s = t) : t + a >= c ? (i = n, s = t - a) : (i = n, s = t), e.style.left = i + "px", e.style.top = s + "px";
}
function y() {
  let e = p(d);
  e && (e.remove(), document.oncontextmenu = null, document.onclick = null);
}
function m() {
  return function(e) {
    e.preventDefault(), e.stopPropagation(), y();
  };
}
function C(e) {
  if (typeof e == "object" && e !== null) {
    u = {
      menu: Array.isArray(e.menu) ? e.menu : [],
      target: e.target || "",
      success: e.success || null
    }, u.target || console.error('Contextmenu: fail parameter error: "target" is required in init({}) function.');
    let t = b(u.target);
    t.oncontextmenu = (o) => {
      o.preventDefault(), o.stopPropagation();
      let c = o.pageX, r = o.pageY;
      x(c, r);
    };
  } else
    console.error(`Contextmenu:fail parameter error: expected <object> but get <${typeof u == "object" ? null : typeof u}> value.`);
}
function w(e) {
  typeof e == "object" && e !== null ? (u = {
    menu: Array.isArray(e.menu) ? e.menu : [],
    pointX: e.pointX || 0,
    pointY: e.pointY || 0,
    success: e.success || null
  }, x(u.pointX, u.pointY)) : console.error(`Contextmenu:fail parameter error: expected <object> but get <${typeof u == "object" ? null : typeof u}> value.`);
}
const v = {
  init: (e) => C(e),
  show: (e) => w(e)
};
export {
  v as default
};
