// let data = {
//     name: '이름 없는 식당',
//     category: '서양식',
//     address:{
//         city: 'Busan',
//         detail: 'somewhere',
//         zipcode: '231312'
//     },
//     menu:[{name:"rose pasta",price:20000,category:"PASTA"},{name:"garlic soup", price:6000,category:"SOUP"}]
// }

export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[]
}

export type Address = {
    city:string,
        detail:string,
        zipCode:Number;
}

type Menu = {
    name:string;
    price:number;
    category:string;
}