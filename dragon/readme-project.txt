What has been done in the project:
1.Adaptive layout
2. Authorization with Google
3. Loader when waiting for a request
4. Burger menu 
5. Information taken from the API, may dynamically change depending on the content of the API
6. Displaying the base page depending on the selected menu item
7. Pages with Dragon information
8. When you click on the star near the name - Add to favorites, when you click again - remove from favorites
9. Image slider/carousel
10. Clicking on a name or photo in the burger menu will open the profile page and favorites
11. To open the development environment, open the dragon directory in the terminal and type "npm start"
12. To deploy, you need to type in the terminal
    npm run build
    npm install netlify-cli -g
    netlify deploy
    The deployment path must be the project's build directory, which contains the resources to be deployed.
    Type build and press Enter.
    netlify deploy --prod
    For change or update app you need type
    npm run build
    netlify deploy --prod 

Сделано в проекте:
1. Адаптивность
2. Авторизация через гугл 
3. Loader
4. Меню бургер 
5. Информация взята из API, может динамично изменяться в зависимости от содержимого API
6. Отображение базовой страницы в зависимости от выраного пункта меню
7. Страницы с дрегонами
8. При нажатии на звезду возле названия - Добавление в изобраные, при повторном нажатии - удаление из изобраного 
9. Слайдер/карусель картинок
10. При нажатии на имя или фото в бургер меню - откроесть страница профиля и изобраные
11. Для открытия девелоп среды -Открыть в терминале директорию dragon и прописать npm start
12. Для деплоя, нужно набрать в терминале
npm run build
npm install netlify-cli -g
netlify deploy
В качестве пути развертывания необходимо указать директорию сборки проекта, в которой содержатся ресурсы для развертки. 
Печатаем build и нажимаем Enter.
netlify deploy --prod
Для обновления приложения нужно набрать 
npm run build
netlify deploy --prod



