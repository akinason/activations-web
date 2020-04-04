<template>
	<div id="software-list">
		<div class="software-list-container">
			<div class="software-list">
				<div class="software">
					<a href="/api/1" class="software-wrapper">
						<!-- img -->
						<div class="img-container">
							<img src="../assets/backgroun-banner-2.jpg" alt="software-img" />
						</div>
						<!-- content -->
						<div class="description-container">
							<div class="description">
								<section class="app-info">
									<div class="header">
										<h3 class="app-title">Lorem, ipsum dolor.</h3>
										<span>version 1.0</span>
									</div>
									<p
										class="app-description"
									>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, dignissimos.</p>
								</section>
								<p class="author">
									author:
									<span>vegas cedric</span>
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<!-- pagination container -->
		<div class="pagination-container">
			<div class="pagination flex-container">
				<div class="page active">
					<p>1</p>
				</div>
				<div class="page">
					<p>2</p>
				</div>
				<div class="page">
					<p>3</p>
				</div>
				<div class="page more">
					<p>...</p>
				</div>
				<div class="page btn-next">
					<p>next</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "software-list",
	props: ["software"],
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
@import "../scss/_mixins";

#software-list {
	width: 100%;

	.software-list-container {
		margin: 50px 0;
		padding-top: 10px;

		@include media-query(1440px, 2600px) {
			margin-top: 80px;
		}
	}

	.software-list {
		width: 1200px;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 210px;
		gap: 1em;

		@include media-query(1400px) {
			width: 80%;
		}
	}

	.software {
		width: 100%;
		cursor: pointer;
		transition: 205ms ease-out;
		box-shadow: 1px 1px 2px rgba(17, 40, 46, 0.438);

		&:hover {
			background-color: rgba(237, 249, 253, 0.281);
		}

		.software-wrapper {
			display: flex;

			.img-container {
				width: 60%;
				height: 210px;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}

			.description-container {
				width: 100%;
				padding: 1em;

				.description {
					height: 100%;
					display: flex;
					flex-direction: column;
				}

				section.app-info {
					color: rgb(2, 25, 39);

					.header {
						border-bottom: 1px solid #ddd6;
						padding-bottom: 5px;

						h3 {
							font-size: 1.45em;
							margin-bottom: 10px;
						}

						span {
							font-size: 13px;
							font-weight: 460;
							margin-bottom: 5px;
						}
					}

					p.app-description {
						padding-top: 0.67em;
						font-size: 14px;
						letter-spacing: 0.67px;
						word-spacing: 1px;
						line-height: 1.57;
					}
				}

				.author {
					margin-top: auto;
					font-size: 12px;
					text-transform: capitalize;
					font-weight: 600;
					letter-spacing: 0.56px;
					word-spacing: 1px;
					color: rgba(3, 31, 48, 0.87);
				}
			}
		}
	}

	// pagination
	.pagination-container {
		width: 100%;
		text-align: center;
		margin-bottom: 3.12em;

		.pagination {
			width: 100%;
			justify-content: center;
			align-items: center;

			.page {
				padding: 10px 15px;
				cursor: pointer;
				margin-right: 3px;
				border-radius: 2px;

				&:last-child {
					margin-right: 0;
				}
			}
			.page.active {
				background-color: #ddd;
			}
			.page.more {
				// padding: 0;
				user-select: none;
				pointer-events: none;
				background: none;
			}
			.page.btn-next {
				padding: 11px 30px;
				text-transform: uppercase;
				color: #fff;
				font-weight: 600;
				letter-spacing: 0.67px;
				font-size: 13px;
				background-color: rgba(248, 77, 77, 0.938);
				margin-left: 20px;
			}
		}
	}
}
</style>
