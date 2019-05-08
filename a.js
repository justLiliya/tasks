const inboxSelectors = ["#mainApp", 'shadowRoot', "#mailApp", 'shadowRoot', "#menuList", 'shadowRoot', '#list', 'nct-paper-menu-item[name="Входящие"]'];
const settingsSelectors = ['#mainApp', 'shadowRoot', '#appSwitcher', 'shadowRoot', '#settings'];
const contextMenuSelectors = ['#mainApp','shadowRoot','#mailApp','shadowRoot','#menuList','shadowRoot','#contextMenuBlock'];
const shadowRoot = 'shadowRoot';

/**
 * @param {Array<string>} selectors
 * @returns {string}
 */
function createJSPath(selectors) {
    let newArr = ['document'];
    for(let i = 0; i < selectors.length; i++) {
        if (selectors[i] === shadowRoot) {
            newArr.push(shadowRoot)
        }
        else {
            newArr.push("querySelector" + "('" + selectors[i] + "')");
        }
    }
    return newArr.join(".")
}
createJSPath (inboxSelectors);
console.log(createJSPath(inboxSelectors));


/**
 * console.log(createJSPath(inboxSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#mailApp").shadowRoot.querySelector("#menuList").shadowRoot.querySelector('#list').querySelector('nct-paper-menu-item[name="Входящие"]')
 *console.log(createJSPath(settingsSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#appSwitcher").shadowRoot.querySelector("#settings")
 *console.log(createJSPath(contextMenuSelectors)); // -> document.querySelector("#mainApp").shadowRoot.querySelector("#mailApp").shadowRoot.querySelector("#menuList").shadowRoot.querySelector("#contextMenuBlock")
 */
