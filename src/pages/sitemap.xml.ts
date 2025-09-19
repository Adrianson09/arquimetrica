export const prerender = true;
export async function GET(){
const base = new URL(import.meta.env.SITE ?? 'http://localhost:4321');
const urls = [
'/es','/en','/es/servicios','/en/services','/es/proyectos','/en/projects','/es/equipo','/en/team','/es/testimonios','/en/testimonials','/es/contacto','/en/contact','/es/blog','/en/blog'
];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`<url><loc>${new URL(u, base).href}</loc></url>`).join('
')}
</urlset>`;
return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}