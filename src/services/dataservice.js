import axios from 'axios';
import Product from '../components/product';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

let catalog =[
  {
      "title": "No Xplode",
      "category": "PreWorkout",
      "price": 43.24,
      "image": "no-xplode.jpeg",
      "_id": "1",
  },
  {
      "title": "6 Star",
      "category": "PreWorkout",
      "price": 37.345,
      "image": "6-star.jpeg",
      "_id": "2",
  },
  {
      "title": "Muscle Milk",
      "category": "Protein",
      "price": 50.00,
      "image": "musclemilk.jpeg",
      "_id": "3",
  },
  {
      "title": "Black Pre",
      "category": "PreWorkout",
      "price": 45.00,
      "image": "blackpre.jpeg",
      "_id": "4",
  },
  {
      "title": "Fortress",
      "category": "Protein",
      "price": 29.4,
      "image": "fortress.jpeg",
      "_id": "5",
  },
  {
      "title": "Vitamin B",
      "category": "Vitamins",
      "price": 20.00,
      "image": "vitb.jpeg",
      "_id": "6",
  },
  {
      "title": "Smart Vitamin",
      "category": "Vitamins",
      "price": 44.56,
      "image": "smartvit.jpeg",
      "_id": "7",
  },

];

class DataService {
 async getProducts(){
      return catalog;
    const response = await axios.get('http://127.0.0.1:5000/api/catalog');

    return response.data;
    }

    async saveProduct(product){
    const response = await axios.get('http://127.0.0.1:5000/api/catalog', product);
    return response.data;
    
  }
  async getCoupons(){
    const response = await axios.get('http://127.0.0.1:5000/api/coupons');
    return response.data;


}
}

export default DataService;