import React, { useRef, useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const Console = () => {
    const terminalRef = useRef(null);
  
    useEffect(() => {
      // Créer une instance de terminal et attacher au DOM
      const terminal = new Terminal();
      if(terminalRef.current)
        terminal.open(terminalRef.current);
  
      // Fonction pour exécuter une commande
      const executeCommand = (command: string) => {
        // Vous devrez personnaliser la logique d'exécution de la commande ici.
        // Par exemple, vous pouvez utiliser des bibliothèques comme xterm-addon-fit
        // pour ajuster automatiquement la taille du terminal en fonction du contenu.
  
        // Dans cet exemple, nous allons simplement simuler l'exécution d'une commande.
        terminal.write(`> ${command}\nCommand not implemented.\n`);
      };
  
      // Exemple d'exécution de la commande
      executeCommand('ls');
  
      // Nettoyer la ressource lors du démontage du composant
      return () => {
        terminal.dispose();
      };
    }, []);
  
    return <div ref={terminalRef} style={{ height: '400px' }} />;
  };
  
  export default Console;