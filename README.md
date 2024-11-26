# Catado Gamer

Este projeto é uma aplicação web para a comunidade de jogadores, onde os usuários podem ver informações sobre jogos e eventos de jogos.

## Funcionalidade de Geolocalização

Implementamos a funcionalidade de geolocalização usando a API do Google Maps para exibir eventos de jogos próximos à localização atual do usuário.

### APIs Utilizadas

- **Google Maps API**: Utilizada para obter a localização atual do usuário e exibir um mapa com eventos próximos.

### Como Funciona

1. **Geolocalização**: Ao acessar a página, o navegador solicita permissão para acessar a localização do usuário.
2. **Exibição do Mapa**: A localização do usuário é exibida no mapa junto com marcadores para eventos próximos.
3. **Busca de Eventos**: Uma chamada à API busca eventos próximos à localização do usuário e os exibe em uma lista abaixo do mapa.

### Como Executar

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/catado-gamer.git
