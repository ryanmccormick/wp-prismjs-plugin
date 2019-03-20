import { PrismContext } from './prism-context.interface';

export class PrismWindow extends Window {
  Prism: PrismContext;
}

export function getPrismWindow(): PrismWindow {
  return window as PrismWindow;
}
