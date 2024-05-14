# Aplicacion de Quimica Computacional para tema de tesis

IMPRTANTE: Ubicarse en la carpeta raiz del proyecto para correr los comandos

### Instalar dependencias
```bash
npm install
```

### Correr aplicacion de electron
```bash
npm run dev
```

### Compilar aplicacion

```bash
npm run build
```
La aplicacion se compilara en la carpeta `release/`

## Tailwindcss

### En caso de no tener tailwindcss instalado
```bash
npm install -D tailwindcss
```

### Crear archivo de configuracion de tailwindcss
```bash
npx tailwindcss init
```

### Compilar tailwindcss
```bash
npx tailwindcss -i ./src/assets/css/input.css -o ./src/assets/css/style.css --watch
```
NOTA: El ```--watch``` es para que se compile automaticamente cada vez que se haga un cambio en el archivo de entrada. En caso de no querer que se compile automaticamente, se puede omitir.

# Esto puede servir para el futuro

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
