// ============ PRODUCTS DATA ============
const PRODUCTS_DATA = [
    {
        id: 1,
        name: "Aries Zodiac Ring",
        category: "Zodiac Rings",
        description: "Premium quality Aries zodiac sign ring with intricate details. Made with high-quality materials and perfect for daily wear.",
        price: 2499,
        originalPrice: 3999,
        stock: 15,
        images: [
            "https://via.placeholder.com/800x800?text=Aries+Ring+1",
            "https://via.placeholder.com/800x800?text=Aries+Ring+2",
            "https://via.placeholder.com/800x800?text=Aries+Ring+3",
            "https://via.placeholder.com/800x800?text=Aries+Ring+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Aries+Ring+1",
        discount: 38,
        couponCode: "ARIES38"
    },
    {
        id: 2,
        name: "Taurus Constellation Pendant",
        category: "Pendants",
        description: "Beautiful Taurus constellation pendant with gold finish. Elegant design perfect for any occasion.",
        price: 1999,
        originalPrice: 2999,
        stock: 20,
        images: [
            "https://via.placeholder.com/800x800?text=Taurus+Pendant+1",
            "https://via.placeholder.com/800x800?text=Taurus+Pendant+2",
            "https://via.placeholder.com/800x800?text=Taurus+Pendant+3",
            "https://via.placeholder.com/800x800?text=Taurus+Pendant+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Taurus+Pendant+1",
        discount: 33,
        couponCode: "TAURUS33"
    },
    {
        id: 3,
        name: "Gemini Dual Ring",
        category: "Zodiac Rings",
        description: "Dual design Gemini ring representing the twins. Unique and stylish piece.",
        price: 2999,
        originalPrice: 4499,
        stock: 12,
        images: [
            "https://via.placeholder.com/800x800?text=Gemini+Ring+1",
            "https://via.placeholder.com/800x800?text=Gemini+Ring+2",
            "https://via.placeholder.com/800x800?text=Gemini+Ring+3",
            "https://via.placeholder.com/800x800?text=Gemini+Ring+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Gemini+Ring+1",
        discount: 33,
        couponCode: "GEMINI33"
    },
    {
        id: 4,
        name: "Cancer Moon Pendant",
        category: "Pendants",
        description: "Elegant moon-shaped pendant for Cancer zodiac. Silver finish with crystal details.",
        price: 1799,
        originalPrice: 2499,
        stock: 18,
        images: [
            "https://via.placeholder.com/800x800?text=Cancer+Pendant+1",
            "https://via.placeholder.com/800x800?text=Cancer+Pendant+2",
            "https://via.placeholder.com/800x800?text=Cancer+Pendant+3",
            "https://via.placeholder.com/800x800?text=Cancer+Pendant+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Cancer+Pendant+1",
        discount: 28,
        couponCode: "CANCER28"
    },
    {
        id: 5,
        name: "Leo Royal Ring",
        category: "Zodiac Rings",
        description: "Royal design Leo zodiac ring with lion emblem. Premium gold finish.",
        price: 3299,
        originalPrice: 4999,
        stock: 10,
        images: [
            "https://via.placeholder.com/800x800?text=Leo+Ring+1",
            "https://via.placeholder.com/800x800?text=Leo+Ring+2",
            "https://via.placeholder.com/800x800?text=Leo+Ring+3",
            "https://via.placeholder.com/800x800?text=Leo+Ring+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Leo+Ring+1",
        discount: 34,
        couponCode: "LEO34"
    },
    {
        id: 6,
        name: "Virgo Star Bracelet",
        category: "Bracelets",
        description: "Beautiful star bracelet for Virgo zodiac. Adjustable size with premium quality.",
        price: 1499,
        originalPrice: 1999,
        stock: 25,
        images: [
            "https://via.placeholder.com/800x800?text=Virgo+Bracelet+1",
            "https://via.placeholder.com/800x800?text=Virgo+Bracelet+2",
            "https://via.placeholder.com/800x800?text=Virgo+Bracelet+3",
            "https://via.placeholder.com/800x800?text=Virgo+Bracelet+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Virgo+Bracelet+1",
        discount: 25,
        couponCode: "VIRGO25"
    },
    {
        id: 7,
        name: "Libra Balance Necklace",
        category: "Necklace",
        description: "Symbolic balance necklace for Libra zodiac. Elegant and meaningful design.",
        price: 2799,
        originalPrice: 3999,
        stock: 14,
        images: [
            "https://via.placeholder.com/800x800?text=Libra+Necklace+1",
            "https://via.placeholder.com/800x800?text=Libra+Necklace+2",
            "https://via.placeholder.com/800x800?text=Libra+Necklace+3",
            "https://via.placeholder.com/800x800?text=Libra+Necklace+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Libra+Necklace+1",
        discount: 30,
        couponCode: "LIBRA30"
    },
    {
        id: 8,
        name: "Scorpio Mystic Ring",
        category: "Zodiac Rings",
        description: "Mysterious Scorpio zodiac ring with unique design. Dark and elegant finish.",
        price: 2599,
        originalPrice: 3499,
        stock: 16,
        images: [
            "https://via.placeholder.com/800x800?text=Scorpio+Ring+1",
            "https://via.placeholder.com/800x800?text=Scorpio+Ring+2",
            "https://via.placeholder.com/800x800?text=Scorpio+Ring+3",
            "https://via.placeholder.com/800x800?text=Scorpio+Ring+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Scorpio+Ring+1",
        discount: 26,
        couponCode: "SCORPIO26"
    },
    {
        id: 9,
        name: "Sagittarius Arrow Pendant",
        category: "Pendants",
        description: "Arrow design pendant for Sagittarius zodiac. Perfect for adventure lovers.",
        price: 1899,
        originalPrice: 2799,
        stock: 22,
        images: [
            "https://via.placeholder.com/800x800?text=Sagittarius+Pendant+1",
            "https://via.placeholder.com/800x800?text=Sagittarius+Pendant+2",
            "https://via.placeholder.com/800x800?text=Sagittarius+Pendant+3",
            "https://via.placeholder.com/800x800?text=Sagittarius+Pendant+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Sagittarius+Pendant+1",
        discount: 32,
        couponCode: "SAGITTARIUS32"
    },
    {
        id: 10,
        name: "Capricorn Mountain Ring",
        category: "Zodiac Rings",
        description: "Mountain design Capricorn zodiac ring. Represents strength and determination.",
        price: 2399,
        originalPrice: 3299,
        stock: 15,
        images: [
            "https://via.placeholder.com/800x800?text=Capricorn+Ring+1",
            "https://via.placeholder.com/800x800?text=Capricorn+Ring+2",
            "https://via.placeholder.com/800x800?text=Capricorn+Ring+3",
            "https://via.placeholder.com/800x800?text=Capricorn+Ring+4"
        ],
        image: "https://via.placeholder.com/800x800?text=Capricorn+Ring+1",
        discount: 27,
        couponCode: "CAPRICORN27"
    }
];