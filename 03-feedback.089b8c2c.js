!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var l=a("1WSnx"),n=document.querySelector(".feedback-form");n.querySelector("input"),n.querySelector("textarea");n.addEventListener("input",(0,l.throttle)((function(e){var t={email:n.elements.email.value,message:n.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),n.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,a=t.message;console.log({email:r.value,message:a.value}),e.currentTarget.reset(),localStorage.clear()}));var o=localStorage.getItem("feedback-form-state"),i=JSON.parse(o);console.log(void(null!==i&&(input.value=i.email,textArea.value=i.message)))}();
//# sourceMappingURL=03-feedback.089b8c2c.js.map