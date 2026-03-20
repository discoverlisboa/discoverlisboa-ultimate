export const siteConfig = {
    hero: {
        videoUrl: "https://player.vimeo.com/external/434045526.sd.mp4?s=c27ee34869bc00368b7539300305530f30c679a9&profile_id=164&oauth2_token_id=57447761", // Pexels - Ultimate style (nature/beach/activity)
        fallbackImage: "/gallery/IMG_7063.jpg",
    },
    training: {
        background: "/gallery/copaiberica.jpeg",
    },

    shop: {
        products: [
            {
                id: 1,
                name: "Disco Oficial Disc'Over",
                price: "13€",
                category: "Equipamento",
                image: "/gallery/disc.jpeg",
                description: "175g Ultrastar - O padrão mundial para Ultimate Frisbee."
            },
            {
                id: 2,
                name: "Jersey Jogo (Home)",
                price: "35€",
                category: "Vestuário",
                image: "/gallery/disc2.jpeg",
                description: "Material respirável de alta performance com design exclusivo 2024."
            },
            {
                id: 3,
                name: "Hoodie Disc'Over",
                price: "40€",
                category: "Vestuário",
                image: "/gallery/disc3.jpeg",
                description: "Quente e confortável, perfeito para as noites de treino na Alameda."
            },
            {
                id: 4,
                name: "Pack Iniciante",
                price: "45€",
                category: "Bundle",
                image: "/gallery/discs-jamor.jpeg",
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
            url: "https://www.youtube.com/embed/playlist?list=PLcTzOZSOf-cLlYk-Bm_xKBJbgUub7UIeU",
            thumbnail: "/gallery/discover1.jpeg"
        }
    ],

    gallery: [
        { src: "/gallery/RPC_1534.jpg", caption: "Copa Ibérica 2026 - Team Board" },
        { src: "/gallery/IMG_4851.jpg", caption: "Intensidade no Lançamento" },
        { src: "/gallery/IMG_7811.jpg", caption: "Estratégia e Foco" },
        { src: "/gallery/RPC_1577.jpg", caption: "Defesa Pressionante" },
        { src: "/gallery/IMG_5029.jpg", caption: "O Salto para a Vitória" },
        { src: "/gallery/RPC_1773.jpg", caption: "Espírito de Jogo" },
        { src: "/gallery/IMG_6997.jpg", caption: "Equipa Disc'Over Lisboa" },
        { src: "/gallery/RPC_1817.jpg", caption: "Momentos de Glória" },
        { src: "/gallery/IMG_4752.jpg", caption: "Treino na Alameda" },
        { src: "/gallery/IMG_4903.jpg", caption: "Festa do Ultimate" },
        { src: "/gallery/IMG_7063.jpg", caption: "União e Amizade" },
        { src: "/gallery/RPC_1637.jpg", caption: "Aquecimento e Preparação" },
    ],
    social: {
        instagram: "https://www.instagram.com/discoverultimatefrisbee",
        facebook: "https://www.facebook.com/ultimatediscoverlisboa",
        email: "discover.lisboa@gmail.com",
        whatsapp: "https://chat.whatsapp.com/CPxKsKvSnUU3A5LDqyxSgE",
    },
    links: {
        googleDrive: "https://drive.google.com/drive/folders/1g6dikTevZA6iOjBSjcLcPRqVcwk1Qh1F",
        competitionResults: "http://ultiorganizer.portugal-ultimate.org/?view=clubcard&club=26",
    }

};
