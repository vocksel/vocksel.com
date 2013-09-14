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

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

##
## Helpers
##

activate :directory_indexes

set :css_dir,    'assets/css'
set :images_dir, 'assets/img'
set :js_dir,     'assets/js'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
end
