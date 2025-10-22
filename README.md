# 🕵️‍♂️ Crime Guess — Jogo de Adivinhação de Mistérios

## 🎯 Sobre o projeto

Crime Guess é um jogo de dedução onde o jogador deve descobrir o assassino, a arma e o local de um crime baseado em pistas fornecidas. O projeto consiste em uma **API REST** (back-end) e um **front-end em React**, permitindo criar cenários, tentar palpites e acompanhar rankings.

---

## ⚙️ Regras do Jogo

- Cada rodada contém:
  - **3 suspeitos**
  - **3 armas**
  - **3 locais**

- **Pistas**:
  - Algumas pistas iniciais são fornecidas.
  - Se o jogador errar **2 tentativas**, ele recebe uma pista extra.

- **Pontuação**:
  - Não há condição de “vencer” ou “perder”.
  - O jogador ganha mais pontos se acertar de primeira.
  - Cada tentativa incorreta diminui a pontuação.

- **Tentativas**:
  - O jogador pode tentar quantas vezes desejar.

---

## 💻 Tecnologias Utilizadas

- **Back-end:** Node.js + Express
- **Banco de dados:** PostgreSQL
- **Front-end:** React.js
- **Comunicação:** API REST com JSON

---

## 🛠️ Endpoints da API

### 🔐 Autenticação

- **POST /api/auth/register**
  Cria um novo usuário.
  **Body:**

  ```json
  {
    "username": "usuario123",
    "email": "email@exemplo.com",
    "password": "senha123"
  }
  ```

- **POST /api/auth/login**
  Login do usuário. Retorna token JWT.
  **Body:**

  ```json
  {
    "email": "email@exemplo.com",
    "password": "senha123"
  }
  ```

  **Response:**

  ```json
  {
    "token": "JWT_TOKEN_AQUI"
  }
  ```

---

### 📝 Cenários / Conteúdo

- **POST /api/scenarios** _(Admin)_ — Cria um novo cenário com candidatos, armas, locais, pistas e solução.
- **GET /api/scenarios** — Lista todos os cenários com resumo e dificuldade.
- **GET /api/scenarios/:id** — Detalha um cenário (não envia solução) e mostra pistas públicas.
- **GET /api/scenarios/:id/clues** — Retorna pistas progressivas do cenário.
- **GET /api/scenarios/:id/public** — Mostra versão do cenário para jogadores (nomes de candidatos, armas, locais e pistas públicas).

---

### 🎮 Jogo / Tentativa

- **POST /api/scenarios/:id/guess** — Envia palpite do jogador.
  **Body:**

  ```json
  {
    "guess_killer_id": 1,
    "guess_weapon_id": 2,
    "guess_location_id": 3
  }
  ```

  **Response:**

  ```json
  {
    "correct": true,
    "attempts_count": 3,
    "message": "Parabéns! Você acertou."
  }
  ```

- **Lógica:**
  - Conta quantas tentativas o jogador já fez no cenário.
  - Salva tentativa (`attempt`) no banco.
  - Se o palpite estiver correto, marca como resolvido e atualiza ranking.

---

### 🏆 Ranking / Estatísticas

- **GET /api/ranking** — Lista o ranking global, ordenado por `solved_count` e `best_score`.
- **GET /api/users/:id/stats** — Mostra estatísticas individuais do usuário.

---

### 🛡️ Admin

- **PUT /api/scenarios/:id** — Edita um cenário existente.
- **DELETE /api/scenarios/:id** — Remove um cenário.

---
