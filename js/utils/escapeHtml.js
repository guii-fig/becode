// Substitui caracteres que têm significado no HTML por entidades de texto.
// Assim, valores de usuário podem ser exibidos sem serem interpretados como marcação.
export const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
})[character]);
