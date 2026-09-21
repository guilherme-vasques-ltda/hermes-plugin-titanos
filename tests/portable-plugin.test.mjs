import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function readJson(filename) {
  return JSON.parse(await readFile(path.join(root, filename), 'utf8'));
}

test('declares the Titanos portable plugin manifest', async () => {
  const manifest = await readJson('plugin.json');

  assert.equal(manifest.$schema, 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json');
  assert.equal(manifest.name, 'titanos-mcp');
  assert.equal(manifest.version, '0.1.0');
});

test('starts the pinned Titanos MCP package via stdio without credentials', async () => {
  const mcp = await readJson('mcp.json');
  const server = mcp.mcpServers['titanos-agents'];

  assert.equal(mcp.$schema, 'https://agent-plugins.org/schemas/1.0.0/mcp.schema.json');
  assert.deepEqual(server, {
    type: 'stdio',
    command: 'npx',
    args: ['-y', '@titanos/mcp-agents@1.47.1'],
  });
  assert.doesNotMatch(JSON.stringify(mcp), /TITANOS_API_KEY|tnk_|mcpat_/i);
});

test('ships OAuth installation guidance', async () => {
  const [readme, skill] = await Promise.all([
    readFile(path.join(root, 'README.md'), 'utf8'),
    readFile(path.join(root, 'skills/titanos-mcp/SKILL.md'), 'utf8'),
  ]);

  assert.match(readme, /@titanos\/mcp-agents@1\.47\.1 login/);
  assert.match(skill, /OAuth/i);
  assert.doesNotMatch(`${readme}\n${skill}`, /TITANOS_API_KEY|tnk_live_|mcpat_/i);
});
