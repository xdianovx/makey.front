export const useNavigationLinks = defineStore("navLinks", () => {
    const links = ref(
        [
            {
                id: 1,
                title: "Каталог",
                slug: "/",
                links: [
                    {
                        id: 1,
                        title: "Сумки",
                        slug: "/bags",
                        sublinks: [
                            {id: 1, title: "Все сумки", slug: "/collection/teddy"},
                            {id: 1, title: "Средние сумки", slug: "/collection/teddy"},
                            {id: 1, title: "Мини-сумки", slug: "/collection/teddy"},
                        ],
                    },
                    {id: 2, title: "Кошельки", slug: "/bags"},
                    {id: 3, title: "Косметички", slug: "/bags"},
                    {id: 4, title: "Рюкзаки", slug: "/bags"},
                    {id: 5, title: "Аксессуары", slug: "/bags"},
                    {id: 6, title: "Ремни", slug: "/bags"},
                    {id: 7, title: "Духи", slug: "/bags"},
                    {id: 8, title: "Для дома", slug: "/bags"},
                ],
                collections: [
                    {id: 1, title: "Teddy", slug: "/collection/teddy"},
                    {id: 2, title: "Key", slug: "/collection/teddy"},
                    {id: 3, title: "Tie", slug: "/collection/teddy"},
                    {id: 4, title: "Waves", slug: "/collection/teddy"},
                    {id: 5, title: "Trio", slug: "/collection/teddy"},
                    {id: 6, title: "Classic", slug: "/collection/teddy"},
                    {id: 7, title: "Bubbles", slug: "/collection/teddy"},
                    {id: 8, title: "Royal", slug: "/collection/teddy"},
                    {id: 9, title: "Le Lin", slug: "/collection/teddy"},
                    {id: 10, title: "Geometry", slug: "/collection/teddy"},
                    {id: 11, title: "Texture", slug: "/collection/teddy"},
                    {id: 12, title: "Venice", slug: "/collection/teddy"},
                    {id: 13, title: "Fleur", slug: "/collection/teddy"},
                    {id: 14, title: "Italy", slug: "/collection/teddy"},
                ],
            },
            {
                id: 2,
                title: "Оплата и доставка",
                slug: "/",
                links: [
                    {id: 1, title: "Сумки", slug: "/bags"},
                    {id: 2, title: "Кошельки", slug: "/bags"},
                    {id: 3, title: "Косметички", slug: "/bags"},
                    {id: 4, title: "Рюкзаки", slug: "/bags"},
                    {id: 5, title: "Аксессуары", slug: "/bags"},
                    {id: 6, title: "Ремни", slug: "/bags"},
                    {id: 7, title: "Духи", slug: "/bags"},
                    {id: 8, title: "Для дома", slug: "/bags"},
                ],
                collections: [
                    {id: 1, title: "Teddy", slug: "/collection/teddy"},
                    {id: 2, title: "Key", slug: "/collection/teddy"},
                    {id: 3, title: "Tie", slug: "/collection/teddy"},
                    {id: 4, title: "Waves", slug: "/collection/teddy"},
                    {id: 5, title: "Trio", slug: "/collection/teddy"},
                    {id: 6, title: "Classic", slug: "/collection/teddy"},
                    {id: 7, title: "Bubbles", slug: "/collection/teddy"},
                    {id: 8, title: "Royal", slug: "/collection/teddy"},
                    {id: 9, title: "Le Lin", slug: "/collection/teddy"},
                    {id: 10, title: "Geometry", slug: "/collection/teddy"},
                    {id: 11, title: "Texture", slug: "/collection/teddy"},
                    {id: 12, title: "Venice", slug: "/collection/teddy"},
                    {id: 13, title: "Fleur", slug: "/collection/teddy"},
                    {id: 14, title: "Italy", slug: "/collection/teddy"},
                ],
            },
            {
                id: 3,
                title: "Гарантия и возврат",
                slug: "/",
            },
            {
                id: 4,
                title: "Магазины",
                slug: "/",
            },
            {
                id: 5,
                title: "Контакты",
                slug: "/",
            },
        ]
    );

    return {links};
});

