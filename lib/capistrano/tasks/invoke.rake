# frozen_string_literal: true

task :invoke, :command do |_task, args|
  on roles(:app) do
    within current_path do
      with rails_env: fetch(:rails_env) do
        execute :rake, args[:command]
      end
    end
  end
end
