
##
## Compass
##

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end


##
## Page options, layouts, aliases and proxies
##

# Apply alternate layouts
page "/index.html", :layout => :homepage

with_layout :blog do
	page "/blog/*"
end


##
## Helpers
##

## All custom helpers are loaded automatically from the Helpers directory.

# Blog configuration
activate :blog do |blog|
	blog.prefix            = "blog/"
	blog.permalink         = ":year/:month/:title.html"
	blog.sources           = "/articles/:year-:month-:day-:title.html"
	blog.default_extension = ".md"
	blog.layout            = "blog"

	blog.paginate          = true
	blog.per_page          = 10

	blog.year_link         = ":year.html"
	blog.month_link        = ":year/:month.html"
	blog.day_link          = ":year/:month/:day.html"

	blog.tag_template      = "/blog/tag.html"
	blog.calendar_template = "/blog/archive.html"
end

# Disqus comment system for the blog
activate :disqus do |disqus|
	disqus.shortname = "voxeldavid"
end

# Turns files into directories. /foo.html -> /foo/index.html
activate :directory_indexes

# Special directories in the project root
set :build_dir,   'build'
set :data_dir,    'data'
set :helpers_dir, 'helpers'

# Special directories in source/
set :layouts_dir, '_layouts'

# Assets in source/
set :css_dir,     'assets/css'
set :js_dir,      'assets/js'
set :images_dir,  'assets/img'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
end
