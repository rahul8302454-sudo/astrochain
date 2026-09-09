// ============ FIREBASE CONFIGURATION ============
// Yahan apni Firebase keys daalo (Firebase console se copy karo)

const firebaseConfig = {
    apiKey: "AIzaSyANmp8uHEIRtEHh8BCW0aWc6j7vIdqgl6w",
  authDomain: "astrochain-b1bcf.firebaseapp.com",
  databaseURL: "https://astrochain-b1bcf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "astrochain-b1bcf",
  storageBucket: "astrochain-b1bcf.firebasestorage.app",
  messagingSenderId: "207312544291",
  appId: "1:207312544291:web:48c5609ef5a04180148796"
};

// Firebase Initialize
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Default Products (agar database khali hai)
const DEFAULT_PRODUCTS = [
    {
        id: "default1",
        name: "Aries Zodiac Ring",
        category: "Zodiac Rings",
        description: "Premium quality Aries zodiac sign ring with intricate details. Made with high-quality materials.",
        price: 2499,
        originalPrice: 3999,
        stock: 15,
        image: "https://via.placeholder.com/800x800?text=Aries+Ring",
        images: ["https://via.placeholder.com/800x800?text=Aries+Ring"],
        discount: 38,
        couponCode: "ARIES38"
    },
    {
        id: "default2",
        name: "Taurus Constellation Pendant",
        category: "Pendants",
        description: "Beautiful Taurus constellation pendant with gold finish. Elegant design.",
        price: 1999,
        originalPrice: 2999,
        stock: 20,
        image: "https://via.placeholder.com/800x800?text=Taurus+Pendant",
        images: ["https://via.placeholder.com/800x800?text=Taurus+Pendant"],
        discount: 33,
        couponCode: "TAURUS33"
    },
    {
        id: "default3",
        name: "Gemini Dual Ring",
        category: "Zodiac Rings",
        description: "Dual design Gemini ring representing the twins. Unique and stylish piece.",
        price: 2999,
        originalPrice: 4499,
        stock: 12,
        image: "https://via.placeholder.com/800x800?text=Gemini+Ring",
        images: ["https://via.placeholder.com/800x800?text=Gemini+Ring"],
        discount: 33,
        couponCode: "GEMINI33"
    }
];

// Products load karo Firebase se
function loadProducts(callback) {
    database.ref('products').once('value').then(function(snapshot) {
        const data = snapshot.val();
        if (data) {
            // Convert object to array
            const productsArray = Object.keys(data).map(function(key) {
                return data[key];
            });
            callback(productsArray);
        } else {
            // Database khali hai, default products save karo
            const defaultObj = {};
            DEFAULT_PRODUCTS.forEach(function(product) {
                defaultObj[product.id] = product;
            });
            database.ref('products').set(defaultObj);
            callback(DEFAULT_PRODUCTS);
        }
    }).catch(function(error) {
        console.log('Error:', error);
        callback(DEFAULT_PRODUCTS);
    });
}

// Product add karo
function addProductToCloud(product) {
    const newRef = database.ref('products').push();
    product.id = newRef.key;
    return newRef.set(product);
}

// Product delete karo
function deleteProductFromCloud(productId) {
    return database.ref('products/' + productId).remove();
}
