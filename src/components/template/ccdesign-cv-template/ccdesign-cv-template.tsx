import { Component, Prop, Watch } from '@stencil/core';
import Helmet from '@stencil/helmet';

import { MetaData } from './meta-data';
// import { regexFormatter } from '../../../utils/helpers/regexFormatter';

@Component({
  tag: 'ccdesign-cv-template',
  styleUrl: 'ccdesign-cv-template.scss',
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
        // newMetaData = regexFormatter(newMetaData, /(\btitle|\bdescription|\bimageUrl+?):/g);
      } catch (err) {
        // console.warn('Template Meta Data: error parsing data string', newMetaData);
      }
    }

    if (typeof newMetaData === 'object') {
      this.metaData = newMetaData || {};
    } else {
      // console.warn('template meta data prop invalid', newMetaData);
    }
  }

  updateMetaData() {
    return (
      <div>
        <Helmet>
          <meta name="description" content={this.metaData.description} />
          <meta name="og:description" content={this.metaData.description} />
          <title>{this.metaData.title}</title>

          {this.metaData.imageUrl ? (
            <meta property="og:image" content={this.metaData.imageUrl} />
          ) : (
            ''
          )}
        </Helmet>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.metaData ? this.updateMetaData() : ''}

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
