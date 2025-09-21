
# Site da Clínica – Dra. Luciana

Este é um site estático acessível, responsivo e pronto para SEO local, com página de **agendamento online** via Calendly (substituível por TidyCal ou embed do seu provedor).

## Como usar
1. Abra `index.html` localmente ou publique tudo da pasta `site_dentista/` em qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Hostinger).
2. Edite os dados: telefone, endereço, CRO, fotos em `assets/img/`.
3. Troque a URL do Calendly em `agendar.html` pelo seu link.
4. (Opcional) Configure **Formspree** no `contato.html` para receber mensagens (troque a endpoint pelo seu).

## Embed do Amelia/Bookly/Cal.com
- **Calendly/TidyCal**: mantenha o embed atual em `agendar.html`.
- **Cal.com**: substitua o `<div class="calendly-inline-widget"...>` pelo script do Cal.com.
- **Amelia (WordPress)**: monte a página `Agendar` no WordPress e use um link no menu apontando para o seu domínio WordPress (ex.: `https://agenda.sua-clinica.com/agendar`).

## SEO & Schema
- JSON-LD do tipo `Dentist` já está no `<head>` (edite nome, imagem, telefone, endereço).
- Títulos, descrições e estrutura semântica prontos.
- Verifique contraste com **Lighthouse** (Chrome DevTools).

## Acessibilidade
- Skip-link, navegação por teclado, foco visível, labels e `alt` nas imagens.
- Tipografia legível (Inter + Playfair Display).

## Cores
- Primária: #2A9D8F
- Secundária: #264653
- Acento: #E9C46A
- Fundo: #F8FAFC
- Texto: #0F172A

## Publicar no Netlify (exemplo)
- Arraste a pasta para o painel do Netlify ou use `netlify deploy`.
- Configure o domínio e HTTPS.
- Opcional: redirecione o WWW para o domínio raiz.

## Próximos passos sugeridos
- Inserir fotos reais e depoimentos.
- Conectar ao **Google Business Profile** e **Search Console**.
- Ativar Google Analytics/Tag Manager.
- Políticas LGPD adaptadas à clínica.
