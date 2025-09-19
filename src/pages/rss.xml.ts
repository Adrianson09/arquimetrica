import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'


export async function GET(context) {
const posts = await getCollection('blog')
return rss({
title: 'Arquimétrica — Blog',
description: 'Ideas y mejores prácticas de arquitectura y gestión de proyectos.',
site: context.site ?? 'https://arquimetrica.cr',
items: posts.map((p) => ({
title: p.data.title,
description: p.data.description,
link: `/blog/${p.slug}/`,
pubDate: p.data.date,
})),
})
}