(function () {
  function pageLabel() {
    var path = window.location.pathname || "/";
    if (/\/p\/?$/.test(path) || path.indexOf("/p/") !== -1) {
      return "PDP";
    }
    if (path.indexOf("feminino") !== -1) {
      return "PLP (feminino)";
    }
    return "home";
  }

  function fireDemoError() {
    throw new Error("[exemplo_html] Erro simulado — " + pageLabel());
  }

  function fireDemoRejection() {
    Promise.reject(
      new TypeError(
        "[exemplo_html] Promise rejeitada — carrinho indisponível — " + pageLabel(),
      ),
    );
  }

  function createButton(id, label, ariaLabel, onClick) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.id = id;
    btn.className = "btn-demo-error btn-demo-error-fixed";
    btn.textContent = label;
    btn.setAttribute("aria-label", ariaLabel);
    btn.addEventListener("click", onClick);
    return btn;
  }

  function mountButtons() {
    if (document.getElementById("cry-demo-error-actions")) {
      return;
    }
    var container = document.createElement("div");
    container.id = "cry-demo-error-actions";
    container.className = "demo-error-actions";
    container.appendChild(
      createButton(
        "cry-demo-error-trigger",
        "Disparar erro",
        "Disparar erro de teste para observabilidade",
        fireDemoError,
      ),
    );
    container.appendChild(
      createButton(
        "cry-demo-rejection-trigger",
        "Disparar promise rejeitada",
        "Disparar promise rejeitada (TypeError) de teste para observabilidade",
        fireDemoRejection,
      ),
    );
    document.body.appendChild(container);
  }

  function maybeAutoFire() {
    var params = new URLSearchParams(window.location.search);
    if (params.has("cry_simulate_error")) {
      window.setTimeout(fireDemoError, 1500);
    }
    if (params.has("cry_simulate_rejection")) {
      window.setTimeout(fireDemoRejection, 1500);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      mountButtons();
      maybeAutoFire();
    });
  } else {
    mountButtons();
    maybeAutoFire();
  }
})();
