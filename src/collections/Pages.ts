import type { CollectionConfig, Field } from 'payload'

const blockFields: Field[] = [
            {
              name: "title",
              type: "text",
            },
            {
              name: "order",
              type: "number",
            },
          ]


export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'blocks',
      label: false,
      type: 'blocks',
      admin: {
        initCollapsed: true, // Collapse the blocks by default
        isSortable: true, // we'll try to sort the blocks by date on save once the bug is resolved
      },
      hooks: {
        beforeChange: [
          ({ value }) => {
            return value.sort((a,b) => {
              return (a.order - b.order);
            })
          }
        ],
      },
      blocks: [
        {
          slug: "one",
          fields: blockFields,
        },
        {
          slug: "two",
          fields: blockFields,
        },
        {
          slug: "three",
          fields: blockFields,
        },
        {
          slug: "four",
          fields: blockFields,
        }
      ],
    },
  ],
}


