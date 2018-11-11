import { Component } from '@stencil/core';

@Component({
  tag: 'ccdesign-cv-template',
  styleUrl: 'ccdesign-cv-template.scss'
})
export class CcdesignCvTemplate {

  render() {
    return (
      <div>
        <ccdesign-header></ccdesign-header>

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
          entry-id="5bhxaC8TyEY80eECO4uQA4">
        </ccdesign-footer>
      </div>
    );
  }
}
