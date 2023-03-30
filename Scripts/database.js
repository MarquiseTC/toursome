const database={
    venues:[
        {
        address: "Uranus",
        sFoot: 84848,
        maxOcc: 1000
        },

        {
            address: "Atlantis",
            sFoot: 84848,
            maxOcc: 25
            },

            {
                address: "Wyoming",
                sFoot: 84848,
                maxOcc: 800
                },
    ],

    bookings:[{
        bName: "Snoop Dogg",
        vName: "Fa shizzle dizzle statizzle",
        bookingDate: 4/20/92

},

{
    bName: "The Rugrats",
    vName: "The PlayPen",
    bookingDate: 8/11/91

},

{
    bName: "Mup tups",
    vName: "Muppet Theater",
    bookingDate: 9/5/76

},

],

    bands: [{
        bandName: "Snoop Dogg",
        memberNum: 1,
        genre: "Hip-Hop",
        year: 1992
    },
    {
        bandName: "The Rugrats",
        memberNum: 4,
        genre: "Kidz Bop",
        year: 1991},

        {
            bandName: "Mup Tups",
            memberNum: 4,
            genre: "Folk",
            year: 1976}
    ]

}


export const getVenues =() => {
    return database.venues.map(venues => ( {...venues}))
}

export const getBands =() => {
    return database.band.map(band => ( {...band}))
}

export const getBookings=() => {
    return database.bookings.map(bookings => ( {...bookings}))
}