# Hermes Plugin Titanos Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar um Agent Plugin v1 privado que adicione o MCP OAuth do Titanos ao Hermes.

**Architecture:** O pacote declara metadados em `plugin.json`, registra o processo stdio existente do npm em `mcp.json` e fornece uma skill de uso seguro. Não executa código próprio nem persiste credenciais.

**Tech Stack:** JSON, Markdown, Node.js test runner, Hermes Agent Plugin v1 validator.

## Global Constraints

- Fixar `@titanos/mcp-agents` em `1.47.1`.
- Não incluir token, API key, `.env` ou URL com credenciais.
- Usar OAuth do pacote Titanos, nunca bearer estático no plugin.
- O repositório é privado e pertence a `guilherme-vasques-ltda`.

---

### Task 1: Descritores e skill do plugin

**Files:**
- Create: `plugin.json`
- Create: `mcp.json`
- Create: `skills/titanos-mcp/SKILL.md`
- Test: `tests/portable-plugin.test.mjs`

**Interfaces:**
- Produces: pacote Agent Plugin v1 reconhecido por `hermes plugins validate .`.
- Consumes: `@titanos/mcp-agents@1.47.1` publicado no npm.

- [ ] **Step 1: Escrever o teste que falha**

```js
const manifest = JSON.parse(await readFile(root + '/plugin.json', 'utf8'));
assert.equal(manifest.name, 'titanos-mcp');
```

- [ ] **Step 2: Executar o teste e confirmar que falha por ausência do manifest**

Run: `node --test tests/portable-plugin.test.mjs`
Expected: FAIL com `ENOENT` para `plugin.json`.

- [ ] **Step 3: Criar descritores mínimos e skill de operação OAuth**

```json
{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json",
  "mcpServers": {
    "titanos-agents": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@titanos/mcp-agents@1.47.1"]
    }
  }
}
```

- [ ] **Step 4: Executar testes e validador Hermes**

Run: `node --test tests/portable-plugin.test.mjs && hermes -p dev plugins validate .`
Expected: testes verdes e validação aprovada.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: add Titanos Agent Plugin package"
```

### Task 2: Documentação de instalação privada

**Files:**
- Create: `README.md`
- Create: `.gitignore`
- Modify: `tests/portable-plugin.test.mjs`

**Interfaces:**
- Produces: instrução reproduzível para instalar, autenticar, testar e remover o plugin pelo Hermes Desktop ou CLI.

- [ ] **Step 1: Estender o teste para exigir documentação de OAuth e proibir segredo**

```js
assert.match(readme, /login/);
assert.doesNotMatch(JSON.stringify(mcp), /TITANOS_API_KEY|tnk_|mcpat_/i);
```

- [ ] **Step 2: Confirmar falha antes de escrever README**

Run: `node --test tests/portable-plugin.test.mjs`
Expected: FAIL por ausência de `README.md`.

- [ ] **Step 3: Criar README e `.gitignore` mínimos**

README deve instruir `hermes plugins install guilherme-vasques-ltda/hermes-plugin-titanos`, `npx -y @titanos/mcp-agents@1.47.1 login`, `hermes plugins enable titanos-mcp` e verificação por `hermes mcp list` em sessão nova.

- [ ] **Step 4: Reexecutar testes e validação**

Run: `node --test tests/portable-plugin.test.mjs && hermes -p dev plugins validate .`
Expected: testes verdes e validação aprovada.

- [ ] **Step 5: Commit**

```bash
git add README.md .gitignore tests/portable-plugin.test.mjs
git commit -m "docs: add private installation guide"
```

### Task 3: Publicação interna e recibo

**Files:**
- Modify: histórico Git remoto

**Interfaces:**
- Produces: `guilherme-vasques-ltda/hermes-plugin-titanos` privado, com `main` apontando para o commit testado.

- [ ] **Step 1: Criar repositório privado sem inicialização remota**

Run: `gh repo create guilherme-vasques-ltda/hermes-plugin-titanos --private --source . --remote origin --push`
Expected: URL privada e branch `main` publicada.

- [ ] **Step 2: Ler o remoto e a branch publicada**

Run: `gh repo view guilherme-vasques-ltda/hermes-plugin-titanos --json url,visibility,defaultBranchRef`
Expected: `PRIVATE`, URL do repositório e `main`.

- [ ] **Step 3: Verificar o clone limpo**

Run: `git status --short --branch`
Expected: `## main...origin/main` sem arquivos pendentes.
