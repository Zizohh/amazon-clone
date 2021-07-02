import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="home"
				/>
				<div className="home__row">
					<Product
						id="1233434"
						title="The Lean StartUp is a book that tells you more about a startup  with strongly relying on the startup capital"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
						rating={3}
					/>
					<Product
						id="3435434"
						title="Vans is a cool shoe for a beautiful feet"
						price={40.99}
						image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610416577-vans-1610416571.jpg"
						rating={3}
					/>
				</div>
				<div className="home__row">
					<Product
						id="234232"
						title="VNike Unisex-Child Team Hustle D 8 (Gs) Basketball Shoe"
						price={39.99}
						image="https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg"
						rating={4}
					/>
					<Product
						id="49458549"
						title="Green Jacket keeps you warm from cold weather"
						price={50.99}
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRqtINXnFyga_NAyFMdguzG0_PbVTqIqMsg&usqp=CAU"
						rating={3}
					/>
					<Product
						id="1232324"
						title="Red Check Shirt can be worn for any kind of occasion as it gives you a smark look "
						price={5.99}
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVtAbsbFZzJAFDcpbg68QMNhba0NlIo25new&usqp=CAU"
						rating={3}
					/>
				</div>
				<div className="home__row">
					<Product
						id="1243434"
						title="L.G TV Set
						Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice. Also available through the Roku mobile app"
						price={250.99}
						image="https://i.rtings.com/assets/products/1UbkxYvb/lg-c1-oled/design-small.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
