(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    s(i);
  new MutationObserver((i) => {
    for (const c of i)
      if (c.type === "childList")
        for (const n of c.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && s(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const c = {};
    return i.integrity && (c.integrity = i.integrity), i.referrerPolicy && (c.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? c.credentials = "include" : i.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c;
  }
  function s(i) {
    if (i.ep)
      return;
    i.ep = !0;
    const c = t(i);
    fetch(i.href, c);
  }
})();
class h extends HTMLElement {
  static get observedAttributes() {
    return ["label", "type", "href", "class", "display", "size", "icon", "icon-position"];
  }
  constructor() {
    super(), this.render();
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  get template() {
    const e = this.className ? this.className + " " + this.currenttype : this.currenttype + " " + this.currentDisplay;
    return `
      ${this.href ? `<a href="${this.href}" class="${e}">
          ${this.icon && this.iconPosition === "left" ? `<span class="lnr ${this.icon}"></span>` : ""}
          <span class="btn-texte">${this.label}</span>
          ${this.icon && this.iconPosition === "right" ? `<span class="lnr ${this.icon}"></span>` : ""}
        </a>` : `<button class="${e}">
          ${this.icon && this.iconPosition === "left" ? `<span class="lnr ${this.icon}"></span>` : ""}
          <span class="btn-texte">${this.label}</span>
          ${this.icon && this.iconPosition === "right" ? `<span class="lnr ${this.icon}"></span>` : ""}
        </button>`}
    `;
  }
  get label() {
    return this.getAttribute("label") || "Bouton";
  }
  get currenttype() {
    const e = this.getAttribute("type");
    return ["principal", "secondaire", "tertiaire", "avertissement", "session"].includes(e) ? e : "principal";
  }
  get currentDisplay() {
    const e = this.getAttribute("display");
    return ["inline-block", "block"].includes(e) ? e : "inline-block";
  }
  get currentSize() {
    const e = this.getAttribute("size");
    return ["normal", "compact"].includes(e) ? e : "normal";
  }
  get icon() {
    return this.getAttribute("icon");
  }
  get iconPosition() {
    const e = this.getAttribute("icon-position");
    return ["left", "right"].includes(e) ? e : "left";
  }
  get href() {
    return this.getAttribute("href");
  }
  render() {
    this.innerHTML = this.template;
  }
}
customElements.get("qc-bouton") || customElements.define("qc-bouton", h);
class u extends HTMLElement {
  static get observedAttributes() {
    return ["message", "type", "class", "fermeture"];
  }
  constructor() {
    super(), this.render();
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  get template() {
    return `
      <div class="container"¨>
        ${this.type === "avertissement" ? '<div class="icon"><?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ad781c"><path d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke="#ad781c" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 9V13" stroke="#ad781c" stroke-width="1.5" stroke-linecap="round"></path><path d="M12 17.01L12.01 16.9989" stroke="#ad781c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>' : '<div class="icon"><?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#223654"><path d="M12 11.5V16.5" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>'}
        <div role="alert">
          ${this.message}
        </div>
        ${this.fermeture === "oui" ? `
          <button aria-label="${this.closeButtonLabel}" class="close-btn">
          <?xml version="1.0" encoding="UTF-8"?><svg width="32px" height="32px" stroke-width=".5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#000000" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>` : ""}
      </div>
    `;
  }
  get message() {
    return this.getAttribute("message");
  }
  get type() {
    return this.getAttribute("type") || "avertissement";
  }
  get fermeture() {
    return this.getAttribute("fermeture") || "non";
  }
  get closeButtonLabel() {
    switch (document.documentElement.lang || "en") {
      case "fr-CA":
        return "Fermer le message";
      case "es":
        return "Cerrar el mensaje";
      default:
        return "Close the message";
    }
  }
  render() {
    this.innerHTML = this.template, this.fermeture === "oui" && this.querySelector(".close-btn").addEventListener("click", () => this.closeAlert());
  }
  closeAlert() {
    this.style.display = "none";
  }
}
customElements.get("qc-alerte") || customElements.define("qc-alerte", u);
const d = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.67%2052.21'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2'%20data-name='Calque%201'%3e%3cpath%20class='cls-1'%20d='M52.67,47.81l-15-15a20.77,20.77,0,1,0-4.32,4.46L48.28,52.21ZM20.78,35.36A14.41,14.41,0,1,1,35.19,21h0A14.43,14.43,0,0,1,20.78,35.36Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", g = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.68%2052.23'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23223654;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2'%20data-name='Calque%201'%3e%3cg%20id='Calque_2-2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2-2'%20data-name='Calque%201-2'%3e%3cpath%20class='cls-1'%20d='M52.68,47.83l-15-15a20.77,20.77,0,1,0-4.32,4.46L48.29,52.23ZM20.79,35.38A14.41,14.41,0,1,1,35.2,21V21h0A14.43,14.43,0,0,1,20.79,35.38Z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function p() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    const e = Math.random() * 16 | 0;
    return (r === "x" ? e : e & 3 | 8).toString(16);
  });
}
class m extends HTMLElement {
  static get observedAttributes() {
    return ["placeholder", "class", "label", "btnlabel", "variant", "action", "id", "name", "value"];
  }
  constructor() {
    super(), this.uuid = `input-${p()}`, this.render();
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  connectedCallback() {
    const e = this.querySelector(".clear-btn");
    e && e.addEventListener("click", this.clearInput.bind(this));
  }
  clearInput() {
    const e = this.querySelector("input");
    e && (e.value = "", e.focus());
  }
  render() {
    this.innerHTML = this.template;
  }
  get template() {
    return `
      <form method="get" action="${this.action}" class="container">
        <div class="input-group">
          <label for="${this.inputId}" class="visually-hidden">${this.label}</label>
          <input
            id="${this.inputId}"
            name="${this.inputName}"
            type="text"
            placeholder="${this.placeholder}"
            class="form-control search-input"
            value="${this.inputValue}"
          />
          <button type="button" aria-label="Effacer" class="clear-btn"><span class="lnr lnr-cross"></span></button>
          <span class="input-group-btn">
            <button type="submit" aria-label="${this.btnlabel}" class="btn-search">
              ${this.generateSearchIcon()}
            </button>
          </span>
        </div>
      </form>
    `;
  }
  generateSearchIcon() {
    return `<img src="${this.variant === "dark" ? g : d}" alt="Rechercher" width="24" height="24" />`;
  }
  get placeholder() {
    return this.getAttribute("placeholder") || "Rechercher";
  }
  get label() {
    return this.getAttribute("label") || "Rechercher";
  }
  get btnlabel() {
    return this.getAttribute("btnlabel") || "Rechercher";
  }
  get variant() {
    return this.getAttribute("variant") || "light";
  }
  get action() {
    const e = document.documentElement.lang || "fr";
    return `${this.getAttribute("action") || "/"}?lang=${e}`;
  }
  get inputId() {
    return this.getAttribute("id") || this.uuid;
  }
  get inputName() {
    return this.getAttribute("name") || "query";
  }
  get inputValue() {
    const e = new URLSearchParams(window.location.search);
    return this.getAttribute("value") || e.get("query") || "";
  }
}
customElements.get("qc-recherche") || customElements.define("qc-recherche", m);
const b = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20463.55%2091'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:%23fff;}.cls-2{fill-rule:evenodd;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Signature'%3e%3cpath%20class='cls-1'%20d='M125.22,62.89V24.11h-.29c-1.38,1.27-6.48,1.37-8.64,1.37h-3.75v.31c4.33,2.66,3.74,6.59,3.74,11.48V53.68c0,8.21-8.06,14-14.56,14-8.56,0-12.11-6.08-12.11-15.89V24.11h-.3c-1.38,1.27-6.51,1.37-8.67,1.37H76.94v.32c4.33,2.66,3.74,6.58,3.74,11.47V53.63c0,15,6.49,22.08,18.1,22.08,6.89,0,14-2.44,17.51-8.28v7.08H129v-.32C124.63,71.74,125.22,67.79,125.22,62.89Z'/%3e%3cpath%20class='cls-1'%20d='M144.88,42.15c1.18-6.66,6.1-10.89,12.7-10.89,7.09,0,11.61,3.49,12.7,10.89Zm35.74,6.18c.39-13.68-8.77-24-22.16-24-14.66,0-24.6,10.64-24.6,25.4s11.51,26.21,28.25,26.21a33.26,33.26,0,0,0,13.58-2.64l4.93-10h-.3A24.65,24.65,0,0,1,164.17,69c-11.12,0-19.49-7.59-19.68-20.65Z'/%3e%3cpath%20class='cls-1'%20d='M188.42,1.58c2.36,0,7.17-.15,8.63-1.58h.29V67.17a30.3,30.3,0,0,0,8.12,1.27c10.75,0,16.92-7.53,16.92-18,0-10.28-4.8-18.23-14.67-18.23a15.91,15.91,0,0,0-8.22,2.33l5.28-9a19.53,19.53,0,0,1,6.95-1.17c11.15,0,20.63,9.68,20.63,24.2,0,16.63-11.25,27.39-29,27.39-6.65,0-13-1.18-17.85-1.92v-.33c3.25-1.49,3-5,3-8.51V16.33c0-4.91.59-11.77-3.64-14.43V1.58Z'/%3e%3cpath%20class='cls-1'%20d='M249.83,42.15c1.18-6.66,6.1-10.89,12.7-10.89,7.09,0,11.61,3.49,12.7,10.89Zm35.73,6.18c.4-13.68-8.76-24-22.15-24-14.66,0-24.6,10.64-24.6,25.4s11.51,26.21,28.24,26.21a33.27,33.27,0,0,0,13.59-2.64l4.92-10h-.29A24.65,24.65,0,0,1,269.12,69c-11.12,0-19.49-7.59-19.69-20.65Z'/%3e%3cpath%20class='cls-1'%20d='M329.59,36.49h-.3c-2.85-3.52-7.58-5.23-12-5.23-9.55,0-16.43,7.25-16.43,17.37,0,12.25,9.54,20.35,20.47,20.35a24.18,24.18,0,0,0,14.37-5.22h.3l-5.12,10.06a34.32,34.32,0,0,1-13,2.11c-15.15,0-27-10.68-27-24.53,0-18.32,13.22-27.08,28.09-27.08a45.37,45.37,0,0,1,10.63,1.26Z'/%3e%3cpath%20class='cls-2'%20d='M168.33,15.53V4.87c-6.45,2.89-12.44,8.3-16.44,13.56v4.15C161.47,16.13,168.33,15.83,168.33,15.53Z'/%3e%3cpath%20class='cls-1'%20d='M36.43,68.6c-14.87,0-25.21-16.77-25.21-31,0-.14,0-1.46,0-1.6.18-13.8,9.12-26.75,24.71-26.75,16.4,0,24.86,15.52,25,30.23V41C60.94,56.66,51.2,68.6,36.43,68.6ZM87.38,84.9c-11,1.79-21.53-1.66-32.74-14.49,10.83-5.44,17.53-19,17.53-31.55V37.29C72,15.77,55.8,1.56,36.53,1.56S.15,16.35,0,38V39.5C0,60.6,15.66,76.27,34.85,76.27a34.32,34.32,0,0,0,8.08-1.07C55.5,87,66.71,92,76.39,90.83c4.59-.55,9.45-2.38,12.36-6.16Z'/%3e%3cpath%20class='cls-1'%20d='M375.65,27.17c-3,.95-3-1.75-3-1.75,2.68.47,2.94-1.78,2.94-1.78h-5.35V21.12h2.54s-.43-3.36-2.92-3.36c-2.29,0-2.61,2.54-2.19,3.59-1.15.2-2.83-1.79-2.83-4.13a4.45,4.45,0,0,1,4.45-4.57c3.37,0,5.89,3.89,5.89,8.47h1a15.1,15.1,0,0,0-.24-4.22c-.72-3.17-2.3-5-2.33-7.19-.06-3.73,2.19-4.33,4-7.59,1.8,3.26,4.05,3.86,4,7.59,0,2.15-1.61,4-2.34,7.19a14.89,14.89,0,0,0-.23,4.22h1c0-4.58,2.53-8.47,5.9-8.47a4.45,4.45,0,0,1,4.45,4.57c0,2.34-1.68,4.33-2.83,4.13.42-1.05.1-3.59-2.2-3.59-2.48,0-2.91,3.36-2.91,3.36H385v2.52h-5.34s.26,2.25,2.94,1.78c0,0,0,2.7-3.05,1.75,0,0-.12,2.41-1.93,3.28C375.77,29.58,375.65,27.17,375.65,27.17ZM401.57,1.59h-48V31h48Z'/%3e%3cpath%20class='cls-1'%20d='M437.63,27.17c-3,.95-3.05-1.75-3.05-1.75,2.67.47,2.94-1.78,2.94-1.78h-5.34V21.12h2.53s-.43-3.36-2.92-3.36c-2.29,0-2.61,2.54-2.19,3.59-1.15.2-2.83-1.79-2.83-4.13a4.45,4.45,0,0,1,4.45-4.57c3.37,0,5.9,3.89,5.9,8.47h1a14.89,14.89,0,0,0-.23-4.22c-.73-3.17-2.3-5-2.34-7.19-.06-3.73,2.19-4.33,4-7.59,1.79,3.26,4.05,3.86,4,7.59,0,2.15-1.6,4-2.32,7.19a15.31,15.31,0,0,0-.25,4.22h1c0-4.58,2.52-8.47,5.89-8.47a4.45,4.45,0,0,1,4.45,4.57c0,2.34-1.68,4.33-2.83,4.13.42-1.05.1-3.59-2.19-3.59-2.49,0-2.92,3.36-2.92,3.36h2.53v2.52H441.6s.26,2.25,2.94,1.78c0,0,0,2.7-3.05,1.75,0,0-.12,2.41-1.93,3.28C437.75,29.58,437.63,27.17,437.63,27.17ZM463.55,1.59h-48V31h48Z'/%3e%3cpath%20class='cls-1'%20d='M375.65,70.63c-3,1-3-1.75-3-1.75,2.68.48,2.94-1.78,2.94-1.78h-5.35V64.58h2.54s-.43-3.36-2.92-3.36c-2.29,0-2.61,2.54-2.19,3.6-1.15.19-2.83-1.8-2.83-4.14a4.45,4.45,0,0,1,4.45-4.57c3.37,0,5.89,3.89,5.89,8.47h1a15.1,15.1,0,0,0-.24-4.22c-.72-3.16-2.3-5-2.33-7.18-.06-3.74,2.19-4.34,4-7.6,1.8,3.26,4.05,3.86,4,7.6,0,2.14-1.61,4-2.34,7.18a14.89,14.89,0,0,0-.23,4.22h1c0-4.58,2.53-8.47,5.9-8.47a4.45,4.45,0,0,1,4.45,4.57c0,2.34-1.68,4.33-2.83,4.14.42-1.06.1-3.6-2.2-3.6-2.48,0-2.91,3.36-2.91,3.36H385V67.1h-5.34s.26,2.26,2.94,1.78c0,0,0,2.7-3.05,1.75,0,0-.12,2.41-1.93,3.28C375.77,73,375.65,70.63,375.65,70.63Zm25.92-25.57h-48v29.4h48Z'/%3e%3cpath%20class='cls-1'%20d='M437.63,70.63c-3,1-3.05-1.75-3.05-1.75,2.67.48,2.94-1.78,2.94-1.78h-5.34V64.58h2.53s-.43-3.36-2.92-3.36c-2.29,0-2.61,2.54-2.19,3.6-1.15.19-2.83-1.8-2.83-4.14a4.45,4.45,0,0,1,4.45-4.57c3.37,0,5.9,3.89,5.9,8.47h1a14.89,14.89,0,0,0-.23-4.22c-.73-3.16-2.3-5-2.34-7.18-.06-3.74,2.19-4.34,4-7.6,1.79,3.26,4.05,3.86,4,7.6,0,2.14-1.6,4-2.32,7.18a15.31,15.31,0,0,0-.25,4.22h1c0-4.58,2.52-8.47,5.89-8.47a4.45,4.45,0,0,1,4.45,4.57c0,2.34-1.68,4.33-2.83,4.14.42-1.06.1-3.6-2.19-3.6-2.49,0-2.92,3.36-2.92,3.36h2.53V67.1H441.6s.26,2.26,2.94,1.78c0,0,0,2.7-3.05,1.75,0,0-.12,2.41-1.93,3.28C437.75,73,437.63,70.63,437.63,70.63Zm25.92-25.57h-48v29.4h48Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", v = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2052.67%2052.21'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Calque_1-2'%20data-name='Calque%201'%3e%3cpath%20class='cls-1'%20d='M52.67,47.81l-15-15a20.77,20.77,0,1,0-4.32,4.46L48.28,52.21ZM20.78,35.36A14.41,14.41,0,1,1,35.19,21h0A14.43,14.43,0,0,1,20.78,35.36Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
class f extends HTMLElement {
  static get observedAttributes() {
    return ["titre", "class", "btnlabel", "contacturl", "contactlabel", "recherche", "langueurl", "languelabel", "action", "name", "query"];
  }
  constructor() {
    super(), this.render();
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  get template() {
    return `
            <header class="bg-bleu-piv">
                <div class="container">
                    <div class="piv">
                        <a class="qc-logo" href="https://quebec.ca/" aria-label="Québec.ca">
                            <img src="${b}" alt="Québec.ca" width="200" height="72" />
                        </a>
                        <p><a href="/">${this.titre}</a></p>
                    </div>
                    <nav>
                        <button aria-label="${this.btnlabel}" class="btn-search">
                            <img src="${v}" alt="Rechercher" width="24" height="24" />
                        </button>
                        <ul ${this.langueurl ? 'class="langue"' : ""}>
                            ${this.langueurl ? `<li><a href="${this.langueurl}">${this.languelabel}</a></li>` : ""}
                            <li><a href="${this.contacturl}">${this.contactlabel}</a></li>
                        </ul>
                    </nav>
                </div>
                ${this.recherche === "oui" ? `<qc-recherche variant="dark" action="${this.action}" name="${this.name}" value="${this.query}"></qc-recherche>` : ""}
            </header>
        `;
  }
  get titre() {
    return this.getAttribute("titre") || "Titre du site";
  }
  get btnlabel() {
    return this.getAttribute("btnlabel") || "Rechercher";
  }
  get contacturl() {
    return this.getAttribute("contacturl") || "/";
  }
  get contactlabel() {
    return this.getAttribute("contactlabel") || "Nous joindre";
  }
  get recherche() {
    return this.getAttribute("recherche") || "non";
  }
  set recherche(e) {
    this.setAttribute("recherche", e);
  }
  get langueurl() {
    return this.getAttribute("langueurl");
  }
  get languelabel() {
    return this.getAttribute("languelabel") || "English";
  }
  // Modification ici pour gérer la langue dans l'action
  get action() {
    const e = document.documentElement.lang || "fr";
    return `${this.getAttribute("action") || "/"}?lang=${e}`;
  }
  get name() {
    return this.getAttribute("name") || "search";
  }
  get query() {
    return this.getAttribute("query") || "";
  }
  render() {
    this.innerHTML = this.template;
    const e = this.querySelector(".btn-search");
    if (e && e.addEventListener("click", () => {
      this.recherche = this.recherche === "oui" ? "non" : "oui", this.render(), this.updateSearchAction();
    }), this.recherche === "oui") {
      const t = this.querySelector("qc-recherche");
      if (t) {
        t.setAttribute("action", this.action), t.setAttribute("name", this.name), t.setAttribute("value", this.query);
        const s = t.querySelector("input");
        s && s.focus();
      }
    }
  }
  updateSearchAction() {
    const e = this.querySelector("qc-recherche");
    e && (e.setAttribute("action", this.action), e.setAttribute("name", this.name), e.setAttribute("value", this.query));
  }
}
customElements.get("qc-header") || customElements.define("qc-header", f);
class x extends HTMLElement {
  static get observedAttributes() {
    return ["titre", "contenu", "type", "class"];
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  constructor() {
    super(), this.render();
  }
  get template() {
    return `
            <div role="alert" class="avis avis-${this.className ? `${this.className} ${this.currenttype}` : this.currenttype}">
                <div class="avis-img">
                    ${this.iconForType(this.currenttype)}
                </div>
                <div class="avis-content">
                    <h3 class="h5 avis-titre">${this.titre}</h3>
                    <div>${this.contenu}</div>
                </div>
            </div>
        `;
  }
  render() {
    this.innerHTML = this.template;
  }
  get currenttype() {
    const e = this.getAttribute("type");
    return ["general", "important", "succes", "erreur", "complementaire"].includes(e) ? e : "general";
  }
  get titre() {
    return this.getAttribute("titre") || "Titre";
  }
  get contenu() {
    return this.getAttribute("contenu") || "Contenu";
  }
  iconForType(e) {
    const t = {
      general: `
                <svg width="24" height="24" viewBox="2 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M12 7.01001V7.00002M12 17L12 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#223654" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>`,
      important: `
                <svg fill="#ad781c" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 367.011 367.01">
                    <g>
                        <path d="M365.221,329.641L190.943,27.788c-1.542-2.674-4.395-4.318-7.479-4.318c-3.084,0-5.938,1.645-7.48,4.318L1.157,330.584
                            c-1.543,2.674-1.543,5.965,0,8.639c1.542,2.674,4.395,4.318,7.48,4.318h349.65c0.028,0,0.057,0,0.086,0
                            c4.77,0,8.638-3.863,8.638-8.639C367.011,332.92,366.342,331.1,365.221,329.641z M23.599,326.266L183.464,49.381l159.864,276.885
                            H23.599z"/>
                        <path d="M174.826,136.801v123.893c0,4.773,3.867,8.638,8.638,8.638c4.77,0,8.637-3.863,8.637-8.638V136.801
                            c0-4.766-3.867-8.637-8.637-8.637C178.693,128.165,174.826,132.036,174.826,136.801z"/>
                        <path d="M183.464,279.393c-5.922,0-10.725,4.8-10.725,10.722s4.803,10.729,10.725,10.729c5.921,0,10.725-4.809,10.725-10.729
                            C194.189,284.193,189.386,279.393,183.464,279.393z"/>
                    </g>
                </svg>`,
      succes: `
                <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#2c4024;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}</style>
                    </defs>
                    <g data-name="Layer 2">
                        <g data-name="E408, Success, Media, media player, multimedia">
                            <circle class="cls-1" cx="256" cy="256" r="246"/>
                            <polyline class="cls-1" points="115.54 268.77 200.67 353.9 396.46 158.1"/>
                        </g>
                    </g>
                </svg>`,
      erreur: `
                <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#692519;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}</style>
                    </defs>
                    <g data-name="Layer 2">
                        <g data-name="E410, Error, Media, media player, multimedia">
                            <circle class="cls-1" cx="256" cy="256" r="246"/>
                            <line class="cls-1" x1="371.47" x2="140.53" y1="140.53" y2="371.47"/>
                            <line class="cls-1" x1="371.47" x2="140.53" y1="371.47" y2="140.53"/>
                        </g>
                    </g>
                </svg>`,
      complementaire: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="0 0 56 56">
                    <path d="M 19.5039 43.1523 L 36.4726 43.1523 C 37.2695 43.1523 37.7617 42.6601 37.7617 41.8633 L 37.7617 38.1133 C 37.7617 32.4414 46.0117 28.7852 46.0117 18.6601 C 46.0117 7.9961 38.7930 .8711 27.9883 .8711 C 17.1836 .8711 9.9883 7.9961 9.9883 18.6601 C 9.9883 28.7852 18.2148 32.4414 18.2148 38.1133 L 18.2148 41.8633 C 18.2148 42.6601 18.7304 43.1523 19.5039 43.1523 Z M 21.7070 38.1601 C 21.7070 31.2695 13.5273 27.5898 13.5273 18.6836 C 13.5273 10.1054 19.3164 4.4101 27.9883 4.4101 C 36.6601 4.4101 42.4726 10.1054 42.4726 18.6836 C 42.4726 27.5898 34.2695 31.2695 34.2695 38.1601 L 34.2695 39.6133 L 21.7070 39.6133 Z M 20.3711 49.4805 L 35.6055 49.4805 C 36.8008 49.4805 37.7617 48.4961 37.7617 47.2773 C 37.7617 46.0586 36.8008 45.0742 35.6055 45.0742 L 20.3711 45.0742 C 19.1758 45.0742 18.2148 46.0586 18.2148 47.2773 C 18.2148 48.4961 19.1758 49.4805 20.3711 49.4805 Z M 27.9883 55.1289 C 31.2226 55.1289 33.4961 53.6523 33.7304 51.3789 L 22.2461 51.3789 C 22.4570 53.6523 24.7304 55.1289 27.9883 55.1289 Z"/>
                </svg>`
    };
    return t[e] || t.general;
  }
}
customElements.define("qc-avis", x);
const w = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20559.64%20168.93'%3e%3cdefs%3e%3cstyle%3e.cls-1,.cls-2{fill:%231d1d1b;}.cls-2,.cls-4{fill-rule:evenodd;}.cls-3{fill:%230062ae;}.cls-4{fill:%23fff;}.cls-5{fill:none;}%3c/style%3e%3c/defs%3e%3ctitle%3eFichier%201%3c/title%3e%3cg%20id='Calque_2'%20data-name='Calque%202'%3e%3cg%20id='Signature'%3e%3cpath%20class='cls-1'%20d='M173.25,109.4V70.62H173c-1.38,1.27-6.48,1.37-8.64,1.37h-3.75v.31c4.33,2.66,3.74,6.59,3.74,11.48v16.41c0,8.2-8.06,14-14.56,14-8.56,0-12.11-6.08-12.11-15.89V70.62h-.3C136,71.89,130.85,72,128.68,72H125v.32c4.33,2.65,3.74,6.58,3.74,11.47v16.36c0,15,6.49,22.08,18.1,22.08,6.89,0,14-2.44,17.51-8.28V121H177v-.32C172.66,118.25,173.25,114.3,173.25,109.4Z'/%3e%3cpath%20class='cls-1'%20d='M192.91,88.66c1.18-6.66,6.1-10.89,12.7-10.89,7.09,0,11.62,3.49,12.7,10.89Zm35.74,6.19c.39-13.69-8.77-24-22.15-24-14.67,0-24.61,10.64-24.61,25.4s11.51,26.2,28.25,26.2a33.25,33.25,0,0,0,13.58-2.63l4.93-10h-.3a24.65,24.65,0,0,1-16.15,5.67c-11.12,0-19.49-7.59-19.68-20.64Z'/%3e%3cpath%20class='cls-1'%20d='M236.46,48.09c2.35,0,7.16-.15,8.62-1.58h.29v67.17a30.29,30.29,0,0,0,8.12,1.26c10.75,0,16.92-7.52,16.92-18,0-10.28-4.79-18.23-14.67-18.23A15.91,15.91,0,0,0,247.52,81l5.28-9a19.53,19.53,0,0,1,6.95-1.17c11.15,0,20.63,9.68,20.63,24.2,0,16.63-11.25,27.39-29,27.39-6.65,0-13-1.18-17.85-1.92v-.33c3.25-1.49,3-5,3-8.51V62.84c0-4.91.59-11.77-3.64-14.43v-.32Z'/%3e%3cpath%20class='cls-1'%20d='M297.86,88.66C299,82,304,77.77,310.56,77.77c7.09,0,11.61,3.49,12.7,10.89Zm35.73,6.19c.4-13.69-8.76-24-22.15-24-14.66,0-24.6,10.64-24.6,25.4s11.51,26.2,28.24,26.2a33.26,33.26,0,0,0,13.59-2.63l4.92-10h-.29a24.65,24.65,0,0,1-16.15,5.67c-11.12,0-19.49-7.59-19.69-20.64Z'/%3e%3cpath%20class='cls-1'%20d='M377.62,83h-.29c-2.86-3.52-7.59-5.23-12-5.23-9.55,0-16.43,7.25-16.43,17.37,0,12.25,9.54,20.35,20.47,20.35a24.18,24.18,0,0,0,14.37-5.22h.3l-5.12,10.06a34.51,34.51,0,0,1-13,2.1c-15.15,0-27-10.67-27-24.52,0-18.33,13.22-27.08,28.09-27.08a45.37,45.37,0,0,1,10.63,1.26Z'/%3e%3cpath%20class='cls-2'%20d='M216.36,62V51.38c-6.45,2.89-12.44,8.3-16.44,13.56v4.15C209.5,62.64,216.36,62.34,216.36,62Z'/%3e%3cpath%20class='cls-1'%20d='M84.46,115.11c-14.87,0-25.21-16.77-25.21-31,0-.14,0-1.46,0-1.6.18-13.8,9.12-26.75,24.71-26.75,16.4,0,24.86,15.52,25,30.23V87.5C109,103.17,99.23,115.11,84.46,115.11Zm51,16.3c-11,1.79-21.53-1.67-32.74-14.49,10.83-5.44,17.53-19,17.53-31.55V83.8c-.2-21.52-16.37-35.73-35.64-35.73S48.18,62.86,48,84.55V86c0,21.1,15.66,36.77,34.85,36.77A34.32,34.32,0,0,0,91,121.71c12.57,11.78,23.78,16.8,33.46,15.63,4.59-.55,9.45-2.38,12.36-6.16Z'/%3e%3crect%20class='cls-3'%20x='401.62'%20y='48.1'%20width='48.02'%20height='29.43'/%3e%3cpath%20class='cls-4'%20d='M425.63,49.64a32.42,32.42,0,0,1-2.45,3.24,5.76,5.76,0,0,0-.54,6,26.46,26.46,0,0,1,1.69,4.56,14.2,14.2,0,0,1,.21,4.41h-1.32c0-3.25-1-6.31-3.47-7.66A4,4,0,0,0,413.93,65c.58,1.82,1.6,2.43,1.89,2.43a3.05,3.05,0,0,1,1-3,2.75,2.75,0,0,1,3.84.77,6.14,6.14,0,0,1,.85,2.6H419v1.85h5A2.5,2.5,0,0,1,421.13,72s.34,2,2.89,1a3.74,3.74,0,0,0,1.61,3.23h0A3.76,3.76,0,0,0,427.25,73c2.55,1.07,2.89-1,2.89-1a2.5,2.5,0,0,1-2.89-2.37h5V67.81h-2.51a6.23,6.23,0,0,1,.86-2.6,2.74,2.74,0,0,1,3.83-.77,3,3,0,0,1,1,3c.29,0,1.31-.61,1.9-2.43a4.05,4.05,0,0,0-5.83-4.89c-2.45,1.35-3.46,4.41-3.46,7.66h-1.33a14.2,14.2,0,0,1,.21-4.41,26.46,26.46,0,0,1,1.69-4.56,5.78,5.78,0,0,0-.53-6A34.9,34.9,0,0,1,425.63,49.64Z'/%3e%3crect%20class='cls-3'%20x='463.63'%20y='48.1'%20width='48.03'%20height='29.43'/%3e%3cpath%20class='cls-4'%20d='M487.64,49.64a33.79,33.79,0,0,1-2.47,3.24,5.78,5.78,0,0,0-.53,6,25.77,25.77,0,0,1,1.7,4.56,14.57,14.57,0,0,1,.21,4.41h-1.33c0-3.25-1-6.31-3.47-7.66A4,4,0,0,0,475.94,65c.57,1.82,1.59,2.43,1.88,2.43a3.07,3.07,0,0,1,1-3,2.74,2.74,0,0,1,3.83.77,6.23,6.23,0,0,1,.86,2.6H481v1.85h5A2.49,2.49,0,0,1,483.13,72s.34,2,2.88,1a3.75,3.75,0,0,0,1.63,3.23h0A3.77,3.77,0,0,0,489.25,73c2.55,1.07,2.89-1,2.89-1a2.5,2.5,0,0,1-2.89-2.37h5V67.81h-2.51a6.4,6.4,0,0,1,.86-2.6,2.75,2.75,0,0,1,3.84-.77,3.1,3.1,0,0,1,1,3c.28,0,1.3-.61,1.86-2.43a4,4,0,0,0-5.81-4.89c-2.45,1.35-3.46,4.41-3.46,7.66h-1.33a14.39,14.39,0,0,1,.22-4.41,24.17,24.17,0,0,1,1.69-4.56,5.8,5.8,0,0,0-.54-6A32.42,32.42,0,0,1,487.64,49.64Z'/%3e%3crect%20class='cls-3'%20x='401.62'%20y='91.55'%20width='48.02'%20height='29.42'/%3e%3cpath%20class='cls-4'%20d='M425.63,93.09a32.71,32.71,0,0,1-2.45,3.23,5.76,5.76,0,0,0-.54,6,26.46,26.46,0,0,1,1.69,4.56,14.2,14.2,0,0,1,.21,4.41h-1.32c0-3.24-1-6.31-3.47-7.66a4,4,0,0,0-5.82,4.89c.58,1.82,1.6,2.44,1.89,2.44a3.07,3.07,0,0,1,1-3,2.76,2.76,0,0,1,3.84.76,6.2,6.2,0,0,1,.85,2.61H419v1.85h5a2.5,2.5,0,0,1-2.89,2.36s.34,2.05,2.89,1a3.77,3.77,0,0,0,1.61,3.25h0a3.79,3.79,0,0,0,1.62-3.25c2.55,1.08,2.89-1,2.89-1a2.5,2.5,0,0,1-2.89-2.36h5v-1.85h-2.51a6.29,6.29,0,0,1,.86-2.61,2.75,2.75,0,0,1,3.83-.76,3.06,3.06,0,0,1,1,3c.29,0,1.31-.62,1.9-2.44a4.05,4.05,0,0,0-5.83-4.89c-2.45,1.35-3.46,4.42-3.46,7.66h-1.33a14.2,14.2,0,0,1,.21-4.41,26.46,26.46,0,0,1,1.69-4.56,5.77,5.77,0,0,0-.53-6A35.24,35.24,0,0,1,425.63,93.09Z'/%3e%3crect%20class='cls-3'%20x='463.63'%20y='91.55'%20width='48.03'%20height='29.42'/%3e%3cpath%20class='cls-4'%20d='M487.64,93.09a34.12,34.12,0,0,1-2.47,3.23,5.77,5.77,0,0,0-.53,6,25.77,25.77,0,0,1,1.7,4.56,14.57,14.57,0,0,1,.21,4.41h-1.33c0-3.24-1-6.31-3.47-7.66a4,4,0,0,0-5.81,4.89c.57,1.82,1.59,2.44,1.88,2.44a3.08,3.08,0,0,1,1-3,2.75,2.75,0,0,1,3.83.76,6.29,6.29,0,0,1,.86,2.61H481v1.85h5a2.49,2.49,0,0,1-2.88,2.36s.34,2.05,2.88,1a3.79,3.79,0,0,0,1.63,3.25h0a3.8,3.8,0,0,0,1.61-3.25c2.55,1.08,2.89-1,2.89-1a2.5,2.5,0,0,1-2.89-2.36h5v-1.85h-2.51a6.47,6.47,0,0,1,.86-2.61,2.77,2.77,0,0,1,3.84-.76,3.12,3.12,0,0,1,1,3c.28,0,1.3-.62,1.86-2.44a4,4,0,0,0-5.81-4.89c-2.45,1.35-3.46,4.42-3.46,7.66h-1.33a14.39,14.39,0,0,1,.22-4.41,24.17,24.17,0,0,1,1.69-4.56,5.8,5.8,0,0,0-.54-6A32.71,32.71,0,0,1,487.64,93.09Z'/%3e%3crect%20class='cls-5'%20width='559.64'%20height='168.93'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
class y extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.render();
  }
  static get observedAttributes() {
    return ["site-nom", "site-url"];
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  get siteName() {
    return this.getAttribute("site-nom") || "Gouvernement du Québec";
  }
  get siteUrl() {
    return this.getAttribute("site-url") || "https://www.quebec.ca";
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --main-background-color: #223654;
          --link-color: #095797;
          --link-color-dark: white;
          --link-color-hover: #3374cc;
          display: block;
        }

        .visually-hidden {
          position: absolute;
          overflow: hidden;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          border: 0;
        }

        .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }

        @media (min-width: 1200px) {
            .container {
                max-width: 1110px;
            }
        }

        .section-liens-principaux {
          background-color: var(--main-background-color);
          padding: 3rem 0;
          color: var(--link-color-dark);
        }

        a.footer-title {
          font-family: "Roboto", sans-serif;
          display: block;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
          text-decoration: none;
          color: var(--link-color-dark);
        }

        a.footer-title:hover {
          text-decoration: underline;
        }

        .section-liens-copyright {
          padding: 0 0 2rem 0;
          text-align: center;
        }

        .section-liens-copyright p {
          margin: 0;
        }

      </style>

      <footer>
        <section class="section-liens-principaux">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <a class="footer-title" href="${this.siteUrl}">${this.siteName}</a>
                        <h2 class="visually-hidden">Navigation de pied de page de Québec.ca</h2>
                    </div>
                </div>
                <div class="row">
                    <slot name="liens-principaux"></slot>
                </div>
            </div>
        </section>

        <section class="section-liens-secondaires">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex">
                <slot name="liens-secondaires"></slot>
              </div>
            </div>
          </div>
        </section>

        <section class="section-liens-copyright">
          <div class="container">
            <img src="${w}" alt="Logo Québec" width="117" height="35" />
            <p><slot name="copyright"></slot></p>
          </div>
        </section>
      </footer>
    `;
  }
}
customElements.get("qc-footer") || customElements.define("qc-footer", y);
class A extends HTMLElement {
  static get observedAttributes() {
    return ["titre"];
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  constructor() {
    super(), this.render();
  }
  connectedCallback() {
    this.render(), this.setupAnchors();
  }
  get template() {
    return `
            <div class="tdm-container">
                <h2 class="h5">${this.titre}</h2>
                <ul class="tdm-list">
                    ${this.generateAnchors()}
                </ul>
            </div>
        `;
  }
  render() {
    this.innerHTML = this.template;
  }
  get titre() {
    return this.getAttribute("titre") || "Table des matières";
  }
  generateAnchors() {
    const e = [];
    return document.querySelectorAll(".tdm").forEach((s, i) => {
      const c = s.getAttribute("tdm-titre") || s.textContent.trim(), n = `tdm-anchor-${i}`;
      s.id = n, e.push(`<li><a href="#${n}" class="tdm-link">${c}</a></li>`);
    }), e.join("");
  }
  setupAnchors() {
    this.querySelectorAll(".tdm-link").forEach((t) => {
      t.addEventListener("click", (s) => {
        s.preventDefault();
        const i = t.getAttribute("href").substring(1), c = document.getElementById(i);
        c && c.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}
customElements.get("qc-tdm") || customElements.define("qc-tdm", A);
class C extends HTMLElement {
  constructor() {
    super(), this.render();
  }
  connectedCallback() {
    window.addEventListener("scroll", this.toggleVisibility.bind(this)), this.querySelector("qc-bouton").addEventListener("click", this.scrollToTop);
  }
  disconnectedCallback() {
    window.removeEventListener("scroll", this.toggleVisibility.bind(this)), this.querySelector("qc-bouton").removeEventListener("click", this.scrollToTop);
  }
  render() {
    this.innerHTML = `
      <qc-bouton class="qc-up-btn" label="Défiler vers le haut" icon="lnr-arrow-up" icon-position="left"></qc-bouton>
    `;
  }
  toggleVisibility() {
    const e = this.querySelector("qc-bouton");
    window.scrollY > 300 ? e.style.display = "block" : e.style.display = "none";
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
customElements.get("qc-up") || customElements.define("qc-up", C);
class k extends HTMLElement {
  static get observedAttributes() {
    return ["titre", "medias", "theme"];
  }
  constructor() {
    super(), this.render();
  }
  get template() {
    const e = this.theme === "light" ? "theme-light" : "theme-dark", s = JSON.parse(this.medias || "[]").map((i) => `
            <li>
                <a href="${i.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${i.icon}" alt="${i.text} icon">
                    <span class="visually-hidden">${i.text}</span>
                </a>
            </li>
        `).join("");
    return `
            <div class="qc-social ${e}">
                <h3>${this.titre}</h3>
                <ul>
                    ${s}
                </ul>
            </div>
        `;
  }
  get titre() {
    return this.getAttribute("titre") || "Suivez-nous sur les réseaux sociaux";
  }
  get medias() {
    return this.getAttribute("medias");
  }
  get theme() {
    return this.getAttribute("theme") || "dark";
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  render() {
    this.innerHTML = this.template;
  }
}
customElements.get("qc-social") || customElements.define("qc-social", k);
class q extends HTMLElement {
  constructor() {
    super(), this.toggleButton = this.querySelector(".accordion-toggle"), this.content = this.toggleButton.nextElementSibling, this.toggleButton.setAttribute("aria-expanded", "false"), this.content.setAttribute("aria-hidden", "true"), this.content.style.display = "none", this.toggleButton.addEventListener("click", () => this.toggleContent());
  }
  toggleContent() {
    const e = this.toggleButton.getAttribute("aria-expanded") === "true";
    e || this.closeAllAccordions(), this.toggleButton.setAttribute("aria-expanded", !e), this.content.setAttribute("aria-hidden", e), e ? this.content.style.display = "none" : this.content.style.display = "block";
  }
  closeAllAccordions() {
    document.querySelectorAll("qc-accordeon").forEach((t) => {
      const s = t.querySelector(".accordion-toggle"), i = s.nextElementSibling;
      s.setAttribute("aria-expanded", "false"), i.setAttribute("aria-hidden", "true"), i.style.display = "none";
      const c = s.querySelector(".lnr");
      c.classList.remove("lnr-chevron-up"), c.classList.add("lnr-chevron-down");
    });
  }
}
customElements.get("qc-accordeon") || customElements.define("qc-accordeon", q);
class L extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.render();
  }
  connectedCallback() {
    this.addEventListeners(), this.enhanceAccessibility();
  }
  addEventListeners() {
    this.querySelectorAll("button").forEach((t) => {
      t.addEventListener("click", (s) => {
        s.preventDefault(), this.toggleSubmenu(t);
      });
    }), document.addEventListener("click", (t) => {
      const s = this.contains(t.target) || t.target.closest("qc-navigation"), i = t.target.closest("button, a");
      (!s || s && !i) && this.closeAllSubmenus();
    }), document.addEventListener("keydown", (t) => {
      t.key === "Escape" && this.closeAllSubmenus();
    });
  }
  toggleSubmenu(e) {
    const t = e.nextElementSibling;
    if (t && t.tagName.toLowerCase() === "ul") {
      const s = t.classList.toggle("show");
      e.setAttribute("aria-expanded", s), this.updateButtonIcon(e, s);
    }
  }
  updateButtonIcon(e, t) {
    const s = e.querySelector("li button span");
    t ? (s.classList.remove("lnr-chevron-down"), s.classList.add("lnr-chevron-up"), e.setAttribute("aria-label", "Réduire le sous-menu"), e.classList.add("open")) : (s.classList.remove("lnr-chevron-up"), s.classList.add("lnr-chevron-down"), e.setAttribute("aria-label", "Développer le sous-menu"), e.classList.remove("open"));
  }
  closeAllSubmenus() {
    const e = this.querySelectorAll("ul.show"), t = this.querySelectorAll('button[aria-expanded="true"]');
    e.forEach((s) => s.classList.remove("show")), t.forEach((s) => {
      s.setAttribute("aria-expanded", "false"), this.updateButtonIcon(s, !1);
    });
  }
  enhanceAccessibility() {
    const e = this.shadowRoot.querySelector("nav"), t = this.querySelectorAll("ul");
    e.setAttribute("role", "navigation"), e.setAttribute("aria-label", "Navigation principale"), t.forEach((s, i) => {
      s.setAttribute("role", "menubar");
      const c = s.children;
      Array.from(c).forEach((n, E) => {
        n.setAttribute("role", "none");
        const l = n.querySelector("a"), a = n.querySelector("button"), o = n.querySelector("ul");
        l && l.setAttribute("role", "menuitem"), a && (a.classList.add("submenu-toggle"), a.setAttribute("aria-haspopup", "true"), a.setAttribute("aria-expanded", "false"), a.setAttribute("aria-label", "Développer le sous-menu"), a.nextElementSibling.setAttribute("role", "menu")), o && (o.classList.add("submenu"), o.setAttribute("aria-label", `Sous-menu ${l ? l.textContent.trim() : "sans titre"}`));
      });
    });
  }
  render() {
    const e = `
            :host {
                display: block;
            }
            .container {
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
            }
    
            @media (min-width: 1200px) {
                .container {
                    max-width: 1110px;
                }
            }

            .row {
                display: flex;
            }
        `;
    this.shadowRoot.innerHTML = `
            <style>${e}</style>
            <nav>
                <div class="container">
                    <div class="row">
                        <slot></slot>
                    </div>
                </div>
            </nav>
        `;
  }
}
customElements.get("qc-navigation") || customElements.define("qc-navigation", L);
class M extends HTMLElement {
  static get observedAttributes() {
    return ["arialabel"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.render();
  }
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
  }
  render() {
    const e = `
            :host {
                --margin-top: 1rem;
                display: block;
            }

            nav {
                margin-top: var(--margin-top);
            }
            .container {
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                margin-right: auto;
                margin-left: auto;
            }
    
            @media (min-width: 1200px) {
                .container {
                    max-width: 1110px;
                }
            }
            .row {
                display: flex;
            }
        `;
    this.shadowRoot.innerHTML = `
            <style>${e}</style>
            <nav aria-label="${this.ariaLabel}">
                <div class="container">
                    <div class="row">
                        <slot></slot>
                    </div>
                </div>
            </nav>
        `;
  }
}
customElements.get("qc-ariane") || customElements.define("qc-ariane", M);
