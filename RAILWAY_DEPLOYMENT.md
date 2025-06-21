# Railway Deployment Guide - Manuel de Deus Portfolio

## Arquivos de Configuração Criados

### 1. railway.json
Configuração principal do Railway com:
- Builder: NIXPACKS
- Comando de start: `npm run start`
- Política de restart automático

### 2. Procfile
Especifica o comando para iniciar a aplicação web

### 3. nixpacks.toml
Configuração do build system:
- Node.js 18
- Instala dependências com `npm ci`
- Build com `npm run build`

## Passos para Deploy no Railway

### 1. Preparação do Projeto
- ✅ Arquivos de configuração criados
- ✅ Servidor configurado para usar PORT dinâmico
- ✅ Build script configurado no package.json

### 2. Variáveis de Ambiente Necessárias

#### Obrigatórias para produção:
```
NODE_ENV=production
```

#### Opcionais (para funcionalidades completas):
```
SENDGRID_API_KEY=sua_chave_sendgrid_aqui
DATABASE_URL=sua_url_postgres_aqui (se usar banco de dados)
```

### 3. Deploy no Railway

1. **Conectar Repositório:**
   - Acesse https://railway.app
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Conecte seu repositório

2. **Configurar Variáveis de Ambiente:**
   - No painel do Railway, vá em "Variables"
   - Adicione as variáveis necessárias

3. **Deploy Automático:**
   - Railway detectará automaticamente os arquivos de configuração
   - O deploy será feito automaticamente após cada push

### 4. Funcionalidades do Deploy

- **Port Binding:** Automático via variável PORT do Railway
- **Static Files:** Servidos da pasta `/dist/public` em produção
- **API Routes:** Disponíveis em `/api/*`
- **Hot Reload:** Desabilitado em produção
- **Error Handling:** Configurado para restart automático

### 5. Monitoramento

- Logs disponíveis no painel do Railway
- Restart automático em caso de falha
- Métricas de performance disponíveis

### 6. Domínio

- Railway fornece um domínio automático `.up.railway.app`
- Domínio customizado pode ser configurado nas configurações

## Estrutura de Build

```
npm ci → npm run build → npm run start
```

- **Build Frontend:** Vite compila React para `/dist/public`
- **Build Backend:** esbuild bundle para `/dist/index.js`
- **Start:** Node.js executa servidor de produção