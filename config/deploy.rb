# frozen_string_literal: true

# Note: this is a temporal setup for Capistrano for RockstarCoders development server
# we don't have access to the T2 infrastructure so we are using our own version to be able to deploy on our dev server.

# system settings
set :application,     'knighton-architecture'
set :repo_url,        'git@github.com:andrewls/knighton-architecture'
set :user,            'deploy'
set :deploy_to,       "/home/#{fetch(:user)}/#{fetch(:application)}"
set :stages,          %i[production development]
set :default_stage,   :production
set :keep_releases, 5
set :rbenv_version, '2.7.1'
set :rbenv_type, :user
set :rbenv_ruby, '2.7.1'
# local settings
# set :ssh_options, forward_agent: true, user: fetch(:user), keys: %w[~/.ssh/id_rsa.pub]

# rails settings
set :rails_env, :production
set :linked_files,    %w[config/application.yml config/database.yml]
set :linked_dirs,     %w[log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system public/uploads public/packs]

# Sidekiq settings
set :sidekiq_log, File.join(shared_path, 'log', 'sidekiq.log')
set :init_system, :systemd
set :service_unit_name, "sidekiq-#{fetch(:stage)}@{long-running,default}.service"
