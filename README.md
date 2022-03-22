# kyotoapp
Minimalist application to play youtube videos

# Git Workflow
main Branch
dev Branch

Feature Branch → Crear una rama por funcionalidad - Crear a partir de dev branch - No interactua con main branch

Hotfix Branch → Crea una rama por cada hotfix - Crear a partir de main - Para arreglos rapidos, se fusiona directamente con main y dev (ambas ya q el error esta en ambos entornos) Al cerrar una rama hotfix tenemos que crear una etiqueta con la nuueva version del proyuecto.  Porque cada cambio que hacemos en main, necesita una etiqueta que lo represente

Release Branch → Crear al finalizar una etapa de desarrollo - Se crea apartir de dev branch - En esta rama hacemos los cambios necesarios para cargar la version de lanzamiento y luego ddeberiamos probarlas antes de funcionarla con main (Si encontramos un error como resultado de la etapa de prueba, podemos corregirlo en la rama de lanzamiento antes de cerrarlo) - Una vez se carga la version de lazamiento y se completa etapa de prueba, la rama se fusiona con ambas main y dev. Cuando cerramos la rama de lanzamiento tenemos que crear una etiqueta con la nueva version de lanzamiento.

:: Inicialización de flujo Git

Comandos básicos de Git:
	$ git checkout -b develop
	
CLI de flujo de Git:
	$ git flow init

:: Creacion de rama feature

Comandos básicos de Git:
	$ git checkout develop
	$ git checkout -b name-feature

CLI de flujo de Git:
	$ git flow feature start name-feature

:: Finalizando rama feature

Comandos básicos de Git:
	$ git checkout dev
	$ git merge name-feature

CLI de flujo de Git:
	$ git flow feature finish name-feature

:: Creacion de rama release

Comandos básicos de Git:
	$ git checkout master
	$ git checkout -b name-hotfix

CLI de flujo de Git:
	$ git flow hotfix start name-hotfix

:: Rama Hotfix de finalizada

Comandos básicos de Git:
	$ git checkout master
	$ git merge name-hotfix
	$ git checkout develop
	$ git merge name-hotfix
	$ git tag name-hotfix

CLI de flujo de Git:
	$ git flow hotfix finish name-hotfix

HOTEFIXE NAME 3.1.3

:: Release branch

Creando rama de release (lanzamiento)

Comandos básicos de Git:
	$ git checkout develop
	$ git checkout -b release/1.0.0

CLI de flujo de Git:
	$ git flow release start 1.0.0

Finalizar rama de lanzamiento, release

Comandos básicos de Git
	$ git checkout master
	$ git merge release/1.0.0
	$ git checkout develop
	$ git merge release/1.0.0
	$ git tag 1.0.0

CLI de flujo de Git
	$ git flow release finish 1.0.0