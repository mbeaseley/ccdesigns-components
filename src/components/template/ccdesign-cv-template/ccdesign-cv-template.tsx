import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ccdesign-cv-template',
  styleUrl: 'ccdesign-cv-template.scss',
})
export class CcdesignCvTemplate {
  @Prop() header: string;
  @Prop() footer: string;

  /**
   * render
   */
  render(): JSX.Element {
    const header = this.header ? <ccdesign-header data={`${this.header}`}></ccdesign-header> : null;
    const footer = this.footer ? <ccdesign-footer data={`${this.footer}`}></ccdesign-footer> : null;

    return (
      <div>
        {header}

        <main class='page'>
          <content class='page__body'>
            <slot />
            <slot name='container' />
          </content>
        </main>

        {footer}
      </div>
    );
  }
}
