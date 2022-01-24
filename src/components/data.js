let places = [
    {
        name: "Karma Coffee",
        id: 1,
        type: "coffee",
        shortDescription: `Kawa i śniadanie w najbardziej urokliwym miejscu: na Placu Zbawiciela`,
        direction: "Mokotowska 17",
        image: "/image/coffee/karma.jpg",
        description: 'Coffee Karma powstała w 2002 roku. To pierwsza w Warszawie kawiarnia która może się pochwalić wypalaną na miejscu, świeżą kawą. ' +
            'Znajduje się w jednym z najbardziej urokliwych, a jednocześnie kultowych miejsc na mapie stolicy: na Placu Zbawiciela. ' +
            `Kawa w ogródku kawiarnianym z widokiem na pędzące tramwaje i uroczy plac Zbawiciela to "must do" pobytu w Warszawie`+
            ' Specjalnością Coffee Karma jest świeżo palona kawa z wyselekcjonowanych krajów świata, wypalana w pięknym  piecu Probat L5, wyekponowanym w centralnym miejscu kawiarni' +
            ' Życie kawiarniane Karmy jest mocno związane z kulturą. Każdego miesiąca prezentuje się tu pracę różnorodnych artystów. ' +
            'Są to zarówno koncerty, jak i wieczory poetyckie i wernisaże',
        facebook: "https://www.facebook.com/coffeekarma.warszawa/",
        loc_right: "54%",
        loc_top: "80%",
    },
    {
        name: "Wrzenie Świata",
        id: 2,
        type: "coffee",
        shortDescription: "lorem",
        direction: "lorem",
        image: "/image/coffee/wrzenie.jpg",
        description: "lorem",
        facebook: "",
        loc_right: "57%",
        loc_top: "40%",
    },
    {
        name: "Stor",
        id: 3,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Tamka 33",
        image: "/image/coffee/stor.jpg",
        description: "lorem",
        facebook: "",
        loc_right: "63%",
        loc_top: "35%",
    },
    {
        name: "Forum",
        id: 4,
        type: "coffee",
        shortDescription: "lorem",
        direction: "lorem",
        image: "/image/coffee/forum.jpg",
        description: "lorem",
        facebook: "",
        loc_right: "30%",
        loc_top: "24%",
    },
    {
        name: "Coffeedesk",
        id: 5,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Wilcza 42",
        image: "/image/coffee/coffeedesk.jpg",
        description: "lorem",
        facebook: "",
        loc_right: "48%",
        loc_top: "68%",
    },
    {
        name: "Ministerstwo kawy",
        id: 6,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Marszałkowska 27/35",
        image: "/image/coffee/ministerstwo.png",
        description: "lorem",
        facebook: "",
        loc_right: "55%",
        loc_top: "84%",
    },
    {
        name: "Cafe Bristol",
        id: 7,
        type: "breakfast",
        shortDescription: "lorem",
        direction: "Krakowskie Przedmieście 42/44",
        image: "/image/breakfast/Cafe bristol.jpg",
        description: "lorem",
        facebook: "https://www.cafebristol.pl/",
    },
    {
        name: "Cream",
        id: 8,
        type: "breakfast",
        shortDescription: "lorem",
        direction: "Śniadeckich 18",
        image: "/image/breakfast/cream.jpg",
        description: "lorem",
        facebook: "https://www.facebook.com/kremwarszawa/",
    },
    {
        name: "Niezłe ziółko",
        id: 9,
        type: "breakfast",
        shortDescription: "lorem",
        direction: "Krucza 17",
        image: "/image/breakfast/ziolko.jpg",
        description: "lorem",
        facebook: "https://www.facebook.com/niezleziolko.warszawa/",
    },
    {
        name: "Charlotte",
        id: 10,
        type: "breakfast",
        shortDescription: "lorem",
        direction: "Aleja Wyzwolenia 18",
        image: "/image/breakfast/charlotte.png",
        description: "lorem",
        facebook: "https://www.facebook.com/charlottezbawiciela/",
    },
    {
        name: "Menora. Charlotte",
        id: 11,
        type: "breakfast",
        shortDescription: "lorem",
        direction: "Próżna 7",
        image: "/image/breakfast/charlotte_mennora.jpg",
        description: "lorem",
        facebook: "https://www.facebook.com/charlottemenora/",
    },
    {
        name: "Vincent Cafe & Bakery",
        id: 12,
        type: "breakfast",
        shortDescription: "lorem",
        direction: "Nowy Świat 64",
        image: "/image/breakfast/vincent.jpg",
        description: "lorem",
        facebook: "",
    },
    {
        name: "Karma Coffee",
        id: 13,
        type: "breakfast",
        shortDescription: `Kawa i śniadanie w najbardziej urokliwym miejscu: na Placu Zbawiciela`,
        direction: "Mokotowska 17",
        image: "/image/coffee/karma.jpg",
        description: 'Coffee Karma powstała w 2002 roku. To pierwsza w Warszawie kawiarnia która może się pochwalić wypalaną na miejscu, świeżą kawą. ' +
            'Znajduje się w jednym z najbardziej urokliwych, a jednocześnie kultowych miejsc na mapie stolicy: na Placu Zbawiciela. ' +
            `Kawa w ogródku kawiarnianym z widokiem na pędzące tramwaje i uroczy plac Zbawiciela to "must do" pobytu w Warszawie`+
            ' Specjalnością Coffee Karma jest świeżo palona kawa z wyselekcjonowanych krajów świata, wypalana w pięknym  piecu Probat L5, wyekponowanym w centralnym miejscu kawiarni' +
            ' Życie kawiarniane Karmy jest mocno związane z kulturą. Każdego miesiąca prezentuje się tu pracę różnorodnych artystów. ' +
            'Są to zarówno koncerty, jak i wieczory poetyckie i wernisaże',
        facebook: "https://www.facebook.com/coffeekarma.warszawa/",
        loc_right: "54%",
        loc_top: "80%",
    },
    {
        name: "Ale Wino",
        id: 14,
        type: "food",
        shortDescription: "lorem",
        direction: "Nowy Świat 64",
        image: "/image/breakfast/vincent.jpg",
        description: "lorem",
        facebook: "",
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
