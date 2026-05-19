# gauge-playwright-ts

[Gauge](https://gauge.org/) + [Playwright](https://playwright.dev/) + TypeScript (pnpm) のプロジェクトテンプレートです。

[English](README.md)

## 必要な環境

- Node.js 18+
- pnpm 10+
- Gauge

  ```bash
  # macOS
  brew install gauge
  gauge install ts
  gauge install html-report
  ```

- Playwright ブラウザ（初回のみ）

  ```bash
  pnpm exec playwright install chromium
  ```

## 実行

```bash
pnpm test
```

## プロジェクト構成

```
.
├── specs/                   # Gaugeスペックファイル (.spec)
├── tests/
│   ├── PlaywrightManager.ts # Playwrightのセットアップ・管理
│   ├── Example.ts           # BeforeSuite / AfterSuite / Step 実装例
│   └── Display.ts           # アサーション実装例
├── env/default/
│   ├── default.properties   # Gauge設定
│   └── ts.properties        # gauge-ts設定
├── fixtures/                # テスト用フィクスチャファイル置き場
├── package.json
└── tsconfig.json
```

## ライセンス

[Apache 2.0](LICENSE)
