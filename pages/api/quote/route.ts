import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
const TelegramBot = require('node-telegram-bot-api');

const validateCaptcha = async(captcha) => {
  const captchaSecret = process.env.CAPTCHA_SECRET

  try {
    // Verify the CAPTCHA with the reCAPTCHA API using fetch
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${captchaSecret}&response=${captcha}`,
    });

    const data = await response.json();

    if (data.success) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return false
  }

}
const sendMessage = async ({ name, email, phone, subject, message }) => {
  const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);

  const id = crypto.randomBytes(16).toString('hex');
  const telegramMessage = `ID/${id}/ID\nNew Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
  const base64EncodedKey = process.env.PUBLIC_KEY;
  const decodedKey = Buffer.from(base64EncodedKey, 'base64').toString('utf-8');

  // Generate a random symmetric key
  const symmetricKey = crypto.randomBytes(32); // 256 bits for AES

  // Encrypt the message with the symmetric key
  const iv = crypto.randomBytes(16); // Initialization vector for AES-256-CBC
  const cipher = crypto.createCipheriv('aes-256-cbc', symmetricKey, iv);
  const encryptedMessage = Buffer.concat([cipher.update(telegramMessage, 'utf-8'), cipher.final()]);

  // Convert the symmetric key to a base64-encoded string
  const encryptedSymmetricKey = crypto.publicEncrypt(
    {
      key: decodedKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    symmetricKey
  ).toString('base64');

  // Convert the encrypted message and encrypted symmetric key to base64-encoded strings
  const encryptedMessageBase64 = encryptedMessage.toString('base64');
  await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, `${encryptedSymmetricKey};;${encryptedMessageBase64}`)
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse,
) => {
  const {name, email, phone, subject, message, captcha} = request.body

  const captchaGood = await validateCaptcha(captcha)

  if (!captchaGood) {
    return response.status(400).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  }

  await sendMessage({name, email, phone, subject, message})

  response.status(200).json({
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
}

export default handler