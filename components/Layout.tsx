import Head from 'next/head'
// import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Footer from './Footer/Footer'

type LayoutProps = {
	title?: string
	description?: string
	children?: any
}

function Layout({ title = '', description = '', children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta property='og:description' content={description} />
			</Head>
			<div className='wrapper'>
				<div className='content'>
					<Header />
					{children}
					<Footer />
				</div>
				{/* <Footer /> */}
			</div>
		</>
	)
}

export default Layout
