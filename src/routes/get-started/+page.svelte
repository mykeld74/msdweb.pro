<script>
	import Sprite from '$lib/components/Sprite.svelte';
</script>

<div class="getStartedContainer">
	<h1>Get Started</h1>
	<section class="introSection">
		<h2>Building Your Digital Presence Together</h2>
		<p>
			Starting a web development project is an exciting journey of turning your ideas into reality.
			Whether you're launching a new business, upgrading an existing site, or creating an online
			platform, we're here to guide you through every step of the process.
		</p>

		<p>
			Our approach is simple: we listen to your needs, understand your goals, and work closely with
			you to create a website that not only looks great but also delivers results. From initial
			concept to final launch, you'll have a dedicated team that brings technical expertise and
			creative solutions to your project.
		</p>
	</section>

	<section class="processSection">
		<h2>Our Process</h2>
		<div class="steps">
			<div class="step">
				<h3>1. Discovery</h3>
				<p>We start with a consultation to understand your vision, goals, and requirements.</p>
			</div>
			<div class="step">
				<h3>2. Planning</h3>
				<p>
					Together, we'll create a detailed roadmap for your project, including features, timeline,
					and budget.
				</p>
			</div>
			<div class="step">
				<h3>3. Design & Development</h3>
				<p>Our team brings your website to life with modern design and robust functionality.</p>
			</div>
		</div>
	</section>

	<section class="ctaSection">
		<h2>Ready to Begin?</h2>
		<p>Contact us today for a free consultation and let's start building your perfect website.</p>
		<a href="/contact-us" class="contactButton">Contact Us</a>
	</section>
</div>

<style>
	.getStartedContainer {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	section {
		margin: 3rem 0;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: var(--color1);
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color2);
	}

	p {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.steps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.step {
		padding: 1.5rem;
		background: var(--cardGradient);
		border-radius: 8px;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
	}

	.step h3 {
		color: var(--color2);
		margin-bottom: 1rem;
	}

	.ctaSection {
		text-align: center;
		padding: 3rem;
		background: var(--cardGradient);
		border-radius: 12px;
		margin-top: 4rem;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
	}

	.contactButton {
		display: inline-block;
		padding: 1rem 2rem;
		font-size: 1.2rem;
		background: var(--color1);
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background-color 0.5s ease;
	}

	.contactButton:hover {
		background: var(--color2);
	}
</style>
