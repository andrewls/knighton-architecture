# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'pages#home'
  get 'team', to: 'pages#team'
  get 'projects', to: 'pages#projects'
  get 'connect', to: 'pages#connect'
  post 'messages', to: 'messages#send_message'
end
