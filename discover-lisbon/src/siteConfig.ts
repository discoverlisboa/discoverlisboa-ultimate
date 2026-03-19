export const siteConfig = {
    hero: {
        videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27ee34869bc00368b7539300305530f30c679a9&profile_id=164&oauth2_token_id=57447761", // Pexels - Ultimate style (nature/beach/activity)
        fallbackImage: "https://images.unsplash.com/photo-1593010263914-ba36b80145db?auto=format&fit=crop&q=80",
    },
    shop: {
        products: [
            {
                id: 1,
                name: "Disco Oficial Disc'Over",
                price: "13€",
                category: "Equipamento",
                image: "/disc.jpeg",
                description: "175g Ultrastar - O padrão mundial para Ultimate Frisbee."
            },
            {
                id: 2,
                name: "Jersey Jogo (Home)",
                price: "35€",
                category: "Vestuário",
                image: "/disc2.jpeg",
                description: "Material respirável de alta performance com design exclusivo 2024."
            },
            {
                id: 3,
                name: "Hoodie Disc'Over",
                price: "40€",
                category: "Vestuário",
                image: "/disc3.jpeg",
                description: "Quente e confortável, perfeito para as noites de treino na Alameda."
            },
            {
                id: 4,
                name: "Pack Iniciante",
                price: "45€",
                category: "Bundle",
                image: "/discs-jamor.jpeg",
                description: "Inclui 1 Disco + 1 Jersey. Tudo o que precisas para começar."
            }
        ],
        googleSheetsUrl: "" // To be filled by the user for orders
    },
    videos: [
        {
            id: "1",
            title: "What is Ultimate Frisbee?",
            url: "https://www.youtube.com/embed/UnNUEreeZ4U",
            thumbnail: "https://img.youtube.com/vi/UnNUEreeZ4U/maxresdefault.jpg"
        },
        {
            id: "2",
            title: "Ultimate Frisbee Highlights",
            url: "https://www.youtube.com/embed/YpX-u3lB46M",
            thumbnail: "https://img.youtube.com/vi/YpX-u3lB46M/maxresdefault.jpg"
        },
        {
            id: "3",
            title: "Disc'Over Lisboa Highlights",
            url: "https://www.youtube.com/embed/playlist?list=PLW3Lsc3S5TIDV8dZ0_8S4P_7R7wP1_n9_&si=l_n8_8_8_8_8_8_8", // Example playlist
            thumbnail: "/discover1.jpeg" // Use local image as placeholder
        }
    ],
    social: {
        instagram: "https://www.instagram.com/discoverlisboa/",
        facebook: "https://www.facebook.com/ultimatediscoverlisboa",
        email: "discover.lisboa@gmail.com",
    }
};
