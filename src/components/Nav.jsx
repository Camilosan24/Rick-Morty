import rickAndMorty from "../svg/rickymorty.png";
import SearchInput from "./SearchInput";

const Nav = () => {
	return (
		<nav className="nav">
			<div className="icon-image">
				<div className="image-container">
					<img src={rickAndMorty} width="80" height="40" alt="" />
				</div>
				<span> Rick & Morty</span>
			</div>
			{/* <div className="navbar-items"></div> */}
			<div className="navbar-search">
				<SearchInput />
			</div>
		</nav>
	);
};

export default Nav;
