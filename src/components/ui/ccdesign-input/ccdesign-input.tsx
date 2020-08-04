import { Component, Prop, h, State, Method, Watch } from '@stencil/core';

@Component({
  tag: 'ccdesign-input',
  styleUrl: 'ccdesign-input.scss',
})
export class CcdesignInput {
  @Prop() readonly multiLine: boolean = false;
  @Prop() readonly placeholder: string;
  @Prop() readonly type: string;
  @Prop() readonly required: boolean;

  @State() value: string;
  @State() touched: boolean = false;
  @State() focus: boolean = false;
  @State() validate: boolean = true;

  validator(): void {
    try {
      if (!this.required) {
        return;
      }

      this.validate = !!this.touched && !!this.value;
    } catch (e) {
      this.validate = false;
    }
  }

  @Method()
  async inputValue(): Promise<string> {
    return this.value;
  }

  private handleChange(event: FocusEvent): void {
    this.touched = true;
    this.value = event['target']['value'];
    this.validator();
  }

  @Watch('validate')
  componentWillUpdate(): Promise<void> {
    return Promise.resolve(undefined);
  }

  render() {
    if (!this.required && this.touched) {
      this.validate = true;
    }

    const icon = <ccdesign-icon color='green' name='check' size='xxs'></ccdesign-icon>;
    const text = <ccdesign-copy copy='<small>Form field is required</small>'></ccdesign-copy>;

    return this.multiLine ? (
      <div class='input'>
        <textarea
          class={this.required && this.touched && !this.validate ? 'error' : null}
          placeholder={this.placeholder}
          value={this.value}
          onBlur={(event: FocusEvent) => this.handleChange(event)}
        ></textarea>
        {this.touched && this.validate ? icon : null}
        {this.required && this.touched && !this.validate ? text : null}
      </div>
    ) : (
      <div class='input'>
        <input
          class={this.required && this.touched && !this.validate ? 'error' : null}
          placeholder={this.placeholder}
          type={this.type}
          value={this.value}
          onBlur={(event: FocusEvent) => this.handleChange(event)}
        ></input>
        {this.touched && this.validate ? icon : null}
        {this.required && this.touched && !this.validate ? text : null}
      </div>
    );
  }
}
