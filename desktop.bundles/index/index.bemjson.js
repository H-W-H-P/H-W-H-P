module.exports = {
    block: 'page',
    title: 'H-W-H-P',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [{
        block: 'title',
        content: 'МИР МЕНЯЕТСЯ. МЕНЯЕТСЯ КУЛЬТУРА'
    }]
};
