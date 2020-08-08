import { Component, h, Prop } from '@stencil/core';
import emailjs from 'emailjs-com';
import environment from '../../../services/environment';

@Component({
  tag: 'ccdesign-contact-form',
  styleUrl: 'ccdesign-contact-form.scss',
})
export class CcdesignContactForm {
  @Prop() heading: string;
  @Prop() copy: string;

  serviceId: string;
  templateId: string;
  userKey: string;

  constructor() {
    this.serviceId = environment.getEndpoint().email.serviceID;
    this.templateId = environment.getEndpoint().email.templateID;
    this.userKey = environment.getEndpoint().email.userKey;
  }

  formReset(inputFields: NodeListOf<HTMLCcdesignInputElement>): void {
    inputFields.forEach((input) => input.inputReset());
  }

  private async onSubmit(): Promise<any> {
    // Prevent page refresh
    event.preventDefault();

    const inputFields = document.querySelectorAll('ccdesign-input');
    const nameField = await inputFields[0].inputValue();
    const emailField = await inputFields[1].inputValue();
    const messageField = await inputFields[2].inputValue();

    if (nameField.error || emailField.error || messageField.error) {
      inputFields.forEach((input) => input.validator(false));
      return Promise.resolve(undefined);
    }

    return emailjs
      .send(
        this.serviceId,
        this.templateId,
        {
          reply_to: 'm.t.beaseley@gmail.com',
          from_name: nameField.value,
          from_email: emailField.value,
          message_html: messageField.value,
        },
        this.userKey,
      )
      .then(() => this.formReset(inputFields))
      .catch((error) => console.error(error));
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
