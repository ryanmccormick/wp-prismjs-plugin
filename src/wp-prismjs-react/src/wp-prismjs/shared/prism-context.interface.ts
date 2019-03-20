import { LanguageDefinition, Token } from 'prismjs';

export interface PrismContext {
  /**
   * Used to highlight all elements on current website. Calls Prism.highlightAllUnder on `document`.
   *
   * @see highlightAllUnder
   * @param async Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting
   * very large chunks of code. False by default.
   * @param callback An optional callback to be invoked after the highlighting is done. Mostly useful when async
   * is true, since in that case, the highlighting is done asynchronously.
   */
  highlightAll(async?: boolean, callback?: (element: Element) => void): void;

  /**
   * This is the most high-level function in Prism’s API. It fetches all the elements inside `container` that
   * have a .language-xxxx class and then calls Prism.highlightElement() on each one of them.
   *
   * @param container The element which contains elements containing code.
   * @param async Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting
   * very large chunks of code. False by default.
   * @param callback An optional callback to be invoked after the highlighting is done. Mostly useful when async
   * is true, since in that case, the highlighting is done asynchronously.
   */
  highlightAllUnder(container: Element, async?: boolean, callback?: (element: Element) => void): void;

  /**
   * Highlights the code inside a single element.
   *
   * @param element The element containing the code. It must have a class of language-xxxx to be processed,
   * where xxxx is a valid language identifier.
   * @param async Whether to use Web Workers to improve performance and avoid blocking the UI when
   * highlighting very large chunks of code. False by default.
   * @param callback An optional callback to be invoked after the highlighting is done.
   * Mostly useful when async is true, since in that case, the highlighting is done asynchronously.
   */
  highlightElement(element: Element, async?: boolean, callback?: (element: Element) => void): void;

  /**
   * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the language
   * definitions to use, and returns a string with the HTML produced.
   *
   * @param text A string with the code to be highlighted.
   * @param grammar - An object containing the tokens to use. Usually a language definition like
   * Prism.languages.markup
   * @param language
   * @returns The highlighted HTML
   */
  highlight(text: string, grammar: LanguageDefinition, language?: LanguageDefinition): string;

  /**
   * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input and the
   * language definitions to use, and returns an array with the tokenized code. When the language definition includes
   * nested tokens, the function is called recursively on each of these tokens. This method could be useful in other
   * contexts as well, as a very crude parser.
   *
   * @param text A string with the code to be highlighted.
   * @param grammar An object containing the tokens to use. Usually a language definition like
   * Prism.languages.markup
   * @returns An array of strings, tokens (class Prism.Token) and other arrays.
   */
  tokenize(text: string, grammar: LanguageDefinition): Array<Token | string>;

  fileHighlight(): void;

}
