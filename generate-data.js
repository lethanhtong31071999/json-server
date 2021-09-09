const fs = require("fs");
const faker = require("faker");

// Set locale to use English
faker.locale = "en";

// random data
(() => {
  // Iphone Product
  const iphoneList = [
    {
      id: 1,
      categoriesId: 0,
      name: "Iphone 12",
      phoneTypesId: 0,
      colors: ["purple", "white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-violet-1-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 1000,
          orginalPrices: 1000,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1000,
          orginalPrices: 1000,
          promotionPercents: 0,
        },
        "256GB": {
          salePrices: 1200,
          orginalPrices: 1200,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1400,
          orginalPrices: 2000,
          promotionPercents: 6,
        },
      },
    },
    {
      id: 2,
      categoriesId: 0,
      name: "Iphone 12 Pro Max",
      phoneTypesId: 0,
      colors: ["purple", "white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
    {
      id: 3,
      categoriesId: 0,
      name: "Iphone 12 Pro",
      phoneTypesId: 0,
      colors: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-bac-new-600x600-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
    {
      id: 4,
      categoriesId: 0,
      name: "Iphone 11",
      phoneTypesId: 0,
      colors: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
    {
      id: 5,
      categoriesId: 0,
      name: "Iphone XR",
      phoneTypesId: 0,
      colors: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-hopmoi-den-600x600-2-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
    {
      id: 6,
      categoriesId: 0,
      name: "Iphone SE(2020) (Hộp mới)",
      phoneTypesId: 0,
      colors: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/230410/iphone-se-2020-trang-600x600-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
  ];

  const xiaoMiList = [
    {
      id: 7,
      categoriesId: 0,
      name: "xiao mi 11 lite",
      phoneTypesId: 1,
      colors: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/233241/xiaomi-mi-11-lite-4g-blue-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
    {
      id: 8,
      categoriesId: 0,
      name: "xiao mi poco x3 NFC",
      phoneTypesId: 1,
      colors: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/227900/xiaomi-poco-x3-nfc-xam-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
    {
      id: 9,
      categoriesId: 0,
      name: "xiao mi 10",
      phoneTypesId: 1,
      colors: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/246200/redmi-10-gray-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          orginalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1960,
          orginalPrices: 2000,
          promotionPercents: 20,
        },
        "256GB": {
          salePrices: 2100,
          orginalPrices: 2100,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 3500,
          orginalPrices: 3500,
          promotionPercents: 0,
        },
      },
    },
  ];

  const others = [
    {
      id: 25,
      categoriesId: 0,
      name: "Samsung Galaxy Z Fold3 5G",
      phoneTypesId: 2,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 10,
      categoriesId: 0,
      name: "Samsung Galaxy A52 5G",
      phoneTypesId: 2,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/235440/samsung-galaxy-a52-5g-thumb-black-600x600-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 11,
      categoriesId: 0,
      name: "Samsung Galaxy Z Flold2 5G",
      phoneTypesId: 2,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/226099/samsung-galaxy-z-fold-2-den-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 12,
      categoriesId: 0,
      name: "Samsung Galaxy Z Fold2 5G Đặc Biệt",
      phoneTypesId: 2,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-den-600x600-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 13,
      categoriesId: 0,
      name: "Samsung Galaxy Z Fold3 5G",
      phoneTypesId: 2,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-black-1-1-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 14,
      categoriesId: 0,
      name: "Oppo Reno6 Z 5G",
      phoneTypesId: 3,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 15,
      categoriesId: 0,
      name: "Oppo Reno5 Marvel",
      phoneTypesId: 3,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/236024/oppo-reno5-marvel-thumb-600x600-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 16,
      categoriesId: 0,
      name: "Oppo A15s",
      phoneTypesId: 3,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/229948/oppo-a15s-xanh-600x600-3-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 17,
      categoriesId: 0,
      name: "Oppo Find X3 Pro 5G",
      phoneTypesId: 3,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-black-001-1-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 18,
      categoriesId: 0,
      name: "Vivo Y72 5G",
      phoneTypesId: 4,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/236431/vivo-y72-5g-blue-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 24,
      categoriesId: 0,
      name: "Vivo Y53s",
      phoneTypesId: 4,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/240286/vivo-y53s-xanh-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 19,
      categoriesId: 0,
      name: "Vivo Y11",
      phoneTypesId: 4,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/212357/vivo-y11-600-600-do-1-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 20,
      categoriesId: 0,
      name: "Vivo Y1s",
      phoneTypesId: 4,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/225851/vivo-y1s-xanh-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
    {
      id: 21,
      categoriesId: 0,
      name: "Vivo Y20",
      phoneTypesId: 4,
      color: ["white"],
      imageUrl:
        "https://cdn.tgdd.vn/Products/Images/42/227525/vivo-y20-white-600x600.jpg",
      rams: {
        "64GB": {
          salePrices: 900,
          originalPrices: 1000,
          promotionPercents: 10,
        },
        "128GB": {
          salePrices: 1200,
          originalPrices: 1200,
          promotionPercents: 0,
        },
        "128GB": {
          salePrices: 1400,
          originalPrices: 1400,
          promotionPercents: 0,
        },
        "512GB": {
          salePrices: 1600,
          originalPrices: 2000,
          promotionPercents: 40,
        },
      },
    },
  ];

  const db = {
    categories: [
      {
        id: 0,
        name: "Phones",
      },
      {
        id: 1,
        name: "Laptops",
      },
      {
        id: 2,
        name: "Tablets",
      },
      {
        id: 3,
        name: "Watches",
      },
    ],
    phoneTypes: [
      {
        id: 0,
        name: "Iphone",
        country: "USA",
      },
      {
        id: 1,
        name: "Xiao Mi",
        country: "China",
      },
      {
        id: 2,
        name: "Sam Sung",
        country: "Korea",
      },
      {
        id: 3,
        name: "Oppo",
        country: "China",
      },
      {
        id: 4,
        name: "Vivo",
        country: "China",
      },
    ],
    products: [...iphoneList, ...xiaoMiList, ...others],
  };

  // Write db Object to db.json file
  fs.writeFile("./db.json", JSON.stringify(db), successfullCallback);

  function successfullCallback() {
    console.log("Generate data successfully");
  }
})();
