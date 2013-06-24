require 'time'

include Nanoc::Helpers::Blogging
include Nanoc::Helpers::LinkTo
include Nanoc::Helpers::Rendering
include Nanoc::Helpers::Tagging
include Nanoc::Helpers::Text

def pretty_time(time)
  Time.parse(time.to_s).strftime("%B %-d, %Y") if !time.nil?
end
