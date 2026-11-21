# 💚 Superacción Fit
#Empezar nunca fue tan fácil.

**Superacción Fit** es un proyecto web orientado a personas que desean comenzar a mejorar su bienestar físico y mental mediante hábitos saludables.

La propuesta busca acercar el mundo del fitness a principiantes, ofreciendo un espacio donde el movimiento, la nutrición y el cuidado personal sean los pilares fundamentales.

🌐 **Sitio web:** https://kingjaguar912.github.io/superaccion-fit/

---

## 🎯 Objetivo del proyecto

Crear una plataforma accesible e intuitiva que motive a las personas a dar sus primeros pasos hacia un estilo de vida más saludable, sin importar su nivel de experiencia.

## ✨ Características

- Diseño visual enfocado en la experiencia del usuario.
- Interfaz adaptable a diferentes dispositivos.
- Secciones informativas sobre los pilares del bienestar.
- Formulario de contacto con validación mediante JavaScript.
- Backend desarrollado con Node.js y Express.
- Almacenamiento de consultas en una base de datos MongoDB.

## 🛠️ Tecnologías utilizadas

**Frontend**
- HTML5
- CSS3
- JavaScript

**Backend**
- Node.js
- Express
- Mongoose
- MongoDB Atlas

## 📂 Estructura del proyecto

```text
superaccion-fit/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── models/
│   └── Consulta.js
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Instalación y ejecución local

Si deseas ejecutar el proyecto en tu computadora:

**1. Clonar el repositorio**

```bash
git clone https://github.com/kingjaguar912/superaccion-fit.git
```

**2. Ingresar a la carpeta**

```bash
cd superaccion-fit
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Configurar las variables de entorno**

Crear un archivo `.env` en la raíz del proyecto:

```env
MONGODB_URI=tu_uri_de_mongodb
PORT=3000
```

Reemplazar `tu_uri_de_mongodb` por la cadena de conexión correspondiente a tu base de datos de MongoDB Atlas.

**5. Iniciar el servidor**

```bash
node server.js
```

El servidor estará disponible en:

`http://localhost:3000`
