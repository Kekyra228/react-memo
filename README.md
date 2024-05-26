# MVP Карточная игра "Мемо"

В этом репозитории реализован MVP карточкой игры "Мемо" по [тех.заданию](./docs/mvp-spec.md)

Проект задеплоен на gh pages:
https://skypro-web-developer.github.io/react-memo/

## Разработка

Проект реализован на основе шаблона [Create React App](https://github.com/facebook/create-react-app).

### Как разрабатывать

- Установите зависимости командой `npm install`
- Запустите dev сервер `npm start`
- Откройте адрес в браузере

### Стек и инструменты

Для стилей в коде используются css modules.

Настроены eslint и prettier. Корректность кода проверяется автоматически перед каждым коммитом с помощью lefthook (аналог husky). Закомитить код, который не проходит проверку eslint не получится.

### Доступные команды

#### `npm start`

Запускает приложение в режиме разработки.

Откройте [http://localhost:3000](http://localhost:3000) чтобы посмотреть его в браузере.

#### `npm run build`

Собирает оптимизированный и минифицированный продакшен билд приложения в папку `build`.
После сборке, приложение готово к деплою.

#### `npm run deploy`

Деплоит приложение в github pages. По сути, запускает сборку и коммитит билд в ветку gh-pages.

(!) github pages должен быть включен в настройках репозитория и настроен на ветку gh-pages

#### `npm run lint`

Запускает eslint проверку кода, эта же команда запускается перед каждым коммитом.
Если не получается закоммитить, попробуйте запустить эту команду и исправить все ошибки и предупреждения.

Затраченное время 8 часов.

На первой странице есть выбор режима игры, добавлен чекбокс с легким режимом, при котором у пользователя есть 3 попытки.
Внизу под самимим карточками на странице уровня с игрой есть счетчик жизней, при каждой ошибке отнимается одна жизнь

Затраченное время на лидерборд 6 часов.

Затраченное время на ачивки 4 часов.

Добавлена одна супер-сила "Алахомора", при наведении на поля ачивки высвечиваются подсказки. В лидерборд так же добавлены ачивки, проявляются только в активном состоянии, если ачивки нет, то на ее месте серое поле. Так же добавлены подсказки при наведении.
