module TimeManipulation

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

  # File activesupport/lib/active_support/inflector/methods.rb, line 279
  def ordinalize(number)
    if (11..13).include?(number.to_i.abs % 100)
      "#{number}th"
    else
      case number.to_i.abs % 10
        when 1; "#{number}st"
        when 2; "#{number}nd"
        when 3; "#{number}rd"
        else    "#{number}th"
      end
    end
  end

end