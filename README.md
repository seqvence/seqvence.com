# Seqvence

This repository builds the complete static site for [seqvence.com](https://seqvence.com/). Its Markdown, templates, images and styles are the source of truth. The former `seqvence.com-html` repository is a generated deployment snapshot. Its standalone services page has been brought back into this source tree.

## Local development

From this repository, start the preview with Docker Compose:

```sh
docker compose up -d
```

Open [localhost:1313](http://localhost:1313/). Hugo watches the checkout and reloads the browser when you save changes. Use `docker compose logs -f` to see build messages and `docker compose down` to stop the preview.

If a deleted page still opens at its old URL, run `docker compose restart website` to clear the in-memory preview.

Alternatively, install [Hugo 0.170.1](https://github.com/gohugoio/hugo/releases/tag/v0.170.1) and run the server directly:

```sh
hugo server
```

Open the local URL printed by Hugo. Edit articles and page introductions in `content/`, service descriptions and profiles in `data/`, templates in `layouts/` and styles in `assets/css/`.

To list another product on the homepage, add its name, URL and description to [the product list](data/products.yaml).

## Production

```sh
hugo --gc --minify
```

Deploy the generated `public/` directory. Build from a clean checkout for releases.

For the existing Netlify site, connect its production build to this repository and select the branch containing the refresh. The checked-in `netlify.toml` pins Hugo and sets the build command and publish directory. Check the deploy preview, original article URL and RSS feeds before switching production. Once the source build is serving the existing domain, the HTML snapshot can be archived.

<details>
<summary>Homepage illustration source</summary>

The [infrastructure stack](static/images/infrastructure-stack.webp) was generated with the built-in ImageGen tool and exported as WebP. Generation prompt follows.

> Illustrate an exploded axonometric infrastructure stack in graphite and deep teal, with one vivid amber processor, fine circuit traces and soft shadows on pale blue-gray drafting paper. A precision industrial CAD rendering with three floating square layers above a machined base, connected by fine vertical guides. Center the entire assembly inside a landscape 4:3 frame with generous breathing room. Restrained Swiss engineering editorial art direction, crisp edges, matte materials, orthographic camera. Faint technical grid across the background. No lettering, labels, logos or borders.

</details>
