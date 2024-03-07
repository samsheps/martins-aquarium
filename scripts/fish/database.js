const database = {
    fish: [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Red Sea Lionfish",
            name: "Mister Spikes",
            length: 10,
            diet: "small fish and crustacean", 
            origin: "Red Sea"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Clownfish",
            name: "Nemo",
            length: 3,
            diet: "algae and small crustaceans",
            origin: "Indian Ocean"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Betta",
            name: "Alpha",
            length: 2.5,
            diet: "insects and larvae",
            origin: "Southeast Asia"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Guppy",
            name: "Fancy",
            length: 1.5,
            diet: "small insects and algae",
            origin: "South America"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Goldfish",
            name: "Bubbles",
            length: 6,
            diet: "flakes, pellets, and vegetables",
            origin: "China"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Angelfish",
            name: "Angel",
            length: 6,
            diet: "small fish and algae",
            origin: "South America"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Tetra",
            name: "Neon",
            length: 1.5,
            diet: "small crustaceans and insects",
            origin: "South America"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Discus",
            name: "Discus",
            length: 8,
            diet: "insects and larvae",
            origin: "Amazon River basin"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Molly",
            name: "Molly",
            length: 3,
            diet: "algae and small insects",
            origin: "Central America"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Swordtail",
            name: "Swordy",
            length: 3.5,
            diet: "insects and larvae",
            origin: "Central America"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Catfish",
            name: "Whiskers",
            length: 10,
            diet: "insects, larvae, and algae",
            origin: "South America"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Piranha",
            name: "Chompers",
            length: 12,
            diet: "fish, insects, and crustaceans",
            origin: "South America"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Archerfish",
            name: "Archie",
            length: 6,
            diet: "insects and small crustaceans",
            origin: "Australia"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Killifish",
            name: "Killy",
            length: 2,
            diet: "insects, larvae, and small crustaceans",
            origin: "Africa"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Pufferfish",
            name: "Puffy",
            length: 5,
            diet: "shellfish and algae",
            origin: "Gulf of Mexico"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Lemonpeel Angelfish",
            name: "Lemon",
            length: 4,
            diet: "algae and small invertebrates",
            origin: "Indian Ocean"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Blue Tang",
            name: "Dory",
            length: 7,
            diet: "algae and plankton",
            origin: "Indian Ocean"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Mandarinfish",
            name: "Manny",
            length: 3,
            diet: "small crustaceans and zooplankton",
            origin: "Indian Ocean"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Banggai Cardinalfish",
            name: "Cardy",
            length: 3,
            diet: "small crustaceans and fish",
            origin: "Banggai Islands"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcPz1VaUBH20obVzyTlbLVhxlmGDIXccNRdwVtq3HkeeL3x-xGsQQSPNYLmuWHitn0D8&usqp=CAU",
            species: "Firefish Goby",
            name: "Flare",
            length: 4,
            diet: "small invertebrates and zooplankton",
            origin: "Indian Ocean"
        },
    ], 
    tips: [
        {   id: 1, 
            advice: "Quarantining any new or ill fish."},
        {   id: 2,
            advice: "Providing a high-quality diet."},
        {   id: 3,
            advice: "Monitoring the water quality."},
        {   id: 4,
            advice: "Maintaining a regular schedule of cleanings, water changes, and filter replacements."},
        {   id: 5,
            advice: "Make sure there are no bullies in the tank."},
        {   id: 6,
            advice: "Avoid stressing your fish with sudden water temperature changes and loud noises."},
        ],
    locations: [
        {   place: "Amazon River Basin, South America",
            notes: "Look out for piranhas, arapaima, and electric eels. Local guides can help navigate safely and find unique species."},
        {   place: "Great Barrier Reef, Australia",
            notes: "Keep an eye out for clownfish, angelfish, and butterflyfish. Practice responsible snorkeling/diving to protect the reef and its inhabitants."},
        {   place: "Lake Malawi, Africa",
            notes: "Explore for cichlids, including peacock cichlids and mbuna. Ensure you have permits and follow local regulations for fishing."},
        {   place: "Banggai Islands, Indonesia", 
            notes: "Search for the Banggai cardinalfish and other unique species among the coral reefs. Be mindful of conservation efforts for this fish."},
        {   place: "Red Sea, Egypt",
            notes: "Dive to see lionfish, butterflyfish, and triggerfish. Respect local marine life and avoid damaging coral reefs."},
    ]

}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
// saving this data as a function enables us to move it between modules 

export const fishTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const goTravel = () => {
    return database.locations.map(locations => ({...locations}))
}