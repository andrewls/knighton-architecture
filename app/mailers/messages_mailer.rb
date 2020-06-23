class MessagesMailer < ApplicationMailer
  # TO_EMAIL = 'info@knightonarchitecture.com'
  TO_EMAIL = 'andrew.stephenson123@gmail.com'
  def connect(from, first_name, last_name, subject, message)
    @first_name = first_name
    @last_name = last_name
    @message = message
    mail(to: TO_EMAIL, from: from, subject: subject)
  end
end
