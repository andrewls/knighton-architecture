# frozen_string_literal: true

require_relative './helpers'

namespace :rails do
  desc 'rails console'
  task :console do
    on roles(:app) do
      Capistrano::Helpers.run_interactively "/home/deploy/.rbenv/bin/rbenv exec bundle exec rails console -e #{fetch(:rails_env)}", host
    end
  end

  desc 'rails logs'
  task :logs do
    on roles(:app) do
      Capistrano::Helpers.run_interactively 'tail -f log/production.log', host
    end
  end

  desc 'rails environment variables'
  task :env do
    on roles(:app) do
      Capistrano::Helpers.run_interactively "vim #{shared_path}/config/application.yml", host
    end
  end
end
