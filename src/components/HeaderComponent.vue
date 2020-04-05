<template>
	<!-- nav bar -->
	<div class="nav-bar-container flex-container">
		<!-- logo -->
		<div class="logo-container">
			<a href="/">
				<img src="../assets/logo.png" alt="logo" class="logo" />
			</a>
		</div>
		<!-- navs -->
		<nav class="nav-bar">
			<ul class="flex-container">
				<li>
					<a href="/" class="active-nav">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	</div>
</template>

<style lang="scss">
@import "../scss/_mixins";

.nav-bar-container {
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	height: 75px;
	overflow: hidden;
	width: 1100px;
	margin: auto;
	background-color: transparent;

	@include media-query(1440px, 2600px) {
		width: 70%;
	}

	@include media-query(1440px) {
		width: 80%;
	}

	@include media-query(450px) {
		width: 90%;
		height: 60px;
	}

	.logo-container {
		width: 75px;

		@include media-query(450px) {
			width: 60px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.nav-bar {
		li {
			margin-right: 20px;

			&:last-child {
				margin-right: 0;
			}

			a {
				font-size: 15px;
				text-transform: uppercase;
				letter-spacing: 0.67px;
				color: #fff;

				&:hover {
					color: darken(skyblue, 23%);
				}
			}
			a.active-nav {
				color: skyblue;
			}
		}
	}
}
</style>