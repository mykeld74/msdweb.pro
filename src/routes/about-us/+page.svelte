<div class="aboutContainer">
	<h1>About Us</h1>

	<section class="missionSection">
		<div class="missionCard">
			<h2>Our Mission</h2>
			<p>
				At MSD Web Pros, we're passionate about creating exceptional web experiences that help
				businesses thrive in the digital world. Our mission is to deliver innovative, user-focused
				solutions that combine cutting-edge technology with beautiful design.
			</p>
		</div>
	</section>

	<section class="valuesSection">
		<h2>What Sets Us Apart</h2>
		<div class="valueCards">
			<div class="valueCard">
				<h3>Expertise</h3>
				<p>
					With years of experience in web development, we bring technical excellence and creative
					problem-solving to every project.
				</p>
			</div>

			<div class="valueCard">
				<h3>Partnership</h3>
				<p>
					We work closely with our clients, treating your project as if it were our own and ensuring
					clear communication every step of the way.
				</p>
			</div>

			<div class="valueCard">
				<h3>Innovation</h3>
				<p>
					We stay ahead of the curve with modern web technologies and best practices to build
					future-proof solutions.
				</p>
			</div>
		</div>
	</section>

	<section class="processSection">
		<h2>Our Approach</h2>
		<div class="processCards">
			<div class="processCard">
				<span class="processNumber">01</span>
				<h3>Understand</h3>
				<p>
					We begin by deeply understanding your business, goals, and vision for your web presence.
				</p>
			</div>

			<div class="processCard">
				<span class="processNumber">02</span>
				<h3>Design</h3>
				<p>
					Creating beautiful, user-friendly designs that align with your brand and engage your
					audience.
				</p>
			</div>

			<div class="processCard">
				<span class="processNumber">03</span>
				<h3>Develop</h3>
				<p>Building robust, scalable solutions using modern web technologies and best practices.</p>
			</div>

			<div class="processCard">
				<span class="processNumber">04</span>
				<h3>Deliver</h3>
				<p>
					Launching your project with comprehensive testing and ongoing support to ensure success.
				</p>
			</div>
		</div>
	</section>

	<section class="ctaSection">
		<div class="ctaCard">
			<h2>Ready to Start Your Project?</h2>
			<p>Let's work together to bring your vision to life.</p>
			<a href="/contact-us" class="ctaButton">Get in Touch</a>
		</div>
	</section>
</div>

<style>
	.aboutContainer {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: var(--color2);
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color2);
	}

	section {
		margin-bottom: 4rem;
	}

	.missionCard {
		padding: 2rem;
		background: var(--cardGradient);
		border-radius: 12px;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
	}

	.missionCard p {
		font-size: 1.2rem;
		line-height: 1.6;
	}

	.valueCards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.valueCard {
		padding: 2rem;
		background: var(--cardGradient);
		border-radius: 12px;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
	}

	.valueCard h3 {
		color: var(--color2);
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.processCards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.processCard {
		padding: 2rem;
		background: var(--cardGradient);
		border-radius: 12px;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
		position: relative;
	}

	.processNumber {
		position: absolute;
		top: -1rem;
		right: -1rem;
		background: var(--color1);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		font-weight: bold;
	}

	.processCard h3 {
		color: var(--color2);
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.ctaCard {
		padding: 3rem;
		background: var(--cardGradient);
		border-radius: 12px;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
		text-align: center;
	}

	.ctaButton {
		display: inline-block;
		padding: 1rem 2rem;
		margin-top: 1.5rem;
		font-size: 1.2rem;
		background: var(--color1);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		transition: background-color 0.5s ease;
	}

	.ctaButton:hover {
		background: var(--color2);
	}

	@media (max-width: 768px) {
		.valueCards,
		.processCards {
			grid-template-columns: 1fr;
		}
	}
</style>
