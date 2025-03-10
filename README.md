# Vacuu Landing Page Testing

Этот репозиторий содержит тестирование лендинг-страницы [Vacuu](https://polis812.github.io/vacuu/) с использованием Playwright.

## Структура проекта
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


## Установка и запуск тестов

1. Установите зависимости:

   ```sh
   npm install
