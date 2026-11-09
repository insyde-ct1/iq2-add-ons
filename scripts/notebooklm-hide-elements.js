// NotebookLM hide-elements script, downloaded and executed by InsydeNotebookLMConnector (InQuire).
// Hosted as raw content in a public git repository. The connector runs it on every NotebookLM
// page; it repeats 50x every 500ms so removed/re-rendered elements stay hidden.
(function loop(count) {
  if ( count < 0) return;
  setTimeout(() => {
    // NotebookLM icon
    document.querySelectorAll(`div[class*='logo']`)?.forEach(e => e.remove());
    // content actions
    document.querySelectorAll(`mat-card-actions`)?.forEach(e => e.remove());
    // app menu
    document.querySelectorAll(`div[class='boqOnegoogleliteOgbOneGoogleBar']`)?.forEach(e => e.remove());
    // analytics button
    document.querySelectorAll(`div[class~='analytics-button-container']`)?.forEach(e => e.remove());
    // settings
    document.querySelectorAll(`title-bar-settings`)?.forEach(e => e.remove());
    // notebook header buttons (create notebook & more options)
    document.querySelectorAll(`div[class~='notebook-header-buttons-container']`)?.forEach(e => e.remove());
    // share button
    document.querySelectorAll(`div[class*='share-button-container']`)?.forEach(e => e.remove());
    // chat header buttons
    document.querySelectorAll(`span[class~='chat-header-buttons']`)?.forEach(e => e.remove());
    // side panels: force the native chat-only layout and hide the panels in any mode
    // (toggling via buttons is unreliable — in chat-only mode the buttons are hidden)
    document.querySelectorAll(`div[class~='panel-container']`)?.forEach(e => e.classList.add('panel-container-chat-only'));
    document.querySelectorAll(`section[class~='chat-panel']`)?.forEach(e => e.classList.add('chat-panel-chat-only'));
    document.querySelectorAll(`section.source-panel`)?.forEach(e => e.style.display = 'none');
    document.querySelectorAll(`section.studio-panel`)?.forEach(e => e.style.display = 'none');
    // disclaimer (footer element no longer exists)
    document.querySelectorAll(`div[class~='disclaimer']`)?.forEach(e => {e.textContent = 'Synara 提供的資訊未必正確，請查證回覆內容。' });

    loop(--count);
  }, 500);
})(50);
