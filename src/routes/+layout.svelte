<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	// import Header from '$lib/components/Header.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import '$lib/css/reset.css';
	import '$lib/css/styles.css';
	let { data, children } = $props();
	let isReady = $state(false);
	let title = $state('MSD Web Pro');
	let currentPage = $state('');

	$effect(() => {
		isReady = false;
		if (data?.pathname === '/') {
			document.body.classList.add('home');
		} else {
			document.body.classList.remove('home');
		}
		isReady = true;
	});
	$effect(() => {
		currentPage = data?.pathname;
		if (data?.pathname === '/') {
			title = 'MSD Web Pro';
		} else {
			title = `MSD Web Pro | ${currentPage
				.replace('/', '')
				.replace('-', ' ')
				.replace(/\b\w/g, (char) => char.toUpperCase())}`;
		}
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
		rel="stylesheet"
	/>
	<title>{title}</title>
</svelte:head>

{#if isReady}
	<header>
		<a href="/"><Logo logoWidth={200} /></a>
		<Nav />
	</header>

	{#key data.pathname}
		<div
			in:fade={{ duration: 150, delay: 155 }}
			out:fade={{ duration: 150 }}
			class="contentWrapper"
		>
			{@render children?.()}
		</div>
	{/key}
{/if}

<style>
	header {
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
