
# AcademiX

Plataforma web para ajudar estudantes a organizar a rotina acadêmica em um só lugar: disciplinas, horários, provas, atividades, frequência e avisos.

O AcademiX foi idealizado durante o Hackathon da unidade curricular **Frameworks Front-end**, com foco no **ODS 4 — Educação de Qualidade**. A proposta prioriza uma experiência simples, responsiva e centrada no estudante.

> **Status do projeto:** em desenvolvimento. Os itens descritos como requisitos e funcionalidades planejadas não devem ser considerados implementados até serem verificados na aplicação.

## Índice

- [Problema e objetivo](#problema-e-objetivo)
- [Público-alvo](#público-alvo)
- [ODS 4 — Educação de Qualidade](#ods-4--educação-de-qualidade)
- [Proposta de valor](#proposta-de-valor)
- [Benchmarking](#benchmarking)
- [Requisitos do sistema](#requisitos-do-sistema)
- [Histórias de usuário](#histórias-de-usuário)
- [Funcionalidades e status](#funcionalidades-e-status)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Protótipo e aplicação](#protótipo-e-aplicação)
- [Processo de desenvolvimento](#processo-de-desenvolvimento)
- [Testes e limitações](#testes-e-limitações)
- [Uso de inteligência artificial](#uso-de-inteligência-artificial)
- [Equipe](#equipe)

## Problema e objetivo

Informações da vida acadêmica costumam ficar distribuídas entre portais institucionais, mensagens, e-mails, cadernos e planilhas. Essa fragmentação pode dificultar o acompanhamento de provas, prazos, avisos e frequência.

O objetivo do AcademiX é reunir essas informações em uma interface única para ajudar o estudante a planejar sua rotina, acompanhar suas responsabilidades e identificar compromissos importantes.

## Público-alvo

Estudantes de escolas técnicas e instituições de ensino superior que precisam organizar várias disciplinas, horários de aula, atividades, provas e registros de frequência.

## ODS 4 — Educação de Qualidade

O projeto se relaciona ao Objetivo de Desenvolvimento Sustentável 4 ao propor uma ferramenta de apoio à organização dos estudos. A aplicação não substitui os sistemas oficiais das instituições nem garante, por si só, melhores resultados educacionais; sua finalidade é facilitar o planejamento pessoal do estudante.

## Proposta de valor

| Pergunta | Resposta |
|---|---|
| Qual problema buscamos resolver? | A dificuldade de acompanhar informações acadêmicas espalhadas em diferentes canais. |
| Para quem? | Estudantes de escolas técnicas e faculdades. |
| Como a solução ajuda? | A proposta é reunir disciplinas, horários, provas, atividades, frequência e avisos em um painel e calendário. |
| Qual valor pretende entregar? | Mais visibilidade dos compromissos e apoio ao planejamento da rotina de estudos. |

## Benchmarking

O levantamento inicial considerou cinco soluções relacionadas à organização acadêmica. As observações abaixo são uma síntese exploratória e não representam uma avaliação técnica ou teste comparativo formal.

| Solução | Recursos de referência | Limitação considerada para este projeto | Ideia aproveitada |
|---|---|---|---|
| Google Classroom | Turmas, atividades e avisos | Depende da adoção pela instituição e não tem como foco principal a organização pessoal completa do estudante | Atividades com prazo e status |
| Moodle | Conteúdos, atividades, fóruns e avisos | A experiência depende da configuração de cada instituição | Área de avisos |
| Notion | Páginas, bancos de dados e calendários | Exige que o estudante configure sua própria organização | Organização visual por disciplina |
| Google Agenda | Eventos, lembretes e visões de calendário | É uma agenda geral, sem foco nativo em frequência por disciplina | Calendário semanal e mensal |
| Agenda Edu | Comunicação e agenda escolar | O foco depende do contexto escolar e da adoção institucional | Comunicados em destaque |

### Diferencial proposto

O AcademiX pretende concentrar a organização pessoal do estudante em um só lugar, incluindo acompanhamento de frequência e alertas. Esse diferencial deverá ser validado durante os testes com usuários.

## Requisitos do sistema

Os requisitos a seguir descrevem o escopo planejado. Consulte a seção [Funcionalidades e status](#funcionalidades-e-status) para distinguir o que já foi implementado do que ainda está planejado.

### Requisitos funcionais

| Código | Descrição |
|---|---|
| RF01 | Permitir cadastrar e consultar o perfil do estudante. |
| RF02 | Permitir cadastrar, editar e excluir disciplinas, incluindo nome, professor, sala e cor. |
| RF03 | Permitir cadastrar aulas em uma grade semanal e visualizar os horários. |
| RF04 | Permitir cadastrar, editar e excluir provas com disciplina, data, horário e conteúdo. |
| RF05 | Permitir cadastrar, editar, concluir e excluir atividades com prazo. |
| RF06 | Permitir registrar presença ou falta nas aulas. |
| RF07 | Calcular a frequência por disciplina e alertar quando estiver próxima do limite configurado. |
| RF08 | Permitir cadastrar avisos e marcá-los como lidos. |
| RF09 | Exibir um painel com resumo das aulas do dia, próximas provas, atividades pendentes e avisos recentes. |
| RF10 | Exibir calendário semanal e mensal com aulas, provas e prazos, com filtro por disciplina. |

### Requisitos não funcionais

| Código | Descrição |
|---|---|
| RNF01 | A interface deve se adaptar a computadores e celulares. |
| RNF02 | A interface deve buscar acessibilidade, com contraste adequado, rótulos e navegação por teclado. |
| RNF03 | A aplicação deve ter carregamento adequado; a meta de até 3 segundos deverá ser medida em condições de teste definidas. |
| RNF04 | As principais ações devem ser simples de encontrar e executar; a meta de até 3 cliques deverá ser validada. |
| RNF05 | Se usado `localStorage`, os dados devem permanecer após recarregar a página no mesmo navegador e perfil. |
| RNF06 | A aplicação deverá ser verificada nas versões atuais dos navegadores escolhidos para suporte. |
| RNF07 | O código deve ser organizado em componentes reutilizáveis e pastas com responsabilidades claras. |
| RNF08 | Os formulários devem validar dados e exibir mensagens compreensíveis. |
| RNF09 | A interface deve tratar estados vazios e erros de forma clara; estados de carregamento devem ser usados quando aplicável. |
| RNF10 | O código deve ser versionado com Git, usar commits convencionais e a aplicação deverá ser publicada se o escopo do evento exigir deploy. |

## Histórias de usuário

### US01 — Perfil do estudante (RF01)

**Como** estudante, **quero** cadastrar meu perfil, **para** personalizar minha organização acadêmica.

Critérios de aceitação:
- O formulário valida os campos obrigatórios definidos pela equipe.
- Após salvar, o usuário consegue acessar o painel.
- Se houver persistência local implementada, o perfil permanece disponível após recarregar a página.

### US02 — Disciplinas (RF02)

**Como** estudante, **quero** organizar minhas disciplinas, **para** separar meus compromissos por matéria.

Critérios de aceitação:
- É possível informar os campos definidos para uma disciplina.
- A disciplina aparece na lista após ser salva.
- Se edição e exclusão estiverem implementadas, ambas funcionam e a exclusão solicita confirmação.

### US03 — Grade de horários (RF03)

**Como** estudante, **quero** visualizar meus horários, **para** saber quando tenho aula.

Critérios de aceitação:
- Cada aula pode ser associada a uma disciplina, dia e horário.
- A grade permite identificar visualmente as disciplinas.
- O sistema avisa ou impede conflitos de horário, conforme a regra definida na implementação.

### US04 — Provas (RF04)

**Como** estudante, **quero** registrar provas, **para** me preparar com antecedência.

Critérios de aceitação:
- A prova pode ser associada a uma disciplina e a uma data.
- A lista apresenta as provas em ordem cronológica, caso essa ordenação esteja implementada.
- Provas passadas podem ser diferenciadas visualmente.

### US05 — Atividades (RF05)

**Como** estudante, **quero** registrar atividades e prazos, **para** acompanhar minhas entregas.

Critérios de aceitação:
- A atividade possui título, disciplina e prazo, conforme o formulário implementado.
- É possível identificar atividades concluídas e pendentes.
- Atividades atrasadas são sinalizadas quando essa regra estiver implementada.

### US06 — Frequência (RF06)

**Como** estudante, **quero** registrar presença e falta, **para** acompanhar minha participação nas aulas.

Critérios de aceitação:
- O usuário consegue registrar o estado de presença de uma aula.
- O registro pode ser corrigido quando aplicável.
- Os dados ficam vinculados à disciplina.

### US07 — Frequência e alertas (RF07)

**Como** estudante, **quero** consultar minha frequência por disciplina, **para** perceber quando preciso ter atenção às faltas.

Critérios de aceitação:
- O percentual é calculado a partir dos registros definidos pelo sistema.
- O limite de frequência é configurável ou explicitamente informado.
- Um alerta é apresentado quando o limite de atenção definido é atingido.

### US08 — Avisos (RF08)

**Como** estudante, **quero** consultar avisos importantes, **para** reduzir a chance de esquecer comunicados.

Critérios de aceitação:
- Um aviso possui título, texto e, quando aplicável, data.
- Avisos não lidos são visualmente identificáveis.
- O usuário pode marcar um aviso como lido se essa ação estiver implementada.

### US09 — Painel inicial (RF09)

**Como** estudante, **quero** ver um resumo da minha rotina, **para** identificar rapidamente o que exige atenção.

Critérios de aceitação:
- O painel apresenta os dados que já estiverem implementados.
- Os atalhos levam às áreas correspondentes quando essas telas existem.
- Quando não houver dados, é exibida uma orientação útil.

### US10 — Calendário (RF10)

**Como** estudante, **quero** visualizar meus compromissos em calendário, **para** planejar a semana e o mês.

Critérios de aceitação:
- As visões semanal e mensal ficam disponíveis se ambas forem implementadas.
- Aulas, provas e atividades possuem identificação visual clara.
- O filtro por disciplina funciona caso esteja incluído na versão entregue.

## Funcionalidades e status

Atualize esta tabela com base no que for possível demonstrar na versão atual. Não marque um item como concluído apenas porque ele está descrito nos requisitos.

| Funcionalidade | Status |
|---|---|
| Painel inicial | A verificar |
| Perfil do estudante | Planejada / a verificar |
| Cadastro e gerenciamento de disciplinas | Planejada / a verificar |
| Grade semanal de horários | Planejada / a verificar |
| Cadastro de provas | Planejada / a verificar |
| Cadastro e conclusão de atividades | Planejada / a verificar |
| Registro de presença e falta | Planejada / a verificar |
| Cálculo de frequência e alertas | Planejada / a verificar |
| Avisos e marcação de leitura | Planejada / a verificar |
| Calendário semanal e mensal | Planejada / a verificar |
| Persistência com `localStorage` | A verificar |
| Responsividade para celular | A verificar |

**Legenda sugerida:** `Concluída`, `Parcial`, `Planejada`, `Não incluída`. Antes da entrega, substitua “A verificar” e “Planejada / a verificar” pelo status real.

## Tecnologias

Tecnologias confirmadas pela configuração inicial do projeto:

- **React** — construção da interface por componentes.
- **Vite** — ambiente de desenvolvimento e build.
- **JavaScript** — linguagem principal do front-end.
- **CSS** — estilização da interface.
- **Oxlint** — verificação estática de código, conforme a configuração inicial.
- **Git e GitHub** — versionamento e colaboração.
- **GitHub Projects** — organização das tarefas em Kanban.

**Persistência:** a proposta inicial considera `localStorage`, mas confirme se foi implementado antes de apresentar como recurso disponível.

**Roteamento e prototipação:** registre React Router, Figma ou outras ferramentas somente se tiverem sido realmente utilizadas no projeto.

## Estrutura do projeto

A estrutura pode evoluir durante o desenvolvimento. A organização atual deve ser conferida no repositório.

```text
academix-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Como executar

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado para clonar o repositório.

### Instalação

```bash
git clone https://github.com/AcademyX-senai/academyx.git
cd academyx
npm install
npm run dev
```

Abra no navegador o endereço local informado pelo Vite no terminal, normalmente `http://localhost:5173/`.

Para verificar o build de produção:

```bash
npm run build
```

Execute também o script de lint disponível no `package.json` se estiver configurado. Os scripts exatos devem ser conferidos nesse arquivo.

## Protótipo e aplicação

Preencha os links abaixo quando estiverem disponíveis. Não mantenha links fictícios ou placeholders na versão final.

| Item | Link |
|---|---|
| Repositório | [AcademiX no GitHub](https://github.com/AcademyX-senai/academyx) |
| Quadro de tarefas | [GitHub Projects — AcademyX](https://github.com/orgs/AcademyX-senai/projects/1) |
| Protótipo | A inserir quando disponível |
| Aplicação publicada | A inserir após o deploy, se realizado |

### Telas previstas no escopo

1. Perfil e primeiro acesso
2. Painel inicial
3. Lista de disciplinas
4. Formulário de disciplina
5. Grade de horários
6. Provas
7. Atividades
8. Registro de presença
9. Frequência por disciplina
10. Avisos
11. Calendário

A lista acima representa o escopo planejado; não significa que todas as telas já estejam implementadas ou que exista um protótipo finalizado.

## Processo de desenvolvimento

- Repositório compartilhado no GitHub: [AcademyX-senai/academyx](https://github.com/AcademyX-senai/academyx).
- Quadro Kanban no [GitHub Projects](https://github.com/orgs/AcademyX-senai/projects/1).
- Versionamento com Git e mensagens de commit convencionais, como `feat`, `fix`, `style` e `docs`.
- Fluxo de trabalho: definição do problema, proposta de valor, requisitos, histórias de usuário, protótipo, implementação, testes, publicação (se aplicável) e documentação.
- O quadro foi planejado com 50 cartões. Confira no projeto quais foram concluídos durante o evento.

## Testes e limitações

### Verificações antes da entrega

- [ ] `npm install` termina sem erros.
- [ ] `npm run build` termina sem erros.
- [ ] O fluxo principal da aplicação foi testado manualmente.
- [ ] Formulários validam entradas inválidas.
- [ ] Dados permanecem após recarregar a página, se `localStorage` estiver implementado.
- [ ] Layout foi conferido em tela de computador e celular.
- [ ] Console do navegador foi verificado quanto a erros.
- [ ] Links do repositório, protótipo e aplicação foram testados.

### Limitações conhecidas

- A proposta inicial é de uma aplicação somente front-end, sem backend.
- Se os dados forem armazenados apenas em `localStorage`, eles ficam associados ao navegador e ao perfil local; não há sincronização automática entre dispositivos.
- Não declare autenticação segura, backup em nuvem ou integração com sistemas institucionais sem implementação real.
- Registre aqui outras limitações encontradas nos testes antes da apresentação.

## Uso de inteligência artificial

Ferramentas de IA podem ter sido usadas como apoio à organização do trabalho e à documentação. Esta seção deve listar apenas as ferramentas realmente utilizadas pela equipe e descrever seu uso com transparência.

Exemplo de registro a ajustar à experiência real:
- **Claude (Anthropic):** apoio na organização de tarefas e na elaboração/revisão de documentação, se confirmado pela equipe.
- **ChatGPT (OpenAI):** apoio na revisão e organização de textos ou planejamento, se confirmado pela equipe.

A equipe é responsável por revisar, validar e compreender os materiais utilizados, bem como por todo o código e pela solução entregue. Informe quais partes foram geradas ou apoiadas por IA e quais foram revisadas pela equipe, de acordo com as regras do hackathon.

## Equipe

A tabela abaixo representa a divisão de responsabilidades planejada. Ajuste-a para refletir as contribuições efetivamente realizadas.

| Integrante | Área principal | Responsabilidades |
|---|---|---|
| Amós | Documentação e requisitos | Organizar a definição do problema, ODS, público-alvo, benchmarking, proposta de valor, requisitos, histórias de usuário e documentação; apoiar testes e revisão. |
| Vinicius | Protótipo e identidade visual | Desenvolver o protótipo, definir identidade visual e componentes de interface, desenhar o fluxo de navegação e considerar a adaptação para celular. |
| Kaique | Integração técnica e versionamento | Configurar o projeto React/Vite e o repositório, organizar o Kanban e os commits, integrar funcionalidades, apoiar a implementação e realizar a publicação se prevista. |

---

**AcademiX — organização acadêmica centrada no estudante.**