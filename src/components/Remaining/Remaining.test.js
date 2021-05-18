import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import Remaining from "./Remaining"
import budgetContext from "../../context/context"

describe('Remaining component', () => {
	it('should be display a remaining value', () => {
		let value = { expenses: [], money: { budget: 30 } }

		render(
			<budgetContext.Provider value={value}>
				<Remaining />
			</budgetContext.Provider>
		)
		expect(screen.queryByText('Remaining: $30')).toBeInTheDocument()
	})
})