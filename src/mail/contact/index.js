import { transporter } from "..";
import { getText, getHtml } from "./template";
import {
  SMTP_USERNAME,
  SMTP_EMAIL,
  EMAIL_CONTACT,
  EMAIL_SUPPORT,
} from "../../config";

export const sendMailContact = async (args) => {
  const info = await transporter.sendMail({
    from: `"${SMTP_USERNAME}" <${SMTP_EMAIL}>`, // sender address
    to: `${EMAIL_CONTACT}, ${EMAIL_SUPPORT}`, // list of receivers
    subject: subject, // Subject line
    text: getText(args), // plain text body
    html: getHtml(args), // html body
  });

  return info;
};
