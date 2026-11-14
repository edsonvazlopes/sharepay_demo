# Technical Decisions

## Decisão: usar persistência relacional

**Contexto**

O produto lida com carteiras, membros, lançamentos, pendências e fechamentos que precisam manter consistência.

**Decisão**

Usar banco relacional como base de persistência.

**Motivação**

Dados financeiros compartilhados se beneficiam de relacionamentos claros e operações consistentes.

**Consequências**

A modelagem fica mais explícita, com o trade-off de exigir cuidado nas evoluções de esquema.

## Decisão: separar tipos de lançamento

**Contexto**

Nem toda despesa compartilhada tem o mesmo comportamento.

**Decisão**

Tratar lançamentos pessoais, coletivos, direcionados, parcelados e fixos como variações conceituais do domínio.

**Motivação**

Isso aproxima o produto do modo como grupos realmente dividem despesas.

**Consequências**

O fluxo fica mais flexível, mas exige estados e validações bem definidos.

## Decisão: versionar fechamento em alto nível

**Contexto**

Períodos financeiros fechados precisam preservar confiança e histórico.

**Decisão**

Representar o fechamento como marco do ciclo e manter uma visão de referência por versão.

**Motivação**

Prestação de contas exige clareza sobre o que foi considerado em cada fechamento.

**Consequências**

A leitura histórica melhora, com maior responsabilidade sobre fluxos de reabertura e alteração.

## Decisão: manter código de produção privado

**Contexto**

O projeto contém regras financeiras, segurança, integrações e infraestrutura que não devem ser expostas em repositório público.

**Decisão**

Publicar somente documentação de alto nível, screenshots revisados e exemplos genéricos.

**Motivação**

Permite apresentar maturidade técnica sem revelar detalhes sensíveis.

**Consequências**

O repositório público usa placeholders e omissões intencionais.

## Decisão: `[TITULO DA DECISAO PENDENTE]`

**Contexto**

`[DESCREVER CONTEXTO CONFIRMADO]`

**Decisão**

`[DESCREVER DECISAO CONFIRMADA]`

**Motivação**

`[DESCREVER MOTIVACAO PUBLICA]`

**Consequências**

`[DESCREVER BENEFICIOS E TRADE-OFFS SEM EXPOR DETALHES INTERNOS]`
