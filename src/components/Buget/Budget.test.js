import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import budgetContext from "../../context/context"
import Budget from "./Budget"

describe('Budget component', () => {
	it('should be display a budget value', () => {
		let value = {money: { budget: 20 } }

		render(
			<budgetContext.Provider value={value}>
				<Budget />
			</budgetContext.Provider>
		)
		expect(screen.queryByText('Budget: $20')).toBeInTheDocument()
	})
})