const data = {
  products: [
    {
      id: 1,
      name: "Terminal Pizza",
      imgUrl: "./images/iteration-2-images/pictures/food-1.png",
      price: 60,
      rate: 4.8,
      stock: 150,
      desc: "Terminal Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.",
    },
    {
      id: 2,
      name: "Position Absolute Acı Pizza",
      imgUrl: "./images/iteration-2-images/pictures/food-2.png",
      price: 85.5,
      rate: 4.9,
      stock: 200,
      desc: "Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.",
    },
    {
      id: 3,
      name: "useEffect Tavuklu Burger",
      imgUrl: "./images/iteration-2-images/pictures/food-3.png",
      price: 75.5,
      rate: 4.7,
      stock: 100,
      desc: "useEffect kullanmayi seviyorsan",
    },
  ],

  ingredients: [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Roka",
  ],

  size: ["S", "M", "L"],

  categories: [
    {
      id: 1,
      name: "YENİ! Kore",
      altName: "Ramen",
      icon: "./images/iteration-2-images/icons/1.svg",
    },
    {
      id: 2,
      name: "Pizza",
      altName: "Pizza",
      icon: "./images/iteration-2-images/icons/2.svg",
    },
    {
      id: 3,
      name: "Burger",
      altName: "Burger",
      icon: "./images/iteration-2-images/icons/3.svg",
    },
    {
      id: 4,
      name: "Kızartmalar",
      altName: "French Fries",
      icon: "./images/iteration-2-images/icons/4.svg",
    },
    {
      id: 5,
      name: "Fast Food",
      altName: "Fast Food",
      icon: "./images/iteration-2-images/icons/5.svg",
    },
    {
      id: 6,
      name: "Gazlı İçecek",
      altName: "Soft Drinks",
      icon: "./images/iteration-2-images/icons/6.svg",
    },
  ],

  bannerCards: [
    {
      id: 1,
      title: "Özel Lezzetus",
      subTitle: "Position Absolute Acı Burger",
      imgUrl: "./images/iteration-2-images/cta/kart-1.png",
    },
    {
      id: 2,
      title: "Hackathlon Burger Menü",
      imgUrl: "./images/iteration-2-images/cta/kart-2.png",
    },
    {
      id: 3,
      spanText: "Çoooook",
      title: "hızlı npm gibi kurye",
      imgUrl: "./images/iteration-2-images/cta/kart-3.png",
    },
  ],

  instaPosts: [
    {
      id: 1,
      label: "Instagram gönderisi 1",
      imgUrl: "./images/iteration-2-images/footer/insta/li-0.png",
    },
    {
      id: 2,
      label: "Instagram gönderisi 2",
      imgUrl: "./images/iteration-2-images/footer/insta/li-1.png",
    },
    {
      id: 3,
      label: "Instagram gönderisi 3",
      imgUrl: "./images/iteration-2-images/footer/insta/li-2.png",
    },
    {
      id: 4,
      label: "Instagram gönderisi 4",
      imgUrl: "./images/iteration-2-images/footer/insta/li-3.png",
    },
    {
      id: 5,
      label: "Instagram gönderisi 5",
      imgUrl: "./images/iteration-2-images/footer/insta/li-4.png",
    },
    {
      id: 6,
      label: "Instagram gönderisi 6",
      imgUrl: "./images/iteration-2-images/footer/insta/li-5.png",
    },
  ],
  productRange: ["Terminal Pizza","5 Kişilik Hackathlon Pizza", "useEffect Tavuklu Pizza", "Beyaz Console Frosty", "Testler Geçti Mutlu Burger", "Position Absolute Acı Burger"]
};

export default data;
