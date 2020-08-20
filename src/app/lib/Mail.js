import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail.mjs';

export default nodemailer.createTransport(mailConfig);