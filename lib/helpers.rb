
include Nanoc::Helpers::Blogging
include Nanoc::Helpers::Rendering
include Nanoc::Helpers::Tagging

# ===
# Formats the standard "Time.now" output to make it nicer to read.
#
# Takes two parameters, `format` and `time`, time is what is output
# by "Time.now" and format is how it should appear.
#
# Example use from the Article layout:
# format_time("%B %-d, %Y", post[:created_at])
# > July 3, 2013
#
# Reference: http://www.ruby-doc.org/core-2.0/Time.html#strftime-method
# ===
def format_time(format, time)
	Time.parse(time.to_s).strftime(format) if !time.nil?
end

# http://clarkdave.net/2012/02/building-a-static-blog-with-nanoc/
def get_post_start(post)
  content = post.compiled_content
  # Look for <!-- more --> string in content
  if content =~ /\s<!-- more -->\s/
  	# Output everything before the "more" tag and add a "Read More" link to the post.
    content = content.partition('<!-- more -->').first +
    "<div class=\"read-more\"><a href=\"#{post.path}\">Continue Reading &raquo;</a></div>"
  end
  return content
end