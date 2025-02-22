<script>
	import { page } from '$app/state';
	let innerWidth = $state(0);
	let menuOpen = $state(false);
	const isMobile = $derived(innerWidth < 600);
	$effect(() => {
		const mobileMenu = document.getElementById('mobileMenu');
		if (mobileMenu instanceof HTMLElement) {
			mobileMenu.addEventListener('toggle', (e) => {
				menuOpen = mobileMenu.matches(':popover-open');
			});
		}
	});

	$inspect(isMobile);

	const pages = [
		{
			label: 'Get Started',
			href: '/get-started'
		},
		{
			label: 'About Us',
			href: '/about-us'
		},
		{
			label: 'Contact Us',
			href: '/contact-us'
		}
	];
	const currentPath = $derived(page.url.pathname);

	$inspect(currentPath);
	function closeMenu() {
		const menu = document.getElementById('mobileMenu');
		if (menu instanceof HTMLElement) {
			menu.hidePopover();
		}
	}
</script>

<svelte:window bind:innerWidth />

{#if !isMobile}
	<nav class="desktopNav">
		<ul>
			{#each pages as page}
				<li class={page.href === currentPath ? 'active' : ''}>
					<a href={page.href}>{page.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

{#if isMobile}
	<nav class="mobileNav">
		<button class="hamburger" class:menuOpen popovertarget="mobileMenu" aria-label="Toggle menu">
			<div class="line line1"></div>
			<div class="line line2"></div>
			<div class="line line3"></div>
		</button>
	</nav>
	<dialog class="mobileMenu" popover="auto" id="mobileMenu">
		<ul>
			{#each pages as page}
				<li class={page.href === currentPath ? 'active' : ''}>
					<a href={page.href} onclick={closeMenu}>{page.label}</a>
				</li>
			{/each}
		</ul>
	</dialog>
{/if}

<style>
	.desktopNav ul {
		display: flex;
		gap: 2rem;
	}

	.desktopNav ul li {
		list-style: none;
		font-size: 1.2rem;
		color: #cdcdcd;
		position: relative;
		transition: scale 0.3s ease;
		&:hover {
			scale: 1.1;
		}
		&:after {
			content: '';
			display: block;
			width: 0;
			height: 2px;
		}
		&.active {
			color: var(--color2);
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 2px;
				background-color: var(--color2);
				transition: width 0.3s ease;
			}
		}
	}
	ul {
		list-style: none;
	}

	nav ul li a {
		text-decoration: none;
		color: inherit;
	}

	.hamburger {
		width: 24px;
		height: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: transform 0.3s ease;
	}
	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}

	.line {
		width: 100%;
		height: 2px;
		background-color: #fff;
		transition: all 0.3s ease;
	}

	.menuOpen {
		.line1 {
			transform: rotate(45deg) translate(6px, 7px);
		}

		.line2 {
			opacity: 0;
		}

		.line3 {
			transform: rotate(-45deg) translate(8px, -10px);
		}
	}

	.mobileMenu {
		transition:
			scale 0.5s ease,
			opacity 0.5s ease,
			display 0.5s ease;
		opacity: 0;
		scale: 0.5;
		border: none;
		padding: 2rem;
		background-color: rgba(0, 0, 0, 0.85);
		border-radius: 1rem;
		transition-behavior: allow-discrete;
		@starting-style {
			opacity: 1;
			scale: 1;
		}
		ul {
			margin: 0;
			padding: 0;
		}
		li {
			width: 100%;
			text-align: center;
			padding: 1rem 0;
			border-bottom: 1px solid #333;
			font-size: 2rem;
			color: var(--color2);
			a {
				color: inherit;
				text-decoration: none;
			}
		}
	}

	.mobileMenu:popover-open {
		border: none;
		padding: 2rem;
		background-color: rgba(0, 0, 0, 0.85);
		border-radius: 1rem;
		overflow: auto;
		width: fit-content;
		opacity: 1;
		scale: 1;

		transition-behavior: allow-discrete;
		@starting-style {
			opacity: 0;
			scale: 0.5;
		}

		ul {
			margin: 0;
			padding: 0;
		}
		li {
			width: 100%;
			text-align: center;
			padding: 1rem 0;
			border-bottom: 1px solid #333;
			font-size: 2rem;
			color: var(--color2);
			a {
				color: inherit;
				text-decoration: none;
			}
		}
		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}
	}

	.hamburger {
		width: 24px;
		height: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: transform 0.3s ease;
	}
	button {
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}
</style>
