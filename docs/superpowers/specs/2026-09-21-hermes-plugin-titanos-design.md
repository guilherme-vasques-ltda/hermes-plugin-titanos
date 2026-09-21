# Hermes Plugin Titanos — Design

## Objetivo

Distribuir o MCP oficial do Titanos como um Agent Plugin v1 instalável pelo Hermes Desktop, sem reimplementar ferramentas ou armazenar credenciais no repositório.

## Decisões

- **Formato:** Agent Plugin v1 portátil, com `plugin.json`, `mcp.json` e uma skill embarcada.
- **Execução:** Hermes inicia `npx -y @titanos/mcp-agents@1.47.1` como MCP stdio.
- **Autenticação:** OAuth 2.1 do próprio `@titanos/mcp-agents`. O operador executa o comando `login` uma vez; tokens não entram em arquivos versionados.
- **Escopo:** somente conexão MCP e documentação operacional. Não inclui uma pane visual do Desktop, wrapper Python nem API própria.
- **Distribuição:** repositório privado da organização e instalação por Git no Hermes Desktop. Publicação no catálogo oficial é uma etapa posterior, pois exige repositório público, release e pin revisado.

## Segurança

`mcp.json` não contém `TITANOS_API_KEY`, token OAuth, URL com credencial nem `.env`. O plugin usa o fluxo OAuth já implementado no pacote Titanos.

## Critérios de aceite

1. Hermes valida o diretório como Agent Plugin v1.
2. O manifest declara um MCP stdio com `npx` e versão exata do pacote Titanos.
3. A skill explica instalação, login, diagnóstico e remoção sem expor segredo.
4. Testes impedem a inclusão acidental de credenciais nos descritores do plugin.
