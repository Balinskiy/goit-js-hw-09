const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");let o;function a(t){e.disabled=t,n.disabled=!t}e.addEventListener("click",(function(){a(!0),o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`;t.style.backgroundColor=e}),1e3)})),n.addEventListener("click",(function(){clearInterval(o),o=null,a(!1)}));
//# sourceMappingURL=01-color-switcher.83dfd560.js.map