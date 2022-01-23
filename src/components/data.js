let places = [
    {
        name: "Karma",
        id: 1,
        type: "coffee",
        shortDescription: `Kawa w jednym z najbardziej urokliwych warszawskich miejsc: na Placu Zbawiciela`,
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: 'Coffee Karma powstała w 2002 roku. To pierwsza w Warszawie kawiarnia która może się pochwalić wypalaną na miejscu, świeżą kawą. ' +
            'Znajduje się w jednym z najbardziej urokliwych, a jednocześnie kultowych miejsc na mapie stolicy: na Placu Zbawiciela. ' +
            `Kawa w ogródku kawiarnianym z widokiem na pędzące tramwaje i uroczy plac Zbawiciela to "must do" pobytu w Warszawie`+
            ' Specjalnością Coffee Karma jest świeżo palona kawa z wyselekcjonowanych krajów świata, wypalana w pięknym  piecu Probat L5, wyekponowanym w centralnym miejscu kawiarni' +
            ' Życie kawiarniane Karmy jest mocno związane z kulturą. Każdego miesiąca prezentuje się tu pracę różnorodnych artystów. ' +
            'Są to zarówno koncerty, jak i wieczory poetyckie i wernisaże',
        facebook: "https://www.facebook.com/coffeekarma.warszawa/",
        loc_right: "20%",
        loc_down: "20%",
    },
    {
        name: "Karma",
        id: 2,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: "lorem",
        facebook: ""
    },
    {
        name: "Karma",
        id: 3,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: "lorem",
        facebook: ""
    },
    {
        name: "Karma",
        id: 4,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: "lorem",
        facebook: ""
    },
    {
        name: "Karma",
        id: 5,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: "lorem",
        facebook: ""
    },
    {
        name: "Karma",
        id: 6,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: "lorem",
        facebook: ""
    },
    {
        name: "Karma",
        id: 7,
        type: "breakfast",
        shortDescription: "lorem",
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: "lorem",
        facebook: ""
    },

];

export function getPlaces() {
    return places;
}

export function getPlace(id) {
    return places.find(
        place => place.id === id
    );
}
