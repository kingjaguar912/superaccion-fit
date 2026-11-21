# 💚 Superacción Fit

### Empezar nunca fue tan fácil.

**Superacción Fit** es un proyecto web pensado para personas que quieren dar sus primeros pasos hacia un estilo de vida más saludable. La propuesta reúne tres pilares del bienestar —**movimiento, mente y nutrición**— con explicaciones sencillas, ideas prácticas y objetivos pequeños que se puedan adaptar al ritmo de cada persona.

🌐 **Sitio web:** <https://kingjaguar912.github.io/superaccion-fit/>

📦 **Repositorio:** <https://github.com/kingjaguar912/superaccion-fit>

---

## 🎯 Objetivo

Acercar el mundo del fitness y el autocuidado a quienes recién empiezan, sin exigir experiencia previa ni cambios extremos. La idea central es avanzar paso a paso, sin comparaciones y con hábitos que puedan sostenerse en el tiempo.

## ✨ ¿Qué incluye?

- **Nuestra historia:** presenta el propósito de Superacción Fit y su enfoque para principiantes.
- **Tres pilares del bienestar:** movimiento, mente y nutrición.
- **Primeros pasos:** propuestas simples para empezar a incorporar hábitos saludables.
- **Ideas de alimentación:** sugerencias aleatorias de comidas sencillas desde la propia página.
- **Semana de ejemplo:** una guía flexible para organizar pequeñas actividades durante la semana.
- **Preguntas frecuentes:** respuestas a dudas habituales de quienes están comenzando.
- **Formulario de contacto:** valida nombre, correo electrónico y mensaje con JavaScript, y prepara el envío de la consulta al backend.
- **Diseño adaptable:** navegación y presentación preparadas para distintos tamaños de pantalla.
- **Identidad visual:** favicon y recursos gráficos propios del proyecto.

## 🛠️ Tecnologías utilizadas

### Frontend

- **HTML5:** estructura y contenido de la página.
- **CSS3:** estilos, diseño adaptable y presentación visual.
- **JavaScript:** interacciones, menú de navegación, sugerencias de comida y validación del formulario.

### Backend

- **Node.js:** entorno de ejecución de JavaScript.
- **Express:** servidor y definición de rutas de la API.
- **Mongoose:** conexión y comunicación con MongoDB mediante modelos.
- **MongoDB Atlas:** base de datos en la nube.
- **dotenv:** lectura de variables de entorno.
- **cors:** configuración de acceso entre el frontend y el backend.

## 📁 Estructura del proyecto

```text
superaccion-fit/
├── models/
│   └── Consulta.js          # Esquema y modelo de las consultas
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── apple-touch-icon.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-64x64.png
├── favicon.ico
├── favicon.svg
├── index.html               # Página principal
├── package-lock.json
├── package.json             # Dependencias del backend
├── script.js                # Interactividad y validaciones del frontend
├── server.js                # Servidor Express y API
├── site.webmanifest
├── style.css                # Estilos y diseño adaptable
└── .gitignore               # Archivos y carpetas que Git debe ignorar
```

## 🚀 Ejecutar el proyecto en local

### Requisitos

- Node.js y npm instalados.
- Una base de datos de MongoDB Atlas.

### 1. Clonar el repositorio

```bash
git clone https://github.com/kingjaguar912/superaccion-fit.git
```

### 2. Entrar en la carpeta del proyecto

```bash
cd superaccion-fit
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar la conexión con MongoDB

Crear un archivo llamado `.env` en la raíz del proyecto y agregar la cadena de conexión de MongoDB Atlas:

```env
MONGODB_URI=mongodb+srv://USUARIO:CONTRASENA@TU_CLUSTER/superaccion_fit
```

Reemplazar el ejemplo por la URI real de tu clúster. No compartas esa dirección ni subas el archivo `.env` a GitHub: contiene credenciales. El repositorio incluye reglas en `.gitignore` para excluirlo.

### 5. Iniciar el backend

```bash
node server.js
```

El servidor se inicia en:

```text
http://localhost:3000
```

Al iniciar, el servidor intenta conectarse a MongoDB Atlas. En el código actual, el puerto está definido directamente como `3000` en `server.js`.

### 6. Abrir el frontend

Para probar la página localmente, abrí `index.html` con un servidor estático local, por ejemplo la extensión **Live Server** de Visual Studio Code. Con el backend en ejecución y la conexión a MongoDB establecida, el formulario puede enviar consultas a la API local.

## 🔌 API disponible

El backend expone actualmente estas rutas:

| Método | Ruta | Descripción |
|---|---|---|
| `GET` | `/` | Devuelve un mensaje de bienvenida del servidor. |
| `POST` | `/api/consultas` | Recibe y guarda una consulta en MongoDB. |

### Ejemplo de solicitud `POST /api/consultas`

```json
{
  "name": "Ana",
  "email": "ana@ejemplo.com",
  "pillar": ["Movimiento", "Nutrición"],
  "message": "Me gustaría saber cómo empezar."
}
```

Cuando la consulta se guarda correctamente, la API responde con el estado HTTP `201` y un mensaje de confirmación. El modelo almacena el nombre, el correo, los pilares seleccionados, el mensaje y la fecha de creación.

## 📌 Estado actual del proyecto

- **Frontend:** publicado en GitHub Pages y accesible desde el enlace del proyecto.
- **Backend:** desarrollado y preparado para ejecutarse localmente con Node.js, Express y MongoDB Atlas.
- **Formulario en la versión pública:** el código del frontend todavía envía las solicitudes a `http://localhost:3000/api/consultas`. Por eso, el formulario no puede guardar consultas de visitantes desde la página publicada mientras el backend no esté desplegado en un servicio accesible desde Internet y se actualice esa dirección.

La publicación del frontend en GitHub Pages no despliega automáticamente el servidor ni la base de datos.

## 🔐 Seguridad

- No subas credenciales, contraseñas ni archivos `.env` al repositorio.
- Usá variables de entorno para configurar la conexión con la base de datos.
- Antes de un despliegue público del backend, revisá la configuración de CORS y limitá los orígenes permitidos a los dominios necesarios.

---

**Superacción Fit** · Movimiento, mente y nutrición en un solo lugar.
