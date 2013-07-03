
include Nanoc::Helpers::Blogging
include Nanoc::Helpers::Rendering
include Nanoc::Helpers::Tagging

# # # # #
# Formats the standard "Time.now" output to make it nicer to read.
#
# The `type` parameter can be either "Short" or "Long".
#
# The `time` parameter is parsed through Ruby's Time class, turned
# to a string and output with either short or long month and
# concatinated with the day and year.
# # # # #
def format_time(type, time)
	@format = "%b" if type == "short" # Short month, eg. "Feb"
	@format = "%B" if type == "long" # Long month, eg. "February"
	Time.parse(time.to_s).strftime(@format + " %-d, %Y.") if !time.nil?
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