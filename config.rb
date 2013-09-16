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
