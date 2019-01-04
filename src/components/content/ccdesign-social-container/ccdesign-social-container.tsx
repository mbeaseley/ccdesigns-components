import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-social-container',
  styleUrl: 'ccdesign-social-container.scss'
})
export class CcdesignSocialContainer {
  @Prop() url: string;
  @Prop() icon: string;

  render() {
    return (
      <div class='circle circle--outercircle'>
        <div class='circle circle--innercircle'>
          <ccdesign-button url={this.url}>
            <ccdesign-icon name={this.icon} color='blue' size='xs'></ccdesign-icon>
          </ccdesign-button>
        </div>  
      </div>
    );
  }
}
