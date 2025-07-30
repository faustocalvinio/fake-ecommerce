# 🛒 FakeStore API - React Query Demo

Una aplicación de e-commerce moderna construida con **React**, **TypeScript**, **React Query** y **Zustand** que demuestra técnicas avanzadas de gestión de estado y optimización de rendimiento.

## ✨ Características Principales

- 🚀 **Prefetch Inteligente**: Precarga de datos al hacer hover para una experiencia de usuario fluida
- 🛍️ **Carrito de Compras Global**: Gestión de estado con Zustand
- 🔍 **Comparación de Rendimiento**: Páginas con y sin prefetch para demostrar beneficios
- 📱 **Diseño Responsive**: Interfaz adaptable usando Tailwind CSS
- 🎯 **TypeScript**: Seguridad de tipos en toda la aplicación
- 🌙 **Modo Oscuro**: Tema dark implementado
- ⚡ **Optimización de Rendimiento**: Usando React Query para caché inteligente

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 18
- **Lenguaje**: TypeScript
- **Gestión de Estado**: 
  - React Query v3 (para datos del servidor)
  - Zustand (para estado global del carrito)
- **Enrutamiento**: React Router DOM v6
- **Estilos**: Tailwind CSS
- **Build Tool**: Vite
- **Notificaciones**: React Hot Toast
- **API**: FakeStore API

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/faustocalvinio/fake-ecommerce.git
   cd fakestore-api-react-query
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta ESLint para revisar el código
- `npm run preview` - Previsualiza la aplicación construida

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── icons/           # Iconos SVG personalizados
│   ├── CartItem.tsx     # Componente de item del carrito
│   ├── Loading.tsx      # Componente de carga
│   ├── Navbar.tsx       # Barra de navegación
│   ├── ProductCard.tsx  # Tarjeta de producto con prefetch
│   ├── ProductsList.tsx # Lista de productos
│   └── ...
├── interfaces/          # Definiciones de tipos TypeScript
│   ├── product.interface.ts
│   ├── cart.interface.ts
│   └── index.ts
├── pages/              # Páginas principales
│   ├── HomePage.tsx         # Página principal con prefetch
│   ├── ProductsPage.tsx     # Página sin prefetch
│   ├── ProductPage.tsx      # Detalle de producto
│   ├── CartPage.tsx         # Página del carrito
│   └── ...
├── router/             # Configuración de rutas
├── store/              # Store de Zustand
└── main.tsx           # Punto de entrada
```

## 🎯 Funcionalidades Destacadas

### 🔄 Prefetch Inteligente
- **Página Principal**: Los productos se precargan al hacer hover, mejorando la experiencia del usuario
- **Página de Productos**: Sin prefetch para comparar el rendimiento

### 🛒 Carrito de Compras
- Gestión global del estado con Zustand
- Persistencia del carrito
- Notificaciones toast para acciones del usuario

### 📊 Gestión de Estado
- **React Query**: Cache inteligente, sincronización en segundo plano, y gestión de estados de carga
- **Zustand**: Estado global simple y eficiente para el carrito

## 🌐 API

Este proyecto utiliza la [FakeStore API](https://fakestoreapi.com/) que proporciona:
- Lista de productos
- Detalles de productos individuales
- Categorías
- Datos de ejemplo para e-commerce

## 🎨 Diseño y UX

- **Tailwind CSS**: Framework utility-first para estilos rápidos y consistentes
- **Componentes Reutilizables**: Arquitectura modular para mantenibilidad
- **Responsive Design**: Adaptable a diferentes tamaños de pantalla
- **Loading States**: Skeletons y indicadores de carga para mejor UX

## 🔧 Configuración de Desarrollo

### ESLint
El proyecto incluye configuración de ESLint con reglas para:
- TypeScript
- React Hooks
- React Refresh

### Vite
Configuración optimizada con:
- Hot Module Replacement (HMR)
- TypeScript support
- Plugin de React

## 📈 Optimizaciones de Rendimiento

1. **Prefetch de Datos**: Precarga inteligente basada en interacciones del usuario
2. **Code Splitting**: Lazy loading de rutas con React Router
3. **Cache Inteligente**: React Query gestiona automáticamente el cache
4. **Optimización de Imágenes**: Lazy loading de imágenes de productos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
