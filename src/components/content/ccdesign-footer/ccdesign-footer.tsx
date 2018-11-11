import { Component, Prop } from "@stencil/core";
import { contentfulDataFetch, parseData } from '../../../services/contentful';

@Component({
  tag: "ccdesign-footer",
  styleUrl: "ccdesign-footer.scss",
  shadow: false
})
export class CcdesignFooter {
  @Prop() entryId: string;
  @Prop({ mutable: true }) backgroundColor: string;
  @Prop({ mutable: true }) text: string;
  @Prop({ mutable: true }) inputColor: string;

  loadContent() {
    let opts = {}
    const keyArr = ['space','field', 'entryId'];

    keyArr.forEach(key => {
      if(this[key]) opts[key] = this[key];
    })

    contentfulDataFetch(opts)
    .then(parseData)
    .then(results => {
      this.backgroundColor = results.backgroundColor;
      this.text = results.text;
    })
  }

  componentWillLoad() {
    if(!this.entryId) {
      return false
    }

    this.loadContent();
  }
 
  render() {
    if(!this.entryId) {
      this.text = '© 2018 Copyright: Michael Beaseley';
      return (
        <div class={`footer ${this.inputColor}`} innerHTML={`${this.text}`}></div>
      );
    }

    return (
      <div class={`footer footer--${this.backgroundColor}`} innerHTML={`${this.text}`}></div>
    );
  }
}
