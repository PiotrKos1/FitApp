import { useState } from 'react'
import { GoCheck } from 'react-icons/go'

function MealEdit({meal, onSave}) {
	const [editName, setEditName] = useState(meal.name)

	const handleSubmit = event => {
		event.preventDefault()
		onSave(editName, meal.id)
	}

	const handleChange = event => {
		setEditName(event.target.value)
	}

	return (
		<div class='is-flex'>
			<form class='is-flex' onSubmit={handleSubmit}>
				<div>
					<button class=' button is-small is-primary'>
						<GoCheck class='is-size-4 has-text-light is-clickable' />
					</button>
				</div>
				<div class='pl-2'>
					<input
						value={editName}
						onChange={handleChange}
						class='input is-small'
						type='text'
						placeholder="Edit meal's name"
					/>
				</div>
			</form>
		</div>
	)
}

export default MealEdit
