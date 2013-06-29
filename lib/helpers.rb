include Nanoc::Helpers::Blogging
include Nanoc::Helpers::Rendering
include Nanoc::Helpers::Tagging

# Takes the standard Time.now output and makes it look nicer.
def pretty_time(time)
  Time.parse(time.to_s).strftime("%B %-d, %Y, %l:%M%P") if !time.nil?
end

# http://clarkdave.net/2012/02/building-a-static-blog-with-nanoc/
def get_post_start(post)
  content = post.compiled_content
  # Look for <!-- more --> string in content
  if content =~ /\s<!-- more -->\s/
  	# Output everything before the "more" tag and add a "Read More" link to the post.
    content = content.partition('<!-- more -->').first +
    "<div class=\"read-more\"><a href=\"#{post.path}\">Continue reading &rsaquo;</a></div>"
  end
  return content
end