import * as React from 'react'
import Layout from "src/pages/components/layout.js"

import Button from "@material-ui/core/Button"

const ProductsPage = () => {
	return (
		<Layout pageTitle="Products">
			<p>Products page</p>
			 <Button variant="contained">Fancy button!</Button>
		</Layout>
	)
}

export default ProductsPage
