import mila from 'markdown-it-link-attributes'
import MarkdownIt from 'markdown-it'

const getTemplate = (text: any, rootTag: string = 'span', inline: boolean = false) => {
  if (inline && !rootTag) {
    return console.error('[markdown] When using inline option you must specify a root tag')
  }

  const md = inline ? (rootTag ? `<${rootTag}>` : '') + markdown.renderInline(text) + (rootTag ? `</${rootTag}>` : '') :
                      (rootTag ? `<${rootTag}>` : '') + markdown.render(text) + (rootTag ? `</${rootTag}>` : '')

  return md.replace(/<a href="([\w]+)"[ ]*(title="([^"]*)")?[^>]*>([^<]+)<\/a>/igm, (match, p1, p2, p3, p4) => {
    return `<router-link :to="{name: \'${p1}\'${(p2 ? `, params: { ${p3} }` : '')}}">${p4}</router-link>`
  })
}

const getComponent = (text: any, rootTag: string = 'div', inline: boolean = false) => {
  return {
    template: getTemplate(text, rootTag, inline),
    name: 'Markdown'
  }
}

const markdown = new MarkdownIt().use(mila, {
  target: '_blank',
  rel: 'noopener'
})

export { getTemplate, getComponent }
export default markdown
