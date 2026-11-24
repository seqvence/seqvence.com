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

The [engineering services illustration](static/images/engineering-services.webp) was generated with the built-in ImageGen tool and exported as WebP. Generation prompt follows.

> Create a landscape 4:3 abstract editorial artwork for Seqvence, an engineering consultancy. A single continuous composition on warm off-white paper: several deep petrol and turquoise strands emerge from a broad field of fine contour lines (cloud architecture), interlock into modular geometric bands (infrastructure software), and follow ordered parallel lanes (delivery pipelines). Two strands braid briefly to suggest teams learning together (DevOps coaching). On the right the ribbon opens into a small branching mesh (AI-assisted development); selected paths pass through a row of quiet amber checkpoints (AI governance) and bend inside a protective outer curve (cybersecurity). Make these ideas visible as parts of one graceful, coherent form, not separate panels. Bold sculptural cut-paper relief, subtly offset shadows, tactile fine print grain, editorial clarity, strong navy/teal mass and sparing golden ochre, generous breathing room. Compose for readability at thumbnail size. Pure artwork with no typography, labels, diagrams with legends, logos, processors, circuit boards, robots, padlocks or literal hardware.

</details>
