# 🚀 SleekFlow QA Automation Test

This repository contains automated test scripts using [Playwright](https://playwright.dev/) for validating **Signup** and **Login** functionalities on [SleekFlow](https://sleekflow.io).

## 📁 Project Structure

```

sleekflow-tests/
├── tests/
│   ├── signup.spec.ts        # Test cases for signup flow
│   └── login.spec.ts         # Test cases for login flow
├── utils/
│   └── authHelpers.ts        # Shared login functions & utilities
├── playwright.config.ts      # Playwright configuration
└── README.md

````

## ⚙️ Setup Instructions

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org) installed.

```bash
npm install
npx playwright install
````

### 2. Run Tests

Run all tests in headless mode:

```bash
npx playwright test
```

Run tests with browser UI (headed mode):

```bash
npx playwright test --headed
```

Run specific test file (e.g., signup):

```bash
npx playwright test tests/signup.spec.ts
```

---

## ✅ Test Coverage

* **Signup Flow**

  * Visit signup page from dashboard
  * Fill in valid signup form
  * Submit and validate successful registration

* **Login Flow**

  * Reusable login helper via `authHelpers.ts`
  * Valid credential login
  * Assert redirected content after login

These test cases simulate realistic user flows and leverage Playwright’s powerful features for handling UI automation and assertions.

---

Feel free to clone and try it out! 🚀

```