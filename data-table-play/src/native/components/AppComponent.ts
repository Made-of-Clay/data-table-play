class AppComponent extends HTMLElement {
  private count = 0

  connectedCallback() {
    this.render()
    this.setupEventListeners()
  }

  // this is good enough for now but won't stay this way; gross
  private render() {
    this.innerHTML = `
      <div style="
        padding: 1rem;
        border: 2px solid #ff6b6b;
        border-radius: 8px;
        text-align: center;
        background: #fff5f5;
      ">
        <h3 style="margin: 0 0 1rem 0; color: #c23616;">Web Component Example</h3>
        <p>Count: <span id="count">${this.count}</span></p>
        <button id="increment" style="
          padding: 0.5rem 1rem;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        ">Increment</button>
      </div>
    `
  }

  private setupEventListeners() {
    const button = this.querySelector('#increment')
    button?.addEventListener('click', () => {
      this.count++
      const countElement = this.querySelector('#count')
      if (countElement) {
        countElement.textContent = this.count.toString()
      }
    })
  }
}

customElements.define('app-component', AppComponent)
