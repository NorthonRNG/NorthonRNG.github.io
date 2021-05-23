class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; 2021 Tolentino Garcia César Ivan.`;
  }
}
customElements.define("mi-footer", MiFooter);
