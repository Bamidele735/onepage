// schemas/pet.js
export default {
    name: 'Portfolio',
    type: 'document',
    title: 'testing',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },{
        name: 'description',
        type: 'array',
        title: 'Description',
        of: [
            {
                type: 'block'
            },
        ],
      },
    ]
  }