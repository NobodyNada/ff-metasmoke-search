function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.contextMenus.create({
    id: "search-metasmoke",
    title: "Search Metasmoke",
    contexts: ["selection"]
}, onCreated)

browser.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
    case "search-metasmoke":
      let query = encodeURIComponent(info.selectionText);
      let url = "https://metasmoke.erwaysoftware.com/search?body=" + query;
      browser.tabs.create({"url": url});
      break;
  }
})
