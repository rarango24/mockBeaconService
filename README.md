# DEV

1. Realizar la creación de package.json: 

npm -i

2. Instalar typescript y dependencias

npm i -D typescript @types/node ts-node-dev rimraf

3. iniciar el archivo de configuración de typescript

npx tsc --init --outDir dist/ --rootDir src

4. Crear los scripts en el package.json

"dev": "tsnd --respawn --clear src/app.ts",
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.js"

5. Para evitar error de rootDir, en el archivo tsconfig.json incluir en la segunda línea:

"exclude": ["node_modules","dist" ],
"include": ["src"],

6. Crear el archivo de .env y .envtemplate con:

PORT=
PUBLIC_PATH=

7. Crear archivo de .gitignore sacando los modulos de node y el archivo .env