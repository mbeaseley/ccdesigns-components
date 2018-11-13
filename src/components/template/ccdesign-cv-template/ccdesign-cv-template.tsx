import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-cv-template',
  styleUrl: 'ccdesign-cv-template.scss'
})
export class CcdesignCvTemplate {
  @Prop() headerEntry: string;
  @Prop() footerEntry: string;

  render() {
    return (
      <div>
        <ccdesign-header
          entry-id={`${this.headerEntry}`}>
        </ccdesign-header>

        <main class="page">
          <content class="page__body">
            <div class="page__body--left">
              <slot name="left-side" />
            </div>
            <div class="page__body--right">
              <slot name="right-side" />
            </div>
          </content>
        </main>

        <ccdesign-footer 
          entry-id={`${this.footerEntry}`}>
        </ccdesign-footer>
      </div>
    );
  }
}
