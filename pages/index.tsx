import Catalog from '@components/Catalog/Catalog'
import MainSlider from '@components/MainSlider/MainSlider'
import Layout from 'components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Layout title='Грильница'>
			<MainSlider />
			<Catalog />
		</Layout>
	)
}

export default Home
