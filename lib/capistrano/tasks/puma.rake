# frozen_string_literal: true

require_relative './helpers'

# rubocop:disable Metrics/BlockLength
namespace :puma do
  desc 'Create Directories for Puma Pids and Socket'
  task(:make_dirs) do
    on roles(:app) do
      execute "mkdir #{shared_path}/tmp/sockets -p"
      execute "mkdir #{shared_path}/tmp/pids -p"
    end
  end

  task(:logs) do
    on roles(:app) do
      Capistrano::Helpers.run_interactively 'tail -f /var/log/syslog | grep -F rvm[', host
    end
  end

  desc 'Enables the service to run at startup'
  task(:enable) do
    on roles(:app) do
      execute 'systemctl --user enable aliwoodcreations'
    end
  end

  desc 'Copies the current service file definitions to the services folder'
  task(:link) do
    on roles(:app) do
      execute "cp -f #{current_path}/config/os_services/aliwoodcreations.service /home/deploy/.config/systemd/user/aliwoodcreations.service"
      execute "cp -f #{current_path}/config/os_services/aliwoodcreations.socket /home/deploy/.config/systemd/user/aliwoodcreations.socket"
    end
  end

  desc 'Starts the puma service'
  task(:start) do
    on roles(:app) do
      execute 'systemctl --user start aliwoodcreations'
    end
  end

  desc 'Stops the puma service'
  task(:stop) do
    on roles(:app) do
      execute 'systemctl --user stop aliwoodcreations'
    end
  end

  desc 'Restarts the puma service'
  task(:restart) do
    on roles(:app) do
      invoke 'puma:stop'
      invoke 'puma:link'
      invoke 'services:reload'
      invoke 'puma:start'
    end
  end

  before :start, :make_dirs
end
# rubocop:enable Metrics/BlockLength
