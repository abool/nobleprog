import * as React from "react"
import Layout from "src/pages/components/layout.js"
import {StaticImage } from 'gatsby-plugin-image'
import {EmbedVideo } from 'gatsby-remark-embed-video'

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>Ma page quoi</p>
			<StaticImage
				alt="Alt ici"
				src="http://www.saone-et-loire.cci.fr/sites/default/files/styles/carrousel_315px/public/images/carrousel/jpo-cfa-bfc.jpg?itok=N84LpdJB">
			</StaticImage>
		</Layout>
	)
}

export default IndexPage
