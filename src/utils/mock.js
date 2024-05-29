

export const campaingTypes = [
    {
        id:1,
        type: 'pontual-campaing',
        image: '/images/campaing-1.png', 
        title: 'Campanha pontual', 
        text: 'Texto explicativo'
    },
    {
        id:2,
        type: 'creative-ads',
        image: '/images/campaing-2.png', 
        title: 'Creative Ads', 
        text: 'Texto explicativo'
    },
    {
        id:3,
        type: 'video-commerce',
        image: '/images/campaing-3.png', 
        title: 'Vídeo Commerce', 
        text: 'Texto explicativo'
    },
    {
        id:4,
        type: 'ai-avatar',
        image: '/images/campaing-4.png', 
        title: 'Avatar AI', 
        text: 'Texto explicativo', 
        commingSoon: true
    }
]

export const moods = [
    { image:"/images/mood-1.png", title:"História", text:"Uma história live-action com enredo e diálogo entre atores", details_history:true },
    { image:"/images/mood-2.png", title:"Depoimento", text:"Vídeo apresentando um produto e sua experiência de uso com ou sem ator", details_testimonials:true },
    { image:"/images/mood-3.png", title:"Peça de mídia", text:"Vídeo do ponto de vista do consumidor recomendando a compra", details_media:true },
    { image:"/images/mood-4.png", title:"Outro", other:true },
]

export const campaings = [
    {
        id: 1,
        label: 'Andamento', 
        title: 'Space Pop Art', 
        text: 'Promover o lançamento dos novos fondues de Outback no TikTok.', 
        date: '01/02/23',
        type: "creative-ads"
    },                                                                                                                                              
    {
        id: 2,
        label: 'Andamento', 
        title: 'Space Pop Art', 
        text: 'Promover o lançamento dos novos fondues de Outback no TikTok.', 
        date: '01/02/23',
        type: "creative-ads"
    },
    {
        id: 3,
        label: 'Andamento', 
        title: 'Space Pop Art', 
        text: 'Promover o lançamento dos novos fondues de Outback no TikTok.', 
        date: '01/02/23',
        type: "pontual-campaing"
    },
    {
        id: 4,
        label: 'Andamento', 
        title: 'Space Pop Art', 
        text: 'Promover o lançamento dos novos fondues de Outback no TikTok.', 
        date: '01/02/23',
        type: "pontual-campaing"
    },
    {
        id: 5,
        label: 'Finalizada', 
        title: 'Space Pop Art', 
        text: 'Promover o lançamento dos novos fondues de Outback no TikTok.', 
        date: '01/02/23',
        type: "video-commerce"
    },
    {
        id: 6,
        label: 'Finalizada', 
        title: 'Space Pop Art', 
        text: 'Promover o lançamento dos novos fondues de Outback no TikTok.', 
        date: '01/02/23',
        type: "video-commerce"
    },
]

export const galleryContent = [
    {
        id: 1,
        status:"approved",
        image:"/images/gallery-1.png",
        text:"Entregável-1.mp4"
    },
    {
        id: 2,
        status:"refused",
        image:"/images/gallery-2.png",
        text:"Entregável-2.mp4"
    },
    {
        id: 3,
        image:"/images/gallery-3.png",
        text:"Entregável-3.mp4"
    },
]

export const LABELS_BY_TYPE = {
    'progress': 'Andamento',
    'finished': 'Finalizada',
    'canceled': 'Cancelada',
}