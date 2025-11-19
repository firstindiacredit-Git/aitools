const TempMailApp = (() => {
  if (!document.body) {
    console.warn("TempMailApp: document.body is not available.");
    return null;
  }

  function buildLayoutIfNeeded() {
    if (document.getElementById("mail")) {
      return;
    }

    document.body.id = "tm-body";
    document.body.innerHTML = `
      <div class="tm-app container">
        <div class="row justify-content-center">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div class="temp-emailbox">
              <h2>Your Temporary Email Address</h2>
              <form>
                <div class="input-box-col">
                  <div class="input-warp">
                    <input
                      id="mail"
                      type="text"
                      onclick="select(this);"
                      data-original-title="Your Temporary Email Address"
                      data-placement="bottom"
                      data-value="Loading"
                      class="emailbox-input opentip disabledText"
                      readonly
                      value="Loading..."
                    />
                    <div class="tm-email-actions-row">
                      <button
                        type="button"
                        class="btn-rds icon-btn btn-l-gary popover-qr"
                        id="qrButton"
                        data-base-url="https://temp-mail.org/en"
                        data-utm="&utm_source=qrcode&utm_medium=website&utm_campaign=website"
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2219 16.8889H6.2219C5.73098 16.8889 5.33301 16.4909 5.33301 16C5.33301 15.5091 5.73098 15.1111 6.2219 15.1111H14.2219C14.7128 15.1111 15.1108 14.7132 15.1108 14.2222V6.22223C15.1108 5.73131 15.5088 5.33334 15.9997 5.33334C16.4906 5.33334 16.8886 5.73131 16.8886 6.22223V14.2222C16.8886 15.695 15.6947 16.8889 14.2219 16.8889ZM13.333 12.4445V7.11112C13.333 6.12928 12.5371 5.33334 11.5552 5.33334H7.11079C6.12895 5.33334 5.33301 6.12928 5.33301 7.11112V11.5556C5.33301 12.5374 6.12895 13.3333 7.11079 13.3333H8.88856C9.37948 13.3333 9.77745 12.9354 9.77745 12.4445C9.77745 11.9535 9.37948 11.5556 8.88856 11.5556H7.11079V7.11112H11.5552V12.4445C11.5552 12.9354 11.9532 13.3333 12.4441 13.3333C12.935 13.3333 13.333 12.9354 13.333 12.4445ZM26.6663 11.5556V7.11112C26.6663 6.12928 25.8704 5.33334 24.8886 5.33334H20.4441C19.4623 5.33334 18.6663 6.12928 18.6663 7.11112V8.8889C18.6663 9.37982 19.0643 9.77779 19.5552 9.77779C20.0461 9.77779 20.4441 9.37982 20.4441 8.8889V7.11112H24.8886V11.5556H19.5552C19.0643 11.5556 18.6663 11.9535 18.6663 12.4445C18.6663 12.9354 19.0643 13.3333 19.5552 13.3333H24.8886C25.8704 13.3333 26.6663 12.5374 26.6663 11.5556ZM13.333 24.8889V23.1111C13.333 22.6202 12.935 22.2222 12.4441 22.2222C11.9532 22.2222 11.5552 22.6202 11.5552 23.1111V24.8889H7.11079V20.4445H12.4441C12.935 20.4445 13.333 20.0465 13.333 19.5556C13.333 19.0646 12.935 18.6667 12.4441 18.6667H7.11079C6.12895 18.6667 5.33301 19.4626 5.33301 20.4445V24.8889C5.33301 25.8707 6.12895 26.6667 7.11079 26.6667H11.5552C12.5371 26.6667 13.333 25.8707 13.333 24.8889ZM26.6663 24.8889V20.4445C26.6663 19.4626 25.8704 18.6667 24.8886 18.6667H23.1108C22.6199 18.6667 22.2219 19.0646 22.2219 19.5556C22.2219 20.0465 22.6199 20.4445 23.1108 20.4445H24.8886V24.8889H20.4441V19.5556C20.4441 19.0646 20.0461 18.6667 19.5552 18.6667C19.0643 18.6667 18.6663 19.0646 18.6663 19.5556V24.8889C18.6663 25.8707 19.4623 26.6667 20.4441 26.6667H24.8886C25.8704 26.6667 26.6663 25.8707 26.6663 24.8889ZM16.8886 25.7778V19.5556C16.8886 19.0646 16.4906 18.6667 15.9997 18.6667C15.5088 18.6667 15.1108 19.0646 15.1108 19.5556V25.7778C15.1108 26.2687 15.5088 26.6667 15.9997 26.6667C16.4906 26.6667 16.8886 26.2687 16.8886 25.7778ZM26.6663 16C26.6663 15.5091 26.2684 15.1111 25.7775 15.1111H19.5552C19.0643 15.1111 18.6663 15.5091 18.6663 16C18.6663 16.4909 19.0643 16.8889 19.5552 16.8889H25.7775C26.2684 16.8889 26.6663 16.4909 26.6663 16Z" fill="#ffffff"></path>
                        </svg>
                        <span>QR code</span>
                      </button>
                      <div class="qrPopoverBl" style="display:none">
                        <div class="qr-popover-arrow"></div>
                        <div id="qrImageBl"></div>
                      </div>
                      <button
                        type="button"
                        class="btn-rds icon-btn bg-theme d-none visable-xs-sm click-to-copy copyIconGreenBtn"
                        data-clipboard-action="copy"
                        disabled="disabled"
                        data-clipboard-target="#mail"
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7397 9.91727V19.9465C24.7397 21.0543 23.8416 21.9524 22.7338 21.9524C22.1799 21.9524 21.7309 21.5033 21.7309 20.9494V14.27C21.7315 13.9643 21.6085 13.6713 21.3899 13.4576L17.8997 10.0075C17.2774 9.37513 16.4301 9.01459 15.5429 9.00461H11.7017C11.1478 9.00461 10.6987 8.55559 10.6987 8.00169V6.87841C10.6987 6.11327 11.0034 5.37962 11.5454 4.83953C12.0873 4.29943 12.822 3.99735 13.5872 4.00002H18.9127C19.6658 4.00761 20.3859 4.31006 20.9186 4.84247L23.9273 7.85125C24.4625 8.40421 24.7549 9.14788 24.7397 9.91727ZM19.8855 13.929L16.8768 10.9202C16.3453 10.386 15.6244 10.0832 14.8709 10.0777H9.54539C7.95407 10.0833 6.66698 11.3748 6.66699 12.9662V25.1116C6.66699 26.7068 7.96018 28 9.55541 28H17.8697C19.4531 27.9835 20.7281 26.6951 20.728 25.1116V15.9348C20.7358 15.1776 20.4479 14.4472 19.9257 13.8989L19.8855 13.929Z" fill="#ffffff"></path>
                        </svg>
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="input-box-col hidden-xs-sm">
                  <button
                    type="button"
                    class="btn-rds icon-btn bg-theme click-to-copy copyIconGreenBtn"
                    data-clipboard-action="copy"
                    disabled="disabled"
                    data-clipboard-target="#mail"
                    id="click-to-copy"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7397 9.91727V19.9465C24.7397 21.0543 23.8416 21.9524 22.7338 21.9524C22.1799 21.9524 21.7309 21.5033 21.7309 20.9494V14.27C21.7315 13.9643 21.6085 13.6713 21.3899 13.4576L17.8997 10.0075C17.2774 9.37513 16.4301 9.01459 15.5429 9.00461H11.7017C11.1478 9.00461 10.6987 8.55559 10.6987 8.00169V6.87841C10.6987 6.11327 11.0034 5.37962 11.5454 4.83953C12.0873 4.29943 12.822 3.99735 13.5872 4.00002H18.9127C19.6658 4.00761 20.3859 4.31006 20.9186 4.84247L23.9273 7.85125C24.4625 8.40421 24.7549 9.14788 24.7397 9.91727ZM19.8855 13.929L16.8768 10.9202C16.3453 10.386 15.6244 10.0832 14.8709 10.0777H9.54539C7.95407 10.0833 6.66698 11.3748 6.66699 12.9662V25.1116C6.66699 26.7068 7.96018 28 9.55541 28H17.8697C19.4531 27.9835 20.7281 26.6951 20.728 25.1116V15.9348C20.7358 15.1776 20.4479 14.4472 19.9257 13.8989L19.8855 13.929Z" fill="#ffffff"></path>
                    </svg>
                    <span>Copy</span>
                  </button>
                </div>
              </form>
            </div>
            <div class="temp-emailbox-text">
              <p>Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address.</p>
            </div>
            <div class="tm-control-row">
              <button class="tm-btn btn-gray" id="click-to-refresh">Refresh</button>
              <button class="tm-btn btn-gray" id="click-to-change">Change</button>
              <button class="tm-btn btn-gray" id="click-to-delete">Delete</button>
            </div>
          </div>
        </div>
        <section class="tm-inbox-section">
          <div class="inbox-area maillist">
            <div class="inbox-empty">
              <p class="emptyInboxTitle">Your inbox is empty</p>
              <p>Waiting for incoming emails</p>
            </div>
            <div class="inbox-dataList hide">
              <ul></ul>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  buildLayoutIfNeeded();

  const state = {
    account: null,
    messages: [],
    polling: null,
    cache: new Map(),
    loadingAccount: false,
  };

  const els = {
    emailInput: document.getElementById("mail"),
    inboxEmpty: document.querySelector(".inbox-empty"),
    inboxList: document.querySelector(".inbox-dataList"),
    inboxListContainer: document.querySelector(".inbox-dataList ul"),
    refreshBtn: document.getElementById("click-to-refresh"),
    changeBtn: document.getElementById("click-to-change"),
    deleteBtn: document.getElementById("click-to-delete"),
    copyButtons: document.querySelectorAll("[data-clipboard-target='#mail']"),
    primaryCopyBtn: document.getElementById("click-to-copy"),
  };

  const api = {
    async createAccount() {
      const resp = await fetch("https://temp-mail.org/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    },
    async fetchMessages() {
      const resp = await fetch("https://temp-mail.org/messages", {
        headers: {
          Authorization: `Bearer ${state.account?.token || ""}`,
        },
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        throw new Error(data.error || "Unable to fetch messages");
      }
      return data.messages || [];
    },
    async fetchMessage(id) {
      const resp = await fetch(`https://temp-mail.org/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${state.account?.token || ""}`,
        },
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        throw new Error(data.error || "Unable to fetch message");
      }
      return data.message;
    },
    async sendReply({ to, subject, text }) {
      const resp = await fetch("https://temp-mail.org/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.account?.token || ""}`,
        },
        body: JSON.stringify({ to, subject, text }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        throw new Error(data.error || "Unable to send message");
      }
      return data.message;
    },
  };

  const toast = (() => {
    const holder = document.createElement("div");
    holder.className = "tm-toast-holder";
    document.body.appendChild(holder);

    return (message, type = "info", timeout = 4000) => {
      const toastEl = document.createElement("div");
      toastEl.className = `tm-toast tm-toast--${type}`;
      toastEl.textContent = message;
      holder.appendChild(toastEl);
      setTimeout(() => {
        toastEl.classList.add("tm-toast--hide");
        setTimeout(() => holder.removeChild(toastEl), 300);
      }, timeout);
    };
  })();

  function ensureStyles() {
    const style = document.createElement("style");
    style.textContent = `
      body#tm-body {
        margin: 0;
        min-height: 100vh;
        background: linear-gradient(180deg, #f7f8fc 0%, #eef1fb 100%);
        font-family: "Inter", "Roboto", "Segoe UI", sans-serif;
        color: #1f2345;
      }
      .tm-app {
        max-width: 1100px;
        margin: 0 auto;
        padding: 40px 20px 80px;
      }
      .tm-header {
        text-align: center;
        margin-bottom: 32px;
      }
      .tm-eyebrow {
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 0.2em;
        color: #6d7395;
        margin-bottom: 12px;
      }
      .tm-header h1 {
        margin: 0;
        font-size: 42px;
      }
      .tm-subtitle {
        color: #5e6385;
        max-width: 580px;
        margin: 12px auto 0;
        line-height: 1.6;
      }
      .temp-emailbox {
        background: #ffffff;
        border-radius: 24px;
        padding: 32px;
        box-shadow: 0 25px 60px rgba(21, 38, 109, 0.08);
      }
      .tm-email-actions-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 16px;
      }
      .tm-control-row {
        margin-top: 18px;
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      .tm-emailbox-input input {
        width: 100%;
        border: 2px dashed #dfe3f5;
        border-radius: 16px;
        padding: 18px 20px;
        font-size: 20px;
        font-weight: 600;
        color: #1d213f;
        background: #f9faff;
      }
      .tm-email-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 18px;
      }
      .tm-btn {
        border: none;
        border-radius: 999px;
        padding: 10px 22px;
        font-size: 14px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s;
      }
      .tm-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .tm-btn:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(15, 23, 66, 0.15);
      }
      .btn-dark {
        background: #1f5eff;
        color: #fff;
        box-shadow: 0 15px 30px rgba(31, 94, 255, 0.3);
      }
      .btn-gray {
        background: #eef1fb;
        color: #1f2345;
      }
      .btn-outline-dark {
        border: 1px solid #1f5eff;
        background: transparent;
        color: #1f5eff;
      }
      .inbox-area {
        margin-top: 32px;
        background: #fff;
        border-radius: 24px;
        padding: 0;
        box-shadow: 0 20px 55px rgba(15, 23, 66, 0.08);
      }
      .inbox-empty {
        padding: 60px 30px;
        text-align: center;
        color: #6d7395;
      }
      .tm-toast-holder {
        position: fixed;
        top: 20px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 9999;
      }
      .tm-toast {
        background: #1d2c4b;
        color: #fff;
        padding: 10px 16px;
        border-radius: 6px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        font-size: 14px;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
      .tm-toast--error { background: #c62828; }
      .tm-toast--success { background: #2e7d32; }
      .tm-toast--hide { opacity: 0; transform: translateY(-10px); }
      #tm-message-viewer {
        margin-top: 20px;
        padding: 20px;
        border: 1px solid #e3e5ec;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 15px 45px rgba(0,0,0,0.05);
      }
      #tm-message-viewer.hidden { display: none; }
      .tm-message-viewer__header {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }
      .tm-message-viewer__body {
        white-space: pre-wrap;
        border: 1px solid #f1f1f5;
        border-radius: 10px;
        padding: 16px;
        background: #fafbff;
        margin: 16px 0;
        max-height: 320px;
        overflow-y: auto;
        font-family: "Inter", "Roboto", sans-serif;
        font-size: 14px;
        color: #23263a;
      }
      .tm-reply-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .tm-reply-form input,
      .tm-reply-form textarea {
        width: 100%;
        border: 1px solid #d7dbe7;
        border-radius: 8px;
        padding: 10px 12px;
        font-size: 14px;
        font-family: inherit;
      }
      .tm-reply-form button {
        align-self: flex-start;
      }
      .tm-reply-status {
        font-size: 13px;
        color: #5c5f73;
      }
      .inbox-dataList ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .inbox-dataList li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 12px;
        border-bottom: 1px solid #eff1f7;
        cursor: pointer;
        transition: background 0.2s ease;
      }
      .inbox-dataList li:hover {
        background: rgba(74,128,255,0.05);
      }
      .inbox-dataList li.active {
        background: rgba(74,128,255,0.12);
      }
      .tm-message-meta {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 13px;
      }
      .tm-message-meta strong {
        font-size: 15px;
        color: #1c1f2b;
      }
    `;
    document.head.appendChild(style);
  }

  function createViewer() {
    const inboxArea = document.querySelector(".inbox-area");
    if (!inboxArea) {
      return null;
    }

    const viewer = document.createElement("div");
    viewer.id = "tm-message-viewer";
    viewer.classList.add("hidden");
    viewer.innerHTML = `
      <div class="tm-message-viewer__header">
        <div>
          <h3 id="tmMessageSubject">Select a message</h3>
          <p id="tmMessageDetails" class="tm-message-meta"></p>
        </div>
        <button type="button" class="tm-btn btn-gray" id="tmCloseMessage">Close</button>
      </div>
      <div id="tmMessageBody" class="tm-message-viewer__body">(No message selected)</div>
      <form id="tmReplyForm" class="tm-reply-form">
        <input type="text" id="tmReplySubject" placeholder="Subject" />
        <textarea id="tmReplyText" rows="5" placeholder="Write your reply..."></textarea>
        <button type="submit" class="tm-btn btn-outline-dark">Send reply</button>
        <span class="tm-reply-status" id="tmReplyStatus"></span>
      </form>
    `;
    inboxArea.after(viewer);
    return viewer;
  }

  const viewer = createViewer();
  ensureStyles();

  const viewerEls = viewer
    ? {
        container: viewer,
        closeBtn: viewer.querySelector("#tmCloseMessage"),
        subject: viewer.querySelector("#tmMessageSubject"),
        details: viewer.querySelector("#tmMessageDetails"),
        body: viewer.querySelector("#tmMessageBody"),
        replyForm: viewer.querySelector("#tmReplyForm"),
        replySubject: viewer.querySelector("#tmReplySubject"),
        replyText: viewer.querySelector("#tmReplyText"),
        replyStatus: viewer.querySelector("#tmReplyStatus"),
      }
    : null;

  function saveAccount(account) {
    state.account = account;
    state.cache.clear();
    localStorage.setItem("tmAccount", JSON.stringify(account));
  }

  function hydrateAccountFromStorage() {
    try {
      const stored = localStorage.getItem("tmAccount");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.token && parsed?.email) {
          state.account = parsed;
        }
      }
    } catch (error) {
      console.warn("Temp mail localStorage error:", error);
    }
  }

  function updateEmailUI() {
    if (!state.account || !els.emailInput) return;
    els.emailInput.value = state.account.email;
    els.emailInput.dataset.value = state.account.email;
    document
      .querySelectorAll(".click-to-copy, .copyIconGreenBtn")
      .forEach((btn) => {
        btn?.removeAttribute("disabled");
      });
  }

  function toggleLoading(isLoading) {
    const text = isLoading ? "Refreshing..." : "Refresh";
    if (els.refreshBtn) {
      els.refreshBtn.classList.toggle("is-loading", isLoading);
      els.refreshBtn.textContent = text;
    }
  }

  function showEmptyState(show) {
    if (els.inboxEmpty) {
      els.inboxEmpty.style.display = show ? "block" : "none";
    }
    if (els.inboxList) {
      els.inboxList.classList.toggle("hide", show);
    }
  }

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleString(undefined, {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      month: "short",
      day: "numeric",
    });
  }

  function stripHtml(html = "") {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  function renderMessages() {
    if (!els.inboxListContainer) return;
    els.inboxListContainer.innerHTML = "";

    if (!state.messages.length) {
      showEmptyState(true);
      return;
    }

    showEmptyState(false);

    state.messages.forEach((msg) => {
      const li = document.createElement("li");
      li.dataset.id = msg.id;
      li.classList.toggle("active", state.selectedId === msg.id);
      li.innerHTML = `
        <div class="tm-message-meta">
          <strong>${msg.subject || "(No subject)"}</strong>
          <span>${msg.from?.address || "Unknown sender"}</span>
        </div>
        <div class="tm-message-meta" style="text-align:right;">
          <span>${formatDate(msg.createdAt)}</span>
          <span>${msg.intro || ""}</span>
        </div>
      `;
      li.addEventListener("click", () => openMessage(msg.id));
      els.inboxListContainer.appendChild(li);
    });
  }

  async function refreshMessages(showToast = false) {
    if (!state.account) return;
    toggleLoading(true);
    try {
      const messages = await api.fetchMessages();
      state.messages = messages.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      renderMessages();
      if (showToast) {
        toast("Inbox updated", "success");
      }
    } catch (error) {
      toast(error.message || "Unable to refresh inbox", "error");
    } finally {
      toggleLoading(false);
    }
  }

  function closeViewer() {
    if (viewerEls?.container) {
      viewerEls.container.classList.add("hidden");
      state.selectedId = null;
      renderMessages();
    }
  }

  function populateViewer(message) {
    if (!viewerEls) return;
    viewerEls.container.classList.remove("hidden");
    viewerEls.subject.textContent = message.subject || "(No subject)";
    const sender = message.from?.name || message.from?.address || "Unknown";
    const recipient = Array.isArray(message.to)
      ? message.to.map((t) => t.address).join(", ")
      : message.to?.address || state.account.email;
    viewerEls.details.innerHTML = `
      <span><strong>From:</strong> ${sender}</span>
      <span><strong>To:</strong> ${recipient}</span>
      <span><strong>Received:</strong> ${formatDate(message.createdAt)}</span>
    `;
    const body =
      message.text ||
      (Array.isArray(message.html) && message.html.length
        ? stripHtml(message.html[0])
        : "(No content)");
    viewerEls.body.textContent = body.trim() || "(No content)";
    viewerEls.replySubject.value =
      message.subject?.startsWith("Re:") || !message.subject
        ? message.subject || ""
        : `Re: ${message.subject}`;
    viewerEls.replyText.value = "";
    viewerEls.replyStatus.textContent = "";
    viewerEls.replyForm.dataset.replyTo = message.from?.address || "";
  }

  async function openMessage(id) {
    if (!id || !state.account) return;
    state.selectedId = id;
    renderMessages();

    try {
      let message = state.cache.get(id);
      if (!message) {
        message = await api.fetchMessage(id);
        state.cache.set(id, message);
      }
      populateViewer(message);
    } catch (error) {
      toast(error.message || "Unable to open message", "error");
    }
  }

  async function handleReply(event) {
    event.preventDefault();
    if (!viewerEls || !state.selectedId) return;

    const replyTo = viewerEls.replyForm.dataset.replyTo;
    if (!replyTo) {
      viewerEls.replyStatus.textContent =
        "Cannot reply: missing sender address.";
      return;
    }

    const subject = viewerEls.replySubject.value.trim();
    const text = viewerEls.replyText.value.trim();
    if (!text) {
      viewerEls.replyStatus.textContent = "Reply message cannot be empty.";
      return;
    }

    viewerEls.replyStatus.textContent = "Sending reply...";

    try {
      await api.sendReply({
        to: replyTo,
        subject: subject || "(no subject)",
        text,
      });
      viewerEls.replyStatus.textContent = "Reply sent!";
      viewerEls.replyText.value = "";
      toast("Reply sent", "success");
    } catch (error) {
      viewerEls.replyStatus.textContent =
        error.message || "Failed to send reply.";
      toast(error.message || "Reply failed", "error");
    }
  }

  async function allocateAccount(force = false) {
    if (state.loadingAccount) return;
    state.loadingAccount = true;
    if (force) {
      state.account = null;
      localStorage.removeItem("tmAccount");
      state.cache.clear();
      state.messages = [];
      renderMessages();
      closeViewer();
    }
    try {
      const account = await api.createAccount();
      saveAccount(account);
      updateEmailUI();
      toast("New temp email ready", "success");
      await refreshMessages();
      startPolling();
    } catch (error) {
      toast(error.message || "Unable to setup temp mail", "error");
    } finally {
      state.loadingAccount = false;
    }
  }

  function startPolling() {
    if (state.polling) {
      clearInterval(state.polling);
    }
    state.polling = setInterval(() => {
      refreshMessages();
    }, 30000);
  }

  function handleCopy() {
    if (!state.account?.email) return;
    navigator.clipboard
      .writeText(state.account.email)
      .then(() => toast("Copied to clipboard", "success"))
      .catch(() => toast("Unable to copy email", "error"));
  }

  function bindEvents() {
    if (els.refreshBtn) {
      els.refreshBtn.addEventListener("click", (e) => {
        e.preventDefault();
        refreshMessages(true);
      });
    }
    if (els.changeBtn) {
      els.changeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        allocateAccount(true);
      });
    }
    if (els.deleteBtn) {
      els.deleteBtn.addEventListener("click", (e) => {
        e.preventDefault();
        allocateAccount(true);
      });
    }
    if (els.primaryCopyBtn) {
      els.primaryCopyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        handleCopy();
      });
    }
    els.copyButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        handleCopy();
      })
    );
    if (viewerEls?.closeBtn) {
      viewerEls.closeBtn.addEventListener("click", () => closeViewer());
    }
    if (viewerEls?.replyForm) {
      viewerEls.replyForm.addEventListener("submit", handleReply);
    }
  }

  async function init() {
    hydrateAccountFromStorage();
    bindEvents();
    if (state.account) {
      updateEmailUI();
      await refreshMessages();
      startPolling();
    } else {
      await allocateAccount();
    }
  }

  init();
  return {
    refresh: refreshMessages,
  };
})();

export default TempMailApp;
