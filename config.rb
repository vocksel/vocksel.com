
##
## Compass
##

# Change Compass configuration
compass_config do |config|
	require "susy"
  config.output_style = :compact
end


##
## Page options, layouts, aliases and proxies
##

# Apply alternate layouts
with_layout :blog do
	page "/blog/*"
end


##
## Helpers
##

## All custom helpers are loaded automatically from the 'helpers' directory.

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
