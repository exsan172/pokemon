import '../styles/globals.css'
import Header from '../components/head.components'
import Menu from '../components/menu.components'
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header/>
			<div className='flex flex-col'>
				<div className='flex'>
					<Menu/>
				</div>
				<div className='flex justify-center'>
					<div className="container">
						<Component {...pageProps} />
					</div>
				</div>
			</div>
		</>
	)
}

export default MyApp
