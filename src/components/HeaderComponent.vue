<template>
	<header class="header-container">
		<div class="header-wrapper">
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
			<!-- header content -->
			<div class="header-content">
				<div class="content-wrapper">
					<h1>
						Access
						<span>2,674,500</span> application and activation
					</h1>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
				</div>
				<!-- search bar -->
				<div class="search-container">
					<div class="form-control">
						<input
							type="text"
							name="search"
							id="search"
							placeholder="search by app name"
							autocomplete="off"
						/>
						<button class="btn-search">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path
									d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
								/>
							</svg>
						</button>
					</div>
					<p id="promotion-text">use application url to promote the app</p>
				</div>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "../scss/_mixins";

header {
	width: 100%;
	height: 455px;
	overflow: hidden;

	.header-wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #031545;
		background-image: url("../assets/background-banner.gif");
		// background-image: url("../assets/backgroun-banner-2.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

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

	// header content
	.header-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -25%);
		width: 850px;
		margin: 0 auto;

		@include media-query(1440px, 2600px) {
			width: 960px;
		}

		@include media-query(950px) {
			width: 80%;
		}
		@include media-query(450px) {
			width: 95%;

			button.btn-search {
				display: none !important;
			}
		}

		.content-wrapper {
			width: 100%;
			text-align: center;

			h1 {
				font-size: calc(32px + (600vw - 2880px) / 920);
				font-weight: 560;
				margin-bottom: 0.62em;
				line-height: 1.5;
				color: #fff;

				span {
					color: #4ad295;
				}
			}

			p {
				font-size: 1em;
				font-weight: 400;
				color: #fff;
				line-height: 1.2;
				margin: 0 0 0.75em;
			}
		}

		.search-container {
			width: 100%;

			.form-control {
				height: 64px;
				line-height: 64px;
				background-color: #fff;
				border-radius: 3px;
				margin: 0;
				display: flex;
				flex-wrap: wrap;
				align-items: center;

				input#search {
					border: none;
					background-color: transparent;
					flex-grow: 1;
					padding: 0 10px;
					height: 64px;
					line-height: 64px;
					white-space: nowrap;
					color: #1d262d;
					font-size: 1em;
					font-family: "Roboto", sans-serif;
					font-weight: 540;
				}

				button.btn-search {
					width: 64px;
					height: 64px;
					line-height: 64px;
					border: none;
					background: none;
					color: #374957;
					box-shadow: none;
					user-select: none;
					vertical-align: middle;
					white-space: nowrap;
					outline: none;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}

		#promotion-text {
			font-size: 1em;
			font-weight: 600;
			color: #fff;
			line-height: 1.2;
			margin: 0 0 0.75em;
			text-align: center;
			margin-top: 1.45em;
		}
	}
}
</style>
