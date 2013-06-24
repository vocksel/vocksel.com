
require 'nanoc3/tasks'
require 'fileutils'
require 'colorize' # For getting prettier outputs. :)

desc "Automatically compile changes and run the webserver."
task :watch do
	sh 'nanoc view | bundle exec guard'
end

namespace :create do

  desc "Creates a new article"
  task :article do
    require 'active_support/core_ext'
    require 'active_support/multibyte'

    @ymd = Time.now.to_s(:db).split(' ')[0]
    @default_author = "David Minnerly"

    if !ENV['title']
     puts "\t[error] Missing title argument.\n\tusage: rake create:article title='article title'"
      exit 1
    end

    if !ENV['author']
    	puts "\t[warn] No author specified. Using default."
    	author = @default_author
    else
    	author = ENV['author']
    	puts "\t[note] Author set to \"#{author}\""
    end

    title = ENV['title'].capitalize
    path, filename, full_path = calc_path(title)

    if File.exists?(full_path)
      puts "\t[error] `#{full_path}` already exists."
      exit 1
    end

    template = <<TEMPLATE
---
author     : #{author.titleize}
category   : [uncategorized]
created_at : #{@ymd}
excerpt    :
kind       : article # Do not change.
publish    : true
tags       : [misc]
title      : "#{title.titleize}"
---

TODO: Add content to `#{full_path}.`
TEMPLATE

    FileUtils.mkdir_p(path) if !File.exists?(path)
    File.open(full_path, 'w') { |f| f.write(template) }
    $stdout.puts "\t[done] Navigate to `#{full_path}` too add your content."
  end

  def calc_path(title)
    path = "content/blog/"
    filename = title.parameterize('-') + ".md"
    [path, filename, path + filename]
  end
end