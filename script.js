// Dummy product data
const products = [
    {
        id: 1,
        name: "Bybit KYC",
        description: "KYC verification for Bybit platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://altcoinsbox.com/wp-content/uploads/2022/10/bybit-logo-white.jpg",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        // Product types and their price adjustments
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 2,
        name: "MEXC KYC",
        description: "KYC verification for MEXC platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://assets.bitdegree.org/images/mexc-review-logo-big.png?tr=w-250",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 3,
        name: "OKX KYC",
        description: "KYC verification for OKX platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://brandlogo.org/wp-content/uploads/2024/04/OKX-Logo.png.webp",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 4,
        name: "BITGET KYC",
        description: "KYC verification for BITGET platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://s3-eu-west-1.amazonaws.com/tpd/logos/61a7b40fcaffd03ae87ae327/0x0.png",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 5,
        name: "KUCOIN KYC",
        description: "KYC verification for KUCOIN platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://i.ytimg.com/vi/HGIwSqlq5yM/maxresdefault.jpg",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 6,
        name: "BINGX KYC",
        description: "KYC verification for BINGX platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://www.logo-designer.co/storage/2023/12/2023-crypto-exchange-bingx-new-logo-design.png",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 7,
        name: "BINANCE KYC",
        description: "KYC verification for BINANCE platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://crystalpng.com/wp-content/uploads/2025/03/binance_logo.png",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 9,
        name: "WEEX KYC",
        description: "KYC verification for WEEX platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://storage.googleapis.com/job-listing-logos/ed0143ba-7bca-46d4-975e-8204abb17498.png",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 10,
        name: "KCEX KYC",
        description: "KYC verification for KCEX platform, a fast and secure process for your digital asset trading. This service ensures your account is fully verified according to global standards.",
        image: "https://play-lh.googleusercontent.com/eIAZr4GO0HbAedCWKyOc8pOxr0g2_rdYjdC651KbvOXx80ZyKC6qRuxaTobyHFJvkzU",
        countryPrices: [
            { country: "Vietnam", price: 10 },
            { country: "Myanmar", price: 10 },
            { country: "Uzbekistan", price: 10 },
            { country: "Thailand", price: 8 },
            { country: "Philippines", price: 6 },
            { country: "Bangladesh", price: 4.5 },
            { country: "Uganda", price: 8 },
            { country: "Pakistan", price: 8 },
            { country: "Egypt", price: 7 },
            { country: "Srilanka", price: 10 },
            { country: "Burkina Faso", price: 15 },
            { country: "Argentina", price: 14 },
            { country: "Venezuela", price: 15 },
            { country: "Peru", price: 15 },
            { country: "Togo", price: 15 },
            { country: "Ukraine", price: 20 },
            { country: "Russia", price: 20 },
            { country: "Kenya", price: 7 },
            { country: "Nigeria", price: 7 },
            { country: "Mozambique", price: 15 },
            { country: "Madagascar", price: 13 },
            { country: "Malawi", price: 12 },
            { country: "Indonesia", price: 6 },
            { country: "Turkey", price: 15 },
            { country: "Kazakhstan", price: 13 },
            { country: "Rwanda", price: 9 },
            { country: "Leshoto", price: 15 },
            { country: "Morocco", price: 15 },
            { country: "Algeria", price: 12 },
            { country: "Tanzania", price: 12 },
            { country: "Malaysia", price: 14 },
            { country: "Mexico", price: 15 },
            { country: "Colombia", price: 15 }
        ],
        productTypes: [
            { name: "Sumsub", priceAdjustment: 0 },
            { name: "Sumsub with proxy", priceAdjustment: 0 },
            { name: "Apilink", priceAdjustment: 0 },
            { name: "Onfindo link", priceAdjustment: 0 },
            { name: "login mail", priceAdjustment: 0 },
            { name: "login mail with proxy", priceAdjustment: 0 },
            { name: "ADSPOWER SERVICE", priceAdjustment: 0 },
            { name: "DOLPHIN SERVICE", priceAdjustment: 0 }
        ]
    },
    {
        id: 11,
        name: "EMAIL SERVICE",
        description: "Dedicated email creation and delivery service for your verification needs. Secure and reliable.",
        image: "https://i.pinimg.com/1200x/d4/d5/84/d4d584207f4efc8222add89e0ce7b2b4.jpg",
        mailAccountOptions: [
            { name: "Hotmail (outlook)", price: 0.30, descriptionDetails: "Product: Hotmail (outlook)\nEmail:password\nPrice per item: 0.30$\nMinimum quantity: 10" },
            { name: "Gmail", price: 0.80, descriptionDetails: "Product: Gmail\nIssue format login:password:recovery email\nAccounts with stale, confirmed with SMS.\nGender can be male or female\nPrice per unit: 0.80$\nMinimum quantity: 10" },
            { name: "Firstmail", price: 0.10, descriptionDetails: "Product: Firstmail\nMail login site firstmail.ltd\nIssue format login:password\nImap enabled\nPrice per unit: 0.10$\nMinimum quantity: 10" },
            { name: "Rambler", price: 0.10, descriptionDetails: "Product: Rambler\nLogin:password\nPrice per unit: 0.10$\nMinimum quantity: 10" }
        ],
        productTypes: [] // Empty to trigger specific display logic
    },
    {
        id: 12,
        name: "PERSONAL PROXY",
        description: "Provision of private proxies for anonymity and additional security. High speed and stable.",
        image: "https://e7.pngegg.com/pngimages/655/180/png-clipart-reverse-proxy-proxy-server-https-load-balancing-haproxy-others-miscellaneous-blue-thumbnail.png",
        countryPrices: [
            { country: "Indonesia", price: 0 },
            { country: "Bangladesh", price: 0 },
            { country: "Ukraine", price: 0 },
            { country: "France", price: 0 },
            { country: "Germany", price: 0 },
            { country: "Kazakhstan", price: 0 },
            { country: "Kenya", price: 0 },
            { country: "India", price: 0 },
            { country: "Poland", price: 0 },
            { country: "Estonia", price: 0 }
        ],
        productTypes: [
            { name: "5 Days", priceAdjustment: 2.50 },
            { name: "10 Days", priceAdjustment: 2.90 },
            { name: "30 Days", priceAdjustment: 4.00 }
        ]
    },
    // New product: OTHER EXCHANGE CONTACT US
    {
        id: 13, // New unique ID
        name: "OTHER EXCHANGE CONTACT US",
        description: "Can't find the service you're looking for? Contact our admin for custom requests or other exchanges.",
        image: "https://placehold.co/400x200/555/white?text=CONTACT+US", // Placeholder image
        countryPrices: [], // No country selection for this product
        productTypes: [] // No product type selection for this product
    }
];

let cart = [];
let currentProduct = null;
let selectedCountryData = null;
let selectedProductTypeData = null;
let modalSelectedQuantity = 1;

// Element references
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const closeModalButton = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const countrySelectLabel = document.getElementById('countrySelectLabel');
const countrySelect = document.getElementById('countrySelect');
const productTypeSection = document.getElementById('productTypeSection');
const productTypeSelect = document.getElementById('productTypeSelect');
const mailServiceDescriptionSection = document.getElementById('mailServiceDescriptionSection');
const mailServiceDescriptionContent = document.getElementById('mailServiceDescriptionContent');
const modalSelectedPrice = document.getElementById('modalSelectedPrice');
const modalDecreaseQuantityBtn = document.getElementById('modalDecreaseQuantityBtn');
const modalQuantityDisplay = document.getElementById('modalQuantityDisplay');
const modalIncreaseQuantityBtn = document.getElementById('modalIncreaseQuantityBtn');
const addToCartModalBtn = document.getElementById('addToCartModalBtn');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const cartModalContent = document.getElementById('cartModalContent');
const closeCartModal = document.getElementById('closeCartModal');
const cartItemsContainer = document.getElementById('cartItems');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const checkoutButton = document.getElementById('checkoutButton');
const clearCartButton = document.getElementById('clearCartButton');
const paymentChannelModal = document.getElementById('paymentChannelModal');
const paymentChannelModalContent = document.getElementById('paymentChannelModalContent');
const closePaymentChannelModal = document.getElementById('closePaymentChannelModal');
const payWithTelegramBtn = document.getElementById('payWithTelegramBtn');
const payWithWhatsAppBtn = document.getElementById('payWithWhatsAppBtn');
const infoPentingButton = document.getElementById('infoPentingButton');
const importantInfoModal = document.getElementById('importantInfoModal');
const importantInfoModalContent = document.getElementById('importantInfoModalContent');
const closeImportantInfoModal = document.getElementById('closeImportantInfoModal');
const proxyInfoModal = document.getElementById('proxyInfoModal');
const proxyInfoModalContent = document.getElementById('proxyInfoModalContent');
const closeProxyInfoModal = document.getElementById('closeProxyInfoModal');

// New icon element references
const contactAdminIcon = document.getElementById('contactAdminIcon');
const proofOrderIcon = document.getElementById('proofOrderIcon');
const proofPaymentIcon = document.getElementById('proofPaymentIcon');

// New contact admin modal element references
const contactAdminModal = document.getElementById('contactAdminModal');
const contactAdminModalContent = document.getElementById('contactAdminModalContent');
const closeContactAdminModal = document.getElementById('closeContactAdminModal');
const chatTelegramAdminBtn = document.getElementById('chatTelegramAdminBtn');
const chatWhatsAppAdminBtn = document.getElementById('chatWhatsAppAdminBtn');


// Function to update mail service details and price
function updateMailServiceDetails(priceDisplay, detailsHtml) {
    modalSelectedPrice.textContent = `$${priceDisplay}`;
    mailServiceDescriptionContent.textContent = detailsHtml; // Use textContent to preserve formatting (newlines)

    if (priceDisplay !== 'Select mail account type' && detailsHtml !== '') {
        addToCartModalBtn.disabled = false;
        addToCartModalBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        addToCartModalBtn.disabled = true;
        addToCartModalBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

// Function to display products
function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p class="col-span-full text-center text-gray-400 text-lg">No products found.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        // Add a specific class for the "OTHER EXCHANGE CONTACT US" product
        if (product.id === 13) { // ID 13 for the new product
            productCard.className = 'bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer contact-us-card';
        } else {
            productCard.className = 'bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer';
        }

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-4">
                <h2 class="text-xl font-semibold text-white mb-2">${product.name}</h2>
                <p class="text-gray-300 text-sm mt-2 line-clamp-2">${product.description}</p>
                <div class="flex items-center justify-between mt-4">
                    <!-- "Select & Add" button on the product card -->
                    ${product.id !== 13 ? `
                        <button class="add-to-cart-card-btn flex-grow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300" data-product-id="${product.id}">Select & Add</button>
                    ` : ''}

                    ${product.id === 12 ? `
                        <!-- Info button for Personal Proxy -->
                        <button class="proxy-info-btn ml-2 bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg transition-all duration-300" data-product-id="${product.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9.293 11.293a1 1 0 001.414 0L12 9.414l1.293 1.293a1 1 0 001.414-1.414L13.414 8l1.293-1.293a1 1 0 10-1.414-1.414L12 6.586l-1.293-1.293a1 1 0 00-1.414 1.414L10.586 8l-1.293 1.293a1 1 0 000 1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    document.querySelectorAll('.add-to-cart-card-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.productId);
            const productToOpen = products.find(p => p.id === productId);
            if (productToOpen) {
                openProductModal(productToOpen);
            }
        });
    });

    document.querySelectorAll('.proxy-info-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            openProxyInfoModal();
        });
    });

    // Event listener for the new "OTHER EXCHANGE CONTACT US" product
    document.querySelectorAll('.contact-us-card').forEach(card => {
        card.addEventListener('click', () => {
            openContactAdminModal(); // Open contact admin modal
        });
    });
}

// Function to open the product detail and country selection modal
function openProductModal(product) {
    currentProduct = product;
    selectedCountryData = null;
    selectedProductTypeData = null;
    modalSelectedQuantity = 1;
    modalQuantityDisplay.textContent = modalSelectedQuantity;
    addToCartModalBtn.disabled = true;
    addToCartModalBtn.classList.add('opacity-50', 'cursor-not-allowed');

    modalImage.classList.add('hidden');
    modalDescription.classList.add('hidden');
    modalName.textContent = product.name;
    modalSelectedPrice.textContent = 'Select country & product type';

    if (product.id === 11) {
        countrySelectLabel.textContent = 'Mail Accounts:';
        productTypeSection.classList.add('hidden');
        mailServiceDescriptionSection.classList.remove('hidden');

        countrySelect.innerHTML = '<option value="" disabled selected>Select mail account type</option>';
        if (product.mailAccountOptions && product.mailAccountOptions.length > 0) {
            product.mailAccountOptions.forEach(mailOption => {
                const option = document.createElement('option');
                option.value = mailOption.name;
                option.dataset.price = mailOption.price;
                option.dataset.descriptionDetails = mailOption.descriptionDetails;
                option.textContent = mailOption.name;
                countrySelect.appendChild(option);
            });
            countrySelect.disabled = false;
            countrySelect.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            countrySelect.innerHTML = '<option value="" disabled selected>No mail account types available</option>';
            countrySelect.disabled = true;
            countrySelect.classList.add('opacity-50', 'cursor-not-allowed');
            selectedCountryData = null;
        }

        countrySelect.onchange = (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];
            if (selectedOption.value) {
                const mailTypeName = selectedOption.value;
                const price = parseFloat(selectedOption.dataset.price);
                const descriptionDetails = selectedOption.dataset.descriptionDetails;
                selectedCountryData = { country: mailTypeName, price: price, descriptionDetails: descriptionDetails };
            } else {
                selectedCountryData = null;
            }
            updateFinalPriceAndButtonState();
        };

    } else { // Logic for other products
        countrySelectLabel.textContent = 'Select Country for KYC:';
        productTypeSection.classList.remove('hidden');
        mailServiceDescriptionSection.classList.add('hidden');

        countrySelect.innerHTML = '<option value="" disabled selected>Select country</option>';
        if (product.countryPrices && product.countryPrices.length > 0) {
            product.countryPrices.forEach(cp => {
                const option = document.createElement('option');
                option.value = cp.country;
                option.dataset.price = cp.price;
                option.textContent = cp.country;
                countrySelect.appendChild(option);
            });
            countrySelect.disabled = false;
            countrySelect.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            countrySelect.innerHTML = '<option value="" disabled selected>No countries available</option>';
            countrySelect.disabled = true;
            countrySelect.classList.add('opacity-50', 'cursor-not-allowed');
            selectedCountryData = null;
        }

        productTypeSelect.innerHTML = '<option value="" disabled selected>Select product type</option>';
        if (product.productTypes && product.productTypes.length > 0) {
            productTypeSelect.innerHTML = `<option value="" disabled selected>Select product type</option>`; // Ensure default option is present
            product.productTypes.forEach(pt => {
                const option = document.createElement('option');
                option.value = pt.name;
                // For PERSONAL PROXY (ID 12), priceAdjustment now carries the base price for the duration type
                // For other products, it remains the price adjustment
                if (product.id === 12) {
                     option.dataset.price = pt.priceAdjustment; // For proxy, price is directly from priceAdjustment
                } else {
                     option.dataset.priceAdjustment = pt.priceAdjustment;
                }
                option.textContent = pt.name;
                productTypeSelect.appendChild(option);
            });
            productTypeSelect.disabled = false;
            productTypeSelect.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            productTypeSelect.innerHTML = '<option value="" disabled selected>No product types available</option>';
            productTypeSelect.disabled = true;
            productTypeSelect.classList.add('opacity-50', 'cursor-not-allowed');
            selectedProductTypeData = null;
        }

        countrySelect.onchange = (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];
            if (selectedOption.value) {
                const countryName = selectedOption.value;
                const price = parseFloat(selectedOption.dataset.price);
                selectedCountryData = { country: countryName, price: price };
            } else {
                selectedCountryData = null;
            }
            updateFinalPriceAndButtonState();
        };

        productTypeSelect.onchange = (event) => {
            const selectedOption = event.target.options[event.target.selectedIndex];
            if (selectedOption.value) {
                const typeName = selectedOption.value;
                let priceAdjustment = parseFloat(selectedOption.dataset.priceAdjustment);
                if (currentProduct.id === 12) {
                    priceAdjustment = parseFloat(selectedOption.dataset.price);
                }
                selectedProductTypeData = { name: typeName, priceAdjustment: priceAdjustment };
            } else {
                selectedProductTypeData = null;
            }
            updateFinalPriceAndButtonState();
        };
    }

    updateFinalPriceAndButtonState();

    productModal.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 50);
}

// Function to update the final price and button state based on both selections
function updateFinalPriceAndButtonState() {
    if (currentProduct.id === 11) {
         if (selectedCountryData) {
            modalSelectedPrice.textContent = `$${selectedCountryData.price.toFixed(2)}`;
            const mailOption = currentProduct.mailAccountOptions.find(opt => opt.name === selectedCountryData.country);
            mailServiceDescriptionContent.textContent = mailOption ? mailOption.descriptionDetails : '';
            addToCartModalBtn.disabled = false;
            addToCartModalBtn.classList.remove('opacity-50', 'cursor-not-allowed');
         } else {
            modalSelectedPrice.textContent = 'Select mail account type';
            mailServiceDescriptionContent.textContent = '';
            addToCartModalBtn.disabled = true;
            addToCartModalBtn.classList.add('opacity-50', 'cursor-not-allowed');
         }
    } else {
        if (selectedCountryData && selectedProductTypeData) {
            let finalPrice = selectedCountryData.price;
            if (currentProduct.id === 12) {
                finalPrice = selectedProductTypeData.priceAdjustment;
            } else {
                finalPrice += selectedProductTypeData.priceAdjustment;
            }
            modalSelectedPrice.textContent = `$${finalPrice.toFixed(2)}`;
            addToCartModalBtn.disabled = false;
            addToCartModalBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        } else {
            modalSelectedPrice.textContent = 'Select country & product type';
            addToCartModalBtn.disabled = true;
            addToCartModalBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
    }
}

// Functions for quantity control in modal
modalIncreaseQuantityBtn.addEventListener('click', () => {
    modalSelectedQuantity++;
    modalQuantityDisplay.textContent = modalSelectedQuantity;
});

modalDecreaseQuantityBtn.addEventListener('click', () => {
    if (modalSelectedQuantity > 1) {
        modalSelectedQuantity--;
        modalQuantityDisplay.textContent = modalSelectedQuantity;
    }
});

// Function to close the product detail modal
function closeProductModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        productModal.classList.add('hidden');
        currentProduct = null;
        selectedCountryData = null;
        selectedProductTypeData = null;
        modalSelectedQuantity = 1;
        countrySelect.value = "";
        productTypeSelect.value = "";
        countrySelect.disabled = false;
        countrySelect.classList.remove('opacity-50', 'cursor-not-allowed');
        productTypeSelect.disabled = false;
        productTypeSelect.classList.remove('opacity-50', 'cursor-not-allowed');
        productTypeSection.classList.remove('hidden');
        mailServiceDescriptionSection.classList.add('hidden');

    }, 300);
}

// Event listener to close modal when close button is clicked
closeModalButton.addEventListener('click', closeProductModal);

// Event listener to close modal when clicking outside modal content
productModal.addEventListener('click', (event) => {
    if (event.target === productModal) {
        closeProductModal();
    }
});

// Event listener for the "Add to Cart" button inside the modal
addToCartModalBtn.addEventListener('click', () => {
    let finalItemPrice;
    if (currentProduct.id === 11) {
        finalItemPrice = selectedCountryData.price;
    } else if (currentProduct.id === 12) {
        finalItemPrice = selectedProductTypeData.priceAdjustment;
    }
    else {
        finalItemPrice = selectedCountryData.price + selectedProductTypeData.priceAdjustment;
    }

    if (currentProduct && selectedCountryData && (currentProduct.id === 11 || selectedProductTypeData)) {
        const productTypeForCart = currentProduct.id === 11 ? selectedCountryData.country : (selectedProductTypeData ? selectedProductTypeData.name : 'N/A');

        addToCart(currentProduct, selectedCountryData, {name: productTypeForCart, priceAdjustment: 0}, finalItemPrice, modalSelectedQuantity);
        closeProductModal();
    } else {
        if (currentProduct.id === 11) {
            alertUser("Please select mail account type first.");
        } else {
            alertUser("Please select country and product type first.");
        }
    }
});

// Function to add a product to the cart (adjusted for country, type, and quantity)
function addToCart(product, countryData, productTypeData, itemPrice, quantity) {
    const itemId = `${product.id}-${countryData.country.replace(/\s/g, '-')}-${productTypeData.name.replace(/\s/g, '-')}`;
    const existingItem = cart.find(item => item.uniqueId === itemId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            uniqueId: itemId,
            id: product.id,
            name: `${product.name} - ${countryData.country} (${productTypeData.name})`,
            description: product.description,
            image: product.image,
            price: itemPrice,
            country: countryData.country,
            productType: productTypeData.name,
            quantity: quantity
        });
    }
    updateCartCount();
    console.log("Cart:", cart);
    alertUser(`${quantity} ${product.name} for ${countryData.country} with ${productTypeData.name} added to cart!`);
}

// Function to update the number of items in the cart icon
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Function to display cart contents in the cart modal
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
        document.querySelector('#cartModalContent > .grid').classList.add('hidden');
        checkoutButton.classList.add('hidden');
    } else {
        emptyCartMessage.classList.add('hidden'); // Hide empty cart message if there are items
        document.querySelector('#cartModalContent > .grid').classList.remove('hidden');
        checkoutButton.classList.remove('hidden');
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'grid grid-cols-[1fr_auto_auto_auto] items-center bg-gray-700 p-3 rounded-lg mb-2';
            cartItemDiv.innerHTML = `
                <div class="flex-grow">
                    <h3 class="text-white text-lg font-semibold">${item.name}</h3>
                </div>
                <div class="flex items-center space-x-1">
                    <button class="remove-one-item-btn bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-1 px-2 rounded-lg transition-all duration-300" data-unique-id="${item.uniqueId}">-</button>
                    <span class="text-white text-lg">${item.quantity}</span>
                    <button class="add-one-item-btn bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-1 px-2 rounded-lg transition-all duration-300" data-unique-id="${item.uniqueId}">+</button>
                </div>
                <span class="text-blue-300 text-lg font-semibold text-right">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-all-item-btn bg-red-800 hover:bg-red-900 text-white text-xs font-bold py-1 px-2 rounded-lg transition-all duration-300 ml-2" data-unique-id="${item.uniqueId}">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        document.querySelectorAll('.add-one-item-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const uniqueId = event.target.dataset.uniqueId;
                changeItemQuantity(uniqueId, 1);
            });
        });
        document.querySelectorAll('.remove-one-item-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const uniqueId = event.target.dataset.uniqueId;
                changeItemQuantity(uniqueId, -1);
            });
        });
        document.querySelectorAll('.remove-all-item-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const uniqueId = event.target.dataset.uniqueId;
                removeAllItem(uniqueId);
            });
        });
    }
}

// Function to change item quantity in the cart
function changeItemQuantity(uniqueId, change) {
    const itemIndex = cart.findIndex(item => item.uniqueId === uniqueId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartCount();
    renderCartItems();
    console.log("Cart after quantity change:", cart);
}

// Function to remove all items of a specific type from the cart
function removeAllItem(uniqueId) {
    const itemIndex = cart.findIndex(item => item.uniqueId === uniqueId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }
    updateCartCount();
    renderCartItems();
    console.log("Cart after all removed:", cart);
}

// Function to clear the entire cart
function clearCart() {
    cart = [];
    updateCartCount();
    renderCartItems();
    alertUser("Cart has been cleared!");
    console.log("Cart cleared:", cart);
}


// Function to open the cart modal
function openCartModal() {
    renderCartItems();
    cartModal.classList.remove('hidden');
    setTimeout(() => {
        cartModalContent.classList.remove('scale-95', 'opacity-0');
        cartModalContent.classList.add('scale-100', 'opacity-100');
    }, 50);
}

// Function to close the cart modal
function closeCartModalFunc() {
    cartModalContent.classList.remove('scale-100', 'opacity-100');
    cartModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        cartModal.classList.add('hidden');
    }, 300);
}

// Event listener to open cart modal
cartButton.addEventListener('click', openCartModal);

// Event listener to close cart modal
closeCartModal.addEventListener('click', closeCartModalFunc);
cartModal.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        closeCartModalFunc();
    }
});

// Event listener for checkout button to open payment channel modal
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alertUser("Your cart is empty. Please add items to proceed.");
        return;
    }
    openPaymentChannelModal();
    closeCartModalFunc();
});

// Functions for payment channel modal
function openPaymentChannelModal() {
    paymentChannelModal.classList.remove('hidden');
    setTimeout(() => {
        paymentChannelModalContent.classList.remove('scale-95', 'opacity-0');
        paymentChannelModalContent.classList.add('scale-100', 'opacity-100');
    }, 50);
}

function closePaymentChannelModalFunc() {
    paymentChannelModalContent.classList.remove('scale-100', 'opacity-100');
    paymentChannelModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        paymentChannelModal.classList.add('hidden');
    }, 300);
}

closePaymentChannelModal.addEventListener('click', closePaymentChannelModalFunc);
paymentChannelModal.addEventListener('click', (event) => {
    if (event.target === paymentChannelModal) {
        closePaymentChannelModalFunc();
    }
});

// Function to generate Telegram/WhatsApp message
function generateOrderMessage() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

    let message = `Hello @kyctime,\n\nI'd like to order KYC services:\n\n`;
    cart.forEach(item => {
        const productName = item.name.split(' - ')[0];
        const countryName = item.country || 'N/A';
        const productType = item.productType || 'N/A';

        message += `Product Name: ${productName}\n`;
        if (item.id === 11) {
            message += `Mail Type: ${countryName}\n`;
            message += `Price per item: $${item.price.toFixed(2)}\n`;
            message += `Quantity: ${item.quantity}\n`;
            message += `Product Type: Mail Service\n\n`;
        } else if (item.id === 12) {
            message += `Country: ${countryName}\n`;
            message += `Price per item: $${item.price.toFixed(2)}\n`;
            message += `Quantity: ${item.quantity}\n`;
            message += `Product Type: Proxy (${productType})\n\n`;
        }
        else {
            message += `Country: ${countryName}\n`;
            message += `Price per item: $${item.price.toFixed(2)}\n`;
            message += `Quantity: ${item.quantity}\n`;
            message += `Product Type: ${productType}\n\n`;
        }
    });
    message += `TOTAL: $${totalPrice} USDT\n\n`;

    return message;
}

// Event listener for Pay with Telegram button
payWithTelegramBtn.addEventListener('click', () => {
    const telegramUrl = `https://t.me/kyctime?text=${encodeURIComponent(generateOrderMessage())}`;
    window.open(telegramUrl, '_blank');
    closePaymentChannelModalFunc();
});

// Event listener for Pay with WhatsApp button
payWithWhatsAppBtn.addEventListener('click', () => {
    const whatsappNumber = "6287888333443";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generateOrderMessage())}`;
    window.open(whatsappUrl, '_blank');
    closePaymentChannelModalFunc();
});

// Event listener for clear cart button
clearCartButton.addEventListener('click', clearCart);

// Simple function to display custom alert (replaces native alert())
function alertUser(message) {
    const existingAlert = document.getElementById('customAlert');
    if (existingAlert) {
        existingAlert.remove();
    }

    const alertDiv = document.createElement('div');
    alertDiv.id = 'customAlert';
    alertDiv.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ease-out transform opacity-0 scale-95';
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.classList.remove('opacity-0', 'scale-95');
        alertDiv.classList.add('opacity-100', 'scale-100');
    }, 100);

    setTimeout(() => {
        alertDiv.classList.remove('opacity-100', 'scale-100');
        alertDiv.classList.add('opacity-0', 'scale-95');
        alertDiv.addEventListener('transitionend', () => alertDiv.remove(), { once: true });
    }, 3000);
}

// Event listener for search input
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Display all products when the page is first loaded
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    updateCartCount();
});

// Event listeners for Important Info Modal
infoPentingButton.addEventListener('click', () => {
    openImportantInfoModal();
});

closeImportantInfoModal.addEventListener('click', () => {
    closeImportantInfoModalFunc();
});

importantInfoModal.addEventListener('click', (event) => {
    if (event.target === importantInfoModal) {
        closeImportantInfoModalFunc();
    }
});

function openImportantInfoModal() {
    importantInfoModal.classList.remove('hidden');
    setTimeout(() => {
        importantInfoModalContent.classList.remove('scale-95', 'opacity-0');
        importantInfoModalContent.classList.add('scale-100', 'opacity-100');
    }, 50);
}

function closeImportantInfoModalFunc() {
    importantInfoModalContent.classList.remove('scale-100', 'opacity-100');
    importantInfoModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        importantInfoModal.classList.add('hidden');
    }, 300);
}

// Event listeners for Proxy Info Modal
closeProxyInfoModal.addEventListener('click', () => {
    closeProxyInfoModalFunc();
});

proxyInfoModal.addEventListener('click', (event) => {
    if (event.target === proxyInfoModal) {
        closeProxyInfoModalFunc();
    }
});

function openProxyInfoModal() {
    proxyInfoModal.classList.remove('hidden');
    setTimeout(() => {
        proxyInfoModalContent.classList.remove('scale-95', 'opacity-0');
        proxyInfoModalContent.classList.add('scale-100', 'opacity-100');
    }, 50);
}

function closeProxyInfoModalFunc() {
    proxyInfoModalContent.classList.remove('scale-100', 'opacity-100');
    proxyInfoModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        proxyInfoModal.classList.add('hidden');
    }, 300);
}

// --- Functions for new icons (order and payment proof) ---
proofOrderIcon.addEventListener('click', () => {
    window.open('https://t.me/dollekycreview', '_blank');
});

proofPaymentIcon.addEventListener('click', () => {
    window.open('https://t.me/kyctime1', '_blank');
});

// --- Functions for new contact admin modal ---
contactAdminIcon.addEventListener('click', () => {
    openContactAdminModal();
});

closeContactAdminModal.addEventListener('click', () => {
    closeContactAdminModalFunc();
});

contactAdminModal.addEventListener('click', (event) => {
    if (event.target === contactAdminModal) {
        closeContactAdminModalFunc();
    }
});

function openContactAdminModal() {
    contactAdminModal.classList.remove('hidden');
    setTimeout(() => {
        contactAdminModalContent.classList.remove('scale-95', 'opacity-0');
        contactAdminModalContent.classList.add('scale-100', 'opacity-100');
    }, 50);
}

function closeContactAdminModalFunc() {
    contactAdminModalContent.classList.remove('scale-100', 'opacity-100');
    contactAdminModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        contactAdminModal.classList.add('hidden');
    }, 300);
}

// Event listener for Telegram Admin chat button
chatTelegramAdminBtn.addEventListener('click', () => {
    const telegramUrl = `https://t.me/kyctime`;
    window.open(telegramUrl, '_blank');
    closeContactAdminModalFunc();
});

// Event listener for WhatsApp Admin chat button
chatWhatsAppAdminBtn.addEventListener('click', () => {
    const whatsappNumber = "6287888333443";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
    closeContactAdminModalFunc();
});
