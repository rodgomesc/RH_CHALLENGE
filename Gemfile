# ruby=2.4.2
# ruby-gemset=rh_challenge

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# core gems
gem 'devise'
gem 'json'
gem 'jbuilder', '~> 2.5'
gem 'mini_magick'
gem "paperclip", '~> 5.0.0'
gem 'puma', '~> 3.7'
gem 'rails', '~> 5.1.4'
gem 'therubyracer'
gem 'uglifier', '>= 1.3.0'
gem 'will_paginate', '~> 3.1.0'

# database
gem 'pg'

# frontend
gem 'bootstrap-sass'
gem 'bootstrap-will_paginate'
gem 'font-awesome-rails'
gem 'haml'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'simple_form'
gem 'nested_form'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'

group :development, :test do
  gem 'byebug'
  gem 'faker'
  gem 'pry-rails'
  gem 'rubocop'
  gem 'reek'
end

group :development do
  gem 'better_errors'
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '~> 2.13'
  gem 'poltergeist'
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'rspec-rails'
  gem 'rspec-core'
  gem 'rspec-collection_matchers'
  gem 'rspec-mocks'
  gem 'guard'
  gem 'guard-rspec'
  gem 'simplecov'
  gem 'shoulda-matchers', '~> 3.0'
end
