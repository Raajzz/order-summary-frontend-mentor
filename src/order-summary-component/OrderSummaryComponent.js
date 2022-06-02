import React from "react";
import Helmet from "react-helmet";
import "./OrderSummaryComponent.css";
import illustrationHero from "./assets/illustration-hero.svg";

const OrderSummaryComponent = () => {
	return (
		<>
			<Helmet>
				<style>
					{`
            body{
              font-family: 'Red Hat Display', sans-serif;
              background-color: #e0e8ff; // this is the upper curve color
              position: relative;
            }
          `}
				</style>
			</Helmet>
			{/* wave part */}
			<div class="wave">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						class="shape-fill"
					></path>
				</svg>
			</div>

			<div className="card-container">
				<div className="card">
					<img
						src={illustrationHero}
						alt="Illustration"
						className="illus-img"
					/>
					<div className="text">
						<h1>Order Summary</h1>
						<p>
							You can now listen to millions of songs, audiobooks, and podcasts
							on any device anywhere you like!
						</p>
					</div>
          <div className="plan-details">

          </div>

          <button className="payment-btn">
            Proceed to Payment
          </button>
          <button className="cancel-order">
            Cancel Order
          </button>
				</div>
			</div>
		</>
	);
};

export default OrderSummaryComponent;
