This is a React/Next.js/TypeScript project styled with TailwindCSS.
The data is stored in Contentful and handled via Apollo (with help of Hasura as GraphQL playground during development).
The overall structure is sharp & clean: lots of styling is abstracted away in custom UI-kit (links, buttons, inputs, etc.), and logic - in hooks, util functions and separate components.

## Overview

- Adaptive layout featuring latest web design trends - large headings in the hero section, sleek glass-morph backgrounds, and vibrant color gradients.
![hero](https://github.com/mariaklyass/blossom/assets/110608602/0fa850c2-3149-4d8e-8c2e-37aaaeeb0c5f)
![features](https://github.com/mariaklyass/blossom/assets/110608602/e2e5d278-e26a-4357-8409-349b518858a6)
![cta](https://github.com/mariaklyass/blossom/assets/110608602/e8589d12-15d8-4338-a696-86ff47e7f193)

- Data is fetched from a database stored in Contentful, using GraphQL & Apollo Client, to display, for instance, "FAQ" section:
![faq](https://github.com/mariaklyass/blossom/assets/110608602/0fa87e5d-7918-4f52-b2e9-69ac25767d92)
![render-from-contentful](https://github.com/mariaklyass/blossom/assets/110608602/e30167f9-7466-4d42-a0be-05d4ef5c312a)

- There is also functionality implemented to pass data from a website to the database (by filling out the order form):
![order-form](https://github.com/mariaklyass/blossom/assets/110608602/3f8dea03-db87-4e9a-a918-1a9d7efbeeb4)
![send-to-contentful](https://github.com/mariaklyass/blossom/assets/110608602/f68961d5-0ee4-4e0e-8495-c149326f3185)

