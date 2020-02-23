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
  render() {
    return (
      <div>
        <ccdesign-header
          data={`${this.header}`}>
        </ccdesign-header>

        <main class="page">
          <content class="page__body">
            <slot />
            <slot name="container"/>
          </content>
        </main>

        <ccdesign-footer
          data={`${this.footer}`}>
        </ccdesign-footer>

      </div>
    );
  }
}
