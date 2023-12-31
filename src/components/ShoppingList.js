<<<<<<< HEAD
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
=======
import { plantList } from "../datas/plantList";
>>>>>>> master

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
<<<<<<< HEAD
	)
=======
	);
>>>>>>> master

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
<<<<<<< HEAD
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
=======
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>
						{plant.name} {plant.isBestSale && <span>🔥</span>}
>>>>>>> master
					</li>
				))}
			</ul>
		</div>
<<<<<<< HEAD
	)
}

export default ShoppingList
=======
	);
}

export default ShoppingList;
>>>>>>> master
