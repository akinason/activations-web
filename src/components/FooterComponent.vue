<template>
	<footer class="footer-container">
		<div class="footer-wrapper flex-container">
			<!-- <p>&copy;copyright 2020</p> -->
			<ul class="navs flex-container">
				<li>
					<p>copyright &copy;{{new Date().getFullYear()}}</p>
				</li>
				<li>
					<a href="#">twitter</a>
				</li>
				<li>
					<a href="#">facebook</a>
				</li>
				<li>
					<a href="#">youtube</a>
				</li>
				<li>
					<a href="#">terms</a>
				</li>
				<li>
					<a href="#">contact</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
@import "../scss/_mixins";

footer.footer-container {
	height: 100px;
	width: 100%;
	background-color: rgba(4, 23, 27, 0.973);

	.footer-wrapper {
		align-items: center;
		width: 1100px;
		height: 100%;
		margin: auto;
		background-color: transparent;

		@include media-query(1440px) {
			width: 80%;
		}

		p,
		a {
			color: white;
			transition: color 90ms linear;
		}
		p {
			user-select: none;
		}
	}

	.navs {
		width: 100%;
		justify-content: space-between;

		a {
			text-transform: capitalize;
			letter-spacing: 0.64px;

			&:hover {
				color: darken(#fff, 30%);
			}
		}
	}
}
</style>