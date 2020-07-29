import { Component, Prop, h } from '@stencil/core';

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
  render(): JSX.Element {
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
