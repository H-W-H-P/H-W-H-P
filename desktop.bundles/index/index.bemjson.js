var info = require('../../desktop.info/info')

module.exports = {
    block: 'page',
    title: 'H-W-H-P',
    favicon: '/favicon-96x96.png',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: {
        block: 'text-wrap',
        tag: 'section',
        content: [
            {
                block: 'text',
                mix: [
                    { block : 'title' },
                    { block : 'fonts' }
                ],
                tag : 'h1',
                content: info.title
            },
            {
                block: 'desc-text',
                mix: [
                    { block : 'text' },
                    { block : 'fonts' }
                ],
                content: info.lowTitle
            },
            {
                block: 'desc-text',
                mix: [
                    { block : 'text' },
                    { block : 'fonts' }
                ],
                content: info.title
            },
            {
                block: 'title',
                mix: [
                    { block : 'text' },
                    { block : 'fonts' },
                    { elem : 'bold' },
                    { elem : 'low' }
                ],
                tag : 'h4',
                // mods: { height: 'low' },
                content: info.lowTitle
            },
            {
                block: 'desc-text',
                mix: [
                    { block : 'text' },
                    { block : 'fonts' }
                ],
                content: info.title
            },
            {
                block: 'desc-text',
                mix: [
                    { block : 'text' },
                    { block : 'fonts' }
                ],
                content: info.title
            },
            {
                block: 'desc-text',
                mix: [
                    { block : 'text' },
                    { block : 'fonts' }
                ],
                content: info.title
            }
        ]
    }
};
