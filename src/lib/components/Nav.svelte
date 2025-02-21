<script>
	import { page } from '$app/stores';
	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<nav class="mainNav">
	<div class="navContainer">
		<button class="menuButton" on:click={toggleMenu} aria-label="Toggle menu">
			<span class="hamburger" class:active={isMenuOpen} />
		</button>

		<div class="navLinks" class:open={isMenuOpen}>
			<a
				href="/get-started"
				class:active={$page.url.pathname === '/get-started'}
				on:click={closeMenu}
			>
				Get Started
			</a>
			<a href="/about-us" class:active={$page.url.pathname === '/about-us'} on:click={closeMenu}>
				About
			</a>

			<a
				href="/contact-us"
				class:active={$page.url.pathname === '/contact-us'}
				on:click={closeMenu}
			>
				Contact
			</a>
		</div>
	</div>
</nav>

<style>
	.mainNav {
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	.navContainer {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.navLinks {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.navLinks a {
		color: white;
		text-decoration: none;
		font-size: 1.1rem;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.navLinks a:hover {
		color: var(--color1);
		background: rgba(255, 255, 255, 0.1);
	}

	.navLinks a.active {
		color: var(--color1);
		background: rgba(255, 255, 255, 0.1);
	}

	.menuButton {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.hamburger {
		display: block;
		width: 24px;
		height: 2px;
		background: white;
		position: relative;
		transition: all 0.3s ease;
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		width: 24px;
		height: 2px;
		background: white;
		transition: all 0.3s ease;
	}

	.hamburger::before {
		top: -8px;
	}

	.hamburger::after {
		bottom: -8px;
	}

	.hamburger.active {
		transform: rotate(45deg);
	}

	.hamburger.active::before {
		top: 0;
		transform: rotate(0);
	}

	.hamburger.active::after {
		bottom: 0;
		transform: rotate(-90deg);
	}

	@media (max-width: 768px) {
		.menuButton {
			display: block;
		}

		.navLinks {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			background: var(--black);
			padding: 1rem;
			gap: 1rem;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
		}

		.navLinks.open {
			display: flex;
		}

		.navLinks a {
			width: 100%;
			text-align: center;
			padding: 1rem;
		}
	}
</style>
