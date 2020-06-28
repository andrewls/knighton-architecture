# frozen_string_literal: true

module Capistrano
  # This module defines some helper methods for
  # other capistrano rake files to use
  module Helpers
    def self.run_interactively(command, host)
      user = fetch(:user)
      # rubocop:disable Rails/Output
      puts "Running #{command} as #{user}@#{host}"
      # rubocop:enable Rails/Output
      remote_command = %(ssh #{user}@#{host} -t "bash --login -c 'cd #{current_path} && #{command}'")
      puts "Remote command: #{remote_command}"
      exec remote_command
    end
  end
end
