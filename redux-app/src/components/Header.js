import React from 'react'
import SearchBar from './SearchBar'

export default function Header(props) {
	return (
		<div className="header">
			<div className="search">
				<h1> MTG </h1>
				<SearchBar />
			</div>
			<nav className="nav">
				<a href=""> About </a>
				<a href=""> Life Tracker </a>
				<a href=""> Favorites </a>
			</nav>
		</div>
	)
}
