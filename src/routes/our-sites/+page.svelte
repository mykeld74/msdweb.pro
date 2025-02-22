<script>
	import portfolioSites from '$lib/constants/portfolioSites';
	import {
		guardianGarageDoors,
		westwoodsCommunityChurch,
		brendaBennettArt,
		helpingHandsPhlebotomy,
		essentialStrides,
		kwdWoodworks,
		lakewoodChristmas,
		easterInLakewood
	} from '$lib/assets';

	// Create a mapping of image names to their imported sources
	const imageMap = {
		guardianGarageDoors,
		westwoodsCommunityChurch,
		brendaBennettArt,
		helpingHandsPhlebotomy,
		essentialStrides,
		kwdWoodworks,
		lakewoodChristmas,
		easterInLakewood
	};
</script>

<div class="portfolioContainer">
	<h1>Our Work</h1>

	<div class="siteGrid">
		{#each portfolioSites as site, i}
			<div class="cardWrapper" style="animation-delay: {i * 100}ms">
				<div class="siteCard">
					<a href={site.url} target="_blank" rel="noopener noreferrer">
						<div class="imageContainer">
							<img src={imageMap[site.image]} alt={site.name} loading="lazy" />
						</div>
						<h2>{site.name}</h2>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.portfolioContainer {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: var(--color2);
	}

	.siteGrid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.cardWrapper {
		width: 100%;
		opacity: 0;
		animation: fadeIn 0.5s ease-out forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.siteCard {
		background: var(--cardGradient);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.7);
		transition: transform 0.3s ease;
	}

	.siteCard:hover {
		transform: translateY(-5px);
	}

	a {
		text-decoration: none;
		color: white;
		display: block;
	}

	.imageContainer {
		aspect-ratio: 16/9;
		overflow: hidden;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.siteCard:hover img {
		transform: scale(1.05);
	}

	h2 {
		padding: 1rem;
		font-size: 1.2rem;
		text-align: center;
		color: var(--color2);
	}

	@media (max-width: 768px) {
		.siteGrid {
			grid-template-columns: 1fr;
		}
	}
</style>
