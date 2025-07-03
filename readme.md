# Data Table Play

This project will serve 2 purposes:

1. try building a basic data table with enough functionality that it's not terribly contrived (so I can experiment with implementation details of various frameworks/approaches)
2. experiment with agent mode Copilot to see how reliably it can set up a relatively complex project with clear (enough) requirements

Data tables are always fairly complex, and I want to test both performance, DX (dev experience), and the basics of different libraries (e.g. React, Solid, Svelte, etc. I know Vue pretty well already) to get more hands-on with how they compare/contrast.

Here is the prompt I used to start building the project.

```
Context: front-end web development
Your role: senior front-end dev

Build the base of a project supporting multiple front-end frameworks/approaches to writing components. 

- The index page is a simple page with links to a React page, a Vue page, and a native JS page (using web components).
- Each is its own mounting point in Vite (multiple entry points; MPA). 
- Running vite should start the index page, and clicking on any link to React, Vue, or native should load only those pages. If I load React's page, it shouldn't add Vue's assets.
- Use TypeScript for all.
- Use `pnpm` as the package manager.
- Use the latest versions of packages.
- Don't bother initializing git. I'll do that later.
- Don't be chatty with the response; be concise if/when you need to inform me of anything.
- It's important to get this right, so don't hallucinate.
- Ask me if there are any ambiguities about these requirements.
```
