function Carousel() {
	return (
		<>
			<div className="slider">
				<button className="slidebtn"> {"<"} </button>
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
		</>
	);
}

export default Carousel;
