/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.pravatar.cc',
			},
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
			{
				protocol: 'http',
				hostname: 'placekitten.com',
			},
		],
	},
}

module.exports = nextConfig
