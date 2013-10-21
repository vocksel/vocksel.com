
module PageNavigation

	# ===
  # Allows for navigating pages that have been split up with Pagination.
  #
  # Example use:
  #
  # 	- if paginate && num_pages > 1
	# 		.blog__nav--articles
	# 			%p.blog__prev_page
	# 				= prev_page()
	#
	# 			%p.blog__next_page
	# 				= next_page()
	#
  # ===

	def next_page()
		if next_page
			link_to "Next page", next_page
		else
			puts "Next page"
		end
	end

	def prev_page()
		if prev_page
			link_to "Previous page", prev_page
		else
			puts "Previous page"
		end
	end

end
