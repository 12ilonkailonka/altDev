export const languages = {
    ua: { name: 'Українська', flag: 'UK'},
    ru: { name: 'Русский', flag: 'RU' },
    en: { name: 'English', flag: 'EN' },
    ry: { name: 'Русныцькый', flag: 'RY' },
};

export const defaultLang = 'ua';

export const ui = {
  ru: {
    'nav.project': 'Проект',
    'nav.history': 'История',
    'nav.devs': 'Команда',


    'hero.title1': 'Пишем не только ',
    'hero.title2': 'истории.',
    'hero.title3': ' Пишем место для них.',

    'hero.text': `
        Altuszka — платформа для авторов, читателей и людей, которым всё ещё хочется 
        разговаривать друг с другом, а не только смотреть на цифры просмотров.
    `,

    'hero.learn': 'Узнать о проекте',
    'hero.do': 'Как мы это делаем',

    'hero.community': 'Сообщество прежде алгоритма',
    'hero.tech': 'Технологии без магии',
    'hero.people': 'Сделано людьми для людей',
    
    'hero.article': '«А если хорошая соцсеть — это просто старый форум, который наконец научился быть удобным?»',
    'hero.section': 'Обсуждение главы',
    'hero.answers': '8 новых ответов',
    'hero.new': 'Новый',
    'hero.today': 'Сегодня читают',
    'hero.genre': 'Романтика · 14 минут',
    'hero.name': "Новые приключения Оксаны",
    'hero.story-text': 'Сегодня вечером в час небывало жаркого заката на одной из главных улиц появились две странные девушки',
    'hero.react': 'реакций',


    'project.whatIsIt': "Что такое ",
    'project.platform': 'Площадка, где текст — только начало разговора.',
    'project.textBig1': 'Строили почти социальную сеть. Только вместо ленты — ',
    'project.textBig2': 'люди, мнения и идеи',
    'project.textBig3': 'а вместо сухого алгоритма — общение, споры и жизнь.',
    'project.textSmall1': 'В основе социальных сетей лежит лента и алгоритмы, пытающиеся показывать только то, что человек хотел бы увидеть. Но разве знакомство должно начинаться с лести? ',
    'project.textSmall2': 'Читатель, писатель, редактор, администратор — не важно. Все мы объединены идеей о том, что человек и его мысль превыше всего. И только живое столкновение этих мыслей способно рождать полноценный социум.',
    'project.publications': 'Публикации',
    'project.text1': 'Истории и мысли людей, которые просто не могут молчать. Не ради галочки и цифры оценок, ради того, чтобы быть услышанными.',
    'project.community': 'Сообщества',
    'project.text2': 'Места для жанров, идей, фэндомов, маленьких компаний и просто людей, которым есть о чём поговорить.',
    'project.talk': 'Обсуждения',
    'project.text3': 'Комментарии не как формальность, а как самостоятельная часть опыта: ветки, ответы и длинные разговоры.',
    'project.connect': 'Связи',
    'project.text4': 'Мы хотим, чтобы интерес к одному тексту мог неожиданно привести к человеку, сообществу или совершенно другой теме.',


    'front.title': 'Графика — это тоже язык.',
    'front.text1': 'Сначала мы задали себе вопрос — а как люди привыкли взаимодействовать с интерфейсом? Потом задали вопрос — а что прямо сейчас людям не нравится в этом взаимодействии? И наконец — а как мы можем решить эти проблемы в своём?',
    'front.design': 'Дизайн-код',
    'front.text2': 'Не готовое решение. Не чужая адоптация. Не модная сиюминутно картинка. Набор строгих правил о том, что и как должно выглядеть, делающий каждый блок и каждую страницу узнаваемыми и единообразными. ',
    'front.text3': 'Размеры, сетки, цвета, акценты, тени, анимации, скругления углов. Именно тысяча',
    'front.text4': ' мелочей, ',
    'front.text5': 'незаметных по отдельности и превращают очередной сайт в магию собственной ',
    'front.text6': 'идентичности',
    'front.text7': ' и общего ',
    'front.text8': 'стиля.',
    'front.text9': 'Шрифт — это лицо любого бренда. Логотип обычно ютится в углу и сверху, никто не приходит его рассматривать. Брендовые ',
    'front.text10': 'цвета',
    'front.text11': ' может и запоминаются, но это лишь акценты.',
    'front.text12': 'Шрифт виден ',
    'front.text13': 'всегда.',
    'front.text14': ' Он обязан не только быть узнаваемым, но и сохранять при этом главную черту шрифта — возможность быстро и просто его шитать. Это сложный баланс между узнаваемостью, уникальностью и привычностью.',
    'front.text15': 'Большую часть визуального слоя мы оставляем обычному SCSS. Каскад всё ещё прекрасно умеет делать свою работу, если ему не мешать.',
    'front.text16': 'Крепкая основа для большого проекта. Достаточно стабильности. Минимум лишнего. Мы не гонимся за модными трендами и не хотим ничего никому доказыать. Если это работает — это используется.',


    'back.text1': 'Быстрая и ',
    'back.text2': 'надёжная',
    'back.text3': ' основа для эффективной работы с данными. Получаем, проверяем, сохраняем, по запросу отдаём.',
    'back.text4': 'Удобный инструмент для быстрого получения стабильного результата. Тратим время на безупречную логику, а не борьбу и вечную настройку инструмента. ',
    'back.text5': 'Стандарт индустрии — мощная универсальная база данных, способная хранить безопасно и структурирвоанно данные профилей, рассказов, комментариев и прочей нужный интерактив. ',
    'back.text6': 'Красота бывает разной. Красота бэкэнда в безупречной ',
    'back.text7': 'логике',
    'back.text8': ', идеальной ',
    'back.text9': 'расширяемости',
    'back.text10': ' и ',
    'back.text11': ' поддерживаемости.',
    'back.text12': 'Выстраивали систему так, чтобы она не подвела в самый ответственный момент.',
    'back.text13': 'Хорошая архитектура — это когда через год разработчик открывает свой старый код и не хочет интуитивно сказать: "Что за идиот это придумывал?"',
    'back.title': 'Там, где ничего не видно, всё тоже должно быть красиво.',


    'history.title1': 'Немного истории',
    'history.title2': 'Интернет уже умел быть сообществом.',
    'history.title3': 'Идея',
    'history.title4': 'Первые шаги',
    'history.title5': 'Разработка',
    'history.title6': 'Релиз',

    'history.text1': 'Старые форумы были неудобными, шумными, местами совершенно дикими — и при этом удивительно человеческими.',
    'history.text2': 'Там можно было прийти ради ответа на один вопрос, остаться ради разговора и через несколько месяцев внезапно знать половину постоянных участников по никам.',
    'history.text3': 'Современные платформы стали быстрее, красивее и гораздо умнее. Но вместе с этим пространство между людьми постепенно заняли рекомендации, метрики удержания и алгоритмические ленты.',
    'history.text4': 'Алгоритм отлично понимает, что вам, вероятно, ',
    'history.text5': 'понравится ',
    'history.text6': '. И именно поэтому слишком редко показывает то, что может ',
    'history.text7': 'удивить.',
    'history.text8': 'Тоска рождает идею. ',
    'history.text9': 'Идея рождает мечту. ',
    'history.text10': 'Мечта рождает стремление. ',
    'history.text11': 'Стремление меняет наш мир.',
    'history.text12': 'Литература штука локальная. Её можно переводить, но никакой перевод не обеспечит наличие культурного контекста. Мы считаем развитие литературы своей культуры ценностью, поэтому и решили создать платформу, которая поспособствует этому.',
    'history.text13': 'Мы начали с маленького сайта на WordPress, чтобы понять, имеет ли начинание смысл. ',
    'history.text14': 'Быстро стало понятно, что WordPress для серьёзной платформы совершенно не подходит — настроить и доработать его под свои нужды сложнее, чем сделать всё с нуля.',
    'history.text15': 'Команда взялась за код. Было сделано несколько пробных версий, пока в конечном счёте мы не осознали реальный масштаб проекта и не пришли к по-настоящему серьёзному подходу.',
    'history.text16': 'Полноценное фронтэнд приложение, полноценный бэкэнд сервер, богатый опыт взаимодействия, правильный дизайн, который не утомляет и позволяет быстро и удобно взаимодействовать с сайтом',
    'history.text17': 'HTML — структурен. ',
    'history.text18': 'CSS — изящен. ',
    'history.text19': 'TypeScript — надёжен. ',
    'history.text20': 'Python — красив.',
    'history.text21': 'И вот все звёзды сошлись, шестерёнки завертелись и мы взялись за активную работу по созданию и настройке платформы. Так родился этот сайт, где мы будем публиковать новости хода разработки для своих, кому интересна судьба проекта.',
    'history.text22': 'Рассчитываем на публикацию готового приложения в начале 2027 года.',
    'history.text23': 'Первая версия будет призвана обкатать проект, найти первую аудиторию, исправить все потенциальные ошибки и перейти к устойчивому развитию.',
    'history.text24': 'Рабочий вариант проекта — лучше тысячи статей о том, каким он будет.',


    'footer.copyright': 'Все права защищены.',
    'footer.love': 'Сделано с любовью,',

    'footer.developer.maryna': 'Мариша',
    'footer.developer.oxana': 'Оксаночка',
    'footer.developer.ala': 'Алечка',
    'footer.developer.dasza': 'Да́ри',

    'footer.disclamer1': `
        Данный сайт является промо-материалами для проекта, который пока что находится в стадии активной 
        разработки, и данные о проекте могут меняться. Ничего из указанного на данном сайте не является 
        финальным и призвано лишь давать общее представление о ходе работ.
    `,
    'footer.disclamer2': `
        Сайт содержит материалы эротической направленности и не предназначен для просмотра
        лицам не достигшем полного совершеннолетнего возраста, установленного местным 
        законодательством. Как правило 18+. Иногда возможны различия.
    `,
    'footer.disclamer3': `
        Мы можем собирать некоторые данные о пользователях, такие как страна (исходя из IP-адреса),
        время просмотра и выбранный язык. Это необходимо для уточнения целевой аудитории проекта.
    `,
  },
  en: {
    'nav.project': 'Project',
    'nav.history': 'History',
    'nav.devs': 'Team',


    'hero.title1': "We don't just write ",
    'hero.title2': "stories.",
    'hero.title3': " We create a space for them.",

    'hero.text': `
        Altuszka is a platform for authors, readers, and people who still want to
        talk to one another, rather than just look at view counts.
    `,

    'hero.learn': 'Learn more',
    'hero.do': 'How we do it',

    'hero.community': 'Community before algorithms',
    'hero.tech': 'Technology without magic',
    'hero.people': 'Made by people, for people',

    'hero.article': '«What if a good social network is just an old forum that has finally learned to be user-friendly?»',
    'hero.section': 'Discussion of the chapter',
    'hero.answers': '8 new replies',
    'hero.new': 'New',
    'hero.today': 'Today, people are reading',
    'hero.genre': 'Romance · 14 minutes',
    'hero.name': "Oxana's New Adventures",
    'hero.story-text': 'Today, during an unusually hot sunset, two strange girls appeared on one of the main streets',
    'hero.react': 'reactions',

    'project.whatIsIt': "What is ",
    'project.platform': 'A place where text is just the beginning of a conversation.',
    'project.textBig1': 'We set out to build something close to a social network. But instead of a feed — ',
    'project.textBig2': 'people, opinions, and ideas',
    'project.textBig3': 'and instead of a dry algorithm — real connection, debates, and life.',
    'project.textSmall1': 'Modern social networks are built around algorithmic feeds that try to show only what users want to see. But should a genuine connection really start with flattery? ',
    'project.textSmall2': "Reader, writer, editor, or administrator — it doesn't matter. We are all united by the belief that humans and their thoughts come first. And only the lively collision of those ideas can build a genuine community.",
    'project.publications': 'Publications',
    'project.text1': 'Stories and perspectives from people who simply cannot stay silent. Not for checkmarks or vanity metrics, but to be heard.',
    'project.community': 'Communities',
    'project.text2': 'Spaces for genres, ideas, fandoms, close circles, and anyone who simply has something to talk about.',
    'project.talk': 'Discussions',
    'project.text3': 'Comments not as a formality, but as a core part of the experience: threaded replies, conversations, and deep dives.',
    'project.connect': 'Connections',
    'project.text4': 'We want an interest in a single text to spark an unexpected connection with a person, a community, or an entirely new topic.',


    'front.title': 'Visuals are a language too.',
    'front.text1': 'First, we asked ourselves: how do people typically interact with an interface? Then: what frustrates them about that experience right now? And finally: how can we solve those friction points in our own product?',
    'front.design': 'Design System',
    'front.text2': 'Not a pre-made template. Not an uninspired port. Not a passing visual trend. A solid set of guidelines defining what goes where and why, making every block and page cohesive and instantly recognizable. ',
    'front.text3': 'Layout grids, palettes, accents, shadows, micro-interactions, corner radii. It is precisely a thousand',
    'front.text4': ' little details, ',
    'front.text5': 'subtle on their own, that turn just another website into something with a distinct ',
    'front.text6': 'identity',
    'front.text7': ' and cohesive ',
    'front.text8': 'style.',
    'front.text9': 'Typography is the real face of any brand. Logos usually hide in the top corner where no one really looks. Brand ',
    'front.text10': 'colors',
    'front.text11': ' might leave an impression, but they are just accents.',
    'front.text12': 'Type is visible ',
    'front.text13': 'everywhere, all the time.',
    'front.text14': ' It has to be memorable while preserving its primary purpose: effortless readability. It is a delicate balance between identity, distinctiveness, and familiarity.',
    'front.text15': 'We leave most of the styling layer to vanilla SCSS. The cascade still does its job brilliantly when you stay out of its way.',
    'front.text16': 'A solid foundation for an ambitious project. High stability. Zero bloat. We do not chase hype trains or try to prove anything to anyone. If it works, we use it.',


    'back.text1': 'A fast and ',
    'back.text2': 'reliable',
    'back.text3': ' foundation for efficient data management. Receive, validate, store, and serve on demand.',
    'back.text4': 'A dependable tool for getting consistent results quickly. We spend our time crafting rock-solid business logic rather than constantly fighting and reconfiguring our toolchain. ',
    'back.text5': 'An industry-standard, high-performance database designed to securely store and structure profiles, stories, comments, and interactive features. ',
    'back.text6': 'Beauty takes many forms. In backend architecture, it lives in clean ',
    'back.text7': 'logic',
    'back.text8': ', effortless ',
    'back.text9': 'scalability',
    'back.text10': ', and ',
    'back.text11': ' smooth maintainability.',
    'back.text12': 'Engineered so it never lets anyone down when it matters most.',
    'back.text13': 'Great architecture is when an engineer looks back at their code a year later and does not instinctively think, "Who on earth designed this?"',
    'back.title': 'Even where nothing is seen, everything should be elegant.',


    'history.title1': 'A Bit of History',
    'history.title2': 'The Internet used to be a real community.',
    'history.title3': 'The Idea',
    'history.title4': 'First Steps',
    'history.title5': 'Development',
    'history.title6': 'Release',

    'history.text1': 'Old-school message boards were quirky, chaotic, and sometimes wild — but they felt genuinely human.',
    'history.text2': 'You could drop by just to ask a quick question, stay for the banter, and a few months later find yourself on a first-name basis with half the regulars.',
    'history.text3': 'Modern platforms have become faster, slicker, and way smarter. But along the way, the space between people was quietly taken over by recommendation engines, retention metrics, and algorithmic feeds.',
    'history.text4': 'Algorithms are great at figuring out what you will probably ',
    'history.text5': 'like',
    'history.text6': '. And that is exactly why they so rarely show you anything that will truly ',
    'history.text7': 'surprise you.',
    'history.text8': 'Nostalgia sparks an idea. ',
    'history.text9': 'An idea becomes a dream. ',
    'history.text10': 'A dream becomes ambition. ',
    'history.text11': 'Ambition changes the world around us.',
    'history.text12': 'Literature is deeply rooted in local culture. You can translate the words, but no translation can fully carry over the shared context. We believe nurturing our own cultural storytelling is essential, which is why we set out to build a platform that fosters it.',
    'history.text13': 'We started with a lightweight WordPress prototype just to see if the concept had legs. ',
    'history.text14': 'It became clear pretty fast that WordPress is not built for a platform of this scale — customizing and bending it to our needs was harder than engineering everything from scratch.',
    'history.text15': 'So the team dove into custom development. We went through several prototypes until we truly grasped the scope and adopted a serious, dedicated engineering approach.',
    'history.text16': 'A modern front-end app, a robust backend service, a seamless user experience, and a clean UI that stays out of your way and makes navigation effortless.',
    'history.text17': 'HTML brings structure. ',
    'history.text18': 'CSS brings elegance. ',
    'history.text19': 'TypeScript brings reliability. ',
    'history.text20': 'Python brings beauty.',
    'history.text21': 'When all the pieces finally clicked into place, we went full speed ahead on building and fine-tuning the platform. That is how this site came to be — a place where we share dev updates with those who care about the project.',
    'history.text22': 'We are targeting an early 2027 launch for the initial release.',
    'history.text23': 'The first version will focus on battle-testing core mechanics, welcoming our first wave of users, squashing early bugs, and setting the stage for steady growth.',
    'history.text24': 'A working build speaks louder than a thousand pitch decks.',
    

    'footer.copyright': 'All rights reserved.',
    'footer.love': 'Made with love,',

    'footer.developer.maryna': 'Maryna',
    'footer.developer.oxana': 'Oxana',
    'footer.developer.ala': 'Ilona',
    'footer.developer.dasza': 'Dasza',

    'footer.disclamer1': `
        This website contains promotional materials for a project that is currently in the active
        development stage, and information about the project is subject to change. Nothing on this website is
        final and is intended only to provide a general overview of the progress of the work.
    `,
    'footer.disclamer2': `
        This website contains sexually explicit material and is not intended for viewing
        by individuals who have not reached the age of majority as defined by local
        law. Generally, this is 18+. Differences may occasionally apply.
    `,
    'footer.disclamer3': `
        We may collect certain data about users, such as their country (based on their IP address),
        time spent on the site, and language preference. This is necessary to better define the 
        project's target audience.
    `,
  },
  ua: {
    'nav.project': 'Проєкт',
    'nav.history': 'Історія',
    'nav.devs': 'Команда',


    'hero.title1': 'Пишемо не лише ',
    'hero.title2': 'історії.',
    'hero.title3': ' Пишемо простір для них.',

    'hero.text': `
        Altuszka — платформа для авторів, читачів та людей, яким усе ще хочеться 
        говорити одне з одним, а не просто витріщатися на лічильники переглядів.
    `,

    'hero.learn': 'Дізнатися про проєкт',
    'hero.do': 'Як ми це робимо',

    'hero.community': 'Спільнота важливіша за алгоритм',
    'hero.tech': 'Технології без магії',
    'hero.people': 'Зроблено людьми для людей',
    
    'hero.article': '«А що, як хороша соцмережа — це просто старий форум, який нарешті навчився бути зручним?»',
    'hero.section': 'Обговорення розділу',
    'hero.answers': '8 нових відповідей',
    'hero.new': 'Новий',
    'hero.today': 'Сьогодні читають',
    'hero.genre': 'Романтика · 14 хвилин',
    'hero.name': "Нові пригоди Оксани",
    'hero.story-text': 'Сьогодні ввечері, в годину небачено спекотного заходу сонця, на одній із головних вулиць з’явилися дві дивні дівчини',
    'hero.react': 'реакцій',


    'project.whatIsIt': "Що таке ",
    'project.platform': 'Платформа, де текст — лише початок розмови.',
    'project.textBig1': 'Ми будували майже соціальну мережу. Тільки замість стрічки — ',
    'project.textBig2': 'люди, думки та ідеї',
    'project.textBig3': 'а замість сухого алгоритму — спілкування, суперечки та життя.',
    'project.textSmall1': 'В основі соцмереж лежить стрічка й алгоритми, які намагаються показувати тільки те, що людина й так хотіла б побачити. Але хіба знайомство має починатися з лестощів? ',
    'project.textSmall2': 'Читач, автор, редактор, адміністратор — не має значення. Усі ми об’єднані ідеєю про те, що людина та її думка понад усе. І лише живе зіткнення цих думок здатне народжувати справжній соціум.',
    'project.publications': 'Публікації',
    'project.text1': 'Історії та роздуми людей, які просто не можуть мовчати. Не заради галочки чи красивих цифр, а заради того, щоб бути почутими.',
    'project.community': 'Спільноти',
    'project.text2': 'Місця для жанрів, ідей, фандомів, затишних компаній і просто тих, кому є про що поговорити.',
    'project.talk': 'Обговорення',
    'project.text3': 'Коментарі не для галочки, а як самостійна частина досвіду: гілки, відповіді та ґрунтовні розмови.',
    'project.connect': 'Зв’язки',
    'project.text4': 'Ми хочемо, щоб інтерес до одного тексту міг несподівано привести до людини, спільноти або зовсім іншої теми.',


    'front.title': 'Графіка — це теж мова.',
    'front.text1': 'Спершу ми запитали себе: а як люди взагалі звикли взаємодіяти з інтерфейсом? Потім: а що просто зараз їх дратує в цій взаємодії? І врешті: як ми можемо розв’язати ці проблеми в себе?',
    'front.design': 'Дизайн-система',
    'front.text2': 'Не готовий шаблон. Не чужа адаптація. Не хвилинний тренд. Набір чітких правил про те, що і як має виглядати, аби кожен блок і кожна сторінка були впізнаваними та цілісними. ',
    'front.text3': 'Розміри, сітки, кольори, акценти, тіні, анімації, радіуси заокруглень. Саме тисяча',
    'front.text4': ' дрібниць, ',
    'front.text5': 'непомітних окремо, і перетворюють черговий сайт на магію власної ',
    'front.text6': 'ідентичності',
    'front.text7': ' та загального ',
    'front.text8': 'стилю.',
    'front.text9': 'Шрифт — це обличчя будь-якого бренду. Логотип зазвичай тулиться десь угорі в кутку, ніхто не приходить його роздивлятися. Фірмові ',
    'front.text10': 'кольори',
    'front.text11': ', може, й запам’ятовуються, але це лише акценти.',
    'front.text12': 'Шрифт видно ',
    'front.text13': 'завжди.',
    'front.text14': ' Він зобов’язаний не тільки запам’ятовуватися, а й зберігати головну рису: легкість і простоту читання. Це тонкий баланс між упізнаваністю, унікальністю та звичністю.',
    'front.text15': 'Більшу частину візуалу ми довіряємо звичайному SCSS. Каскад усе ще чудово знає свою справу, якщо йому не заважати.',
    'front.text16': 'Міцний фундамент для великого проєкту. Максимум стабільності, мінімум зайвого. Ми не женемося за хайповими трендами й нікому нічого не доводимо. Працює — використовуємо.',


    'back.text1': 'Швидка та ',
    'back.text2': 'надійна',
    'back.text3': ' основа для ефективної роботи з даними. Отримуємо, валідуємо, зберігаємо, за запитом віддаємо.',
    'back.text4': 'Зручний інструмент для швидкого й стабільного результату. Ми витрачаємо час на бездоганну логіку, а не на вічну боротьбу й налаштування середовища. ',
    'back.text5': 'Індустріальний стандарт — потужна універсальна база даних, здатна безпечно й структуровано зберігати профілі, твори, коментарі та інший інтерактив. ',
    'back.text6': 'Краса буває різною. Краса бекенду — у бездоганній ',
    'back.text7': 'логіці',
    'back.text8': ', ідеальній ',
    'back.text9': 'масштабованості',
    'back.text10': ' та ',
    'back.text11': ' легкості в підтримці.',
    'back.text12': 'Ми будували систему так, щоб вона не підвела у найвідповідальніший момент.',
    'back.text13': 'Хороша архітектура — це коли за рік розробник відкриває свій старий код і не хоче вигукнути: «Хто взагалі це навигадував?»',
    'back.title': 'Там, де нічого не видно, все теж має бути красиво.',


    'history.title1': 'Трохи історії',
    'history.title2': 'Інтернет уже вмів бути справжньою спільнотою.',
    'history.title3': 'Ідея',
    'history.title4': 'Перші кроки',
    'history.title5': 'Розробка',
    'history.title6': 'Реліз',

    'history.text1': 'Старі форуми були незручними, галасливими, місцями зовсім дикими — і водночас неймовірно людяними.',
    'history.text2': 'Туди можна було зайти заради відповіді на одне питання, залишитися заради розмови й за кілька місяців знати половину постійних користувачів на ім’я чи нікнейм.',
    'history.text3': 'Сучасні платформи стали швидшими, привабливішими й значно розумнішими. Але разом із цим простір між людьми поступово зайняли рекомендації, метрики утримання та алгоритмічні стрічки.',
    'history.text4': 'Алгоритм чудово розуміє, що вам, імовірно, ',
    'history.text5': 'сподобається',
    'history.text6': '. І саме тому він так рідко показує те, що здатне по-справжньому ',
    'history.text7': 'здивувати.',
    'history.text8': 'Ностальгія народжує ідею. ',
    'history.text9': 'Ідея народжує мрію. ',
    'history.text10': 'Мрія народжує прагнення. ',
    'history.text11': 'Прагнення змінює світ довкола.',
    'history.text12': 'Література — річ локальна. Її можна перекласти, але жоден переклад не передасть культурного контексту сповна. Ми вважаємо розвиток власної літературної культури цінністю, тому й вирішили створити платформу, яка цьому сприятиме.',
    'history.text13': 'Ми почали з маленького прототипу на WordPress, аби зрозуміти, чи має ця затія сенс. ',
    'history.text14': 'Швидко стало ясно, що WordPress для масштабної платформи не годиться: налаштовувати й підганяти його під себе виявилося складніше, ніж написати все з нуля.',
    'history.text15': 'Команда взялася за код. Ми пройшли через кілька чернеток, доки остаточно не усвідомили реальний масштаб проєкту й не перейшли до серйозної розробки.',
    'history.text16': 'Повноцінний фронтенд-застосунок, надійний бекенд, продуманий досвід користувача й чистий дизайн, який не втомлює і робить навігацію приємною та швидкою.',
    'history.text17': 'HTML — це структура. ',
    'history.text18': 'CSS — це витонченість. ',
    'history.text19': 'TypeScript — це надійність. ',
    'history.text20': 'Python — це краса.',
    'history.text21': 'І ось зірки зійшлися, шестерні закрутилися, і ми взялися за активну розробку та налаштування платформи. Так народився цей сайт — місце, де ми ділимося новинами процесу з тими, кому небайдужа доля проєкту.',
    'history.text22': 'Орієнтуємося на реліз готового застосунку на початку 2027 року.',
    'history.text23': 'Перша версія допоможе випробувати проєкт у дії, знайти першу аудиторію, відловити всі можливі баги й вийти на стабільний розвиток.',
    'history.text24': 'Робочий білд говорить гучніше за тисячі презентацій про те, яким він колись буде.',


    'footer.copyright': 'Усі права захищено.',
    'footer.love': 'Зроблено з любов’ю,',

    'footer.developer.maryna': 'Мариша',
    'footer.developer.oxana': 'Оксаночка',
    'footer.developer.ala': 'Алечка',
    'footer.developer.dasza': 'Да́рі',

    'footer.disclamer1': `
        Цей сайт є промо-матеріалами для проєкту, що наразі перебуває на стадії активної 
        розробки, тож інформація про нього може змінюватися. Жодна з наведених тут деталей 
        не є фінальною і слугує лише для загального уявлення про перебіг робіт.
    `,
    'footer.disclamer2': `
        Сайт містить матеріали еротичного характеру та не призначений для перегляду 
        особами, які не досягли повноліття згідно з місцевим законодавством. 
        Зазвичай це 18+, хоча вікові обмеження можуть відрізнятися.
    `,
    'footer.disclamer3': `
        Ми можемо збирати окремі дані про користувачів: країну (за IP-адресою), час 
        перегляду та обрану мову. Це необхідно для кращого розуміння цільової аудиторії проєкту.
    `,
  },
  ry: {
    'nav.project': 'Проєкт',
    'nav.history': 'Історія',
    'nav.devs': 'Ґарда',


    'hero.title1': 'Пишемо не лише ',
    'hero.title2': 'повідкы.',
    'hero.title3': ' Пишемо місто для них.',

    'hero.text': `
        Altuszka — платформа для авторів, читателїв а особ, котрым щи ся хочеть 
        бесїдовати заєдно, ай не лише позирати на ціфры пересмотрів.
    `,

    'hero.learn': 'Ся дознати булше',
    'hero.do': 'Як мы се робимо',

    'hero.community': 'Сполочность занї алгоритмы',
    'hero.tech': 'Технолоґії без маґії',
    'hero.people': 'Вытворено людми для людий',

    'hero.article': '«Ай аж добра соцсїть — се просто старый форум, котрый наконец ся научив быти удобным?»',
    'hero.section': 'обговореня зачала',
    'hero.answers': '8 новых одповідей',
    'hero.new': 'Нова',
    'hero.today': 'Нынї читають',
    'hero.genre': 'Романтика · 14 минут',
    'hero.name': 'Новы пригоды Оксаны',
    'hero.story-text': 'Нынї вечуром, в час небывало спечного запада, на єднов з главных улиц ся обявили дві дивны дївкы',
    'hero.react': 'реакцій',


    'project.whatIsIt': "Што таке ",
    'project.platform': 'Платформа, де текст — лише зачаток бесїды.',
    'project.textBig1': 'Будовали майже социальну сїть. Лиш наміст пантлї — ',
    'project.textBig2': 'люде, думанї а думкы',
    'project.textBig3': 'ай наміст сухого алґорітма — истыканя, споры а житя.',
    'project.textSmall1': 'В основї социальных сїтей лежить пантля а алґорітмы, што ся пробаловають провказовати лише то, што особа хотїла бы увидїти. Але чейже спознаваня мусай ся зачинати з лести? ',
    'project.textSmall2': 'Читатель, писатель, редактор, адміністратор — не важно. Вшиткы мы зъєдинены думков о том, же особа а ю мысль понад вшитко. А лише жива конфронтація сїх мыслей здало родити повноцїнный соціум.',
    'project.publications': 'Публикації',
    'project.text1': 'Історії а мысли людей, котры просто не можуть мовчати. Не дїля піпкы а ціфры оцїнок, ради дїля, штоб быти зачутым.',
    'project.community': 'Сообщества',
    'project.text2': 'Міста для жанрів, ідеї, фэндомів, маленькых компаній а просто людей, котрым є о чим побесїдовати.',
    'project.talk': 'Обговоренї',
    'project.text3': 'Коментари не як формалность, ай як самостойна часть опыта: голузы, одповідї а довгы бесїды.',
    'project.connect': 'Зъязї',
    'project.text4': 'Мы хотимо, жебы інтерес к єдному тексту мог непринадїяно привести к особї, сообществу або совершенно другій темї.',


    'front.title': 'Ґрафика — се тоже язык.',
    'front.text1': 'Навперед мы завдали собі звіданку — ай як люде привыкли спувдїяти з інтерфейсом? Потум завдали звіданку — ай што тераз людям не імпоноває в сїм взаимодїяни? А наконець — ай як мы можемо вырішити сесї проблемы?',
    'front.design': 'Дізайн-код',
    'front.text2': 'Не готовый досудок. Не чужа адаптація. Не модный хвильково образчик. Ґарнітура строгых реґул о том, же а як мусай вызирати, же робить каждый блок а кажду сторонку спознаванов а выєдначенов. ',
    'front.text3': 'Розміры, сїткы, фарбы, акценты, тїни, анімації, выкругленї кутів. Найме тысяча',
    'front.text4': ' друбнїв, ',
    'front.text5': 'неслїдных по окремости а проміняють очередный сайт в маґію властной ',
    'front.text6': 'єднакости',
    'front.text7': ' а общого ',
    'front.text8': 'стіля.',
    'front.text9': 'Тіп — є лицём всякого бренда. Лоґо звыкло ся тулить в куту а зверьха, нитко не приходить ёго обзирати. Брендовы ',
    'front.text10': 'фарбы',
    'front.text11': ' може а ся затямлёвають, але се лише акценты.',
    'front.text12': 'Тіп видко ',
    'front.text13': 'завше.',
    'front.text14': ' Он обязан не лише быти спознаваным, але а сохраняти при том главну черту тіпа — возможность швытко а просто ёго читати. Се комплікованый баланс помежи спознаванём, унікатностёв а звычайностёв.',
    'front.text15': 'Велику часть візуалного слуя мы лишаємо звыклому SCSS. Каскада все щи фіномно знає дїяти свою роботу, ажек юй не заважати.',
    'front.text16': 'Муцна основа для великого проєкта. Достаточно стабілности. Мінімум звышного. Мы не ся наганяємо за модными трендами а не хотимо нич доказовати. Кедь сесь робить — сесь ся выхоснововаєть.',


    'back.text1': 'Швытка а ',
    'back.text2': 'бізувна',
    'back.text3': ' основа для ефективной роботы с податками. Доставаємо, провіряємо, сохраняємо, по запросу оддаємо.',
    'back.text4': 'Удобный инструінструментмент для швыткой достанї стабілного резултата. Требимо час на беспорочну лоґіку, ай не борьбу а вічну налажованю інструмента. ',
    'back.text5': 'Стандард індустрії — могуча універзална база данных, же способна сохраняти беспечно а структуровано податкы профілів, повідків, коментарїв а прочый трібный інтерактив. ',
    'back.text6': 'Красота ставає розличной. Красота бекенда в беспорочній ',
    'back.text7': 'лоґікї',
    'back.text8': ', ідеалній ',
    'back.text9': 'росширливости',
    'back.text10': ' а ',
    'back.text11': ' пудперавости.',
    'back.text12': 'Строили сістему так, жебы она не скламала в самый зодповідный момент.',
    'back.text13': 'Добра архітектура — сесь коли на теперь рук створитель отваряє свуй старый код а не хочїть інтуітивно уповісти: "Што за ідіот се напридумовал?"',
    'back.title': 'Там, де нич не видко, вшитко тоже довжно быти гоже.',


    'history.title1': 'Немного історії',
    'history.title2': 'Інтернет уже знав быти сообществом.',
    'history.title3': 'Ідея',
    'history.title4': 'Первы крокы',
    'history.title5': 'Розробок',
    'history.title6': 'Реліз',

    'history.text1': 'Стары форумы были неудобными, гучными, містами совершенно дикыми — а при том чудновито людськыми.',
    'history.text2': 'Там мож было прийти дїля одповідї на єден вопрос, ся остати дїля бесїды а через дакулько місяцїв нагло відати половку постояных участників по нікам.',
    'history.text3': 'Модерны платформы стали швытше, краснише а много мудрише. Але цїло з тым простора межи людми постепенно заяли рекомендації, метрикы удержаня а алґорітмичны пантлї.',
    'history.text4': 'Алґорітм файно розуміє, же вам, віроятно, ',
    'history.text5': 'ся полюбить ',
    'history.text6': '. А ипен зато черезміру рідко провказоває то, же може ',
    'history.text7': 'задивити.',
    'history.text8': 'Жаль рождає ідею. ',
    'history.text9': 'Ідея рождає мрію. ',
    'history.text10': 'Мрія рождає намаганя. ',
    'history.text11': 'Намаганя міняє наш світ.',
    'history.text12': 'Література штука локална. Ю мож товмачити, але ниякый переклад не застачить иманя културного контекста. Мы считаємо розвиваня літературы свуєй културы вартостёв, зато а вырішили сотворити платформу, котра спомагає тому.',
    'history.text13': 'Мы зачали з маленького сайта на WordPress, жебы порозуміти, чи має починок смысел. ',
    'history.text14': 'Швытко стало зрозумително, же WordPress для серіозной платформы вцїлови не ся здаваєть — наставити а доробити ёго пуд свуї потребы зложенише, чим поробити ушитку роботу з нуля.',
    'history.text15': 'Команда ся взяла за код. Было зробено дакулькі сондажных верзій, нїж в конечном білансї мы не постигнули реалный россяг проєкта а не пришли к по-правому серіозной конціпованї.',
    'history.text16': 'Повноцїнный фронтэнд додаток, повноцїнный бэкэнд сервер, заимаючый опыт спувдїянї, правый дізайн, котрый не фарадлує а дозволяє швытко а удобно спувдїяти з сайтом.',
    'history.text17': 'HTML — структурный. ',
    'history.text18': 'CSS — стучный. ',
    'history.text19': 'TypeScript — бізувный. ',
    'history.text20': 'Python — гожый.',
    'history.text21': 'Ай гев вшиткы звізды ся посходили, зубчаникы ся заобертали а мы ся дали за дїятелну роботу по вытвуру а налаженї платформы. Так ся породив сесь сайт, де мы будемо публиковати новостї біга розробокї для свуїх, кому інтересна судьба проєкта.',
    'history.text22': 'Конціповаємо на публикацію готового додатка в зачаткї 2027 рука.',
    'history.text23': 'Перва верзія буде призвана провірити проєкт, доглядати перву публику, поладити вшиткы потенціалны помылкы а перейти к устойчивому розвиваню.',
    'history.text24': 'Роботный варіант проєкта лїпше тысячы стат о том, якым он буде.',


    'footer.copyright': 'Вшиткі права оборонены.',
    'footer.love': 'Вчинено з любованёв,',

    'footer.developer.maryna': 'Мариша',
    'footer.developer.oxana': 'Оксана',
    'footer.developer.ala': 'Алечка',
    'footer.developer.dasza': 'Одарка',

    'footer.disclamer1': `
        Сесь сайт ся ставить промо-матеріалом для проекта, котрый дочасу пребыває в стадіи активного 
        розробка, а податкы о проєктї можуть ся міняти. Нич з указаного на дотычнім сайтї не ся стає 
        фіналным а призвано лише давати всецїлу представа о бігї робот.
    `,
    'footer.disclamer2': `
        Сайт содержить матеріалы еротичной заміренї а не предназначен для пересмотра
        особам не осягнувшым повного повнолїтного возраста, декретованый домашным 
        праводавством. Як правило 18+. Часом возможна розлика.
    `,
    'footer.disclamer3': `
        Мы можемо зберати даякы податкы о хоснователях, такы як держава (по IP-адресу), 
        час пересмотра а выбраный язык. Се потребно для коректуры цїлёвой публикы.
    `,
  },
} as const;

export type UiKey = keyof (typeof ui)['ua'];