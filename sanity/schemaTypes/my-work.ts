export default {
    name: 'mywork',
    title: 'MyWork',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            title: 'View Demo URL',
            name: 'viewdemoLink',
            type: 'url'
        },
        {
            title: 'Source Code URL',
            name: 'sourcecodeLink',
            type: 'url'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative Text',
                        }
                    ]
                }
            ]
        }
    ]
}