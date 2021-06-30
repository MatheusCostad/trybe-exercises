<h3>Pra muita coisa poder funcionar você precisa colocar no seu src/setupTests.js essas linhas:</h3>

~~~JavaScript
// setupTests.js
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;
~~~