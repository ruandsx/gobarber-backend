interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'ruan@rxsoftwares.com',
      name: 'Ruan da RX Softwares',
    },
  },
} as IMailConfig;
