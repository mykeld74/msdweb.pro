<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
</script>

<div class="contentWrapper">
	<div class="hero">
		<div class="light x1"></div>
		<div class="light x2"></div>
		<div class="light x3"></div>
		<div class="light x4"></div>
		<div class="light x5"></div>
		<div class="light x6"></div>
		<div class="light x7"></div>
		<div class="light x8"></div>
		<div class="light x9"></div>
		<div class="heroText">
			<p id="head1" class="header">Web Solutions</p>
			<p id="head2" class="header">just for you</p>
			<p id="head3" class="header">simple and awesome</p>
			<p id="head4" class="header">Welcome to MSD Web Pros</p>
			<a href="/get-started" class="heroButton">Get Started</a>
		</div>
	</div>
</div>

<style>
	.contentWrapper {
		display: grid;
		grid-template-columns: 1fr;
		position: relative;
		height: calc(100vh - 118px);
		place-items: center;
	}
	.hero {
		position: relative;
		margin-top: -20vh;
	}
	.header {
		text-align: center;
		text-wrap: balance;
	}

	.heroText {
		display: grid;
		grid-template-columns: [heroContent-start] 1fr [heroContent-end];
		grid-template-rows: [heroText-start] 1fr [heroText-end heroButton-start] 1fr [heroButton-end];
		width: 100%;
		height: 300px;
		place-items: center;
	}
	.heroButton {
		grid-area: heroButton / heroContent;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 330px;
		background: var(--deepBlue);
		border-radius: 10px;
		font-size: 2.5rem;
		color: #fff;
		text-transform: uppercase;
		padding: 1rem 0.5rem;
		cursor: pointer;
		&:before,
		&:after {
			content: '';
			position: absolute;
			inset: -0.2rem;
			z-index: -1;
			background: conic-gradient(
				from var(--gradient-angle),
				var(--color1) 0%,
				var(--color2) 30%,
				var(--color1) 60%,
				var(--color2) 90%,
				var(--color1) 100%
			);
			border-radius: inherit;
			animation: rotation 5s linear infinite;
		}

		&:after {
			filter: blur(2.5rem);
		}
	}

	.light {
		position: fixed;
		width: 0px;
		opacity: 0.75;
		box-shadow: #e9f1f1 0px 0px 20px 2px;
		top: 100vh;
		bottom: 0px;
		left: 0px;
		right: 0px;
		margin: auto;
	}

	.x1 {
		animation: floatUp 4s infinite linear;
		transform: scale(1);
	}

	.x2 {
		animation: floatUp 7s infinite linear;

		transform: scale(1.6);
		left: 15%;
	}

	.x3 {
		animation: floatUp 2.5s infinite linear;
		transform: scale(0.5);
		left: -15%;
	}

	.x4 {
		animation: floatUp 4.5s infinite linear;

		transform: scale(1.2);
		left: -34%;
	}

	.x5 {
		animation: floatUp 8s infinite linear;

		transform: scale(2.2);
		left: -57%;
	}

	.x6 {
		animation: floatUp 3s infinite linear;

		transform: scale(0.8);
		left: -81%;
	}

	.x7 {
		animation: floatUp 5.3s infinite linear;

		transform: scale(3.2);
		left: 37%;
	}

	.x8 {
		animation: floatUp 4.7s infinite linear;
		transform: scale(1.7);
		left: 62%;
	}

	.x9 {
		animation: floatUp 4.1s infinite linear;
		transform: scale(0.9);
		left: 85%;
	}

	@keyframes floatUp {
		0% {
			top: 100vh;
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		50% {
			top: 0vh;
			opacity: 0.8;
		}
		75% {
			opacity: 1;
		}
		100% {
			top: -100vh;
			opacity: 0;
		}
	}
</style>
