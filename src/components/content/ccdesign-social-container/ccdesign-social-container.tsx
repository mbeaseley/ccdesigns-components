import { Component, Prop, h } from '@stencil/core';
import { AnyHTMLElement } from '@stencil/core/internal';

@Component({
  tag: 'ccdesign-social-container',
  styleUrl: 'ccdesign-social-container.scss',
})
export class CcdesignSocialContainer {
  @Prop() url: string;
  @Prop() icon: string;

  /**
   * render
   */
  render(): AnyHTMLElement {
    return (
      <div class='circle circle--outercircle'>
        <div class='circle circle--innercircle'>
          <ccdesign-button
            icon={this.icon}
            color='blue'
            url={this.url}
            alt={this.icon}
          ></ccdesign-button>
        </div>
      </div>
    );
  }
}
