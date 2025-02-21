<script>
	let formData = {
		name: '',
		email: '',
		phone: '',
		projectType: 'website',
		message: ''
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// TODO: Implement form submission logic
		console.log('Form submitted:', formData);
	};
</script>

<div class="contactContainer">
	<h1>Contact Us</h1>

	<div class="contactContent">
		<section class="contactForm">
			<h2>Send Us a Message</h2>
			<form on:submit={handleSubmit}>
				<div class="formGroup">
					<label for="name">Name</label>
					<input type="text" id="name" bind:value={formData.name} required />
				</div>

				<div class="formGroup">
					<label for="email">Email</label>
					<input type="email" id="email" bind:value={formData.email} required />
				</div>

				<div class="formGroup">
					<label for="phone">Phone (optional)</label>
					<input type="tel" id="phone" bind:value={formData.phone} />
				</div>

				<div class="formGroup">
					<label for="message">Message</label>
					<textarea id="message" bind:value={formData.message} rows="5" required></textarea>
				</div>

				<button type="submit" class="submitButton">Send Message</button>
			</form>
		</section>
	</div>
</div>

<style>
	.contactContainer {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: var(--color1);
	}

	.contactContent {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
	}

	@media (max-width: 768px) {
		.contactContent {
			grid-template-columns: 1fr;
		}
	}

	.contactForm {
		padding: 2rem;
		background: var(--cardGradient);
		border-radius: 12px;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
	}

	.formGroup {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		color: var(--color2);
	}

	input,
	select,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 2px solid #fff;
		border-radius: 4px;
		background: rgba(0, 0, 0, 0.2);
		color: white;
		font-size: 1rem;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color2);
		background: rgba(0, 0, 0, 0.3);
	}

	select option {
		background: var(--deepBlue);
		color: white;
	}

	.submitButton {
		display: inline-block;
		padding: 1rem 2rem;
		font-size: 1.2rem;
		background: var(--color1);
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: background-color 0.5s ease;
		width: 100%;
	}

	.submitButton:hover {
		background: var(--color2);
	}
</style>
