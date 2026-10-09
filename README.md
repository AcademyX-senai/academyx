# AcademiX — Plataforma de Organização Acadêmica

O AcademiX é uma plataforma web desenvolvida para ajudar estudantes a organizar sua rotina acadêmica em um único lugar. A proposta reúne disciplinas, horários, provas, atividades, frequência e avisos em uma interface intuitiva e responsiva.

O projeto foi desenvolvido durante o Hackathon da UC Frameworks Front-end, com duração de quatro horas, utilizando React. A aplicação foi planejada para funcionar sem backend, com armazenamento de dados no navegador por meio do localStorage.

## Sumário

- [ODS](#ods)
- [Problema](#problema)
- [Público-alvo](#público-alvo)
- [Proposta de valor](#proposta-de-valor)
- [Benchmarking](#benchmarking)
- [Requisitos](#requisitos)
- [User Stories](#user-stories)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Protótipo](#protótipo)
- [Aplicação e repositório](#aplicação-e-repositório)
- [Processo de desenvolvimento](#processo-de-desenvolvimento)
- [Inteligência artificial](#inteligência-artificial)
- [Integrantes](#integrantes)

## ODS

**ODS 4 — Educação de Qualidade**

O AcademiX está relacionado ao Objetivo de Desenvolvimento Sustentável 4 da ONU, que busca assegurar uma educação inclusiva, equitativa e de qualidade.

A solução procura contribuir para a organização dos estudos, permitindo que os estudantes acompanhem seus compromissos, se preparem para avaliações e monitorem sua frequência acadêmica.

## Problema

As informações da vida acadêmica frequentemente ficam espalhadas entre portais institucionais, grupos de mensagens, e-mails, cadernos e planilhas.

Essa fragmentação pode dificultar o acompanhamento de provas, prazos de entrega, horários e frequência, aumentando o risco de esquecimentos e prejudicando o planejamento dos estudos.

O AcademiX propõe centralizar essas informações em um único ambiente, facilitando o acesso e a organização da rotina acadêmica.

## Público-alvo

Estudantes de escolas técnicas e faculdades que precisam administrar várias disciplinas, horários de aula, avaliações, atividades e compromissos acadêmicos.

### Definição do problema

| Item | Descrição |
|---|---|
| ODS escolhido | ODS 4 — Educação de Qualidade |
| Problema | Informações acadêmicas dispersas dificultam a organização da rotina estudantil |
| Público-alvo | Estudantes de escolas técnicas e faculdades |
| Necessidade | Reunir informações acadêmicas em um ambiente simples e acessível |
| Objetivo | Facilitar o planejamento dos estudos e o acompanhamento dos compromissos acadêmicos |

## Proposta de valor

| Pergunta | Resposta |
|---|---|
| Qual problema resolvemos? | A desorganização causada pela dispersão de informações acadêmicas |
| Para quem? | Estudantes de escolas técnicas e faculdades |
| Como a solução ajuda? | Centralizando disciplinas, horários, provas, atividades, avisos e frequência |
| Qual valor entrega? | Mais organização, autonomia e previsibilidade na rotina de estudos |

## Benchmarking

Foram analisadas cinco soluções existentes relacionadas à organização acadêmica, à produtividade e à comunicação educacional.

### Comparação das soluções

| Solução | Funcionalidades | Público-alvo | Pontos positivos | Pontos negativos | Referência para o AcademiX |
|---|---|---|---|---|---|
| Google Classroom | Turmas, atividades, prazos, entregas e comunicação | Professores e estudantes | Organização das atividades e integração com ferramentas Google | Depende da adoção institucional e não é centrado na gestão pessoal completa do estudante | Atividades com prazos e status |
| Moodle | Cursos, materiais, fóruns, questionários e avaliações | Instituições, professores e estudantes | Flexibilidade e variedade de recursos educacionais | A experiência depende da configuração e pode ser complexa | Organização de informações e avisos |
| Notion | Páginas, bancos de dados, tarefas e calendários | Estudantes, profissionais e equipes | Personalização e diferentes formas de visualização | Exige configuração manual para criar um sistema acadêmico próprio | Cores e categorias por disciplina |
| Google Agenda | Eventos, lembretes e calendários diários, semanais e mensais | Público em geral | Facilidade de uso e organização visual | Não oferece, por padrão, controle acadêmico de frequência por disciplina | Calendário acadêmico unificado |
| Agenda Edu | Comunicados, atividades e comunicação escolar | Instituições, educadores, estudantes e responsáveis | Centralização de informações e comunicação escolar | Depende da instituição e possui foco amplo na comunidade escolar | Painel inicial com avisos importantes |

### 1. Google Classroom

**Descrição:** plataforma educacional para organização de turmas, atividades, materiais e comunicação entre professores e estudantes.

**Funcionalidades analisadas:**

- Organização de atividades por turma;
- Publicação de tarefas e prazos;
- Entrega de trabalhos;
- Comunicação entre professores e estudantes;
- Integração com ferramentas do Google.

**Pontos positivos:**

- Facilita a distribuição de atividades;
- Centraliza informações das turmas;
- Integra-se a outras ferramentas educacionais.

**Pontos negativos:**

- Depende da adoção e configuração pela instituição;
- Não tem como foco principal a organização pessoal completa da rotina do estudante.

**Referência para o AcademiX:** lista de atividades com prazos e acompanhamento de conclusão.

**Fonte:** [Google Classroom](https://classroom.google.com)

### 2. Moodle

**Descrição:** sistema de gestão da aprendizagem de código aberto, utilizado para disponibilizar conteúdos e atividades educacionais.

**Funcionalidades analisadas:**

- Disponibilização de materiais didáticos;
- Atividades e questionários;
- Fóruns de discussão;
- Avaliações e feedback;
- Organização de cursos.

**Pontos positivos:**

- Ampla variedade de recursos;
- Possibilidade de personalização;
- Código aberto;
- Organização de conteúdos por curso.

**Pontos negativos:**

- A navegação varia conforme a configuração institucional;
- A variedade de recursos pode exigir maior familiaridade;
- Não é centrado na organização pessoal completa da rotina acadêmica.

**Referência para o AcademiX:** organização das informações e área de avisos importantes.

**Fonte:** [Documentação oficial do Moodle](https://docs.moodle.org)

### 3. Notion

**Descrição:** ferramenta de produtividade que permite organizar informações por meio de páginas, listas, tabelas, bancos de dados e calendários.

**Funcionalidades analisadas:**

- Criação de páginas e anotações;
- Bancos de dados personalizados;
- Listas de tarefas;
- Calendários;
- Organização por categorias.

**Pontos positivos:**

- Alta flexibilidade;
- Personalização das informações;
- Diferentes formas de visualização;
- Possibilidade de reunir tarefas e anotações.

**Pontos negativos:**

- Exige configuração manual para criar um ambiente acadêmico completo;
- A personalização pode demandar tempo;
- O controle de frequência precisa ser estruturado pelo usuário.

**Referência para o AcademiX:** cores por disciplina e organização das informações em diferentes visualizações.

**Fonte:** [Notion](https://www.notion.so)

### 4. Google Agenda

**Descrição:** ferramenta de gerenciamento de compromissos que permite criar eventos, configurar lembretes e visualizar calendários.

**Funcionalidades analisadas:**

- Cadastro de eventos;
- Visualizações diária, semanal e mensal;
- Lembretes;
- Organização visual por cores;
- Compartilhamento de calendários.

**Pontos positivos:**

- Facilidade de uso;
- Planejamento visual dos compromissos;
- Diferentes visualizações;
- Lembretes de eventos.

**Pontos negativos:**

- Não é específico para a gestão acadêmica;
- Não calcula, por padrão, a frequência por disciplina;
- Exige cadastro e organização manual dos compromissos acadêmicos.

**Referência para o AcademiX:** calendário semanal e mensal reunindo aulas, provas e atividades.

**Fonte:** [Google Agenda](https://calendar.google.com)

### 5. Agenda Edu

**Descrição:** plataforma voltada à comunicação e à organização da rotina escolar, conectando instituições de ensino e a comunidade escolar.

**Funcionalidades analisadas:**

- Divulgação de comunicados;
- Compartilhamento de informações escolares;
- Comunicação entre escola e responsáveis;
- Divulgação de atividades e eventos.

**Pontos positivos:**

- Centralização dos comunicados;
- Facilita a comunicação escolar;
- Reúne informações em um ambiente digital.

**Pontos negativos:**

- Os recursos dependem da instituição e de sua configuração;
- Possui foco na comunicação e no acompanhamento escolar;
- Não tem como objetivo principal o controle pessoal completo da rotina acadêmica.

**Referência para o AcademiX:** painel inicial com avisos e informações importantes.

**Fonte:** [Agenda Edu](https://www.agendaedu.com)

### Conclusão do benchmarking

As soluções analisadas demonstram a importância de centralizar informações, organizar compromissos e facilitar o acompanhamento de atividades.

O AcademiX utiliza essas referências para propor uma plataforma centrada no estudante, reunindo organização de horários, provas, atividades, avisos e frequência.

## Requisitos

A solução foi planejada para funcionar sem backend, utilizando o localStorage para persistência local dos dados.

### Requisitos funcionais

| Código | Descrição |
|---|---|
| RF01 | Permitir cadastrar um perfil de estudante e acessar a plataforma |
| RF02 | Permitir cadastrar, editar e excluir disciplinas com nome, professor, sala e cor |
| RF03 | Permitir cadastrar e visualizar aulas em uma grade semanal |
| RF04 | Permitir cadastrar, editar e excluir provas com disciplina, data, horário e conteúdo |
| RF05 | Permitir cadastrar, editar, concluir e excluir atividades com prazo |
| RF06 | Permitir registrar presença ou falta em cada aula |
| RF07 | Calcular a frequência por disciplina e alertar sobre a proximidade do limite mínimo |
| RF08 | Permitir cadastrar avisos, listá-los e marcá-los como lidos |
| RF09 | Exibir um painel com aulas do dia, próximas provas, atividades pendentes e avisos recentes |
| RF10 | Exibir calendário semanal e mensal com aulas, provas, prazos e filtro por disciplina |

### Requisitos não funcionais

| Código | Descrição |
|---|---|
| RNF01 | A aplicação deve ser responsiva em computadores e celulares |
| RNF02 | A interface deve oferecer contraste adequado, rótulos e navegação por teclado |
| RNF03 | O carregamento inicial deve ter como meta até três segundos em condições adequadas |
| RNF04 | As principais ações devem ser acessíveis em até três cliques a partir do painel |
| RNF05 | Os dados devem permanecer salvos no navegador após recarregar a página |
| RNF06 | A aplicação deve funcionar nas versões atuais dos principais navegadores |
| RNF07 | O código deve ser organizado em componentes reutilizáveis e pastas com responsabilidades definidas |
| RNF08 | Os formulários devem validar os dados e apresentar mensagens compreensíveis |
| RNF09 | A interface deve tratar estados vazios e erros de forma clara, quando aplicável |
| RNF10 | O projeto deve ser publicado na Internet e versionado com Git utilizando commits convencionais |

## User Stories

### US01 — Perfil do estudante

Como estudante, quero criar meu perfil e acessar a plataforma, para reunir meus dados acadêmicos em um só lugar.

**Critérios de aceitação:**

- O formulário exige nome e curso ou instituição;
- Após salvar, o estudante é direcionado ao painel;
- O perfil continua disponível após reabrir a aplicação.

### US02 — Disciplinas

Como estudante, quero cadastrar minhas disciplinas, para organizar minha rotina por matéria.

**Critérios de aceitação:**

- É possível informar nome, professor, sala e cor;
- A disciplina aparece na listagem após ser salva;
- É possível editar e excluir, com confirmação antes da exclusão.

### US03 — Grade de horários

Como estudante, quero cadastrar meus horários de aula, para saber onde e quando tenho aulas.

**Critérios de aceitação:**

- A aula é vinculada a uma disciplina, um dia e um horário;
- A grade semanal identifica as disciplinas por cor;
- O sistema impede duas aulas no mesmo dia e horário.

### US04 — Provas

Como estudante, quero registrar minhas provas, para me preparar com antecedência.

**Critérios de aceitação:**

- A prova contém disciplina, data, horário e conteúdo;
- As provas são listadas em ordem de data;
- As provas passadas são visualmente diferenciadas.

### US05 — Atividades

Como estudante, quero cadastrar atividades com prazo, para não perder entregas.

**Critérios de aceitação:**

- A atividade contém título, disciplina e data de entrega;
- É possível concluir e reabrir uma atividade;
- Atividades atrasadas e pendentes são destacadas.

### US06 — Registro de presença

Como estudante, quero registrar presença ou falta, para acompanhar minha frequência.

**Critérios de aceitação:**

- É possível registrar presença ou falta em cada aula;
- Um registro pode ser corrigido;
- Os registros ficam vinculados à disciplina.

### US07 — Frequência e alertas

Como estudante, quero acompanhar minha frequência, para saber quando estou próximo do limite de faltas.

**Critérios de aceitação:**

- O percentual é calculado a partir dos registros;
- O limite padrão é de 75% e pode ser alterado;
- Um alerta é exibido quando a frequência se aproxima do limite.

### US08 — Avisos

Como estudante, quero registrar e consultar avisos, para não perder comunicados importantes.

**Critérios de aceitação:**

- O aviso contém título, texto e data;
- Avisos não lidos aparecem em destaque;
- É possível marcar avisos como lidos.

### US09 — Painel inicial

Como estudante, quero visualizar um resumo do meu dia, para identificar rapidamente minhas prioridades.

**Critérios de aceitação:**

- O painel apresenta aulas, provas, atividades pendentes e avisos;
- Os blocos permitem acessar as respectivas áreas;
- Na ausência de dados, o sistema orienta o primeiro cadastro.

### US10 — Calendário

Como estudante, quero visualizar aulas, provas e prazos em um calendário, para planejar minha semana e meu mês.

**Critérios de aceitação:**

- É possível alternar entre as visões semanal e mensal;
- Aulas, provas e atividades possuem identificações visuais diferentes;
- O filtro permite visualizar os compromissos de uma disciplina.

## Funcionalidades

| Funcionalidade | Descrição | Requisito | Status |
|---|---|---|---|
| Perfil do estudante | Criação de conta, login, logout e perfil com nome, curso e instituição | RF01 | Implementada |
| Disciplinas | Cadastro, edição e exclusão, com professor, sala e cor | RF02 | Implementada |
| Grade semanal | Aulas por dia e horário, sem conflito de horários | RF03 | Implementada |
| Provas | Cadastro, edição e exclusão, listadas por data | RF04 | Implementada |
| Atividades | Prazo de entrega, conclusão e destaque das atrasadas | RF05 | Implementada |
| Presença e falta | Registro por aula, com possibilidade de correção | RF06 | Implementada |
| Frequência e alertas | Percentual por disciplina e limite mínimo configurável | RF07 | Implementada |
| Avisos | Cadastro e marcação de lido | RF08 | Implementada |
| Painel inicial | Resumo do dia, provas, atividades, avisos e alertas | RF09 | Implementada |
| Calendário | Visões semanal e mensal, com filtro por disciplina | RF10 | Implementada |

Os dados ficam salvos no navegador (localStorage), com dados de exemplo no primeiro acesso.

> O login é simulado no próprio navegador, sem servidor. As contas e senhas ficam no localStorage, o que serve para a demonstração acadêmica, mas não é um modelo seguro para uso real.

## Tecnologias utilizadas

- **React:** construção da interface;
- **Vite:** ambiente de desenvolvimento e build;
- **React Router:** navegação entre telas;
- **CSS:** estilização e responsividade;
- **localStorage:** persistência local;
- **Git e GitHub:** versionamento;
- **GitHub Projects:** gerenciamento das atividades;
- **Google Stitch:** prototipação das interfaces.

### Framework utilizado

O React foi escolhido para desenvolver a aplicação por meio de componentes reutilizáveis e gerenciamento de estado.

O Vite é utilizado para executar o ambiente de desenvolvimento e gerar a versão de produção.

## Estrutura do projeto

A estrutura abaixo é uma referência e deve corresponder aos arquivos reais do repositório.

```
src/
├── assets/        # Imagens e ícones
├── components/    # Componentes reutilizáveis
│   ├── layout/    # Estrutura geral da interface
│   └── ui/        # Botões, campos, cartões e modais
├── context/       # Estado compartilhado
├── data/          # Dados de demonstração
├── hooks/         # Hooks personalizados
├── pages/         # Páginas da aplicação
├── services/      # Persistência e acesso aos dados
├── styles/        # Estilos globais
└── utils/         # Funções auxiliares
```

## Como executar

### Pré-requisitos

- Node.js compatível com o projeto;
- npm;
- Git.

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta:

```bash
cd academyx
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o endereço apresentado no terminal, normalmente `http://localhost:5173`.

Substitua `URL_DO_REPOSITORIO` pelo endereço real do repositório.

## Protótipo

O protótipo foi desenvolvido no Google Stitch.

[Acessar o protótipo do AcademiX](https://stitch.withgoogle.com/projects/2198332946532495130)

### Telas previstas

1. Perfil e primeiro acesso;
2. Painel inicial;
3. Lista de disciplinas;
4. Formulário de disciplina;
5. Grade de horários;
6. Provas;
7. Atividades;
8. Registro de presença;
9. Frequência por disciplina;
10. Avisos;
11. Calendário.

O protótipo final deve possuir pelo menos dez telas, fluxo de navegação e adaptação para dispositivos móveis.

## Aplicação e repositório

| Item | Link |
|---|---|
| Aplicação publicada | A preencher após o deploy |
| Repositório GitHub | https://github.com/AcademyX-senai/academyx |
| Protótipo | [Google Stitch](https://stitch.withgoogle.com/projects/2198332946532495130) |
| Quadro Kanban | [GitHub Projects — AcademyX](https://github.com/orgs/AcademyX-senai/projects/1) |

## Processo de desenvolvimento

O trabalho foi organizado para ser realizado durante as quatro horas do Hackathon.

### Etapas

1. Definição do problema e do ODS;
2. Identificação do público-alvo;
3. Benchmarking de cinco soluções;
4. Definição da proposta de valor;
5. Elaboração dos requisitos;
6. Criação das histórias de usuário;
7. Prototipação;
8. Configuração do React com Vite;
9. Desenvolvimento da interface;
10. Testes e ajustes;
11. Versionamento e publicação;
12. Documentação.

### Gestão do projeto

Foi utilizado o GitHub Projects para organizar as atividades em um quadro Kanban com 50 cartões, numerados de 01 a 50 e organizados por grupo e prioridade.

[Acessar o quadro do projeto](https://github.com/orgs/AcademyX-senai/projects/1)

Os cartões devem representar atividades reais e ter seu status atualizado de acordo com o andamento do trabalho.

### Git e versionamento

O projeto utiliza Git para registrar as alterações realizadas durante o desenvolvimento.

Exemplos de commits convencionais:

```
feat: cria tela inicial
feat: implementa cadastro de disciplinas
style: ajusta responsividade
fix: corrige validação do formulário
docs: atualiza README
```

O Hackathon exige pelo menos 30 commits significativos. A quantidade deve ser confirmada no histórico real do repositório.

## Inteligência artificial

**Ferramenta utilizada:** Claude, da Anthropic.

A inteligência artificial foi utilizada como apoio ao planejamento e à documentação do projeto.

**Utilizações:**

- Criação dos 50 cartões do GitHub Projects a partir da lista definida pela equipe;
- Apoio na organização do README;
- Sugestão da estrutura de pastas do projeto React;
- Apoio na elaboração do benchmarking, requisitos e histórias de usuário;
- Apoio no desenvolvimento das telas e componentes da aplicação, com explicações sobre React;
- Revisão e adaptação do conteúdo pela equipe.

A equipe é responsável por revisar as informações e validar o código e a solução entregue.

## Integrantes

| Integrante | Papel | Responsabilidades |
|---|---|---|
| Amós | Documentação e requisitos | Definição do problema, ODS, benchmarking, proposta de valor, requisitos, histórias de usuário, README e apoio aos testes |
| Vinicius | Protótipo e identidade visual | Criação das telas no Google Stitch, definição da identidade visual, fluxo de navegação e adaptação para dispositivos móveis |
| Kaique | Kanban e organização técnica | Organização do GitHub Projects, configuração do React com Vite, desenvolvimento, versionamento e apoio ao deploy |

> Observação: o enunciado do Hackathon prevê quatro integrantes por equipe. Inclua o quarto integrante e suas responsabilidades, caso aplicável.

## Checklist de entrega

- Aplicação Front-end funcional;
- Aplicação publicada e acessível pela Internet;
- Repositório GitHub preenchido;
- Pelo menos 30 commits significativos;
- Pelo menos 50 cartões com atividades reais;
- Benchmarking de cinco soluções documentado;
- Proposta de valor documentada;
- Dez requisitos funcionais documentados;
- Dez requisitos não funcionais documentados;
- Dez histórias de usuário com critérios de aceitação;
- Protótipo final com pelo menos dez telas;
- README revisado e atualizado;
- Registro de utilização de inteligência artificial.

> Nota: os itens marcados como documentados indicam a presença do conteúdo neste README, não a comprovação de que todas as funcionalidades foram implementadas. Os demais itens devem ser conferidos no repositório, no protótipo e na aplicação publicada.

---

Desenvolvido durante o Hackathon da UC Frameworks Front-end, com foco no ODS 4 — Educação de Qualidade.
