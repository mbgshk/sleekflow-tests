# SleekFlow QA Automation Test

This repository contains Playwright test cases for Signup and Login functionality on [SleekFlow](https://sleekflow.io).

## 🧩 Project Structure

sleekflow-tests/
├── tests/
│   ├── signup.spec.ts
│   └── login.spec.ts
├── utils/
│   └── authHelpers.ts
├── playwright.config.ts
└── README.md

## 🚀 Getting Started

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org) installed.

```bash
npm install
npx playwright install
```

### 2. Run Tests

To run all tests in headless mode:

```bash
npx playwright test
```

To run with browser UI:

```bash
npx playwright test --headed
```

To run specific file:

```bash
npx playwright test tests/signup.spec.ts
```

---

Test cases are written to simulate realistic Signup & Login flows, including dynamic email handling and reusable login function.
