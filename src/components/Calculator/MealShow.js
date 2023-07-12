import { useState, useContext } from "react";
import MealEdit from "./MealEdit";
import CalculatorContext from '../../context/CalculatorContext'
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductsList";

function MealShow({meal}) {
    const {editNameMeal, setMeals} = useContext(CalculatorContext)
    const [showEditMeal, setShowEditMeal] = useState(false)

    const showEdit = () => {
        setShowEditMeal(!showEditMeal)
    }

    const saveEdit = (editName, id) => {
                setShowEditMeal(false)
                editNameMeal(editName, id)
            }


    let content = <h6 class='title is-4'>{meal.name}</h6>

    if(showEditMeal) {
        content = <MealEdit meal={meal} onSave={saveEdit} />
    } 

    // const example = meal.products.map((pr)=>{return <div key={pr.id}>
    //     <div>{pr.name}</div>
    //     <div>{pr.kcal}</div>
    //     <div>{pr.protein}</div>

    //     </div> })
    // const deleteProduct = (id) => {
	// 	const updatedMeals = meal.products.filter((product)=>{
	// 			return product.id !== id})
			
	// 	setMeals(updatedMeals)
	// 	// console.log(meals)
	// }

	return (
		<div class='pt-5'>
			<div class='m-3 is-flex'>
 				<div>
 					{content}
                    {/* {meal.name} */}
				</div>
 				<div class='pl-2'>
					<button class='button is-danger is-small'>delete</button>
				</div>
 				<div class='pl-2'>
 					<button onClick={showEdit} class='button is-info is-small'>edit</button>
            
			</div>
 			</div>
        <ProductAdd meal={meal} />
        <ProductList meal={meal} />
        {/* {example} */}
	</div>)
}

export default MealShow;

// import { useContext, useState, useEffect, useCallback } from 'react'
// import ProductAdd from './ProductAdd'
// import ProductList from './ProductsList'
// import MealEdit from './MealEdit'
// import axios from 'axios'
// import CalculatorContext from '../../context/CalculatorContext'


// function MealShow({  */}
//
// 	// const [products, setProducts] = useState([])
//     // const [param, setParam] = useState('')
//     const [showEditMeal, setShowEditMeal] = useState(false)
//     const {deleteMeal, calculateKcal, editMeal, createProduct, param} = useContext(CalculatorContext)
//     // (()=>{
//     //     const initialValue = [];
//     //     const productsJson = localStorage.getItem('product')
//     //     if (productsJson !== null ) {
//     //         return JSON.parse(productsJson)
//     //     }
//     //     return initialValue;
//     // })

    
//     // useEffect(()=>{
//     //     createProduct();
//     // },[param])

//     // useEffect(()=>{
//     //     getProducts()
//     // })

//     // useEffect(()=>{
//     //     saveProducts()
//     // },[products])

    


//     // const createProduct = useCallback(async () => {
//     //     if (param !== '') {
//     //     const response = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=a4a86ffa&app_key=%20061018aa209045078cdcab315ca4ba77
//     //     &ingr=${param}`)
//     //     const kcal = response.data.calories
//     //     const name = response.data.ingredients[0].parsed[0].foodMatch;
//     //     const fat = Math.round(response.data.totalDaily.FAT.quantity);
//     //     const carbo = Math.round(response.data.totalDaily.CHOCDF.quantity);
//     //     const protein = Math.round(response.data.totalDaily.PROCNT.quantity);
//     //     const productID = Math.round(Math.random() * 9999)
//     //     const updatedProducts = [
//     //         ...products, {
//     //             kcal, name, fat, carbo, protein, id: productID }
//     //     ]
        

//     //     setProducts(updatedProducts)
//     //     calculateKcal(kcal, fat, carbo, protein, productID)
//     // }})

//     // const saveProducts = () => {
//     //     localStorage.setItem('product', JSON.stringify(products))
//     // }
 

//     // const deleteProduct = (id) => {
//     //     const updatedProducts = products.filter(product => {return product.id !== id})
//     //     setProducts(updatedProducts)
        
//     // }

//     const handleClick = () => {
//         deleteMeal(meal.id)
//     }

//     // const getNameProduct = (nameProduct) => {
//     //     setParam(nameProduct)
//     // }

    



 
// // useEffect(()=>{
// //     const createProduct = async () => { 
// //         if (param !== '') {
// //         const response = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=a4a86ffa&app_key=%20061018aa209045078cdcab315ca4ba77&ingr=${param}`).then(response => {
// //         const kcal = response.data.calories
// //         const name = response.data.ingredients[0].parsed[0].foodMatch;
// //         const fat = Math.round(response.data.totalDaily.FAT.quantity);
// //         const carbo = Math.round(response.data.totalDaily.CHOCDF.quantity);
// //         const protein = Math.round(response.data.totalDaily.PROCNT.quantity);
// //         const productID = Math.round(Math.random() * 9999)
// //         const updatedProducts = [
// //             ...products, {
// //                 kcal, name, fat, carbo, protein, id: productID }
// //         ]
// //         setProducts(updatedProducts)
// //         calculateKcal(kcal, fat, carbo, protein, productID)
    
// //         }
// //     )
// // }}
// // createProduct()
// // }
// // ,[param])

// // const rendered = meal.product.map((pr)=>{return <div key={pr.id}>{pr.kcal}</div>})
    
   
    
//     const showEdit = () => {
//         setShowEditMeal(!showEditMeal)
//     }

//     const saveEdit = (editName, id) => {
//         setShowEditMeal(false)
//         editMeal(editName, id)
//     }

//     
// let content = <h6 class='title is-4'>{meal.name}</h6>
//     if (showEditMeal) {
//         content = <MealEdit  
//         onSave={saveEdit}
//          meal={meal} />
//     } 


// 	return (
// 		<div class='pt-5'>
// 			<div class='m-3 is-flex'>
// 				<div>
// 					{content}
// 				</div>
// 				<div class='pl-2'>
// 					<button onClick={handleClick} class='button is-danger is-small'>delete</button>
// 				</div>
// 				<div class='pl-2'>
// 					<button onClick={showEdit} class='button is-info is-small'>edit</button>
            
// 				</div>
// 			</div>
//             {/* {rendered} */}
// 			<ProductAdd 
//             meal={meal}
//             // getNameProduct={getNameProduct}
//              />
// 			<ProductList 
//             // deleteProduct={deleteProduct} products={products}
//              />
// 		</div>
// 	)
// }

// export default MealShow
