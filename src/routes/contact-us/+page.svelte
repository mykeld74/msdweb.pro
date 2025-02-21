<script>
	import { fade } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import { imask } from 'svelte-imask';
	const maskConfig = { mask: '(000) 000-0000' };

	let formData = {
		name: '',
		email: '',
		phone: '',
		projectType: 'website',
		message: ''
	};

	let status = {
		submitting: false,
		message: '',
		success: false
	};

	function handleSubmit() {
		status.submitting = true;
		return async ({ result }) => {
			status.submitting = false;
			if (result.type === 'success') {
				status.success = true;
				status.message = result.data.message;
				// Reset form on success
				formData = {
					name: '',
					email: '',
					phone: '',
					projectType: 'website',
					message: ''
				};
				setTimeout(() => {
					status.success = false;
					status.message = '';
				}, 5000);
			} else {
				status.success = false;
				status.message = 'There was an error sending your message. Please try again.';
				setTimeout(() => {
					status.message = '';
				}, 2500);
			}
		};
	}
</script>

<div class="contactContainer">
	<h1>Contact Us</h1>

	<div class="contactContent">
		<section class="contactForm">
			<h2>Send Us a Message</h2>

			{#if status.message}
				<div
					class="alert"
					class:success={status.success}
					class:error={!status.success}
					transition:fade
				>
					{status.message}
				</div>
			{/if}

			<form method="POST" use:enhance={handleSubmit}>
				<div class="formGroup">
					<label for="name">Name</label>
					<input type="text" id="name" name="name" bind:value={formData.name} required />
				</div>

				<div class="formGroup">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" bind:value={formData.email} required />
				</div>

				<div class="formGroup">
					<label for="phone">Phone (optional)</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						use:imask={maskConfig}
						bind:value={formData.phone}
					/>
				</div>

				<div class="formGroup">
					<label for="message">Message</label>
					<textarea id="message" name="message" bind:value={formData.message} rows="5" required
					></textarea>
				</div>

				<button type="submit" class="submitButton" disabled={status.submitting}>
					{status.submitting ? 'Sending...' : 'Send Message'}
				</button>
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

	.alert {
		padding: 1rem;
		margin-bottom: 1.5rem;
		border-radius: 4px;
		text-align: center;
	}

	.success {
		background: rgba(0, 255, 0, 0.1);
		color: #00ff00;
	}

	.error {
		background: rgba(255, 0, 0, 0.1);
		color: #ff0000;
	}

	.submitButton:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}
</style>
