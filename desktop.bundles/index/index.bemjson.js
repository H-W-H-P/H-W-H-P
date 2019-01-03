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
        content: [
            {
                block: 'title',
                mix: { block : 'text' },
                content: info.title
            },
            {
                block: 'desc-text',
                mix: { block : 'text' },
                content: info.lowTitle
            },
            {
                block: 'desc-text',
                mix: { block : 'text' },
                content: info.title
            },
            {
                block: 'title',
                mix: { block : 'text' },
                content: info.lowTitle
            },
            {
                block: 'desc-text',
                mix: { block : 'text' },
                content: info.title
            },
            {
                block: 'desc-text',
                mix: { block : 'text' },
                content: info.title
            },
            {
                block: 'desc-text',
                mix: { block : 'text' },
                content: info.title
            }
        ]
    }
};
