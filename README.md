# WeatherApp Angular 

Projeto para verificar a temperatura de uma localização. Basta informar o nome da cidade que deseja pesquisar, e pressionar o enter ou clicar no botão de Pesquisar.


```json
Angular CLI: 15.2.10
Node: 18.16.0
Package Manager: npm 9.5.1
OS: win32 x64
```

## Rota

Foi criado um componente com o nome `weather` e também também uma rota com o mesmo nome. E foi definido que, sempre que o projeto for carregado, e a rota for `vazia` o sistema será redirecionaod para a rota `weather`

```typescript
const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    component: WeatherHomeComponent,
  },
];
```

Execute `ng serve` ou `npm run serve` para iniciar o projeto de desenvolvimento.

Para executar os testes unitários execute  `npm run test` no terminal.

## Screen

<img src="src\assets\screen-1.png" width="100%">

## Teste Unitário -> FrameWork Jest

<img src="src\assets\screen-2.png" width="100%">

<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>
