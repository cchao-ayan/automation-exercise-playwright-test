import { role, testId, css, text } from '@/base/locator';

export const CONTACT_US = {
  header: {
    contactUs: role('heading', 'Contact Us'),
    getInTouch: role('heading', 'Get In Touch'),
    feedback: role('heading', 'Feedback For Us')
  },
  input: {
    name: testId('name'),
    email: testId('email'),
    subject: testId('subject'),
    message: css('message')
  },
  button: {
    upload: css('input[name="upload file"]'),
    submit: css('submit-button'),
    home: css('a.btn.btn-success >> span:has-text("Home")')
  },
  text: {
    note: text('Note: Below contact form is for testing purpose.'),
    feedback1: css('p:has-text("We really appreciate your response to our website.")'),
    feedback2: css('p:has-text("Kindly share your feedback with us at feedback@automationexercise.com.")'),
    feedback3: css('p:has-text("If you have any suggestion areas or improvements, do let us know. We will definitely work on it.")'),
    feedback4: css('p:has-text("Thank you")'),
    success: text('Success! Your details have')
  }

}

