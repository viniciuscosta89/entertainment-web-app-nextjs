/** @type {import('next').NextConfig} */

const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
			},
			{
				protocol: 'http',
				hostname: 'placekitten.com',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
		],
	},
}

module.exports = nextConfig
