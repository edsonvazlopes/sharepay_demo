# Architecture Overview

```mermaid
flowchart LR
    U[Usuário] --> W[Cliente Web]
    W --> AP[Camada de Aplicação]
    AP --> V[Validação e Autorização]
    V --> DS[Serviços de Domínio Financeiro]
    DS --> DB[Persistência Relacional]
    AP --> EXT[Serviços Externos Genéricos]
```

> Este diagrama mostra apenas a arquitetura lógica de alto nível. Nomes internos, endpoints, rotas administrativas, IPs, portas, topologia de rede, bancos, buckets e configurações reais foram omitidos intencionalmente.
