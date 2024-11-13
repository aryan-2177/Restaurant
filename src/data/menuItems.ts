import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 1,
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes grilled to perfection',
    price: 180,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },
  {
    id: 2,
    name: 'Chicken Tikka',
    description: 'Tender chicken pieces marinated in spices and grilled',
    price: 170,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400',
    isVeg: false
  },
  {
    id: 3,
    name: 'Veg Spring Rolls',
    description: 'Crispy rolls filled with vegetables',
    price: 120,
    category: 'Appetizers',
    image: 'https://asianinspirations.com.au/wp-content/uploads/2019/09/R02395_Vegetarian_Spring_Rolls-2.jpg',
    isVeg: true
  },
  {
    id: 27,
    name: 'Momos',
    description: 'Veg crispy momos',
    price: 100,
    category: 'Appetizers',
    image: 'https://media.istockphoto.com/id/1349927753/photo/nepali-steamed-dumpling.jpg?b=1&s=170667a&w=0&k=20&c=WMFICz0s3j3zeK_081paEbyHeJOhsA78KPtzEQxa26Q=',
    isVeg: true
  },
  {
    id: 28,
    name: 'Chicken Nuggets',
    description: 'Crispy nuggets balls of chicken',
    price: 200,
    category: 'Appetizers',
    image: 'https://media.istockphoto.com/id/1400044677/photo/chicken-tenders-breaded-nuggets-with-a-bbq-dip-and-french-fries.jpg?b=1&s=170667a&w=0&k=20&c=-vmbeYsyYWIECrV6sP0ui2HMSTG8VOS0Rmj2NTmkz9A=',
    isVeg: false
  },  
  {
    id: 4,
    name: 'Chicken 65',
    description: 'Spicy deep-fried chicken',
    price: 140,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&q=80&w=400',
    isVeg: false
  },
  {
    id: 5,
    name: 'Hara Bhara Kebab',
    description: 'Spinach and green pea patties',
    price: 160,
    category: 'Appetizers',
    image: 'https://www.healthkart.com/connect/wp-content/uploads/2023/01/900x500_banner_HK-hara-bhara-kabab.png',
    isVeg: true
  },

  // Main Course - Vegetarian
  {
    id: 6,
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese in rich tomato gravy',
    price: 340,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },
  {
    id: 7,
    name: 'Dal Makhani',
    description: 'Creamy black lentils',
    price: 280,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },
  {
    id: 8,
    name: 'Malai Kofta',
    description: 'Potato and cheese dumplings in creamy gravy',
    price: 320,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },

  // Main Course - Non-Vegetarian
  {
    id: 9,
    name: 'Butter Chicken',
    description: 'Tender chicken in rich tomato-based curry',
    price: 380,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=400',
    isVeg: false
  },
  {
    id: 10,
    name: 'Mutton Rogan Josh',
    description: 'Kashmiri style lamb curry',
    price: 420,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&q=80&w=400',
    isVeg: false
  },

  // Rice Dishes
  {
    id: 11,
    name: 'Chicken Biryani',
    description: 'Fragrant rice with spiced chicken',
    price: 360,
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=400',
    isVeg: false
  },
  {
    id: 12,
    name: 'Veg Pulao',
    description: 'Aromatic rice with mixed vegetables',
    price: 280,
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },
  {
    id: 13,
    name: 'Jeera Rice',
    description: 'Cumin flavored rice',
    price: 220,
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },

  // Breads
  {
    id: 14,
    name: 'Butter Naan',
    description: 'Soft bread from tandoor',
    price: 60,
    category: 'Breads',
    image: 'https://th.bing.com/th/id/OIP.iDNl8opfObVNTxiRnuQV4wHaLH?rs=1&pid=ImgDetMain',
    isVeg: true
  },
  {
    id: 15,
    name: 'Garlic Naan',
    description: 'Garlic flavored tandoor bread',
    price: 70,
    category: 'Breads',
    image: 'https://th.bing.com/th/id/OIP.jJukL9az_qB1PLuLN2kgiAHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain',
    isVeg: true
  },
  {
    id: 16,
    name: 'Laccha Paratha',
    description: 'Layered whole wheat bread',
    price: 60,
    category: 'Breads',
    image: 'https://i1.wp.com/www.cookingfromheart.com/wp-content/uploads/2016/12/Laccha-Paratha-5.jpg?resize=1022%2C641',
    isVeg: true
  },

  // Street Food
  {
    id: 17,
    name: 'Pani Puri',
    description: 'Crispy puris with spicy water',
    price: 120,
    category: 'Street Food',
    image: 'https://media.istockphoto.com/id/1621786935/photo/panipuri.webp?b=1&s=170667a&w=0&k=20&c=llq7mWf0YvWe50rdkXiP8g5VJa-kb04yYCf5MT-FLns=',
    isVeg: true
  },
  {
    id: 18,
    name: 'Samosa',
    description: 'Crispy pastry with spiced potato filling',
    price: 40,
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },
  {
    id: 19,
    name: 'Chicken Kathi Roll',
    description: 'Grilled chicken wrapped in paratha',
    price: 180,
    category: 'Street Food',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=400',
    isVeg: false
  },

  // Beverages
  {
    id: 20,
    name: 'Masala Chai',
    description: 'Indian spiced tea',
    price: 40,
    category: 'Beverages',
    image: 'https://carameltintedlife.com/wp-content/uploads/2021/01/Masala-Chai-.jpg',
    isVeg: true
  },
  {
    id: 21,
    name: 'Mango Lassi',
    description: 'Sweet yogurt drink with mango',
    price: 120,
    category: 'Beverages',
    image: 'https://th.bing.com/th/id/OIP.xpvyVy-U8LxqpDtCLZF2qAHaLH?rs=1&pid=ImgDetMain',
    isVeg: true
  },
  {
    id: 22,
    name: 'Fresh Lime Soda',
    description: 'Refreshing lime-based drink',
    price: 80,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=400',
    isVeg: true
  },
  {
    id: 23,
    name: 'Cold Coffee',
    description: 'Chilled coffee with ice cream',
    price: 150,
    category: 'Beverages',
    image: 'https://www.cookwithmanali.com/wp-content/uploads/2022/04/Cold-Coffee.jpg',
    isVeg: true
  },

  // Desserts
  {
    id: 24,
    name: 'Gulab Jamun',
    description: 'Deep-fried milk solids in sugar syrup',
    price: 100,
    category: 'Desserts',
    image: 'https://th.bing.com/th/id/OIP.povaUd1_FMyb0x0mjclU8gHaHY?rs=1&pid=ImgDetMain',
    isVeg: true
  },
  {
    id: 25,
    name: 'Rasmalai',
    description: 'Soft cottage cheese dumplings in milk',
    price: 120,
    category: 'Desserts',
    image: 'https://th.bing.com/th/id/OIP.fMu0uuqjNVYb4HMLEKf2AgHaE7?rs=1&pid=ImgDetMain',
    isVeg: true
  },
  {
    id: 29,
    name: 'Rasogulla',
    description: 'Soft sweet soaked in syrup',
    price: 120,
    category: 'Desserts',
    image: 'https://recipes.timesofindia.com/thumb/52743612.cms?imgsize=700158&width=800&height=800',
    isVeg: true
  },
  {
    id: 26,
    name: 'Kheer',
    description: 'Rice pudding with nuts',
    price: 100,
    category: 'Desserts',
    image: 'https://media.istockphoto.com/id/1317649946/photo/close-up-of-creamy-sabudana-kheer-garnished-with-dry-fruits-indian-delicious-dessert-served.webp?b=1&s=170667a&w=0&k=20&c=405E_3-xse6QRl6V5DXCJKh5A4QLL3GpTevvek5ePqk=',
    isVeg: true
  }
];

export default menuItems;