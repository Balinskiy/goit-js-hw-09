!function(){var t,e=document.querySelector("body"),n=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");n.addEventListener("click",(function(){t||(n.disabled=!0,a.disabled=!1,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));e.style.backgroundColor=t}),1e3))})),a.addEventListener("click",(function(){clearInterval(t),t=null,n.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.c2ac25ba.js.map
