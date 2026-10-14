# Leveza & Essência (Carne & Lazo) - versão multilíngue

Aplicativo web de protocolo de 21 dias de alimentação proteica para mulheres, com foco em emagrecimento sem dietas restritivas. Conta com chat de IA de nutrição, progressão diária e funcionamento offline.

🔗 **Projeto no ar:** https://carnelazo.lovable.app/

## Sobre o projeto

O usuário começa com um quiz de boas-vindas e recebe um plano diário de refeições ao longo de 21 dias. A jornada é dividida em módulos temáticos que se desbloqueiam automaticamente a cada 2 dias, e a "Nutri", uma assistente com IA, tira dúvidas sobre o tema em tempo real.

## Funcionalidades

- Quiz de boas-vindas e plano diário de refeições proteicas
- Jornada de 21 dias com módulos temáticos de desbloqueio progressivo
- Chat com IA de nutrição ("Nutri") para dúvidas a qualquer hora
- Acompanhamento de hidratação, sequência de dias (racha) e medalhas de evolução
- Receitas e frase motivacional diária
- Interface em três idiomas
- Funciona offline (Service Worker)
- Sem cadastro e sem senha

## Tecnologias

- HTML e CSS
- Tailwind CSS 4
- JavaScript e TypeScript
- TanStack Start
- Service Worker (PWA/offline)
- IA integrada via Lovable (chat da Nutri)

## Como rodar localmente

```bash
# clonar o repositório
git clone https://github.com/joota-tech/leveza-essencia-app.git
cd leveza-essencia-app

# instalar dependências
npm install

# iniciar em modo de desenvolvimento
npm run dev
```

> Observação: a funcionalidade de IA depende da integração configurada no Lovable e pode não funcionar fora dele.

## Sobre o desenvolvimento

Projeto pessoal criado com apoio do Lovable, com o objetivo de praticar desenvolvimento web moderno, internacionalização, uso offline e integração de IA em aplicações reais.

## Autor

**João Pedro Alves de Souza**
GitHub: [@joota-tech](https://github.com/joota-tech)
