import { Component, Prop, Watch } from '@stencil/core';
import Helmet from '@stencil/helmet';
import { MetaData } from './meta-data';

@Component({
  tag: 'ccdesign-cv-template',
  styleUrl: 'ccdesign-cv-template.scss'
})
export class CcdesignCvTemplate {
  @Prop() header: string;
  @Prop() footer: string;
  @Prop() pageMeta: any;
  metaData: MetaData;

  componentWillLoad() {
    this.metaHandler(this.pageMeta);
  }

  @Watch('pageMeta')
  metaHandler(newMetaData: any) {
    if (typeof newMetaData === 'string') {
      try {
        // let newData = newMetaData.replace(/(\btitle|\bdescription|\bimageUrl+?):/g, '"$1":');
        // newData = newData.replace(/'/g, '"');
        newMetaData = JSON.parse(newMetaData);
      } catch (err) {
          // console.warn('Template Meta Data: error parsing data string', newMetaData);
      }
    }

    if(typeof newMetaData === 'object') {
      this.metaData = newMetaData || {};
    } else {
      // console.warn('template meta data prop invalid', newMetaData);
    }
  }

  updateMetaData() {
    // let imageUrl = this.metaData.imageUrl;
    return (
      <Helmet>
        <meta name='description' content={this.metaData.description} />
        <meta name='og:description' content={this.metaData.description} />
        <title>{this.metaData.title}</title>

        {this.metaData.imageUrl ? (
          <meta property='og:image' content={this.metaData.imageUrl} />
        ) : (
          ''
        )}
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.metaData ? this.updateMetaData() : ''}

        <ccdesign-header 
          data={`${this.header}`}>
        </ccdesign-header>

        <main class='page'>
          <content class='page__body'>
            <div class='page__body--left'>
              <slot name='left-side' />
            </div>
            <div class='page__body--right'>
              <slot name='right-side' />
            </div>
            <slot name='container'/>
          </content>
        </main>

        <ccdesign-footer 
          data={`${this.footer}`}>
        </ccdesign-footer>
      </div>
    );
  }
}
