// NotebookLM hide-elements script, downloaded and executed by InsydeNotebookLMConnector (InQuire).
// Hosted as raw content in a public git repository. The connector re-runs this script on every
// NotebookLM page load. A MutationObserver keeps re-applying the rules because Angular re-creates
// the removed/hidden elements long after the page has loaded.
(function () {
  if (window.__iqNotebookLMHideElements) return;
  window.__iqNotebookLMHideElements = true;

  function apply() {
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
    // (toggling via buttons is unreliable - in chat-only mode the buttons are hidden)
    document.querySelectorAll(`div[class~='panel-container']`)?.forEach(e => e.classList.add('panel-container-chat-only'));
    document.querySelectorAll(`section[class~='chat-panel']`)?.forEach(e => e.classList.add('chat-panel-chat-only'));
    document.querySelectorAll(`section.source-panel`)?.forEach(e => e.style.display = 'none');
    document.querySelectorAll(`section.studio-panel`)?.forEach(e => e.style.display = 'none');
    // disclaimer (footer element no longer exists)
    document.querySelectorAll(`div[class~='disclaimer']`)?.forEach(e => {e.textContent = 'Synara 提供的資訊未必正確，請查證回覆內容。' });
  }

  var pending = false;
  function schedule() {
    if (pending) return;
    pending = true;
    setTimeout(function () { pending = false; apply(); }, 250);
  }

  apply();
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
})();
