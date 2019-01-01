import { Component, Prop } from "@stencil/core";

import { footerItem } from './footer-item'; 

@Component({
  tag: "ccdesign-footer",
  styleUrl: "ccdesign-footer.scss"
})
export class CcdesignFooter {
  @Prop() data: string;
  @Prop({ mutable: true }) dataContent: footerItem;

  componentWillLoad() {
    let newData = this.data.replace(/(\bid|\btext|\bbackgroundColor+?):/g, '"$1":');
    newData = newData.replace(/'/g, '"');
    this.dataContent = JSON.parse(newData);
  }
 
  render() {
    
    return (
      <div class={`footer footer--${this.dataContent.backgroundColor}`} innerHTML={`${this.dataContent.text}`}></div>
    );
  }
}
