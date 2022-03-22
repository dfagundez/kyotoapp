'use strict'

// Iniciando los objetos app y BrowserWindow
const { app, BrowserWindow } = require('electron');

// Imprimiendo un mensaje en consola antes de salir
app.on('before-quit', () => {
    console.log('Saliendo...');
});

// Ejecutando ordenes cuando la aplicacion esta lista
app.on('ready', () => {
    // Creando una ventana
    let win = new BrowserWindow();

    // Detectando el cierre de la ventana para cerrar el aplicativo
    win.on('closed', () => {
        win = null;
        app.quit();
    });
});
