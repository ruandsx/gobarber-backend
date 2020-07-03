# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com as instruções de recuperação;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar mailtrap para testes em desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar;

# Atualização de perfil

**RF**

- O usuário deve poder atualizar sem nome, email e senha;

**RNF**

- ;

**RN**

- O usuário não pode alterar seu email para um já utilizado na base de dados
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuárioprecisa confirmar a nova senha;


# Dashboard do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas

**RNF**

- Os agendamentos do prestador devem ser armazenados em cache em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder visualizar os dias disponíveis do prestador selecionado;
- O usuário deve poder visualizar os horários disponíveis de um dia específico do prestador selecionado;
- O usuário deve poder reaçizar um novo agendamento com o prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento tema  duração de 1h
- Os agendamentos devem estar disponíveis de 8h às 18h (Último às 17h)
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

