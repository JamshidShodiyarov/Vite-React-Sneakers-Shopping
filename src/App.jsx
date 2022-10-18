import { Navbar, Cart, Hero, Sales, FlexContent, Stories, Footer } from './component';
import {
	heroapi,
	popularsales,
	toprateslaes,
	highlight,
	sneaker,
	story,
	footerAPI,
} from './data/data.js';

function App() {
	return (
		<>
			<Navbar />
			<Cart />
			<main className="flex flex-col gap-16 relative">
				<Hero {...heroapi} />
				<Sales endpoint={popularsales} ifExists />
				<FlexContent endpoint={highlight} ifExists />
				<Sales endpoint={toprateslaes} />
				<FlexContent endpoint={sneaker} />
				<Stories {...story} />
			</main>
			<Footer {...footerAPI} />
		</>
	);
}

export default App;
