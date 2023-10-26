const catalog = [
    { id: 1, name: "Shoe 1", price: 50, category: "Sneakers", image: "public/images/61KmRPm1tgL._AC_UY1000_.jpg" },
    { id: 2, name: "Shoe 2", price: 60, category: "Sneakers", image: "public/images/71ciGd0SvBL._AC_SR14001050_.jpg" },
    { id: 3, name: "Shoe 3", price: 70, category: "Sneakers", image: "public/images/81KnZ32WrzL._AC_UY1000_.jpg" },
    { id: 4, name: "Shoe 4", price: 80, category: "Boots", image: "public/images/10040419_3-4_front_warm.jpg" },
    { id: 5, name: "Shoe 5", price: 90, category: "Boots", image: "image5.jpg" },
    { id: 6, name: "Shoe 6", price: 100, category: "Boots", image: "public/images/11822006.80.jpg" },
    { id: 7, name: "Shoe 7", price: 110, category: "Sandals", image: "public/images/151183.jpg" },
    { id: 8, name: "Shoe 8", price: 120, category: "Sandals", image: "" },
    { id: 9, name: "Shoe 9", price: 130, category: "Sandals", image: "image9.jpg" },
    { id: 10, name: "Shoe 10", price: 140, category: "Sneakers", image: "image10.jpg" },
    { id: 11, name: "Shoe 11", price: 150, category: "Sneakers", image: "image11.jpg" },
    { id: 12, name: "Shoe 12", price: 160, category: "Sneakers", image: "image12.jpg" },
    { id: 13, name: "Shoe 13", price: 170, category: "Boots", image: "image13.jpg" },
    { id: 14, name: "Shoe 14", price: 180, category: "Boots", image: "image14.jpg" },
    { id: 15, name: "Shoe 15", price: 190, category: "Boots", image: "image15.jpg" },

  ];
  
  
  const DataService = {
    getCatalog: () => catalog,
    getCategories: () => {
      let categories = new Set();
      for (let product of catalog) {
        categories.add(product.category);
      }
      return Array.from(categories);
    },
  };
  
  export default DataService;// dataservice.js

export const getProducts = async () => {
  const response = await fetch('/api/products');
  const data = await response.json();
  return data;
};