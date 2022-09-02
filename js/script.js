"use strict";
// Сделать запрос в API использую fetch

// https://jsonplaceholder.typicode.com/users - необходимо получить список пользователей

// После получения результата найти пользователя (используя методы массива), который работает в компании "Johns Group"

// Получение данных нужно реализовать одним из способов (.then/.catch) или (async/await)

const API_URL = "https://jsonplaceholder.typicode.com/users";


fetch(API_URL)
  .then((response) => response.json())
  .then((users) => {
   const result = users.find(({ company: { name } }) => name === "Johns Group")
   console.log(result)
  })
    
  .catch((error) => console.error(error))

        
const getUser = async () => {
try {
    const response = await fetch(API_URL);
    const users = await response.json();
    const result = users.find(({ company: { name } }) => name === "Johns Group")
    console.log(result)
  
  } catch (error) {
    console.log(error);
  }
};
getUser();