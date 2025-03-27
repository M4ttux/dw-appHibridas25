# Git 
## Iniciamos un repositorio nuevo

- Configurar el usuario

```bash
    git config --global user.name "Nombre"
    git config --global user.email "correo@correo.com"
```
- Inicio el repositorio

```bash
    git init
```
- Agrego los archivos

```bash
    git add .
```
- Realizo el commit

```bash
    git commit -m "Mensaje"
```

## Vinculamos el repositorio local con el remoto GitHub

```bash
    git remote add origin https://github.com/M4ttux/dw-appHibridas25.git
    git branch -M main
```

- Subimos los commits

```bash
    git push -u origin main
```

## Luego
```bash
    git add .
    git commint -m "descripcion de los cambios"
    git push -u origin main
```