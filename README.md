# Teste de Performance com K6

## Objetivo

Este projeto tem como objetivo realizar um **teste de carga básico utilizando o K6** em uma API pública.

O teste foi configurado para simular **500 usuários virtuais simultâneos durante 5 minutos**, com o objetivo de avaliar o comportamento da API sob carga e identificar possíveis gargalos de desempenho.


## Tecnologias Utilizadas

* JavaScript
* K6
* Node.js
* Git


## Pré-requisitos

Antes de executar o projeto é necessário ter instalado:

* **k6**
* **Node.js**
* **Git**


## Executar o Teste

Para executar o teste de carga:

```bash
k6 run tests/loadTest.js
```

## Estrutura do Projeto

```
OUTSERA-PERFORMANCE-K6
│
├── config
│   └── options.js
│
├── services
│   └── postsService.js
│
├── tests
│   └── loadTest.js
│
├── utils
│   └── checks.js
│
└── README.md
```

