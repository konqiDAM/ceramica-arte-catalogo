/**
 * Contact form configuration.
 *
 * The studio email is deliberately NOT stored in this repository. It lives in
 * the Web3Forms dashboard that owns the access key, and Web3Forms forwards the
 * submissions there. Nothing in the built site knows the address, so there is
 * nothing in the HTML for a scraper to extract.
 *
 * The access key below IS public by design — it only identifies the form, it
 * cannot be used to read the inbox. Set it in `.env` (local) and as the
 * `WEB3FORMS_KEY` repository secret (CI).
 */

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const web3formsKey = (import.meta.env.PUBLIC_WEB3FORMS_KEY ?? "").trim();

/**
 * False when the key is missing, e.g. a fresh clone that has not created
 * `.env` yet. Views fall back to showing Telegram/phone instead of a form that
 * would post to nowhere.
 */
export const hasContactForm = web3formsKey.length > 0;