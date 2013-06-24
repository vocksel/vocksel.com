
require 'nanoc3/tasks'
require 'fileutils'

desc "Automatically compile changes and run the webserver."
task :watch do
	sh 'nanoc view | bundle exec guard'
end

namespace :create do

  desc "Creates a new article"
  task :article do
  	# Adapted from: https://github.com/mgutz/nanoc3_blog/blob/master/Rakefile

    require 'active_support/core_ext'
    require 'active_support/multibyte'

    @ext = "md"                # File extenion to use on Articles.
    @path = "content/blog/"    # Where your blog posts live.
    @author = "David Minnerly" # Author to use if one isn't specified.

    @ymd = Time.now.to_s(:db).split(' ')[0]

    # Checking if the title was set.
    if !ENV['title']
     puts "- Missing title argument.\n- Usage: rake create:article title=\"Article Title\""
     exit 1
    end

    # Getting the article author.
    if !ENV['author']
    	puts "- No author specified, using default (#{@author})."
    else
    	@author = ENV['author']
    	puts "- Author set to \"#{@author}\""
    end

    # Setting the file extension.
    if !ENV['ext']
    	puts "- No extension specified, using default (#{@ext})."
    else
    	@ext = ENV['ext']
    	puts "- Extension set to \"#{@ext}\""
    end

    title = ENV['title'].capitalize
    path, filename, full_path = calc_path(title)

    if File.exists?(full_path)
      puts "- An article with that name already exists!"
      exit 1
    end

    template = <<TEMPLATE
---
author     : "#{@author}"
category   : [uncategorized]
created_at : #{@ymd}
excerpt    :
kind       : article # Do not change.
publish    : false # Change to true when blog post is ready to go public.
tags       : [misc]
title      : "#{title.titleize}"
---

Add your content here!
TEMPLATE

    FileUtils.mkdir_p(path) if !File.exists?(path)
    File.open(full_path, 'w') { |f| f.write(template) }
    puts "- Your article has been output to: \"#{full_path}\""
  end

  def calc_path(title)
  	# Output the new article.
    filename = title.parameterize('-') + '.' + @ext
    [@path, filename, @path + filename]
  end

end