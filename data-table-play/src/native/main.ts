import './components/AppComponent.ts'

const app = document.getElementById('app')!

// this is good enough for now but won't stay this way; gross
app.innerHTML = `
  <div style="
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-top: 2rem;
  ">
    <h1 style="
      color: #333;
      text-align: center;
      margin-bottom: 2rem;
    ">Native JS Page</h1>
    <div style="margin-bottom: 2rem;">
      <p>This is the Native JavaScript implementation using TypeScript and Web Components.</p>
      <p>This page is served independently and doesn't load React or Vue assets.</p>
    </div>
    <app-component></app-component>
    <div style="text-align: center; margin-top: 2rem;">
      <a href="/" style="
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background: #ff6b6b;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 500;
      ">← Back to Home</a>
    </div>
  </div>
`
