function idGenerator() {
    return Math.floor(Math.random() * 10E+10);
}


var products = [
    {
        id: 1,
        name: 'Lenovo Yoga 710-14 (80TY003PRA) Silver',
        link: 'http://i2.rozetka.ua/goods/1646348/lenovo_yoga_710_14_80ty003pra_images_1646348197.jpg',
        description: 'Экран 14" IPS (1920x1080) Full HD, Multi-touch, глянцевый с антибликовым покрытием / Intel Core i7-6500U (2.5 - 3.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel HD Graphics 520 / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 10 / 1.6 кг / серебристый'
    },

    {
        id: idGenerator(),
        name: 'HP ProBook 430 G3 (T6P10EA) ',
        link: 'http://i1.rozetka.ua/goods/1665718/copy_hp_t6p11ea_5788afddc167e_images_1665718443.jpg',
        description: 'Экран 13.3" (1366x768) HD, глянцевый с антибликовым покрытием / Intel Core i7-6500U (2.5 - 3.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel HD Graphics 520 / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.5 кг / серый'

    },

    {
        id: idGenerator(),
        name: 'Asus VivoBook Flip TP501UA (TP501UA-DN067T) Dark Gray',
        link: 'http://i2.rozetka.ua/goods/1700440/copy_asus_tp501ua_dn006t_57b59d51e448d_images_1700440823.jpg',
        description: 'Экран 15.6" (1920x1080) FullHD LED, глянцевый, Multitouch / Intel Core i7-6500U (2.5 - 3.1 ГГц) / RAM 8 ГБ / SSD 128 + HDD 1 ТБ / Intel HD Graphics 520 / Без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / Windows 10 / 2.2 кг / темно-серый / сумка + мышь + переходник VGA'

    },
    {
        id: idGenerator(),
        name: 'Apple MacBook Pro Retina 13" (Z0QP002R0)',
        link: 'http://i1.rozetka.ua/goods/1483139/copy_apple_macbook_pro_retina_13_z0qp000x6_56e9470e242c8_images_1483139031.jpg',
        description: 'Экран 13.3" IPS (2560x1600) Retina LED, глянцевый / Intel Core i7 (3.1 ГГц) / RAM 16 ГБ / SSD 1 TБ / Intel Iris Graphics 6100 / без ОД / Wi-Fi / Bluetooth / веб-камера / OS X Yosemite / 1.58 кг'
    },
    {
        id: idGenerator(),
        name: 'HP Spectre 13-v002ur (E7F22EA) ',
        link: 'http://i2.rozetka.ua/goods/1672771/copy_hp_e8p69ea_578e0ea0de4e4_images_1672771944.jpg',
        description: 'Экран 13.3" IPS (1920x1080) Full HD, UWVA BrightView, глянцевый / Intel Core i7-6500U (2.5 - 3.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel HD Graphics 520 / Без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home 64bit / 1.11 кг / пепельно-серебристый'
    },
    {
        id: idGenerator(),
        name: 'Lenovo Yoga 900-13 (80UE007NUA) Orange ',
        link: 'http://i2.rozetka.ua/goods/1649799/copy_lenovo_80sw006yra_576cd0ead0c94_images_1649799806.jpg',
        description: 'Экран 13.3" IPS (3200x1800) QHD+, Multi-touch, глянцевый / Intel Core i7-6560U (2.2 - 3.2 ГГц) / RAM 8 ГБ / SSD 512 ГБ / Intel Iris Graphics 540 / без ОД / Wi-Fi / Bluetooth / веб-камера / Windows 10 Home / 1.29 кг / оранжевый'
    }


];


var orders = products.filter(function () {
    return true;
})




