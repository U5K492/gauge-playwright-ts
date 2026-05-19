# gauge-playwright-ts

A project template for [Gauge](https://gauge.org/) + [Playwright](https://playwright.dev/) + TypeScript (pnpm).

[日本語](README.ja.md)

## Prerequisites

- Node.js 18+
- pnpm 10+
- Gauge

  ```bash
  # macOS
  brew install gauge
  gauge install ts
  gauge install html-report
  ```

- Playwright browsers (first time only)

  ```bash
  pnpm exec playwright install chromium
  ```

## Run

```bash
pnpm test
```

## Project structure

```
.
├── specs/                   # Gauge spec files (.spec)
├── tests/
│   ├── PlaywrightManager.ts # Playwright setup and lifecycle management
│   ├── Example.ts           # BeforeSuite / AfterSuite / Step examples
│   └── Display.ts           # Assertion examples
├── env/default/
│   ├── default.properties   # Gauge configuration
│   └── ts.properties        # gauge-ts configuration
├── fixtures/                # Test fixture files
├── package.json
└── tsconfig.json
```

## License

[Apache 2.0](LICENSE)
