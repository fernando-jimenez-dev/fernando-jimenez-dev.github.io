import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site, url }) => {
	const origin = site?.toString().replace(/\/$/, "") ?? url.origin;
	const pages = ["/"];

	const urls = pages
		.map((path) => {
			const loc = `${origin}${path}`;
			return `<url><loc>${loc}</loc></url>`;
		})
		.join("");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
