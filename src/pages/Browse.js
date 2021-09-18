import dnd from "../img/dnd.jpg";

function Browse() {
	return (
		<>
			<header>
				<div className="container header">
					<div className="logo head">
						<img src="./img/logo.png" alt="logo" className="logoimg" />
					</div>
					<div className="searchBar head">
						<input type="text" placeholder="Search.." name="search" className="textInput" />
						<button className="btn srchbtn">Search</button>
					</div>
					<ul className="navbar head">
						<li>
							<a href="./index.html">Home</a>
						</li>
						<li>
							<a href="/" className="here">
								Browse
							</a>
						</li>
						<li>
							<a href="create.html">Create</a>
						</li>
						<li className="userPic">
							<a href="./profile.html">
								<img src="./img/pfpic.png" alt="" />
							</a>
						</li>
					</ul>
				</div>
			</header>

			{/* <!-- section1: slide --> */}
			<section>
				<div className="container section bottomhalf">
					<h1>Recommended Communities</h1>
					<div className="slider">
						<button className="slidebtn">{"<"}</button>
						<div className="cardWrapper">
							<ul className="cardContainer">
								<li className="card">
									<a href="/">
										<img src="./img/grow.jpg" alt="" />
									</a>
								</li>
								<li className="card">
									<a href="./community.html">
										<img src="./img/dnd.jpg" alt="" />
									</a>
								</li>
								<li className="card">
									<a href="/">
										<img src="./img/dough.jpg" alt="" />
									</a>
								</li>
								{/* <!-- <li className="card">community 4</li>
                        <li className="card">community 5</li> --> */}
								{/* <!-- <li className="card">community 6</li>
                        <li className="card">community 7</li> --> */}
							</ul>
						</div>
						<button className="slidebtn">{">"}</button>
					</div>
					{/* <!-- <button className='btn'>Browse</button> --> */}
				</div>
			</section>

			{/* <!-- section2: my communities --> */}
			<section className="expslideContainer darkbg">
				<h3>Your Communities</h3>
				<div className="container expslide">
					<a href="./community.html">
						<img src={dnd} alt="" />
					</a>
					<a href="/">
						<img src="./img/chess.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/model.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/brew.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/knit.jpg" alt="" />
					</a>
				</div>
			</section>

			{/* <!-- section3: filter communities -->
    <!-- filter in js --> */}
			<section className="expslideContainer">
				<form action="/">
					<label for="filterCategory">Filter:</label>
					<select name="filterCategory">
						<option value="None">None</option>
						<option value="outdoor">Outdoor</option>
						<option value="indoor">Indoor</option>
					</select>

					{/* <!-- <label for="filterSubCategory">Filter:</label> --> */}
					<select name="filterSubCategory">
						<option value="none">None</option>
						<option value="games">Games</option>
						<option value="foodDrink">Food&Drink</option>
					</select>
				</form>
				<div className="container expslide">
					<a href="./community.html">
						<img src="./img/dnd.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/chess.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/model.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/brew.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/knit.jpg" alt="" />
					</a>
				</div>
			</section>

			{/* <!-- section4: cuz you joined --> */}
			<section className="expslideContainer">
				<h3>Because you joined: Homebrew Alliance</h3>
				<div className="container expslide">
					<a href="/">
						<img src="./img/water.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/winebrew.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/hops.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/mixology.jpg" alt="" />
					</a>
					<a href="/">
						<img src="./img/beerpong.jpg" alt="" />
					</a>
				</div>
			</section>

			<footer>
				<p>Intersiasts 2021</p>
			</footer>
		</>
	);
}

export default Browse;
