module TimeManipulation

  # ===
  # Formats the standard "Time.now" output to make it nicer to read.
  #
  # Takes two parameters, `format` and `time`, time is what is output
  # by "Time.now" and format is how it should appear.
  #
  # Example use with page frontmatter:
  #
  #   ---
  #   date: 2013-10-20 21:58:20 -0400
  #   ---
  #
  #   format_time("%B %-d, %Y", current_page.date)
  #   > October 20, 2013
  #
  # Reference: http://www.ruby-doc.org/core-2.0/Time.html#strftime-method
  # ===
  def format_time(format, time)
    Time.parse(time.to_s).strftime(format)
  end

end
