/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type docStatePage = typeof import('./pages/docState.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, docStatePage: docStatePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
