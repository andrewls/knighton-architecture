# frozen_string_literal: true

namespace :services do
  desc 'Reload service definitions for all services'
  task :reload do
    on roles(:app) do
      execute 'systemctl --user daemon-reload'
    end
  end
end
