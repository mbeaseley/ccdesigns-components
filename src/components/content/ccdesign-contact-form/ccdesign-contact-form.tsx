import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ccdesign-contact-form',
  styleUrl: 'ccdesign-contact-form.scss',
})
export class CcdesignContactForm {
  @Prop() heading: string;
  @Prop() copy: string;

  private async onSubmit(): Promise<void> {
    // Prevent page refresh
    event.preventDefault();

    const inputFields = document.querySelectorAll('ccdesign-input');
    const nameField = await inputFields[0].inputValue();
    const emailField = await inputFields[1].inputValue();
    const messageField = await inputFields[2].inputValue();

    console.log(nameField, emailField, messageField);

    return;
  }

  render() {
    return (
      <form class='contact-form' onSubmit={() => this.onSubmit()}>
        <h1>{this.heading}</h1>
        <p innerHTML={this.copy}></p>
        <ccdesign-input multi-line='false' placeholder='Your name' required={true}></ccdesign-input>
        <ccdesign-input
          multi-line='false'
          placeholder='Your email'
          required={true}
        ></ccdesign-input>
        <ccdesign-input
          multi-line={true}
          placeholder='Your message'
          required={true}
        ></ccdesign-input>
        <ccdesign-button buttonStyle='primary' buttonType='submit' color='white'>
          Submit
        </ccdesign-button>
      </form>
    );
  }
}
