import * as React from 'react';

import { languageMapHelper } from './helpers/language-map.helper';
import { getPrismWindow, PrismWindow } from './shared/prism-window';
import { PrismContext } from './shared/prism-context.interface';
import './WpPrismJS.css';

class WpPrismJSProps {
  lang: string;
  codeBlock: string;
}

class WpPrismJS extends React.Component {

  props: WpPrismJSProps;
  codeBlockRef: HTMLElement;
  windowRef: PrismWindow;

  constructor(props: WpPrismJSProps) {
    super(props);

    this.windowRef = getPrismWindow();
  }

  get codeClassName(): string {
    return languageMapHelper(this.props.lang);
  }

  get prism(): PrismContext {
    return this.windowRef.Prism;
  }

  componentDidMount(): void {
    try {
      this.prism.highlightElement(this.codeBlockRef);
    } catch (exception) {
      // do nothing
    }
  }

  render() {
    return (<code className={this.codeClassName} ref={ref => this.codeBlockRef = ref!}>{this.props.codeBlock}</code>);
  }
}

export { WpPrismJS };
