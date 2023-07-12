import { createContext, useCallback, useState, useEffect } from "react";
import axios from "axios";



const CalculatorContext = createContext()

function Provider({children}) {
    const [meals, setMeals] = useState([])

	const createMeal = nameMeal => {
		if (nameMeal !== '') {
			const updatedMeals = [...meals, { name: nameMeal, id: Math.round(Math.random() * 9999), products:[] }]
			setMeals(updatedMeals)
			console.log(meals)
		}
	}

	const editNameMeal = (editName, id) => {
		const updatedMeals = meals.map(meal => {
			if (meal.id === id) {
				return { ...meal, name: editName }
			}
			return meal
		})
		setMeals(updatedMeals)
	}

	const createProduct = (nameProduct, id) => {
		const updatedMeals = meals.map((meal)=>{
			if(meal.id === id) {
				return {...meal, products: [...meal.products, {name: nameProduct,kcal:300, protein:30, carbo:300, fat:50, id:Math.round(Math.random() * 9999)}]}
			} return meal
		})
		setMeals(updatedMeals)
		console.log(meals)
	}

	const deleteProduct = (id) => {
		// const updatedMeals = meals.map((meal)=>{
		// 	meal.products.filter((product)=>{
		// 		return product.id !== id})
		// 	})
		// setMeals(updatedMeals)

		const example = meals.map((meal)=>{
			meal.products.filter((product, id)=>{
				return product.id !== id
			})
		})
		console.log(example)
	}
 


	// const [totalNutritions, setTotalNutritions] = useState([])
	// const [historyNutritions, setHistoryNutritions] = useState([])
	
	// const [products, setProducts] = useState([])
    // const [param, setParam] = useState('')

	
	

	// const createHistoryNutritions = (kcal,protein,carbo,fat) => {
	// 	const updatedHistoryNutritions = [...historyNutritions, {kcal, protein, carbo, fat, id:Math.round(Math.random() * 9999) }]
	// 	setHistoryNutritions(updatedHistoryNutritions)
	// 	setMeals([])
	// 	setTotalNutritions([])
	// 	setProducts([])
	// }



	// const calculateKcal = (kcal, fat, carbo, protein, productID) => {
	// 	const updatedNutritions = [...totalNutritions, { kcal, fat, carbo, protein, id: productID }]
	// 	setTotalNutritions(updatedNutritions)

	// }

	// const deleteNutrition = id => {
	// 	const updatedNutritions = totalNutritions.filter(nutrition => {
	// 		return nutrition.id !== id
	// 	})
	// 	setTotalNutritions(updatedNutritions)
	// }

	

	// const deleteMeal = id => {
	// 	const updatedMeals = meals.filter(meal => {
	// 		return meal.id !== id
	// 	})
	// 	setMeals(updatedMeals)
	// 	setTotalNutritions(updatedMeals)
	// }

	

	// useEffect(()=>{
    //     createProduct();
    // },[param])



	// const createProduct = useCallback(async () => {
    //     if(param !== '') {
    //     const response = await axios.get(`https://api.edamam.com/api/nutrition-data?app_id=a4a86ffa&app_key=%20061018aa209045078cdcab315ca4ba77
    //     &ingr=${param}`)
    //     const kcal = response.data.calories
    //     const name = response.data.ingredients[0].parsed[0].foodMatch;
    //     const fat = Math.round(response.data.totalDaily.FAT.quantity);
    //     const carbo = Math.round(response.data.totalDaily.CHOCDF.quantity);
    //     const protein = Math.round(response.data.totalDaily.PROCNT.quantity);
    //     const productID = Math.round(Math.random() * 9999)

	// 	const xyz = meals.map((meal)=>{ 
	// 	const updatedMeals = [...meals, {name:meal.name, id: meal.id, product:[...meal.product, {kcal:100}]}]
	// 	setMeals(updatedMeals)
	// })
	// console.log(xyz)

    //     // const updatedProducts = [
    //     //     ...products, 
	// 	// 		{
    //     //         kcal, name, fat, carbo, protein,
    //     //         id: productID }
		
    //     // ]

    //     // setProducts(updatedProducts)
    //     calculateKcal(kcal, fat, carbo, protein, productID)
    //     setParam('')

    // }
    // })

	

    // const getNameProduct = (nameProduct) => {
		
    //     setParam(nameProduct)
		
	// }
	
    // const deleteProduct = (id) => {
    //     const updatedProducts = products.filter(product => {return product.id !== id})
    //     setProducts(updatedProducts)
        
    // }



	


    const valueToShare = {
        meals,
		createMeal,
		editNameMeal,
		createProduct,
		deleteProduct,
        // totalNutritions,
        // calculateKcal,
        // deleteNutrition,
        // createMeal,
        // deleteMeal,
        // editMeal,
		// createHistoryNutritions,
		// historyNutritions,
		// createProduct,
		// products,
		// getNameProduct,
		// deleteProduct,
    }

    return (
        <CalculatorContext.Provider value={valueToShare} >
            {children}
        </CalculatorContext.Provider>
    )
}


export {Provider};
export default CalculatorContext;