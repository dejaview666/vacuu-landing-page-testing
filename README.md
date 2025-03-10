# Vacuu Landing Page Testing

## Описание
Этот проект содержит автоматизированные тесты для проверки функциональности лендинга Vacuu. Тесты написаны с использованием [Playwright](https://playwright.dev/) на JavaScript.

## Требования
Перед началом работы убедитесь, что у вас установлены:
- [Node.js](https://nodejs.org/) (рекомендуемая версия LTS)
- [npm](https://www.npmjs.com/) (идет в комплекте с Node.js)
- [Playwright](https://playwright.dev/)

## Установка
1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/dejaview666/vacuu-landing-page-testing.git
   ```
2. Перейдите в папку проекта:
   ```sh
   cd vacuu-landing-page-testing
   ```
3. Установите зависимости:
   ```sh
   npm install
   ```
4. Установите браузеры Playwright:
   ```sh
   npx playwright install
   ```

## Запуск тестов
### Запуск всех тестов
```sh
npx playwright test
```

### Запуск конкретного теста
```sh
npx playwright test tests/landingPage.spec.js
```

### Запуск тестов в графическом режиме
```sh
npx playwright test --ui
```

## Просмотр отчетов
После выполнения тестов можно открыть отчет о тестировании:
```sh
npx playwright show-report
```

## Структура проекта
```
vacuu-testing/
├── .github/
│   └── workflows/
│       └── playwright-tests.yml         # GitHub Actions для CI
├── tests/
│   └── landingPage.spec.js             # Автоматизированные тесты для страницы
├── reports/
│   └── test-report.html                # Отчет о тестировании
├── checklists/
│   └── landing-page-checklist.md       # Чек-лист для тестирования страницы
├── package.json                        # Зависимости и команды
├── playwright.config.js                # Конфигурация Playwright
├── README.md                           # Описание проекта
└── BUGS.md                             # Найденные баги
```

