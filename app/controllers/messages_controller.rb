# frozen_string_literal: true

# This controller exists for handling messages and making sure they're sent.
class MessagesController < ApplicationController
  def send
    MessagesMailer.connect(*message_params.values_at(:email, :first_name, :last_name, :subject, :message)).deliver_now
  end

  def message_params
    params.require(:message).permit(:first_name, :last_name, :email, :subject, :message)
  end
end
