let places = [
    {
        name: "Karma",
        id: 1,
        type: "coffee",
        shortDescription: "lorem",
        direction: "Mokotowska 17, 00-640 Warszawa",
        image: "/image/coffee/karma.jpg",
        description: "lorem",
        facebook: ""
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
